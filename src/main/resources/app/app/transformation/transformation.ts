import { TransformationModel, Hop } from './transformation.model'
import { Step } from '../steps/step/step';

export class Transformation {

  x: number = 100;
  y: number = 100;
  model: TransformationModel  = new TransformationModel();
  path: String;
  steps: Array<Step> = []
  editing: Boolean = false;
  dirty: Boolean = true;

  addStep(step: Step) {
    step.model.gui.xloc = this.x;
    step.model.gui.yloc = this.y;
    this.x = this.x += 150;
    this.steps.push(step);
    this.updateHops();
    this.dirty = true;
  }

  removeStep(step: Step) {
    var index = this.steps.indexOf(step);
    this.steps.splice(index, 1);
    this.updateHops();
    this.dirty = true;
  }

  updateHops() {
    this.model.order.hops = [];
    if (this.steps.length > 1) {
      for (var i = 0; i < this.steps.length-1; i++) {
        let hop: Hop = new Hop();
        hop.from = this.steps[i].model.name;
        hop.to = this.steps[i+1].model.name;
        this.model.order.hops.push(hop);
      }
    }
  }

  populateModel() {
    for (let step of this.steps) {
      this.model.steps.push(step.model);
    }
  }
}
