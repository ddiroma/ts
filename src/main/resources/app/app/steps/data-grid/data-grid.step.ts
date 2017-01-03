import { Step } from '../step/step';
import { DataGridModel } from './data-grid.model';

export class DataGridStep extends Step {
  icon: String = "/app/steps/data-grid/assets/GNR.svg";
  label: String = "Data Grid";
  color: String = "#337AB7";

  constructor(dataGridModel: DataGridModel) {
    super(dataGridModel);
  }

  get(): DataGridStep {
    return new DataGridStep(new DataGridModel());
  }
}
