import { Component } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Pagination, Swiper } from "swiper";
SwiperCore.use([FreeMode, Navigation]);

@Component({
  selector: 'app-card-demo-carousel',
  templateUrl: './card-demo-carousel.component.html',
  styleUrls: ['./card-demo-carousel.component.css']
})
export class CardDemoCarouselComponent {

  constructor() {
    Swiper.use([Navigation, Pagination]);
  }

  ngOnInit(): void {
    setTimeout(function () {
      var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView:'auto',
        spaceBetween: 30,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },

          588: {
            slidesPerView: 1.5,
          },
          715: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2.6,
          },
          1100: {
            slidesPerView: 2.8,
          },
          1150: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 2.8,
          },
          1240: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 3.5
          },
          1600: {
            slidesPerView: 3.3
          },
          1680: {
            slidesPerView: 3.6
          },
          1800: {
            slidesPerView: 4,
          },
          2050: {
            slidesPerView: 4.5,
          },
          2250: {
            slidesPerView: 5,
          },
          2450: {
            slidesPerView: 6,
          }
        }
      });
    }, 300)

  }
}
