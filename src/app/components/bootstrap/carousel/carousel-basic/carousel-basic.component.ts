import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent {
  images = ['assets/images/big/img1.jpg', 'assets/images/big/img2.jpg', 'assets/images/big/img3.jpg'];
}
