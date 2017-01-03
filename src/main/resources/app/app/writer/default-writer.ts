import { XmlWriter } from './xml-writer';
import { XmlExecutor } from './xml-executor';

export class DefaultWriter extends XmlWriter {
  write(object: any) {
    var output = this.openTag(this.getTagName(object));
    output += this.getOutput(object);
    output += this.closeTag(this.getTagName(object));

    return output;
  }

  getTagName(object:any) {
    return this.convertTag(object.constructor.name, "_");
  }
}

export class DefaultWriter2 extends XmlWriter {

  type;
  includeTags: boolean;

  constructor(executor: XmlExecutor, type, includeTags: boolean) {
    super(executor);
    this.type = type;
    this.includeTags = includeTags;
  }

  write(object: any) {
    var output = this.openTag(this.getTagName(object));
    output += this.getOutput(object);
    output += this.closeTag(this.getTagName(object));

    return output;
  }

  getTagName(object:any) {
    return this.convertTag(object.constructor.name, "_");
  }

  getIncludeTags(tag: String) {
    return this.includeTags;
  }

  getObject() {
    return this.type;
  }
}
