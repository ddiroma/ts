"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var LoginComponent = (function () {
    function LoginComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    LoginComponent.prototype.onSubmit = function () {
        this.router.navigate(['/choose']);
    };
    __decorate([
        core_1.ViewChild('username'), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginComponent.prototype, "input", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: '/templates/login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.Renderer])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map