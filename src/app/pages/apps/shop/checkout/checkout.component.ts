import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  contantHead = {
    title: 'Checkout',
    title_path: 'Shop'
  }

  selectCountry = [
    {
      name: 'Choose...',
    },
    {
      name: 'United States',
    }
  ];

  selectState = [
    {
      name: 'Choose...',
    },
    {
      name: 'California',
    }
  ];
}
