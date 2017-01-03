"use strict";
var step_model_1 = require('./step.model');
var Step = (function () {
    function Step(model) {
        this.model = model;
    }
    Step.prototype.get = function () {
        return new Step(new step_model_1.StepModel());
    };
    return Step;
}());
exports.Step = Step;
//# sourceMappingURL=step.js.map