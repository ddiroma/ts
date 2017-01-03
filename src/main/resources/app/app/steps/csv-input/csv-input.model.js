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
        this.trimType = "none";
    }
    return Field;
}());
exports.Field = Field;
var CsvInputModel = (function (_super) {
    __extends(CsvInputModel, _super);
    function CsvInputModel() {
        _super.call(this);
        this.includeFilename = false;
        this.separator = ",";
        this.enclosure = "\"";
        this.header = true;
        this.bufferSize = 50000;
        this.lazyConversion = true;
        this.addFilenameResult = false;
        this.parallel = false;
        this.newlinePossible = false;
        this.fields = [];
        this.distribute = true;
        this.name = "CSV file input";
        this.type = "CsvInput";
    }
    return CsvInputModel;
}(step_model_1.StepModel));
exports.CsvInputModel = CsvInputModel;
//# sourceMappingURL=csv-input.model.js.map