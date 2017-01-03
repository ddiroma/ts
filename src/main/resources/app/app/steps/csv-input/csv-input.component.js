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
var csv_input_model_1 = require('./csv-input.model');
var step_component_1 = require('../step/step.component');
var CsvInputComponent = (function (_super) {
    __extends(CsvInputComponent, _super);
    function CsvInputComponent() {
        _super.call(this);
        this.encodings = ['UTF-8', 'UTF-16'];
    }
    CsvInputComponent.prototype.addField = function () {
        var model = this.step.model;
        model.fields.push(new csv_input_model_1.Field());
    };
    CsvInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'csv-input',
            templateUrl: 'csv-input.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CsvInputComponent);
    return CsvInputComponent;
}(step_component_1.StepComponent));
exports.CsvInputComponent = CsvInputComponent;
//# sourceMappingURL=csv-input.component.js.map