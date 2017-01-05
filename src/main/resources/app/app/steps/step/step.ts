import { StepModel } from './step.model';
import {Category} from "../category.model";

export class Step {

  category: Category;
  label: String = "";
  model: StepModel;
  x: number = 100;
  y: number = 100;

  constructor(category: Category, model: StepModel) {
    this.category = category;
    this.model = model;
    this.category.steps.push(this);
  }

  get(): Step {
    return new Step(new Category(""), new StepModel());
  }

  setX(x: number) {
    this.x = x;
    this.model.gui.xloc = x;
  }

  setY(y: number) {
    this.y = y;
    this.model.gui.yloc = y;
  }

}
