import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SettingsService {

	// seleccionamos el elemento
	private linkTheme = document.querySelector('#theme');

	constructor() {
		const theme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
		this.linkTheme.setAttribute('href', theme);
	}

	changeTheme(theme: string) {
		const url = `./assets/css/colors/${ theme }.css`;
		this.linkTheme.setAttribute( 'href', url );

		localStorage.setItem('theme', url);

		this.checkCurrentTheme();
	}

	checkCurrentTheme(){
		const themeSelect = document.querySelectorAll('.selector');
		// recorremos todos los elementos
		themeSelect.forEach( elem => {
			//eliminamos la clase
			elem.classList.remove('working');
			// obtenemos el elemento para asignar
			const btnElem = elem.getAttribute('data-theme');
			const btnThemeUrl = `./assets/css/colors/${ btnElem }.css`;
			const currentTheme = this.linkTheme.getAttribute('href');

			if ( btnThemeUrl === currentTheme ) {
				elem.classList.add('working');
			}

		});
	}

}
