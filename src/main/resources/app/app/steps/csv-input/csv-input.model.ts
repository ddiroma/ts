import { StepModel } from "../step/step.model";

export class Field {
  name: String;
  type: String;
  format: String;
  currency: String;
  decimal: String;
  group: String;
  length: Number = -1;
  precision: Number = -1;
  trimType: String = "none";
}

export class CsvInputModel extends StepModel {

  filename: String;
  filenameField: String;
  rownumField: String;
  includeFilename: Boolean = false;
  separator: String = ",";
  enclosure: String = "\"";
  header: Boolean = true;
  bufferSize: Number = 50000;
  lazyConversion: Boolean = true;
  addFilenameResult: Boolean = false;
  parallel: Boolean = false;
  newlinePossible: Boolean = false;
  encoding: String;
  fields: Array<Field> = [];
  clusterSchema: String;

  constructor() {
    super();
    this.distribute = true;
    this.name = "CSV file input";
    this.type = "CsvInput";
  }

}
