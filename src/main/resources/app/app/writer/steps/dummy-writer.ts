import { StepWriter } from './step-writer'
import { DummyStep } from '../../steps/dummy/dummy.step';

export class DummyWriter extends StepWriter {

  write(dummyStep: DummyStep) {
    return super.write(dummyStep);
  }

}
