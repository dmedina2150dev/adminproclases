import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-usuarios',
	templateUrl: './usuarios.component.html',
	styles: [
	]
})
export class UsuariosComponent implements OnInit {

	public totalUsuarios: number = 0;
	public usuarios: Usuario[] = [];
	public usuariosTemp: Usuario[] = [];
	public paginaActual: number = 0;
	public cargando: boolean = true;

	constructor(
		private _usuarioServices: UsuarioService,
		private _busquedasServices: BusquedasService
	) { }

	ngOnInit(): void {
		this.cargarUsuarios();
	}

	cargarUsuarios(){
		this.cargando = true;
		this._usuarioServices.cargarUsuarios(this.paginaActual)
			.subscribe( ({ total, usuarios}) =>{
				this.totalUsuarios = total;
				this.usuarios = usuarios;
				this.usuariosTemp = usuarios;
				this.cargando = false;
			});
	}

	cambiarPagina(valor: number){
		this.paginaActual += valor;

		if (this.paginaActual < 0) {
			this.paginaActual = 0;
		}else if(this.paginaActual >= this.totalUsuarios){
			this.paginaActual -= valor;
		}

		this.cargarUsuarios();
	}

	buscar(termino: string){
		console.log(termino);
		if(termino.length === 0){
			return this.usuarios = this.usuariosTemp;
		}
		this._busquedasServices.buscar( 'usuarios', termino)
			.subscribe( resultado => this.usuarios = resultado )
	}

}
