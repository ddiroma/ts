"use strict";
var step_model_1 = require('./step.model');
var category_model_1 = require("../category.model");
var Step = (function () {
    function Step(category, model) {
        this.label = "";
        this.x = 100;
        this.y = 100;
        this.category = category;
        this.model = model;
        this.category.steps.push(this);
    }
    Step.prototype.get = function () {
        return new Step(new category_model_1.Category(""), new step_model_1.StepModel());
    };
    Step.prototype.setX = function (x) {
        this.x = x;
        this.model.gui.xloc = x;
    };
    Step.prototype.setY = function (y) {
        this.y = y;
        this.model.gui.yloc = y;
    };
    return Step;
}());
exports.Step = Step;
//# sourceMappingURL=step.js.map