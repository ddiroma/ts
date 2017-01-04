"use strict";
var step_model_1 = require('./step.model');
var category_model_1 = require("../category.model");
var Step = (function () {
    function Step(category, model) {
        this.label = "";
        this.category = category;
        this.model = model;
    }
    Step.prototype.get = function () {
        return new Step(new category_model_1.Category(""), new step_model_1.StepModel());
    };
    return Step;
}());
exports.Step = Step;
//# sourceMappingURL=step.js.map