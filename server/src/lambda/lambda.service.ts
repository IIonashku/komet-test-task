import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { LambdaResponse } from './lambda.type';

@Injectable()
export class LambdaService {
  constructor(private readonly httpService: HttpService) {}

  async pingLambdaFn(): Promise<LambdaResponse> {
    const url =
      'https://pdzsl5xw2kwfmvauo5g77wok3q0yffpl.lambda-url.us-east-2.on.aws/';

    const { data } = await firstValueFrom(
      this.httpService.get<LambdaResponse>(url),
    );

    return data;
  }
}
