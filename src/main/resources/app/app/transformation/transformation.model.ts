import { StepModel } from '../steps/step/step.model';
import { Log } from './log/log';

export class MaxDate {
  connection: String;
  table: String;
  field: String;
  offset: Number;
  maxdiff: Number;
}

export class Parameter {

}

export class Info {
  name: String;
  description: String;
  extendedDescription: String;
  transVersion: String;
  transType: String = "Normal";
  transStatus: Number = 0;
  directory: String;
  parameters: Array<Parameter>;
  log: Log = new Log();
  maxdate: MaxDate;
  sizeRowset: Number = 10000;
  sleepTimeEmpty: Number = 50;
  sleepTimeFull: Number = 50;
  uniqueConnections: boolean = false;
  feedbackShown: boolean = true;
  feedbackSize: Number = 50000;
  usingThreadPriorities: boolean = true;
  sharedObjectsFile: String;
  captureStepPerformance: boolean = false;
  stepPerformanceCapturingDelay: Number = 1000;
  stepPerformanceCapturingSizeLimit: Number = 100;
  dependencies = []
  partitionschemas = []
  slaveservers = []
  clusterschemas = []
  createdUser: String = "-"
  createdDate: String = "2016&#x2f;11&#x2f;04 10&#x3a;56&#x3a;25.973"
  modifiedUser: String = "admin"
  modifiedDate: String = "2016&#x2f;11&#x2f;14 13&#x3a;20&#x3a;31.341"
  keyForSessionKey: String = ""
  isKeyPrivate: Boolean = false;
}

export class Hop {
  from: String;
  to: String;
  enabled: boolean = true;
}

export class Order {
  hops: Array<Hop> = [];
}

export class TransformationModel {
  info: Info = new Info();
  notePads = [];
  steps: Array<StepModel> = [];
  order: Order = new Order();
  stepErrorHandling = [];
  slaveStepCopyPartitionDistribution = [];
  slaveTransformation: boolean = false;
}
