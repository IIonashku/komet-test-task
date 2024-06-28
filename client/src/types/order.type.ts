import { Lambda } from "./lambda.type";

export type Order = Lambda & {
  id: string;
};
