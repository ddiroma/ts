import { Component } from '@angular/core'
import { Transformation } from './transformation/transformation';
import { Step } from './steps/step/step';
import { XmlExecutor } from './writer/xml-executor';
import { TransformationService, Result } from './transformation/transformation.service';
import {DataService} from "./data.service";

@Component({
  moduleId: module.id,
  selector: 'spoon',
  templateUrl: 'app.component.html'
})
export class AppComponent {}
