import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TradeModule } from './trade/trade.module';

@Module({
  imports: [ConfigModule.forRoot(), TradeModule],
})
export class AppModule {}
