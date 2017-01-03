import { Step } from '../step/step';
import { DummyModel } from './dummy.model';

export class DummyStep extends Step {
  icon: String = "/app/steps/dummy/assets/DUM.svg";
  label: String = "Dummy Step";
  color: String = "#337AB7";

  constructor(dummyModel: DummyModel) {
    super(dummyModel)
  }

  get(): DummyStep {
    return new DummyStep(new DummyModel());
  }
}
