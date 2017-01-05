import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Step } from './step'
import { Transformation } from '../../transformation/transformation';

export class StepComponent {
  @Input() transformation: Transformation;
  @Input() step: Step;

  @Output() onUpdate = new EventEmitter<Step>();

  cancel() {
    this.transformation.editing = false;
  }

  ok() {
    this.transformation.editing = false;
    this.onUpdate.emit(this.step);
  }
}
