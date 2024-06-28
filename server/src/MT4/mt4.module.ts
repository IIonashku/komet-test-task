import { Module } from '@nestjs/common';
import { MT4Service } from './mt4.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MT4Service],
  exports: [MT4Service],
})
export class MT4Module {}
