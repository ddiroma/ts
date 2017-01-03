import { Field } from './field';
import { LogTable } from './log-table';

export class ChannelLogTable extends LogTable {
  constructor() {
    super();
    this.fields.push(new Field("ID_BATCH", true, "ID_BATCH"));
    this.fields.push(new Field("CHANNEL_ID", true, "CHANNEL_ID"));
    this.fields.push(new Field("LOG_DATE", true, "LOG_DATE"));
    this.fields.push(new Field("LOGGING_OBJECT_TYPE", true, "LOGGING_OBJECT_TYPE"));
    this.fields.push(new Field("OBJECT_NAME", true, "OBJECT_NAME"));
    this.fields.push(new Field("OBJECT_COPY", true, "OBJECT_COPY"));
    this.fields.push(new Field("REPOSITORY_DIRECTORY", true, "REPOSITORY_DIRECTORY"));
    this.fields.push(new Field("FILENAME", true, "FILENAME"));
    this.fields.push(new Field("OBJECT_ID", true, "OBJECT_ID"));
    this.fields.push(new Field("OBJECT_REVISION", true, "OBJECT_REVISION"));
    this.fields.push(new Field("PARENT_CHANNEL_ID", true, "PARENT_CHANNEL_ID"));
    this.fields.push(new Field("ROOT_CHANNEL_ID", true, "ROOT_CHANNEL_ID"));
  }
}
