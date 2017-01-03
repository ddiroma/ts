"use strict";
var Partitioning = (function () {
    function Partitioning(method, schemaName) {
        this.method = method;
        this.schemaName = schemaName;
    }
    return Partitioning;
}());
exports.Partitioning = Partitioning;
var GUI = (function () {
    function GUI(xloc, yloc, draw) {
        this.xloc = xloc;
        this.yloc = yloc;
        this.draw = draw;
    }
    return GUI;
}());
exports.GUI = GUI;
var RemoteSteps = (function () {
    function RemoteSteps(input, output) {
        this.input = input;
        this.output = output;
    }
    return RemoteSteps;
}());
exports.RemoteSteps = RemoteSteps;
var StepModel = (function () {
    function StepModel() {
        this.distribute = false;
        this.copies = 1;
        this.partitioning = new Partitioning("none", "");
        this.remoteSteps = new RemoteSteps("", "");
        this.gui = new GUI(0, 0, true);
    }
    return StepModel;
}());
exports.StepModel = StepModel;
//# sourceMappingURL=step.model.js.map