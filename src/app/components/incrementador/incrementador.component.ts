import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
	selector: 'app-incrementador',
	templateUrl: './incrementador.component.html',
	styles: [
	]
})
export class IncrementadorComponent implements OnInit {

	ngOnInit() {
		this.btnClass = `btn ${this.btnClass}`;
	}

	/** si tenemos una variabe implementada con el mismo nombre
	 * Podemos renombrar la variable asi
	 *  @Input('valor') progreso: number = 50;
	 */
	@Input() progreso: number = 50;
	@Input() btnClass: string = 'btn-primary';
	/** si tenemos una variabe implementada con el mismo nombre
	 * Podemos renombrar la variable asi
	 *  @Output('valor')valorSalida: EventEmitter<number> = new EventEmitter();
	 */
	@Output() valorSalida: EventEmitter<number> = new EventEmitter();

	cambiarValor(valor: number) {
		if (this.progreso >= 100 && valor >= 0) {
			this.valorSalida.emit(100);
			return this.progreso = 100;
		}

		if (this.progreso <= 0 && valor < 0) {
			this.valorSalida.emit(0);
			return this.progreso = 0;
		}
		this.valorSalida.emit( this.progreso );
		this.progreso = this.progreso + valor;
	}
}
