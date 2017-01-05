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
var data_service_1 = require("./data.service");
var canvas_component_1 = require("./canvas.component");
var MainComponent = (function () {
    function MainComponent(transformationService, dataService) {
        this.transformationService = transformationService;
        this.dataService = dataService;
        this.result = new transformation_service_1.Result();
        this.currentStep = null;
        this.transformation = new transformation_1.Transformation();
        this.transformation.model.info.name = "My Transformation";
        this.transformation.path = '/home/bmorrise/Documents/test.ktr';
    }
    MainComponent.prototype.onSelect = function (step) {
        this.transformation.addStep(step.get());
        this.canvasComponent.update();
    };
    MainComponent.prototype.onEdit = function (step) {
        this.transformation.editing = true;
        this.currentStep = step;
    };
    MainComponent.prototype.onUpdate = function (step) {
        this.canvasComponent.update();
    };
    MainComponent.prototype.generate = function () {
        var xmlExecutor = new xml_executor_1.XmlExecutor();
        this.transformation.populateModel();
        console.log(this.transformation.steps);
        var text = xmlExecutor.execute(this.transformation.model);
        console.log(text);
        // this.transformationService.save(this.transformation.path, text).then(result => console.log(result));
        // this.transformation.dirty = false;
    };
    MainComponent.prototype.run = function () {
        var _this = this;
        var stepName = this.transformation.steps[this.transformation.steps.length - 1].model.name;
        this.transformationService.run(this.transformation.path, stepName).then(function (result) { return _this.result = result; });
    };
    __decorate([
        core_1.ViewChild(canvas_component_1.CanvasComponent), 
        __metadata('design:type', canvas_component_1.CanvasComponent)
    ], MainComponent.prototype, "canvasComponent", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/templates/main.component.html',
            providers: [transformation_service_1.TransformationService, data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [transformation_service_1.TransformationService, data_service_1.DataService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map