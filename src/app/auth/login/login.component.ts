import { Component, NgZone, OnInit } from '@angular/core';
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
		email: [localStorage.getItem('email') || 'test5@mail.com', [Validators.required, Validators.email]],
		password: ['123456', [Validators.required]],
		remenber: [false]
	});

	constructor(private router: Router,
		private fb: FormBuilder,
		private usuarioService: UsuarioService,
		private ngZone: NgZone
	) { }
	ngOnInit() {
		this.renderButton();
	}


	login() {
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
				this.router.navigateByUrl('/');
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

	async startApp () {
		await this.usuarioService.googleInit();

		this.auth2 = this.usuarioService.auth2;

		this.attachSignin(document.getElementById('my-signin2'));
	}

	attachSignin(element) {

		this.auth2.attachClickHandler(element, {},
			(googleUser) => {
				const id_token = googleUser.getAuthResponse().id_token;
				this.usuarioService.loginGoogle(id_token).subscribe(
					resp => {
						this.ngZone.run( ()=>{
							//TODO: mover al dashboard
							this.router.navigateByUrl('/');
						});
					}
				);

			}, (error) => {
				alert(JSON.stringify(error, undefined, 2));
			});
	}
}
