import { LambdaResponse } from 'src/lambda/lambda.type';

export type SendOrderResponse = LambdaResponse & {
  id: string;
};
