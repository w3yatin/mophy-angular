import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-slides-only',
  templateUrl: './carousel-slides-only.component.html',
  styleUrls: ['./carousel-slides-only.component.css']
})
export class CarouselSlidesOnlyComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = ['assets/images/big/img3.jpg', 'assets/images/big/img4.jpg', 'assets/images/big/img5.jpg'];

}
