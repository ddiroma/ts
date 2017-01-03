"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var field_1 = require('./field');
var log_table_1 = require('./log-table');
var MetricsLogTable = (function (_super) {
    __extends(MetricsLogTable, _super);
    function MetricsLogTable() {
        _super.call(this);
        this.fields.push(new field_1.Field("ID_BATCH", true, "ID_BATCH"));
        this.fields.push(new field_1.Field("CHANNEL_ID", true, "CHANNEL_ID"));
        this.fields.push(new field_1.Field("LOG_DATE", true, "LOG_DATE"));
        this.fields.push(new field_1.Field("METRICS_DATE", true, "METRICS_DATE"));
        this.fields.push(new field_1.Field("METRICS_CODE", true, "METRICS_CODE"));
        this.fields.push(new field_1.Field("METRICS_DESCRIPTION", true, "METRICS_DESCRIPTION"));
        this.fields.push(new field_1.Field("METRICS_SUBJECT", true, "METRICS_SUBJECT"));
        this.fields.push(new field_1.Field("METRICS_TYPE", true, "METRICS_TYPE"));
        this.fields.push(new field_1.Field("METRICS_VALUE", true, "METRICS_VALUE"));
    }
    return MetricsLogTable;
}(log_table_1.LogTable));
exports.MetricsLogTable = MetricsLogTable;
//# sourceMappingURL=metrics-log-table.js.map