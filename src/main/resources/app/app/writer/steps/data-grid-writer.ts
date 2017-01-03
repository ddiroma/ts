import { DataGridModel, Field, Data, Item, Line } from '../../steps/data-grid/data-grid.model';
import { XmlWriter } from '../xml-writer';
import { DefaultWriter, DefaultWriter2 } from '../default-writer';
import { StepWriter } from './step-writer';
import { XmlExecutor } from '../xml-executor';

export class ItemWriter extends DefaultWriter {

  write(item: Item) {
    var output = "<item>";
    output += item.value;
    return output += "</item>";
  }

  getObject() {
    return Item;
  }

}

export class DataGridWriter extends StepWriter {

  constructor(executor: XmlExecutor) {
    super(executor);
    executor.register(new DefaultWriter2(executor, Data, false));
    executor.register(new DefaultWriter2(executor, Line, false));
    executor.register(new ItemWriter(executor));
  }

  getObject() {
    return DataGridModel;
  }

  getIncludeTags(tag:String) {
    return true;
  }

}
