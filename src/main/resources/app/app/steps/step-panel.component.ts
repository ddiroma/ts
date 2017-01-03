import { Component, EventEmitter, Output } from '@angular/core'
import { DataGridStep } from './data-grid/data-grid.step';
import { DummyStep } from './dummy/dummy.step';
import { CsvInputStep } from './csv-input/csv-input.step';
import { Step } from './step/step';

@Component({
  moduleId: module.id,
  selector: 'step-panel',
  templateUrl: 'step-panel.component.html'
})
export class StepPanelComponent {

  steps: Array<Step> = [];
  @Output() onSelect = new EventEmitter<Step>();

  dummyStep: DummyStep = new DummyStep(null);
  dataGridStep: DataGridStep = new DataGridStep(null);
  csvInputStep: CsvInputStep = new CsvInputStep(null);

  constructor() {
    this.steps.push( this.csvInputStep );
    this.steps.push( this.dataGridStep );
    this.steps.push( this.dummyStep );
  }

  select(step: Step) {
    this.onSelect.emit(step);
  }


}
