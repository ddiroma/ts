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
var data_grid_step_1 = require('./data-grid/data-grid.step');
var dummy_step_1 = require('./dummy/dummy.step');
var csv_input_step_1 = require('./csv-input/csv-input.step');
var category_model_1 = require("./category.model");
var StepPanelComponent = (function () {
    function StepPanelComponent() {
        this.onSelect = new core_1.EventEmitter();
        this.categoriesList = [];
        this.stepsList = [];
        this.steps = [];
        var input = new category_model_1.Category("Input");
        var flow = new category_model_1.Category("Flow");
        this.dummyStep = new dummy_step_1.DummyStep(flow, null);
        this.dataGridStep = new data_grid_step_1.DataGridStep(input, null);
        this.csvInputStep = new csv_input_step_1.CsvInputStep(input, null);
        this.categoriesList.push(input);
        this.categoriesList.push();
        this.stepsList.push(this.csvInputStep);
        this.stepsList.push(this.dataGridStep);
        this.stepsList.push(this.dummyStep);
        this.reset();
    }
    StepPanelComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.stepsList; _i < _a.length; _i++) {
            var step = _a[_i];
            this.steps.push(step);
        }
    };
    StepPanelComponent.prototype.select = function (step) {
        this.onSelect.emit(step);
    };
    StepPanelComponent.prototype.search = function (event) {
        var param = event.target.value;
        console.log(param);
        this.steps = [];
        for (var _i = 0, _a = this.stepsList; _i < _a.length; _i++) {
            var step = _a[_i];
            if (step.label.toLowerCase().indexOf(param.toLowerCase()) != -1) {
                this.steps.push(step);
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StepPanelComponent.prototype, "onSelect", void 0);
    StepPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'step-panel',
            templateUrl: 'step-panel.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StepPanelComponent);
    return StepPanelComponent;
}());
exports.StepPanelComponent = StepPanelComponent;
//# sourceMappingURL=step-panel.component.js.map