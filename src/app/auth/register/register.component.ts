import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    public formSubmitted = false;

    public registerForm = this.fb.group({
        nombre: [ 'Dajan Medina', [ Validators.required, Validators.minLength(3) ] ],
        email: [ 'test20@mail.coim', [ Validators.required, Validators.email ] ],
        password: [ '123456', [ Validators.required ] ],
        password2 : [ '123456', [ Validators.required ] ],
        terminos: [ true, Validators.required ],
    }, { validators: this.passwordsIguales( 'password', 'password2' ) });

    constructor( private fb: FormBuilder,
                private usuarioService: UsuarioService
                ) { }

    createdUser(){
        this.formSubmitted = true;
        console.log(this.registerForm.value);

        if ( this.registerForm.invalid ) {
            return;
        }

        this.usuarioService.crearUsuario( this.registerForm.value )
            .subscribe( resp =>{
                console.log("Usuario Creado");
                console.log(resp);
            }, (err) => {
                console.log(err.error.msg);
                // si sucede el error
                Swal.fire( 'Error', err.error.msg, 'error' );
            } );
    }

    campoNoValido( campo: string): boolean {

        if( this.registerForm.get(campo).invalid  && this.formSubmitted ) {
            return true;
        }else{
            return false;
        }
    }

    aceptaTerminos(){
        return !this.registerForm.get('terminos').value && this.formSubmitted;
    }

    passNoValida(){
        const pass1 = this.registerForm.get('password').value;
        const pass2 = this.registerForm.get('password2').value;

        if ( (pass1 !== pass2) && this.formSubmitted ) {
            return true;
        }else {
            return false;
        }
    }

    passwordsIguales( passName1: string, passName2: string){

        return ( formGroup: FormGroup ) => {

            const pass1Control = formGroup.get(passName1);
            const pass2Control = formGroup.get(passName2);

            if ( pass1Control.value === pass2Control.value ) {
                pass2Control.setErrors(null);
            } else {
                pass2Control.setErrors({ noEsIgual: true });
            }
        }
    }
}
