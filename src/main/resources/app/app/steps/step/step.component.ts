import { Component, Input } from '@angular/core';
import { Step } from './step'
import { Transformation } from '../../transformation/transformation';

export class StepComponent {
  @Input() transformation: Transformation;
  @Input() step: Step;

  cancel() {
    this.transformation.editing = false;
  }

  add() {
    this.transformation.addStep(this.step);
    this.transformation.editing = false;
  }
}
