"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var log_table_1 = require('./log-table');
var TransLogTable = (function (_super) {
    __extends(TransLogTable, _super);
    function TransLogTable() {
        _super.call(this);
        this.fields.push(new field_1.Field("ID_BATCH", true, "ID_BATCH"));
        this.fields.push(new field_1.Field("CHANNEL_ID", true, "CHANNEL_ID"));
        this.fields.push(new field_1.Field("TRANSNAME", true, "TRANSNAME"));
        this.fields.push(new field_1.Field("STATUS", true, "STATUS"));
        this.fields.push(new field_1.Field("LINES_READ", true, "LINES_READ"));
        this.fields.push(new field_1.Field("LINES_WRITTEN", true, "LINES_WRITTEN"));
        this.fields.push(new field_1.Field("LINES_UPDATED", true, "LINES_UPDATED"));
        this.fields.push(new field_1.Field("LINES_INPUT", true, "LINES_INPUT"));
        this.fields.push(new field_1.Field("LINES_OUTPUT", true, "LINES_OUTPUT"));
        this.fields.push(new field_1.Field("LINES_REJECTED", true, "LINES_REJECTED"));
        this.fields.push(new field_1.Field("ERRORS", true, "ERRORS"));
        this.fields.push(new field_1.Field("STARTDATE", true, "STARTDATE"));
        this.fields.push(new field_1.Field("ENDDATE", true, "ENDDATE"));
        this.fields.push(new field_1.Field("LOGDATE", true, "LOGDATE"));
        this.fields.push(new field_1.Field("DEPDATE", true, "DEPDATE"));
        this.fields.push(new field_1.Field("REPLAYDATE", true, "REPLAYDATE"));
        this.fields.push(new field_1.Field("LOG_FIELD", true, "LOG_FIELD"));
        this.fields.push(new field_1.Field("EXECUTING_SERVER", false, "EXECUTING_SERVER"));
        this.fields.push(new field_1.Field("EXECUTING_USER", false, "EXECUTING_USER"));
        this.fields.push(new field_1.Field("CLIENT", false, "CLIENT"));
    }
    return TransLogTable;
}(log_table_1.LogTable));
exports.TransLogTable = TransLogTable;
//# sourceMappingURL=trans-log-table.js.map