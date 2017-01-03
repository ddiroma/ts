"use strict";
var trans_log_table_1 = require('./trans-log-table');
var perf_log_table_1 = require('./perf-log-table');
var channel_log_table_1 = require('./channel-log-table');
var step_log_table_1 = require('./step-log-table');
var metrics_log_table_1 = require('./metrics-log-table');
var Log = (function () {
    function Log() {
        this.transLogTable = new trans_log_table_1.TransLogTable();
        this.perfLogTable = new perf_log_table_1.PerfLogTable();
        this.channelLogTable = new channel_log_table_1.ChannelLogTable();
        this.stepLogTable = new step_log_table_1.StepLogTable();
        this.metricsLogTable = new metrics_log_table_1.MetricsLogTable();
    }
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map