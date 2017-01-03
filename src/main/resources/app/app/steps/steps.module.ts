import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CsvInputComponent } from './csv-input/csv-input.component';
import { DummyComponent } from './dummy/dummy.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { StepDialogComponent } from './step-dialog.component';
import { StepPanelComponent } from './step-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ CsvInputComponent, DummyComponent, DataGridComponent, StepDialogComponent, StepPanelComponent ],
  exports: [ CsvInputComponent, DummyComponent, DataGridComponent, StepDialogComponent, StepPanelComponent ]
})
export class StepsModule { }
