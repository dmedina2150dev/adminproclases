import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	constructor( private http: HttpClient ) { }

	crearUsuario( formData: RegisterForm ){

		return this.http.post(`${ environment.baseUrl }/usuarios/created-user`, formData);

	}
}
