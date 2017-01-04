"use strict";
var transformation_model_1 = require('./transformation.model');
var Transformation = (function () {
    function Transformation() {
        this.x = 100;
        this.y = 100;
        this.model = new transformation_model_1.TransformationModel();
        this.steps = [];
        this.editing = false;
        this.dirty = true;
    }
    Transformation.prototype.addStep = function (step) {
        step.model.gui.xloc = this.x;
        step.model.gui.yloc = this.y;
        this.x = this.x += 150;
        this.steps.push(step);
        this.updateHops();
        this.dirty = true;
    };
    Transformation.prototype.removeStep = function (step) {
        var index = this.steps.indexOf(step);
        this.steps.splice(index, 1);
        this.updateHops();
        this.dirty = true;
    };
    Transformation.prototype.updateHops = function () {
        this.model.order.hops = [];
        if (this.steps.length > 1) {
            for (var i = 0; i < this.steps.length - 1; i++) {
                var hop = new transformation_model_1.Hop();
                hop.from = this.steps[i].model.name;
                hop.to = this.steps[i + 1].model.name;
                this.model.order.hops.push(hop);
            }
        }
    };
    Transformation.prototype.populateModel = function () {
        this.model.steps = [];
        for (var _i = 0, _a = this.steps; _i < _a.length; _i++) {
            var step = _a[_i];
            this.model.steps.push(step.model);
        }
    };
    return Transformation;
}());
exports.Transformation = Transformation;
//# sourceMappingURL=transformation.js.map