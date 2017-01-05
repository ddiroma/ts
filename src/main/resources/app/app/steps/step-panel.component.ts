import { Component, EventEmitter, Output } from '@angular/core'
import { DataGridStep } from './data-grid/data-grid.step';
import { DummyStep } from './dummy/dummy.step';
import { CsvInputStep } from './csv-input/csv-input.step';
import { Step } from './step/step';
import {Category} from "./category.model";

@Component({
  moduleId: module.id,
  selector: 'step-panel',
  templateUrl: 'step-panel.component.html'
})
export class StepPanelComponent {

  @Output() onSelect = new EventEmitter<Step>();

  categoriesList: Array<Category> = [];
  stepsList: Array<Step> = [];
  steps: Array<Step> = [];
  categories: Array<Category> = [];
  showSteps: Boolean = false;
  showCategories: Boolean = true;

  selectedCategory: Category;

  dummyStep: DummyStep;
  dataGridStep: DataGridStep;
  csvInputStep: CsvInputStep;

  constructor() {
    let input: Category = new Category("Input");
    let output: Category = new Category("Output");
    let transform: Category = new Category("Transform");
    let utility: Category = new Category("Utility");
    let flow: Category = new Category("Flow");
    let scripting: Category = new Category("Scripting");
    let pentahoServer: Category = new Category("Server");
    let lookup: Category = new Category("Lookup");
    let joins: Category = new Category("Joins");
    let dataWarehouse: Category = new Category("Data");
    let validation: Category = new Category("Validation");
    let statistics: Category = new Category("Statistics");
    let dataMining: Category = new Category("Data Mining");
    let bigData: Category = new Category("Big Data");
    let agile: Category = new Category("Agile");
    let cryptography: Category = new Category("Cryptography");
    let palo: Category = new Category("Palo");
    let openErp: Category = new Category("Open ERP");
    let job: Category = new Category("Job");
    let mapping: Category = new Category("Mapping");
    let bulkLoading: Category = new Category("Bulk Loading");
    let inline: Category = new Category("Inline");
    let experimental: Category = new Category("Experimental");
    let deprecated: Category = new Category("Deprecated");
    let history: Category = new Category("History");

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

    this.dummyStep = new DummyStep(flow, null);
    this.dataGridStep = new DataGridStep(input, null);
    this.csvInputStep = new CsvInputStep(input, null);

    this.stepsList.push( this.csvInputStep );
    this.stepsList.push( this.dataGridStep );
    this.stepsList.push( this.dummyStep );

    this.reset();
  }

  reset() {
    this.steps = [];
    for (let category of this.categoriesList) {
      this.categories.push( category );
    }
  }

  selectCategory(category: Category) {
    this.showSteps = true;
    this.showCategories = false;
    this.steps = category.steps;
    this.selectedCategory = category;
  }

  selectStep(step: Step) {
    this.onSelect.emit(step);
  }

  search(event: any) {
    let param: String = event.target.value;
    if (param == "") {
      this.reset();
    }
    this.categories = [];
    for (let category of this.categoriesList) {
      if (category.name.toLowerCase().indexOf(param.toLowerCase()) != -1) {
        this.categories.push(category);
      }
    }
    this.steps = [];
    for (let step of this.stepsList) {
      if (step.label.toLowerCase().indexOf(param.toLowerCase()) != -1) {
        this.steps.push(step);
        if (this.categories.indexOf(step.category) == -1) {
          this.categories.push(step.category);
        }
      }
    }
  }


}
