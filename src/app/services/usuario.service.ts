import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';



@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	constructor( private http: HttpClient ) { }

	crearUsuario( formData: RegisterForm ){

		return this.http.post(`${ environment.baseUrl }/usuarios/created-user`, formData)
					.pipe(
						tap( (resp: any) => {
							// console.log(resp)
							localStorage.setItem( 'token', resp.token );
						})
					);

	}

	login( formData: LoginForm ){

		return this.http.post(`${ environment.baseUrl }/login`, formData)
					.pipe(
						tap( (resp: any) => {
							// console.log(resp)
							localStorage.setItem( 'token', resp.token );
						})
					);

	}

	loginGoogle(token){

		return this.http.post(`${ environment.baseUrl }/login/google`, {token})
					.pipe(
						tap( (resp: any) => {
							// console.log(resp)
							localStorage.setItem( 'token', resp.token );
						})
					);

	}
}
