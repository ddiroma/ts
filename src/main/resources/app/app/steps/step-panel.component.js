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
var StepPanelComponent = (function () {
    function StepPanelComponent() {
        this.steps = [];
        this.onSelect = new core_1.EventEmitter();
        this.dummyStep = new dummy_step_1.DummyStep(null);
        this.dataGridStep = new data_grid_step_1.DataGridStep(null);
        this.csvInputStep = new csv_input_step_1.CsvInputStep(null);
        this.steps.push(this.csvInputStep);
        this.steps.push(this.dataGridStep);
        this.steps.push(this.dummyStep);
    }
    StepPanelComponent.prototype.select = function (step) {
        this.onSelect.emit(step);
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