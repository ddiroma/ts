import { XmlWriter } from './xml-writer';
import { TransformationWriter } from './transformation-writer';
import { DefaultWriter } from './default-writer';
import { StepWriter } from './steps/step-writer';
import { DataGridWriter } from './steps/data-grid-writer';
import { CsvInputWriter } from './steps/csv-input-writer';

export class XmlExecutor {

  writers = [];
  t: TransformationWriter;
  xmlWriter: XmlWriter;

  constructor() {
    this.xmlWriter = new XmlWriter(this);
    this.t = new TransformationWriter(this);

    //Register step writers here
    this.register(this.t);
    this.register(new DataGridWriter(this));
    this.register(new CsvInputWriter(this));

    let stepWriter = new StepWriter(this);
    stepWriter.register();
  }

  execute(object: any) {
    return this.t.write(object);
  }

  register(writer: XmlWriter) {
    this.writers.push(writer);
  }

  getOutput(object: any) {
    var output = "";
    for (let key of Object.keys(object)) {
      if (Array.isArray(object[key])) {
        let writer = this.getWriter(object);
        let includeTags = true;
        if (writer != null) {
          includeTags = writer.getIncludeTags(key);
        }
        output += (includeTags ? this.xmlWriter.openTag(key) : "");
        output += this.getOutput(object[key]);
        output += (includeTags ? this.xmlWriter.closeTag(key) : "");
      } else {
        let writer = this.getWriter(object[key]);
        if (writer != null) {
          output += writer.write(object[key]);
        } else {
          output += this.xmlWriter.element(key, object[key]);
        }
      }
    }
    return output;
  }

  getWriter(object: any) {
    for (let writer of this.writers) {
      if (object instanceof writer.getObject()) {
        return writer;
      }
    }
    if( (typeof object === "object") && (object !== null) ) {
      return new DefaultWriter(this);
    }
    return null
  }
}
