"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var data_grid_model_1 = require('./data-grid.model');
var step_component_1 = require('../step/step.component');
var DataGridComponent = (function (_super) {
    __extends(DataGridComponent, _super);
    function DataGridComponent() {
        _super.call(this);
    }
    DataGridComponent.prototype.addField = function () {
        var model = this.step.model;
        model.fields.push(new data_grid_model_1.Field());
        var lines = model.data.lines;
        console.log(lines);
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].items.length < model.fields.length) {
                lines[i].items.push(new data_grid_model_1.Item(""));
            }
        }
    };
    DataGridComponent.prototype.addData = function () {
        var model = this.step.model;
        var line = new data_grid_model_1.Line();
        for (var i = 0; i < model.fields.length; i++) {
            line.items.push(new data_grid_model_1.Item(""));
        }
        model.data.lines.push(line);
    };
    DataGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data-grid',
            templateUrl: 'data-grid.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DataGridComponent);
    return DataGridComponent;
}(step_component_1.StepComponent));
exports.DataGridComponent = DataGridComponent;
//# sourceMappingURL=data-grid.component.js.map