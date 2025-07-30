import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-owl-carousel',
	templateUrl: './owl-carousel.component.html',
	styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent {
	@Input() carousel_item: any = '';

	customOptions: any = {
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		rtl: true,

		slideSpeed: 3000,
		paginationSpeed: 3000,
		dots: false,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 3
			},
			800: {
				items: 3
			},
			991: {
				items: 5
			},
			1200: {
				items: 6
			}
		}
	}
}
