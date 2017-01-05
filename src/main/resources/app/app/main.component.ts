import {Component, ViewChild} from '@angular/core'
import { Transformation } from './transformation/transformation';
import { Step } from './steps/step/step';
import { XmlExecutor } from './writer/xml-executor';
import { TransformationService, Result } from './transformation/transformation.service';
import {DataService} from "./data.service";
import {CanvasComponent} from "./canvas.component";

@Component({
    moduleId: module.id,
    templateUrl: '/templates/main.component.html',
    providers: [TransformationService, DataService]
})
export class MainComponent {

    @ViewChild(CanvasComponent) private canvasComponent: CanvasComponent;

    result: Result = new Result();
    currentStep: Step = null;
    transformation: Transformation = new Transformation();

    constructor(private transformationService: TransformationService, private dataService: DataService) {
        this.transformation.model.info.name = "My Transformation";
        this.transformation.path = '/home/bmorrise/Documents/test.ktr';
    }

    onSelect(step: Step) {
        this.transformation.addStep(step.get());
        this.canvasComponent.update();
    }

    onEdit(step: Step) {
        this.transformation.editing = true;
        this.currentStep = step;
    }

    onUpdate(step: Step) {
        this.canvasComponent.update();
    }

    generate() {
        let xmlExecutor: XmlExecutor = new XmlExecutor();
        this.transformation.populateModel();
        console.log(this.transformation.steps);
        let text: String = xmlExecutor.execute(this.transformation.model);
        console.log(text);
        // this.transformationService.save(this.transformation.path, text).then(result => console.log(result));
        // this.transformation.dirty = false;
    }

    run() {
        let stepName: String = this.transformation.steps[this.transformation.steps.length-1].model.name;
        this.transformationService.run(this.transformation.path, stepName).then(result => this.result = result);
    }

}
