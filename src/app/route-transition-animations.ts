import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

// La page entrante reste dans le flux : c'est elle qui donne la hauteur du document.
// La page sortante est en absolute et limitée à la hauteur de l'écran, sinon sa hauteur
// laisse un grand espace blanc sous le footer de la nouvelle page pendant la transition (visible sur Safari).
// Fonction exportée (et non arrow function) : exigé par le compilateur AOT d'Angular 9.
export function slide(enterFrom: string, leaveTo: string) {
	return [
		style({ position: 'relative', overflow: 'hidden' }),
		query(':enter', [
			style({ display: 'block', position: 'relative', left: enterFrom, opacity: 0 })
		]),
		query(':leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				maxHeight: '100vh',
				overflow: 'hidden'
			})
		]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: leaveTo, opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	];
}

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, One => Three, One => Four, One => Five, One => Six, One => Seven, Two => Three, Two => Four, Two => Five, Two => Six, Two => Seven, Three => Four, Three => Five, Three => Six, Three => Seven, Four => Five, Four => Six, Four => Seven, Five => Six, Five => Seven, Six => Seven',
		slide('100%', '-100%')),
	transition('Seven => One, Seven => Two, Seven => Three, Seven => Four, Seven => Five, Seven => Six, Six => Five, Six => Four, Six => Three, Six => Two, Six => One, Five => One, Five => Two, Five => Three, Five => Four, Four => One, Four => Two , Four => Three, Three => One, Three => Two, Two => One',
		slide('-100%', '100%'))
]);
