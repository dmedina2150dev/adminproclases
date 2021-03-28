import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class FileUploadService {

	constructor() { }

	async actualiazarFoto(
		archivo: File,
		tipo: 'usuarios'|'medicos'|'hospitales',
		id: string
	){

		try {
			// se construye el url
			const url = `${environment.baseUrl}/uploads/${tipo}/${id}`;

			// se prepara la data
			const formData = new FormData();
			formData.append('imagen', archivo);

			// se hace la peticion
			const resp = await fetch(url, {
				method: 'PUT',
				headers: {
					'x-token': localStorage.getItem('token') || ''
				},
				body: formData
			});

			const data = await resp.json();

			if (data.ok) {
				return data.nameFile;
			}else{
				return false;
			}

		} catch (error) {
			console.log(error);
			return false;
		}
	}

}
