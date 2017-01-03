import { XmlExecutor } from './xml-executor';
import { Writer } from './writer';

export class XmlWriter extends Writer {

  executor: XmlExecutor;

  constructor(executor: XmlExecutor) {
    super();
    this.executor = executor;
  }

  element(tag: String, value: any) {
    if (value.toString() == "true" || value.toString() == "false") {
      value = (value.toString() == "true" ? "Y" : "N");
    }
    tag = this.convertTag(tag, "_");
    return this.openTag(tag) + value.toString() + this.closeTag(tag);
  }

  openTag(tag: String) {
    return "<" + tag + ">";
  }

  closeTag(tag: String) {
    return "</" + tag + ">\n";
  }

  convertTag(tag: String, delimiter: String) {
    tag = tag.substr(0, 1).toLowerCase() + tag.substr(1, tag.length);
    var re = /([A-Z]{1})/g;
    tag = tag.replace(re, delimiter + "$1").toLowerCase();
    return tag;
  }

  getOutput(object: any) {
    return this.executor.getOutput(object);
  }
}
