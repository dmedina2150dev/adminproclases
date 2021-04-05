import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
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
	public paginaActul: number = 0;
	constructor(
		private _usuarioServices: UsuarioService
	) { }

	ngOnInit(): void {
		this._usuarioServices.cargarUsuarios(0)
			.subscribe( ({ total, usuarios}) =>{
				this.totalUsuarios = total;
				this.usuarios = usuarios;
			});
	}



}
