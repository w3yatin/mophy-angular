import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.css']
})
export class QuickTransferComponent {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    center: true,
    rtl: true,
    dots: false,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      700: {
        items: 5
      },
      991: {
        items: 7
      },

      1200: {
        items: 8
      },
      1600: {
        items: 9
      }
    },
  }

  carousel_item = [
    {
      user_id: '@davidxc',
      img: 'assets/images/avatar/1.jpg',
      name: 'David',
    },
    {
      user_id: '@cindyss',
      img: 'assets/images/avatar/2.jpg',
      name: 'Cindy',
    },
    {
      user_id: '@sam224',
      img: 'assets/images/avatar/3.jpg',
      name: 'Samuel',
    },
    {
      user_id: '@oliv125',
      img: 'assets/images/avatar/4.jpg',
      name: 'Olivia',
    },
    {
      user_id: '@davidxc',
      img: 'assets/images/avatar/1.jpg',
      name: 'David',
    },
    {
      user_id: '@sam224',
      img: 'assets/images/avatar/3.jpg',
      name: 'Samuel',
    },
    {
      user_id: '@cindyss',
      img: 'assets/images/avatar/2.jpg',
      name: 'Cindy',
    },
    {
      user_id: '@martha12',
      img: 'assets/images/avatar/5.jpg',
      name: 'Martha',
    }
  ]
}
