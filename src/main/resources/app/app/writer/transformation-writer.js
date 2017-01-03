"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var default_writer_1 = require('./default-writer');
var transformation_model_1 = require('../transformation/transformation.model');
var log_table_1 = require('../transformation/log/log-table');
var LogTableWriter = (function (_super) {
    __extends(LogTableWriter, _super);
    function LogTableWriter() {
        _super.apply(this, arguments);
    }
    LogTableWriter.prototype.getObject = function () {
        return log_table_1.LogTable;
    };
    LogTableWriter.prototype.getTagName = function (object) {
        return this.convertTag(object.constructor.name, "-");
    };
    LogTableWriter.prototype.getIncludeTags = function (tag) {
        return false;
    };
    return LogTableWriter;
}(default_writer_1.DefaultWriter));
exports.LogTableWriter = LogTableWriter;
var OrderWriter = (function (_super) {
    __extends(OrderWriter, _super);
    function OrderWriter() {
        _super.apply(this, arguments);
    }
    OrderWriter.prototype.getObject = function () {
        return transformation_model_1.Order;
    };
    OrderWriter.prototype.getIncludeTags = function (tag) {
        return false;
    };
    return OrderWriter;
}(default_writer_1.DefaultWriter));
exports.OrderWriter = OrderWriter;
var TransformationWriter = (function (_super) {
    __extends(TransformationWriter, _super);
    function TransformationWriter(executor) {
        _super.call(this, executor);
        executor.register(new LogTableWriter(executor));
        executor.register(new OrderWriter(executor));
    }
    TransformationWriter.prototype.getTagName = function () {
        return "transformation";
    };
    TransformationWriter.prototype.getObject = function () {
        return transformation_model_1.TransformationModel;
    };
    TransformationWriter.prototype.getIncludeTags = function (tag) {
        return false;
    };
    return TransformationWriter;
}(default_writer_1.DefaultWriter));
exports.TransformationWriter = TransformationWriter;
//# sourceMappingURL=transformation-writer.js.map