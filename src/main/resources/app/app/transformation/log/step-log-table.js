"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var log_table_1 = require('./log-table');
var StepLogTable = (function (_super) {
    __extends(StepLogTable, _super);
    function StepLogTable() {
        _super.call(this);
        this.fields.push(new field_1.Field("ID_BATCH", true, "ID_BATCH"));
        this.fields.push(new field_1.Field("CHANNEL_ID", true, "CHANNEL_ID"));
        this.fields.push(new field_1.Field("LOG_DATE", true, "LOG_DATE"));
        this.fields.push(new field_1.Field("TRANSNAME", true, "TRANSNAME"));
        this.fields.push(new field_1.Field("STEPNAME", true, "STEPNAME"));
        this.fields.push(new field_1.Field("STEP_COPY", true, "STEP_COPY"));
        this.fields.push(new field_1.Field("LINES_READ", true, "LINES_READ"));
        this.fields.push(new field_1.Field("LINES_WRITTEN", true, "LINES_WRITTEN"));
        this.fields.push(new field_1.Field("LINES_UPDATED", true, "LINES_UPDATED"));
        this.fields.push(new field_1.Field("LINES_INPUT", true, "LINES_INPUT"));
        this.fields.push(new field_1.Field("LINES_OUTPUT", true, "LINES_OUTPUT"));
        this.fields.push(new field_1.Field("LINES_REJECTED", true, "LINES_REJECTED"));
        this.fields.push(new field_1.Field("ERRORS", true, "ERRORS"));
        this.fields.push(new field_1.Field("LOG_FIELD", false, "LOG_FIELD"));
    }
    return StepLogTable;
}(log_table_1.LogTable));
exports.StepLogTable = StepLogTable;
//# sourceMappingURL=step-log-table.js.map