"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var step_model_1 = require('../../steps/step/step.model');
var default_writer_1 = require('../default-writer');
var GuiWriter = (function (_super) {
    __extends(GuiWriter, _super);
    function GuiWriter() {
        _super.apply(this, arguments);
    }
    GuiWriter.prototype.getObject = function () {
        return step_model_1.GUI;
    };
    GuiWriter.prototype.getTagName = function (object) {
        return 'GUI';
    };
    return GuiWriter;
}(default_writer_1.DefaultWriter));
var RemoteStepsWriter = (function (_super) {
    __extends(RemoteStepsWriter, _super);
    function RemoteStepsWriter() {
        _super.apply(this, arguments);
    }
    RemoteStepsWriter.prototype.getObject = function () {
        return step_model_1.RemoteSteps;
    };
    RemoteStepsWriter.prototype.getTagName = function (object) {
        return 'remotesteps';
    };
    return RemoteStepsWriter;
}(default_writer_1.DefaultWriter));
var StepWriter = (function (_super) {
    __extends(StepWriter, _super);
    function StepWriter() {
        _super.apply(this, arguments);
    }
    StepWriter.prototype.register = function () {
        this.executor.register(this);
        this.executor.register(new GuiWriter(this.executor));
        this.executor.register(new RemoteStepsWriter(this.executor));
    };
    StepWriter.prototype.getObject = function () {
        return step_model_1.StepModel;
    };
    StepWriter.prototype.getTagName = function (object) {
        return 'step';
    };
    return StepWriter;
}(default_writer_1.DefaultWriter));
exports.StepWriter = StepWriter;
//# sourceMappingURL=step-writer.js.map