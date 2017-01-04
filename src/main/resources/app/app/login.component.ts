import {Component, AfterViewInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '/templates/login.component.html'
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('username') input: ElementRef;

    constructor(private router: Router, private renderer: Renderer) {}

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }

    onSubmit() {
        this.router.navigate(['/choose']);
    }

}
