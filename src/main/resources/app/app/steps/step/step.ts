import { StepModel } from './step.model';

export class Step {

  model: StepModel;

  constructor(model: StepModel) {
    this.model = model;
  }

  get(): Step {
    return new Step(new StepModel());
  }
}
