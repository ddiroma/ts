"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_1 = require('../step/step');
var dummy_model_1 = require('./dummy.model');
var category_model_1 = require("../category.model");
var DummyStep = (function (_super) {
    __extends(DummyStep, _super);
    function DummyStep(category, dummyModel) {
        _super.call(this, category, dummyModel);
        this.icon = "/app/steps/dummy/assets/DUM.svg";
        this.url = "/dummy";
        this.label = "Dummy Step";
        this.color = "#337AB7";
    }
    DummyStep.prototype.get = function () {
        return new DummyStep(new category_model_1.Category(""), new dummy_model_1.DummyModel());
    };
    return DummyStep;
}(step_1.Step));
exports.DummyStep = DummyStep;
//# sourceMappingURL=dummy.step.js.map