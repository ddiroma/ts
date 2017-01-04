import { Step } from '../step/step';
import { DataGridModel } from './data-grid.model';
import {Category} from "../category.model";

export class DataGridStep extends Step {
  icon: String = "/app/steps/data-grid/assets/GNR.svg";
  label: String = "Data Grid";
  color: String = "#337AB7";

  constructor(category: Category, dataGridModel: DataGridModel) {
    super(category, dataGridModel);
  }

  get(): DataGridStep {
    return new DataGridStep(this.category, new DataGridModel());
  }
}
