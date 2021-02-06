import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../components/components.module';

// componetes
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class MainModule { }
