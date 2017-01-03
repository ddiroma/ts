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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Result = (function () {
    function Result() {
    }
    return Result;
}());
exports.Result = Result;
var TransformationService = (function () {
    function TransformationService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9051/cxf/spoon/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TransformationService.prototype.save = function (path, content) {
        return this.http.post(this.baseUrl + 'save', JSON.stringify({ path: path, content: content }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TransformationService.prototype.run = function (path, stepName) {
        console.log("run");
        return this.http.post(this.baseUrl + 'run', JSON.stringify({ path: path, stepName: stepName }), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TransformationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TransformationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransformationService);
    return TransformationService;
}());
exports.TransformationService = TransformationService;
//# sourceMappingURL=transformation.service.js.map