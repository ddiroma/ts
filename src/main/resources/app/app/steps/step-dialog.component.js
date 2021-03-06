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
var core_1 = require('@angular/core');
var step_1 = require('./step/step');
var transformation_1 = require('../transformation/transformation');
var StepDialogComponent = (function () {
    function StepDialogComponent() {
        this.onUpdate = new core_1.EventEmitter();
    }
    StepDialogComponent.prototype.isVisible = function (stepType) {
        if (this.currentStep == null || this.transformation.editing == false) {
            return false;
        }
        if (this.currentStep.model.type == stepType) {
            return true;
        }
        return false;
    };
    StepDialogComponent.prototype.handleUpdate = function (step) {
        this.onUpdate.emit(step);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', step_1.Step)
    ], StepDialogComponent.prototype, "currentStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', transformation_1.Transformation)
    ], StepDialogComponent.prototype, "transformation", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StepDialogComponent.prototype, "onUpdate", void 0);
    StepDialogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'step-dialog',
            templateUrl: 'step-dialog.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StepDialogComponent);
    return StepDialogComponent;
}());
exports.StepDialogComponent = StepDialogComponent;
//# sourceMappingURL=step-dialog.component.js.map