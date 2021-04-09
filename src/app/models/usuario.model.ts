import { environment } from "src/environments/environment"

const base_url = environment.baseUrl;

export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: string,
        public role?: string,
        public uid?: string,
    ){

    }

    /* imprimirUsuario(){
        console.group("Metodo imprimir usuario");
        console.log(this.nombre);
        console.groupEnd();
    }*/

    get imagenUrl(){
        if(!this.img){
            return `${ base_url }/uploads/usuarios/no-image`;
        }else if ( this.img.includes('https') ) {
            // primero comprobar si viene de google
            return this.img;
        }else if ( this.img ) {
            // comporbar si existe
            return `${ base_url }/uploads/usuarios/${ this.img }`;
        }else{
            return `${ base_url }/uploads/usuarios/no-image`;
        }
    }

    get nombreUsuario(){
        return this.nombre;
    }

    get emailUsuario(){
        return this.email;
    }
}