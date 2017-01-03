"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_model_1 = require("../step/step.model");
var Field = (function () {
    function Field() {
        this.length = -1;
        this.precision = -1;
        this.setEmptyString = false;
    }
    return Field;
}());
exports.Field = Field;
var Item = (function () {
    function Item(value) {
        this.value = value;
    }
    return Item;
}());
exports.Item = Item;
var Line = (function () {
    function Line() {
        this.items = [];
    }
    return Line;
}());
exports.Line = Line;
var Data = (function () {
    function Data() {
        this.lines = [];
    }
    return Data;
}());
exports.Data = Data;
var DataGridModel = (function (_super) {
    __extends(DataGridModel, _super);
    function DataGridModel() {
        _super.call(this);
        this.fields = [];
        this.data = new Data();
        this.name = "Data Grid";
        this.type = "DataGrid";
    }
    return DataGridModel;
}(step_model_1.StepModel));
exports.DataGridModel = DataGridModel;
//# sourceMappingURL=data-grid.model.js.map