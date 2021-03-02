import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

// modulos externos
import { ChartsModule } from 'ng2-charts';

// componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    MatTableModule
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
