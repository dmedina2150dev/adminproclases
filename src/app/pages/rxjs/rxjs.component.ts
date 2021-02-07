import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styles: [
	]
})
export class RxjsComponent implements OnDestroy {

	public intevalSubs: Subscription;

	constructor() {

		/*this.retornaObservable().pipe(
			retry(2)
		).subscribe(
			valor => console.log('Subs:', valor),
			error => console.error('Error: ', error),
			() => console.info('Obs terminado')
		);*/
		this.intevalSubs = 	this.retornaIntervalo().subscribe( console.log )
	}

	ngOnDestroy(): void {
		this.intevalSubs.unsubscribe();
	}


	retornaIntervalo(): Observable<number>{

		return interval(500)
			.pipe(
				//take(10),
				map( valor => valor + 1),
				filter(valor =>  ( valor % 2 === 0 ) ? true: false ),
			);

	}

	retornaObservable(): Observable<number>{
		let i = -1;

		return new Observable<number>( observer => {

			// un intevalo solo no se puede cancelar pero metiendolo en una variable si
			const intervalo = setInterval( () => {

				i++;
				observer.next(i);

				if (i === 5) {
					clearInterval( intervalo );
					observer.complete();
				}

				if ( i === 2) {
					observer.error("i llego al valor de dos")
				}

			}, 1000);
		});
	}
}
