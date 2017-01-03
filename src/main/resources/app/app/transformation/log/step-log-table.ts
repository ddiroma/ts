import { Field } from './field';
import { LogTable } from './log-table';

export class StepLogTable extends LogTable {
  constructor() {
    super();
    this.fields.push(new Field("ID_BATCH", true, "ID_BATCH"));
    this.fields.push(new Field("CHANNEL_ID", true, "CHANNEL_ID"));
    this.fields.push(new Field("LOG_DATE", true, "LOG_DATE"));
    this.fields.push(new Field("TRANSNAME", true, "TRANSNAME"));
    this.fields.push(new Field("STEPNAME", true, "STEPNAME"));
    this.fields.push(new Field("STEP_COPY", true, "STEP_COPY"));
    this.fields.push(new Field("LINES_READ", true, "LINES_READ"));
    this.fields.push(new Field("LINES_WRITTEN", true, "LINES_WRITTEN"));
    this.fields.push(new Field("LINES_UPDATED", true, "LINES_UPDATED"));
    this.fields.push(new Field("LINES_INPUT", true, "LINES_INPUT"));
    this.fields.push(new Field("LINES_OUTPUT", true, "LINES_OUTPUT"));
    this.fields.push(new Field("LINES_REJECTED", true, "LINES_REJECTED"));
    this.fields.push(new Field("ERRORS", true, "ERRORS"));
    this.fields.push(new Field("LOG_FIELD", false, "LOG_FIELD"));
  }
}
