export class Partitioning {
  constructor(public method: String, public schemaName: String) {}
}

export class GUI {
  constructor(public xloc: Number, public yloc: Number, public draw: Boolean) {}
}

export class RemoteSteps {
  constructor(public input: String, public output: String) {}
}

export class StepModel {
  name: String;
  type: String;
  description: String;
  distribute: boolean = false;
  custom_distribution: String;
  copies: number = 1;
  partitioning = new Partitioning("none", "");
  remoteSteps = new RemoteSteps("", "");
  gui = new GUI(0, 0, true);
}
