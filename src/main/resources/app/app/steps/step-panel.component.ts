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

  dummyStep: DummyStep;
  dataGridStep: DataGridStep;
  csvInputStep: CsvInputStep;

  constructor() {
    let input: Category = new Category("Input");
    let flow: Category = new Category("Flow");

    this.dummyStep = new DummyStep(flow, null);
    this.dataGridStep = new DataGridStep(input, null);
    this.csvInputStep = new CsvInputStep(input, null);

    this.categoriesList.push(input);
    this.categoriesList.push()

    this.stepsList.push( this.csvInputStep );
    this.stepsList.push( this.dataGridStep );
    this.stepsList.push( this.dummyStep );
    this.reset();
  }

  reset() {
    for (let step of this.stepsList) {
      this.steps.push( step );
    }
  }

  select(step: Step) {
    this.onSelect.emit(step);
  }

  search(event: any) {
    let param: String = event.target.value;
    console.log(param);
    this.steps = [];
    for (let step of this.stepsList) {
      if (step.label.toLowerCase().indexOf(param.toLowerCase()) != -1) {
        this.steps.push(step);
      }
    }
  }


}
