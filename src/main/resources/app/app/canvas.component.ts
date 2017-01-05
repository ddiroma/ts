import {Input, Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";
import {Transformation} from "./transformation/transformation";
import {Step} from "./steps/step/step";

@Component({
    moduleId: module.id,
    selector: 'step-canvas',
    templateUrl: '/templates/canvas.component.html'
})
export class CanvasComponent implements AfterViewInit {
    @Input("transformation") transformation: Transformation;
    @Input("currentStep") currentStep: Step;
    @Output() onEdit = new EventEmitter<Step>();

    @ViewChild('canvas') canvasRef: ElementRef;
    private canvas: any;
    private ctx: any;

    ngAfterViewInit() {
        this.canvas = this.canvasRef.nativeElement;
        this.ctx = this.canvas.getContext("2d");
    }

    update() {
        const c = this.ctx;
        c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = 1; i < this.transformation.steps.length; i++) {
            let prevStep = this.transformation.steps[i-1];
            let currStep = this.transformation.steps[i];
            c.beginPath();
            c.moveTo(prevStep.x+130, prevStep.y+22);
            c.lineTo(currStep.x, currStep.y+22);
            c.stroke();
            c.beginPath();
            c.moveTo(currStep.x, currStep.y+22);
            c.lineTo(currStep.x-10, currStep.y+17);
            c.lineTo(currStep.x-10, currStep.y+27);
            c.lineTo(currStep.x, currStep.y+22);
            c.fill();
        }
    }

    edit(step: Step) {
        this.currentStep = step;
        this.transformation.editing = true;
        this.onEdit.emit(step);
    }

    delete(step: Step) {
        if (step == this.currentStep) {
            this.transformation.editing = false;
        }
        this.transformation.removeStep(step);
        this.transformation.x-=250;
        this.update();
    }
}