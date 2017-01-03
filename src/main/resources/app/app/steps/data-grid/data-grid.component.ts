import { Component, Input } from '@angular/core';
import { StepModel } from '../step/step.model';
import { DataGridStep } from './data-grid.step';
import { DataGridModel, Field, Line, Item } from './data-grid.model';
import { StepComponent } from '../step/step.component';
import { Transformation } from '../../transformation/transformation';

@Component({
  moduleId: module.id,
  selector: 'data-grid',
  templateUrl: 'data-grid.component.html'
})
export class DataGridComponent extends StepComponent {

  constructor() {
    super();
  }

  addField() {
    let model: DataGridModel = this.step.model as DataGridModel;
    model.fields.push(new Field());

    let lines = model.data.lines;
    console.log(lines);
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].items.length < model.fields.length) {
        lines[i].items.push(new Item(""));
      }
    }
  }

  addData() {
    let model: DataGridModel = this.step.model as DataGridModel;
    let line = new Line();
    for (var i = 0; i < model.fields.length; i++) {
      line.items.push(new Item(""));
    }
    model.data.lines.push(line);
  }
}
