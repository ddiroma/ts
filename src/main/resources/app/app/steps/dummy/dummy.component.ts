import { Component, Input } from '@angular/core';
import { StepModel } from '../step/step.model';
import { DummyStep } from './dummy.step';
import { StepComponent } from '../step/step.component';

@Component({
  moduleId: module.id,
  selector: 'dummy',
  templateUrl: 'dummy.component.html'
})
export class DummyComponent extends StepComponent {

  constructor() {
    super();
  }
  
}
