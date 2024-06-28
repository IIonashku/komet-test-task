import { Module } from '@nestjs/common';
import { TradeGateway } from './trade.gateway';
import { LambdaModule } from 'src/lambda/lambda.module';
import { MT4Module } from 'src/MT4/mt4.module';

@Module({
  imports: [LambdaModule, MT4Module],
  providers: [TradeGateway],
})
export class TradeModule {}
