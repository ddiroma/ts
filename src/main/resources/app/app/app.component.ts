import { Component } from '@angular/core'
import { Transformation } from './transformation/transformation';
import { Step } from './steps/step/step';
import { XmlExecutor } from './writer/xml-executor';
import { TransformationService, Result } from './transformation/transformation.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TransformationService]
})
export class AppComponent {

  currentStep: Step = null;
  result: Result = new Result();

  transformation: Transformation = new Transformation();

  constructor(private transformationService: TransformationService) {
    this.transformation.model.info.name = "My Transformation";
    this.transformation.path = '/home/bmorrise/Documents/test.ktr';
  }

  onSelect(step: Step) {
    this.currentStep = step.get();
    this.transformation.editing = true;
  }

  edit(step: Step) {
    this.currentStep = step;
    this.transformation.editing = true;
  }

  delete(step: Step) {
    if (step == this.currentStep) {
      this.transformation.editing = false;
    }
    this.transformation.removeStep(step);
  }

  generate() {
    let xmlExecutor: XmlExecutor = new XmlExecutor();
    this.transformation.populateModel();

    let text: String = xmlExecutor.execute(this.transformation.model);
    this.transformationService.save(this.transformation.path, text).then(result => console.log(result));
    this.transformation.dirty = false;
  }

  run() {
    let stepName: String = this.transformation.steps[this.transformation.steps.length-1].model.name;
    this.transformationService.run(this.transformation.path, stepName).then(result => this.result = result);
  }

}
