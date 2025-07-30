import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices-sent',
  templateUrl: './invoices-sent.component.html',
  styleUrls: ['./invoices-sent.component.css']
})
export class InvoicesSentComponent {

  invoicesData = [
    {
      img: 'assets/images/avatar/15.png',
      name: 'FSoziety',
      time: '4h ago',
      money: '45'
    },
    {
      img: 'assets/images/avatar/17.png',
      name: 'David Ignis',
      time: '7h ago',
      money: '672'
    },
    {
      img: 'assets/images/avatar/18.png',
      name: 'Olivia Johan..',
      time: '9h ago',
      money: '769'
    },
    {
      img: 'assets/images/avatar/16.png',
      name: 'Stevan Store',
      time: '5h ago',
      money: '562'
    },
    {
      img: 'assets/images/avatar/17.png',
      name: 'FSoziety',
      time: '4h ago',
      money: '545'
    },
    {
      img: 'assets/images/avatar/15.png',
      name: 'David Ignis',
      time: '14h ago',
      money: '466'
    },
    {
      img: 'assets/images/avatar/17.png',
      name: 'David Ignis',
      time: '7h ago',
      money: '672'
    },
    {
      img: 'assets/images/avatar/18.png',
      name: 'Olivia Johan..',
      time: '9h ago',
      money: '769'
    }
  ]
}
