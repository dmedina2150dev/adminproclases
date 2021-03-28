import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


import { environment } from '../../environments/environment';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.model';


declare const gapi: any;
@Injectable({
	providedIn: 'root'
})
export class UsuarioService {


	public auth2: any;
	public usuario: Usuario

	constructor( private http: HttpClient ) {
		this.googleInit();
	}

	validarToken(): Observable<boolean>{
		const token = localStorage.getItem('token') || '';

		return this.http.get(`${environment.baseUrl}/login/renew`, {
			headers: {
				'x-token': token
			}
		}).pipe(
			map( (resp: any) =>{
				//console.log(resp);
				// desestructurar la data que llega
				const {
					email,
					google,
					img = '',
					nombre,
					role,
					uid
				} = resp.usuario;

				this.usuario = new Usuario(nombre, email, '', img, role, uid);
				// un metodo del modelo this.usuario.imprimirUsuario();
				localStorage.setItem( 'token', resp.token );
				return true;
			}),
			catchError( error => {
				console.log(error);
				return of(false);
			})
		);
	}

	googleInit(){
		return new Promise( resolve =>{

			gapi.load('auth2', () => {
				// Retrieve the singleton for the GoogleAuth library and set up the client.
				this.auth2 = gapi.auth2.init({
					client_id: '932354120676-hme4tipgnr590d3js2b09osged9hcoqv.apps.googleusercontent.com',
					cookiepolicy: 'single_host_origin',
				});

				resolve(this.auth2);
			});
		})
	}

	logOut(){
		this.auth2.signOut().then(function () {
			localStorage.removeItem('token');
		});
	}

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
							//console.log(resp)
							localStorage.setItem( 'token', resp.token );
						})
					);

	}

	loginGoogle(token){

		return this.http.post(`${ environment.baseUrl }/login/google`, {token})
					.pipe(
						tap( (resp: any) => {
							console.log(resp)
							localStorage.setItem( 'token', resp.token );
						})
					);

	}
}
