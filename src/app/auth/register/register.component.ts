import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        password: [ '', [ Validators.required ] ],
        password2 : [ '', [ Validators.required ] ],
        terminos: [ false, Validators.required ]
    });

    constructor( private fb: FormBuilder ) { }

    createdUser(){
        this.formSubmitted = true;
        console.log(this.registerForm.value);

        if ( this.registerForm.valid ) {
            console.log('Formulario correcto!!');
        }else {
            console.log('Formulario incorrecto....!!');
        }
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
}
