"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_model_1 = require("../step/step.model");
var DummyModel = (function (_super) {
    __extends(DummyModel, _super);
    function DummyModel() {
        _super.call(this);
        this.name = "Dummy Step (do nothing)";
        this.type = "Dummy";
    }
    return DummyModel;
}(step_model_1.StepModel));
exports.DummyModel = DummyModel;
//# sourceMappingURL=dummy.model.js.map