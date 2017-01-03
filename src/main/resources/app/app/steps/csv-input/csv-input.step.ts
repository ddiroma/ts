import { Step } from '../step/step';
import { CsvInputModel } from './csv-input.model';

export class CsvInputStep extends Step {
  icon: String = "/app/steps/csv-input/assets/CSV.svg";
  label: String = "CSV file input";
  color: String = "#337AB7";

  constructor(csvInputModel: CsvInputModel) {
    super(csvInputModel);
  }

  get(): CsvInputStep {
    return new CsvInputStep(new CsvInputModel());
  }
}
