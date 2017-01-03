import { StepWriter } from './step-writer'
import { CsvInputStep } from '../../steps/csv-input/csv-input.step';

export class CsvInputWriter extends StepWriter {

  write(csvInputStep: CsvInputStep) {
    return super.write(csvInputStep);
  }

}
