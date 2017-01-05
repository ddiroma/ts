"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var transformation_1 = require("./transformation/transformation");
var step_1 = require("./steps/step/step");
var CanvasComponent = (function () {
    function CanvasComponent() {
        this.onEdit = new core_1.EventEmitter();
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.ctx = this.canvas.getContext("2d");
    };
    CanvasComponent.prototype.update = function () {
        var c = this.ctx;
        c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 1; i < this.transformation.steps.length; i++) {
            var prevStep = this.transformation.steps[i - 1];
            var currStep = this.transformation.steps[i];
            c.beginPath();
            c.moveTo(prevStep.x + 130, prevStep.y + 22);
            c.lineTo(currStep.x, currStep.y + 22);
            c.stroke();
            c.beginPath();
            c.moveTo(currStep.x, currStep.y + 22);
            c.lineTo(currStep.x - 10, currStep.y + 17);
            c.lineTo(currStep.x - 10, currStep.y + 27);
            c.lineTo(currStep.x, currStep.y + 22);
            c.fill();
        }
    };
    CanvasComponent.prototype.edit = function (step) {
        this.currentStep = step;
        this.transformation.editing = true;
        this.onEdit.emit(step);
    };
    CanvasComponent.prototype.delete = function (step) {
        if (step == this.currentStep) {
            this.transformation.editing = false;
        }
        this.transformation.removeStep(step);
        this.transformation.x -= 250;
        this.update();
    };
    __decorate([
        core_1.Input("transformation"), 
        __metadata('design:type', transformation_1.Transformation)
    ], CanvasComponent.prototype, "transformation", void 0);
    __decorate([
        core_1.Input("currentStep"), 
        __metadata('design:type', step_1.Step)
    ], CanvasComponent.prototype, "currentStep", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CanvasComponent.prototype, "onEdit", void 0);
    __decorate([
        core_1.ViewChild('canvas'), 
        __metadata('design:type', core_1.ElementRef)
    ], CanvasComponent.prototype, "canvasRef", void 0);
    CanvasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'step-canvas',
            templateUrl: '/templates/canvas.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map