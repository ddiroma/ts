export class Field {
  id: String;
  enabled: boolean;
  name: String;

  constructor(id: String, enabled: boolean, name: String) {
    this.id = id;
    this.enabled = enabled;
    this.name = name;
  }
}
