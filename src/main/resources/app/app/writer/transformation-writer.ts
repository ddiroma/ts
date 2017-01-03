import { XmlWriter } from './xml-writer';
import { DefaultWriter, DefaultWriter2 } from './default-writer';
import { TransformationModel, Info, Hop, Order } from '../transformation/transformation.model';
import { Log } from '../transformation/log/log';
import { LogTable } from '../transformation/log/log-table';
import { Field } from '../transformation/log/field';
import { XmlExecutor } from './xml-executor';

export class LogTableWriter extends DefaultWriter {

  getObject() {
    return LogTable;
  }

  getTagName(object: any) {
    return this.convertTag(object.constructor.name, "-");
  }

  getIncludeTags(tag: String) {
    return false;
  }
}

export class OrderWriter extends DefaultWriter {

  getObject() {
    return Order;
  }

  getIncludeTags(tag) {
    return false;
  }
}

export class TransformationWriter extends DefaultWriter {

  constructor(executor: XmlExecutor) {
    super(executor);
    executor.register(new LogTableWriter(executor));
    executor.register(new OrderWriter(executor));
  }

  getTagName() {
    return "transformation";
  }

  getObject() {
    return TransformationModel;
  }

  getIncludeTags(tag: String) {
    return false;
  }

}
