import { Field } from './field';
import { LogTable } from './log-table';

export class TransLogTable extends LogTable {
  constructor() {
    super();
    this.fields.push(new Field("ID_BATCH", true, "ID_BATCH"));
    this.fields.push(new Field("CHANNEL_ID", true, "CHANNEL_ID"));
    this.fields.push(new Field("TRANSNAME", true, "TRANSNAME"));
    this.fields.push(new Field("STATUS", true, "STATUS"));
    this.fields.push(new Field("LINES_READ", true, "LINES_READ"));
    this.fields.push(new Field("LINES_WRITTEN", true, "LINES_WRITTEN"));
    this.fields.push(new Field("LINES_UPDATED", true, "LINES_UPDATED"));
    this.fields.push(new Field("LINES_INPUT", true, "LINES_INPUT"));
    this.fields.push(new Field("LINES_OUTPUT", true, "LINES_OUTPUT"));
    this.fields.push(new Field("LINES_REJECTED", true, "LINES_REJECTED"));
    this.fields.push(new Field("ERRORS", true, "ERRORS"));
    this.fields.push(new Field("STARTDATE", true, "STARTDATE"));
    this.fields.push(new Field("ENDDATE", true, "ENDDATE"));
    this.fields.push(new Field("LOGDATE", true, "LOGDATE"));
    this.fields.push(new Field("DEPDATE", true, "DEPDATE"));
    this.fields.push(new Field("REPLAYDATE", true, "REPLAYDATE"));
    this.fields.push(new Field("LOG_FIELD", true, "LOG_FIELD"));
    this.fields.push(new Field("EXECUTING_SERVER", false, "EXECUTING_SERVER"));
    this.fields.push(new Field("EXECUTING_USER", false, "EXECUTING_USER"));
    this.fields.push(new Field("CLIENT", false, "CLIENT"));
  }
}
