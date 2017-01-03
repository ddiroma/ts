"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var data_grid_model_1 = require('../../steps/data-grid/data-grid.model');
var default_writer_1 = require('../default-writer');
var step_writer_1 = require('./step-writer');
var ItemWriter = (function (_super) {
    __extends(ItemWriter, _super);
    function ItemWriter() {
        _super.apply(this, arguments);
    }
    ItemWriter.prototype.write = function (item) {
        var output = "<item>";
        output += item.value;
        return output += "</item>";
    };
    ItemWriter.prototype.getObject = function () {
        return data_grid_model_1.Item;
    };
    return ItemWriter;
}(default_writer_1.DefaultWriter));
exports.ItemWriter = ItemWriter;
var DataGridWriter = (function (_super) {
    __extends(DataGridWriter, _super);
    function DataGridWriter(executor) {
        _super.call(this, executor);
        executor.register(new default_writer_1.DefaultWriter2(executor, data_grid_model_1.Data, false));
        executor.register(new default_writer_1.DefaultWriter2(executor, data_grid_model_1.Line, false));
        executor.register(new ItemWriter(executor));
    }
    DataGridWriter.prototype.getObject = function () {
        return data_grid_model_1.DataGridModel;
    };
    DataGridWriter.prototype.getIncludeTags = function (tag) {
        return true;
    };
    return DataGridWriter;
}(step_writer_1.StepWriter));
exports.DataGridWriter = DataGridWriter;
//# sourceMappingURL=data-grid-writer.js.map