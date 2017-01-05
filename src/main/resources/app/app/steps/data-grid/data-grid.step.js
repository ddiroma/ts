"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_1 = require('../step/step');
var data_grid_model_1 = require('./data-grid.model');
var category_model_1 = require("../category.model");
var DataGridStep = (function (_super) {
    __extends(DataGridStep, _super);
    function DataGridStep(category, dataGridModel) {
        _super.call(this, category, dataGridModel);
        this.icon = "/app/steps/data-grid/assets/GNR.svg";
        this.label = "Data Grid";
        this.color = "#337AB7";
    }
    DataGridStep.prototype.get = function () {
        return new DataGridStep(new category_model_1.Category(""), new data_grid_model_1.DataGridModel());
    };
    return DataGridStep;
}(step_1.Step));
exports.DataGridStep = DataGridStep;
//# sourceMappingURL=data-grid.step.js.map