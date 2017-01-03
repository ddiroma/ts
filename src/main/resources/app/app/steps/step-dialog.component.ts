import { Component, Input } from '@angular/core';
import { Step } from './step/step';
import { Transformation } from '../transformation/transformation';

@Component({
  moduleId: module.id,
  selector: 'step-dialog',
  templateUrl: 'step-dialog.component.html'
})
export class StepDialogComponent {

  @Input() currentStep: Step;
  @Input() transformation: Transformation;

  isVisible(stepType: String) {
    if (this.currentStep == null || this.transformation.editing == false) {
      return false;
    }
    if (this.currentStep.model.type == stepType) {
       return true;
    }
    return false;
  }
}
