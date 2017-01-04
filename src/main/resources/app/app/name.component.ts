import {Component, ViewChild, ElementRef, Renderer, AfterViewInit} from '@angular/core'
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: '/templates/name.component.html'
})
export class NameComponent implements AfterViewInit {
    @ViewChild('name') input: ElementRef;

    constructor(private router: Router, private renderer: Renderer) {}

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }

    onSubmit() {
        this.router.navigate(['/canvas']);
    }
}
