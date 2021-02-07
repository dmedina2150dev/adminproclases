import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promesas',
	templateUrl: './promesas.component.html',
	styles: [
	]
})
export class PromesasComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		this.getUsuarios().then( usuario => {
			console.log( usuario );
		})

		this.getUsuarios();


		/*const promesa = new Promise( ( resolve, reject ) =>{
			if ( false ) {
				resolve("Hola Mundo");
			} else {
				reject("algo salio mal");
			}
		});

		promesa
			.then( () =>{
				console.log("Ey termine")
			})
			.catch( error => console.log("error en la promes", error))
		console.log("Fin del ini")*/
	}

	getUsuarios() {

		return new Promise( resolve => {

			fetch('https://reqres.in/api/users')
				.then( res => res.json())
				.then( body => resolve( body.data ))

		});
	}

}
