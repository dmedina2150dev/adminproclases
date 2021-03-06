import { Component, Input } from '@angular/core';

// librerias externa
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
	selector: 'app-dona',
	templateUrl: './dona.component.html',
	styles: [
	]
})
export class DonaComponent {

	@Input() title: string = 'Sin titulo';
	// Doughnut
	@Input('labels') doughnutChartLabels: Label[] = ['Data 1', 'Data 2', 'Data 3'] ;
	@Input('data') doughnutChartData: MultiDataSet = [
		[350, 450, 100],
	];
	public doughnutChartType: ChartType = 'doughnut';

	// cambio los colores
	public colors: Color[] = [
		{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
	];

}
