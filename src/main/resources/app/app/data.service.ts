import { Injectable } from '@angular/core';
import {Transformation} from "./transformation/transformation";
import {Step} from "./steps/step/step";

@Injectable()
export class DataService {
    currentStep: Step = null;
    transformation: Transformation;
}
