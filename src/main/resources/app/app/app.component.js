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
var transformation_1 = require('./transformation/transformation');
var xml_executor_1 = require('./writer/xml-executor');
var transformation_service_1 = require('./transformation/transformation.service');
var AppComponent = (function () {
    function AppComponent(transformationService) {
        this.transformationService = transformationService;
        this.currentStep = null;
        this.result = new transformation_service_1.Result();
        this.transformation = new transformation_1.Transformation();
        this.transformation.model.info.name = "My Transformation";
        this.transformation.path = '/home/bmorrise/Documents/test.ktr';
    }
    AppComponent.prototype.onSelect = function (step) {
        this.currentStep = step.get();
        this.transformation.editing = true;
    };
    AppComponent.prototype.edit = function (step) {
        this.currentStep = step;
        this.transformation.editing = true;
    };
    AppComponent.prototype.delete = function (step) {
        if (step == this.currentStep) {
            this.transformation.editing = false;
        }
        this.transformation.removeStep(step);
    };
    AppComponent.prototype.generate = function () {
        var xmlExecutor = new xml_executor_1.XmlExecutor();
        this.transformation.populateModel();
        var text = xmlExecutor.execute(this.transformation.model);
        this.transformationService.save(this.transformation.path, text).then(function (result) { return console.log(result); });
        this.transformation.dirty = false;
    };
    AppComponent.prototype.run = function () {
        var _this = this;
        var stepName = this.transformation.steps[this.transformation.steps.length - 1].model.name;
        this.transformationService.run(this.transformation.path, stepName).then(function (result) { return _this.result = result; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [transformation_service_1.TransformationService]
        }), 
        __metadata('design:paramtypes', [transformation_service_1.TransformationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map