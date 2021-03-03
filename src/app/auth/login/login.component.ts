import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	public formSubmitted = false;

    public loginForm = this.fb.group({
        email: [ localStorage.getItem('email') ||'', [ Validators.required, Validators.email ] ],
        password: [ '123456', [ Validators.required ] ],
		remenber: [ false ]
    });

	constructor( private router: Router,
				private fb: FormBuilder,
				private usuarioService: UsuarioService
		) { }


	login(){
		//	this.router.navigateByUrl('/');
		// console.log( this.loginForm.value );
		this.usuarioService.login( this.loginForm.value )
			.subscribe( (resp: any) => {
				// console.log(resp);
				if( resp.ok == true ){
					if ( this.loginForm.get('remenber').value ) {
						localStorage.setItem('email', this.loginForm.get('email').value );
					} else {
						localStorage.removeItem('email');
					}
				}
			}, (err) => {
				Swal.fire( 'Error', err.error.msg, 'error' );
			});
	}
}
