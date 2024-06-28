import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MT4Service } from 'src/MT4/mt4.service';
import { SendOrderResponse } from 'src/MT4/mt4.type';
import { LambdaService } from 'src/lambda/lambda.service';

const WEBSOCKET_PORT = +process.env.WEBSOCKET_PORT || 5001;

@WebSocketGateway(WEBSOCKET_PORT, {
  cors: { origin: '*' },
})
export class TradeGateway implements OnGatewayConnection {
  constructor(
    private readonly lambdaService: LambdaService,
    private readonly mt4Service: MT4Service,
  ) {}

  @SubscribeMessage('pingLambdaFn')
  async pingLambdaFn() {
    return await this.lambdaService.pingLambdaFn();
  }

  @SubscribeMessage('sendOrder')
  async sendOrder(@MessageBody() payload: SendOrderResponse) {
    return await this.mt4Service.orderSend(payload);
  }

  handleConnection(socket: Socket) {
    return socket;
  }
}
