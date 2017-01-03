import { StepModel } from "../step/step.model";

export class DummyModel extends StepModel {

  constructor() {
    super();
    this.name = "Dummy Step (do nothing)";
    this.type = "Dummy";
  }
}
