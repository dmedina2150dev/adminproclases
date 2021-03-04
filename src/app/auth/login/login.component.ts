import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi: any;

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public formSubmitted = false;
	public auth2: any;

	public loginForm = this.fb.group({
		email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
		password: ['123456', [Validators.required]],
		remenber: [false]
	});

	constructor(private router: Router,
		private fb: FormBuilder,
		private usuarioService: UsuarioService
	) { }
	ngOnInit() {
		this.renderButton();
	}


	login() {
		//	this.router.navigateByUrl('/');
		// console.log( this.loginForm.value );
		this.usuarioService.login(this.loginForm.value)
			.subscribe((resp: any) => {
				// console.log(resp);
				if (resp.ok == true) {
					if (this.loginForm.get('remenber').value) {
						localStorage.setItem('email', this.loginForm.get('email').value);
					} else {
						localStorage.removeItem('email');
					}
				}
			}, (err) => {
				Swal.fire('Error', err.error.msg, 'error');
			});
	}



	renderButton() {
		gapi.signin2.render('my-signin2', {
			'scope': 'profile email',
			'width': 240,
			'height': 50,
			'longtitle': true,
			'theme': 'dark'
		});

		this.startApp();
	}

	startApp () {
		gapi.load('auth2', () => {
			// Retrieve the singleton for the GoogleAuth library and set up the client.
			this.auth2 = gapi.auth2.init({
				client_id: '932354120676-hme4tipgnr590d3js2b09osged9hcoqv.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
				// Request scopes in addition to 'profile' and 'email'
				//scope: 'additional_scope'
			});
			this.attachSignin(document.getElementById('my-signin2'));
		});
	}

	attachSignin(element) {

		this.auth2.attachClickHandler(element, {},
			(googleUser) => {
				const id_token = googleUser.getAuthResponse().id_token;
				this.usuarioService.loginGoogle(id_token).subscribe();

				//TODO: mover al dashboard
			}, (error) => {
				alert(JSON.stringify(error, undefined, 2));
			});
	}
}
