import { Step } from '../step/step';
import { DummyModel } from './dummy.model';
import {Category} from "../category.model";

export class DummyStep extends Step {
  icon: String = "/app/steps/dummy/assets/DUM.svg";
  url: String = "/dummy";
  label: String = "Dummy Step";
  color: String = "#337AB7";

  constructor(category: Category, dummyModel: DummyModel) {
    super(category, dummyModel)
  }

  get(): DummyStep {
    return new DummyStep(this.category, new DummyModel());
  }
}
