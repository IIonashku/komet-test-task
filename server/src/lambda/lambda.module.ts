import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LambdaService } from './lambda.service';

@Module({
  imports: [HttpModule],
  providers: [LambdaService],
  exports: [LambdaService],
})
export class LambdaModule {}
