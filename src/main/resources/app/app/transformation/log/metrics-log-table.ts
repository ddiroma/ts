import { Field } from './field';
import { LogTable } from './log-table';

export class MetricsLogTable extends LogTable {
  constructor() {
    super();
    this.fields.push(new Field("ID_BATCH", true, "ID_BATCH"));
    this.fields.push(new Field("CHANNEL_ID", true, "CHANNEL_ID"));
    this.fields.push(new Field("LOG_DATE", true, "LOG_DATE"));
    this.fields.push(new Field("METRICS_DATE", true, "METRICS_DATE"));
    this.fields.push(new Field("METRICS_CODE", true, "METRICS_CODE"));
    this.fields.push(new Field("METRICS_DESCRIPTION", true, "METRICS_DESCRIPTION"));
    this.fields.push(new Field("METRICS_SUBJECT", true, "METRICS_SUBJECT"));
    this.fields.push(new Field("METRICS_TYPE", true, "METRICS_TYPE"));
    this.fields.push(new Field("METRICS_VALUE", true, "METRICS_VALUE"));
  }
}
