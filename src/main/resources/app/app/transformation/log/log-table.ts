import { Field } from './field';

export class LogTable {
  connection: String;
  schema: String;
  table: String;
  interval: Number;
  timeoutDays: Number;
  fields: Array<Field> = [];
}
