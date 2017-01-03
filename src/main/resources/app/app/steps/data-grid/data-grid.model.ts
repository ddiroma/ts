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
  setEmptyString: Boolean = false;
}

export class Item {
  value: String;

  constructor(value: String) {
    this.value = value;
  }
}

export class Line {
  items: Array<Item> = [];
}

export class Data {
  lines: Array<Line> = [];
}

export class DataGridModel extends StepModel {

  fields: Array<Field> = [];
  data: Data = new Data();

  constructor() {
    super();
    this.name = "Data Grid";
    this.type = "DataGrid";
  }

}
