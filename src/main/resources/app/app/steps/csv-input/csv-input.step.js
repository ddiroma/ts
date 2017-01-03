"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_1 = require('../step/step');
var csv_input_model_1 = require('./csv-input.model');
var CsvInputStep = (function (_super) {
    __extends(CsvInputStep, _super);
    function CsvInputStep(csvInputModel) {
        _super.call(this, csvInputModel);
        this.icon = "/app/steps/csv-input/assets/CSV.svg";
        this.label = "CSV file input";
        this.color = "#337AB7";
    }
    CsvInputStep.prototype.get = function () {
        return new CsvInputStep(new csv_input_model_1.CsvInputModel());
    };
    return CsvInputStep;
}(step_1.Step));
exports.CsvInputStep = CsvInputStep;
//# sourceMappingURL=csv-input.step.js.map