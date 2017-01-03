"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var log_table_1 = require('./log-table');
var ChannelLogTable = (function (_super) {
    __extends(ChannelLogTable, _super);
    function ChannelLogTable() {
        _super.call(this);
        this.fields.push(new field_1.Field("ID_BATCH", true, "ID_BATCH"));
        this.fields.push(new field_1.Field("CHANNEL_ID", true, "CHANNEL_ID"));
        this.fields.push(new field_1.Field("LOG_DATE", true, "LOG_DATE"));
        this.fields.push(new field_1.Field("LOGGING_OBJECT_TYPE", true, "LOGGING_OBJECT_TYPE"));
        this.fields.push(new field_1.Field("OBJECT_NAME", true, "OBJECT_NAME"));
        this.fields.push(new field_1.Field("OBJECT_COPY", true, "OBJECT_COPY"));
        this.fields.push(new field_1.Field("REPOSITORY_DIRECTORY", true, "REPOSITORY_DIRECTORY"));
        this.fields.push(new field_1.Field("FILENAME", true, "FILENAME"));
        this.fields.push(new field_1.Field("OBJECT_ID", true, "OBJECT_ID"));
        this.fields.push(new field_1.Field("OBJECT_REVISION", true, "OBJECT_REVISION"));
        this.fields.push(new field_1.Field("PARENT_CHANNEL_ID", true, "PARENT_CHANNEL_ID"));
        this.fields.push(new field_1.Field("ROOT_CHANNEL_ID", true, "ROOT_CHANNEL_ID"));
    }
    return ChannelLogTable;
}(log_table_1.LogTable));
exports.ChannelLogTable = ChannelLogTable;
//# sourceMappingURL=channel-log-table.js.map