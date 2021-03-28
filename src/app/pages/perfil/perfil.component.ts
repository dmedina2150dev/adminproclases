import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { Usuario } from 'src/app/models/usuario.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.component.html',
	styles: [
	]
})
export class PerfilComponent implements OnInit {

	public perfilForm: FormGroup;
	public usuario: Usuario;
	public imagenSubir: File;
	public imgTemporal: any = null;

	constructor(
		private fb: FormBuilder,
		private _usuarioService: UsuarioService,
		private _fileUploadService: FileUploadService
	) {
		this.usuario = _usuarioService.usuario;
	}

	ngOnInit(): void {

		this.perfilForm = this.fb.group({
			nombre: [this.usuario.nombre, Validators.required],
			email: [this.usuario.email, [Validators.required, Validators.email]],
		});

	}

	actualizaPerfil() {
		console.log(this.perfilForm.value);
		this._usuarioService.actualizarPerfil(this.perfilForm.value)
			.subscribe((resp: any) => {
				this.usuario.nombre = resp.usuario.nombre;
				this.usuario.email = resp.usuario.email;
				//console.log(resp);

				Swal.fire('Guardado', 'Cambios guardados', 'success');
			}, (err)=>{
				Swal.fire('Error', err.error.msg , 'error');
				console.log(err);
			});
	}

	cambiarImagen( file: File ){
		//console.log(file)
		this.imagenSubir = file;
		if (!file) { return this.imgTemporal = null; }

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onloadend = () => {
			this.imgTemporal = reader.result;
			// console.log(reader.result);
		}
	}
	subirArchivo(){

		this._fileUploadService
			.actualiazarFoto(this.imagenSubir, 'usuarios', this.usuario.uid)
			.then( img => {
				this.usuario.img = img;
				Swal.fire('Guardado', 'Imagen actualizada', 'success');
			}, (err)=>{
				Swal.fire('Error', 'No se pudo subir la imagen ' , 'error');
			} );
	}
}
