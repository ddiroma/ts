import { StepModel } from './step.model';
import {Category} from "../category.model";

export class Step {

  category: Category;
  label: String = "";
  model: StepModel;

  constructor(category: Category, model: StepModel) {
    this.category = category;
    this.model = model;
  }

  get(): Step {
    return new Step(new Category(""), new StepModel());
  }
}
