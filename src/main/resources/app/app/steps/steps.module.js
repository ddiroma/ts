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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var csv_input_component_1 = require('./csv-input/csv-input.component');
var dummy_component_1 = require('./dummy/dummy.component');
var data_grid_component_1 = require('./data-grid/data-grid.component');
var step_dialog_component_1 = require('./step-dialog.component');
var step_panel_component_1 = require('./step-panel.component');
var StepsModule = (function () {
    function StepsModule() {
    }
    StepsModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [csv_input_component_1.CsvInputComponent, dummy_component_1.DummyComponent, data_grid_component_1.DataGridComponent, step_dialog_component_1.StepDialogComponent, step_panel_component_1.StepPanelComponent],
            exports: [csv_input_component_1.CsvInputComponent, dummy_component_1.DummyComponent, data_grid_component_1.DataGridComponent, step_dialog_component_1.StepDialogComponent, step_panel_component_1.StepPanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], StepsModule);
    return StepsModule;
}());
exports.StepsModule = StepsModule;
//# sourceMappingURL=steps.module.js.map