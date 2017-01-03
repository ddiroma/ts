import { StepModel, Partitioning, GUI, RemoteSteps } from '../../steps/step/step.model';
import { XmlWriter } from '../xml-writer';
import { XmlExecutor } from '../xml-executor';
import { DefaultWriter, DefaultWriter2 } from '../default-writer';

class GuiWriter extends DefaultWriter {
  getObject() {
    return GUI;
  }

  getTagName(object: any) {
    return 'GUI';
  }
}

class RemoteStepsWriter extends DefaultWriter {
  getObject() {
    return RemoteSteps;
  }

  getTagName(object: any) {
    return 'remotesteps';
  }
}

export class StepWriter extends DefaultWriter {

  register() {
    this.executor.register(this);
    this.executor.register(new GuiWriter(this.executor));
    this.executor.register(new RemoteStepsWriter(this.executor));
  }

  getObject() {
    return StepModel;
  }

  getTagName(object: any) {
    return 'step';
  }

}
