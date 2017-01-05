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
        this.categories = [];
        this.showSteps = false;
        this.showCategories = true;
        var input = new category_model_1.Category("Input");
        var output = new category_model_1.Category("Output");
        var transform = new category_model_1.Category("Transformation");
        var utility = new category_model_1.Category("Utility");
        var flow = new category_model_1.Category("Flow");
        var scripting = new category_model_1.Category("Scripting");
        var pentahoServer = new category_model_1.Category("Pentaho Server");
        var lookup = new category_model_1.Category("Lookup");
        var joins = new category_model_1.Category("Joins");
        var dataWarehouse = new category_model_1.Category("Data Warehouse");
        var validation = new category_model_1.Category("Validation");
        var statistics = new category_model_1.Category("Statistics");
        var dataMining = new category_model_1.Category("Data Mining");
        var bigData = new category_model_1.Category("Big Data");
        var agile = new category_model_1.Category("Agile");
        var cryptography = new category_model_1.Category("Cryptography");
        var palo = new category_model_1.Category("Palo");
        var openErp = new category_model_1.Category("Open ERP");
        var job = new category_model_1.Category("Job");
        var mapping = new category_model_1.Category("Mapping");
        var bulkLoading = new category_model_1.Category("Bulk Loading");
        var inline = new category_model_1.Category("Inline");
        var experimental = new category_model_1.Category("Experimental");
        var deprecated = new category_model_1.Category("Deprecated");
        var history = new category_model_1.Category("History");
        this.categoriesList.push(input);
        this.categoriesList.push(output);
        this.categoriesList.push(transform);
        this.categoriesList.push(utility);
        this.categoriesList.push(flow);
        this.categoriesList.push(scripting);
        this.categoriesList.push(pentahoServer);
        this.categoriesList.push(lookup);
        this.categoriesList.push(joins);
        this.categoriesList.push(dataWarehouse);
        this.categoriesList.push(validation);
        this.categoriesList.push(statistics);
        this.categoriesList.push(dataMining);
        this.categoriesList.push(bigData);
        this.categoriesList.push(agile);
        this.categoriesList.push(cryptography);
        this.categoriesList.push(palo);
        this.categoriesList.push(openErp);
        this.categoriesList.push(job);
        this.categoriesList.push(mapping);
        this.categoriesList.push(bulkLoading);
        this.categoriesList.push(inline);
        this.categoriesList.push(experimental);
        this.categoriesList.push(deprecated);
        this.categoriesList.push(history);
        this.dummyStep = new dummy_step_1.DummyStep(flow, null);
        this.dataGridStep = new data_grid_step_1.DataGridStep(input, null);
        this.csvInputStep = new csv_input_step_1.CsvInputStep(input, null);
        this.stepsList.push(this.csvInputStep);
        this.stepsList.push(this.dataGridStep);
        this.stepsList.push(this.dummyStep);
        this.reset();
    }
    StepPanelComponent.prototype.reset = function () {
        this.steps = [];
        for (var _i = 0, _a = this.categoriesList; _i < _a.length; _i++) {
            var category = _a[_i];
            this.categories.push(category);
        }
    };
    StepPanelComponent.prototype.selectCategory = function (category) {
        this.showSteps = true;
        this.showCategories = false;
        this.steps = category.steps;
        this.selectedCategory = category;
    };
    StepPanelComponent.prototype.selectStep = function (step) {
        this.onSelect.emit(step);
    };
    StepPanelComponent.prototype.search = function (event) {
        var param = event.target.value;
        if (param == "") {
            this.reset();
        }
        this.categories = [];
        for (var _i = 0, _a = this.categoriesList; _i < _a.length; _i++) {
            var category = _a[_i];
            if (category.name.toLowerCase().indexOf(param.toLowerCase()) != -1) {
                this.categories.push(category);
            }
        }
        this.steps = [];
        for (var _b = 0, _c = this.stepsList; _b < _c.length; _b++) {
            var step = _c[_b];
            if (step.label.toLowerCase().indexOf(param.toLowerCase()) != -1) {
                this.steps.push(step);
                if (this.categories.indexOf(step.category) == -1) {
                    this.categories.push(step.category);
                }
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