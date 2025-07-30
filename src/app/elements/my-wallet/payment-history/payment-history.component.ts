import { Component } from '@angular/core';

interface type {
  img: string,
  name: string,
  onlineStatus: boolean,
  money: string,
  date: string,
  time: string,
  masterCard: string,
  status: string,
}

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent {
  active = 1;

  paymentData: type[] = [
    {
      img: 'assets/images/avatar/10.png',
      name: 'XYZ Store ID',
      onlineStatus: true,
      date: 'June 1, 2024',
      time: '08:22 AM',
      money: '+$5,553',
      masterCard: 'MasterCard 404',
      status: 'Completed'
    },
    {
      img: 'assets/images/avatar/11.png',
      name: 'Peter Park',
      onlineStatus: false,
      date: 'June 3, 2024',
      time: '04:25 AM',
      money: '+$2,351',
      masterCard: 'MasterCard 404',
      status: 'Canceled'
    },
    {
      img: 'assets/images/avatar/12.png',
      name: 'Andrew Lee',
      onlineStatus: false,
      date: 'June 3, 2024',
      time: '02:27 AM',
      money: '+$3,543',
      masterCard: 'MasterCard 404',
      status: 'Completed'
    },
    {
      img: 'assets/images/avatar/14.png',
      name: 'Popo Store',
      onlineStatus: true,
      date: 'June 5, 2024',
      time: '02:27 AM',
      money: '+$5,553',
      masterCard: 'MasterCard 404',
      status: 'Pending'
    },
    {
      img: 'assets/images/avatar/13.png',
      name: 'Peter Parkur',
      onlineStatus: false,
      date: 'June 10, 2024',
      time: '08:28 AM',
      money: '+$5,553',
      masterCard: 'MasterCard 404',
      status: 'Pending'
    }
  ]

  paymentData2: type[] = [
    {
      img: 'assets/images/avatar/11.png',
      name: 'Peter Park',
      onlineStatus: false,
      date: 'June 3, 2024',
      time: '04:25 AM',
      money: '+$2,351',
      masterCard: 'MasterCard 404',
      status: 'Canceled'
    },
    {
      img: 'assets/images/avatar/10.png',
      name: 'XYZ Store ID',
      onlineStatus: true,
      date: 'June 1, 2024',
      time: '08:22 AM',
      money: '+$5,553',
      masterCard: 'MasterCard 404',
      status: 'Completed'
    },
    {
      img: 'assets/images/avatar/12.png',
      name: 'Andrew Lee',
      onlineStatus: false,
      date: 'June 3, 2024',
      time: '02:27 AM',
      money: '+$3,543',
      masterCard: 'MasterCard 404',
      status: 'Completed'
    },
  ]
  paymentData3: type[] = [
    {
      img: 'assets/images/avatar/12.png',
      name: 'Andrew Lee',
      onlineStatus: false,
      date: 'June 3, 2024',
      time: '02:27 AM',
      money: '+$3,543',
      masterCard: 'MasterCard 404',
      status: 'Completed'
    },

  ]
}
