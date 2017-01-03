import { Component, Input } from '@angular/core';
import { StepModel } from '../step/step.model';
import { CsvInputStep } from './csv-input.step';
import { CsvInputModel, Field } from './csv-input.model';
import { StepComponent } from '../step/step.component';
import { Transformation } from '../../transformation/transformation';

@Component({
  moduleId: module.id,
  selector: 'csv-input',
  templateUrl: 'csv-input.component.html'
})
export class CsvInputComponent extends StepComponent {

  encodings: Array<String> = ['UTF-8', 'UTF-16'];

  constructor() {
    super();
  }

  addField() {
    let model: CsvInputModel = this.step.model as CsvInputModel;
    model.fields.push(new Field());
  }

}
