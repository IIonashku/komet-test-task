import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SendOrderResponse } from './mt4.type';
import { LambdaResponse } from 'src/lambda/lambda.type';
import { stringify } from 'node:querystring';

@Injectable()
export class MT4Service {
  private connectionId: string;

  constructor(private readonly httpService: HttpService) {}

  private async getConnectionId(): Promise<void> {
    const url =
      'https://mt4.mtapi.io/Connect?user=44712225&password=tfkp48&host=18.209.126.198&port=443';

    const { data } = await firstValueFrom(this.httpService.get<string>(url));

    this.connectionId = data;
  }

  async orderSend(payload: LambdaResponse): Promise<SendOrderResponse> {
    if (!this.connectionId) {
      await this.getConnectionId();
    }

    const url = `https://mt4.mtapi.io/OrderSend?id=${this.connectionId}&${stringify(payload)}`;

    const { data } = await firstValueFrom(
      this.httpService.get<SendOrderResponse>(url),
    );

    return data;
  }
}
