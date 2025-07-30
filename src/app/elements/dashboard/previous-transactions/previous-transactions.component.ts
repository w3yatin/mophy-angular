import { Component } from '@angular/core';

interface type{
  title: string;
  decs: string;
  date: string;
  time: string;
  reting: string;
  status: string;
}
@Component({
  selector: 'app-previous-transactions',
  templateUrl: './previous-transactions.component.html',
  styleUrls: ['./previous-transactions.component.css']
})
export class PreviousTransactionsComponent {
  active = 1;
  
  firstData:type[] = [
    {
      title: 'XYZ Store ID',
      decs: 'Cashback',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    },
    {
      title: 'Cindy Alexandro',
      decs: 'Transfer',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Paipal',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    }
  ]

  secondData:type[] = [
    {
      title: 'Hawkins Jr.',
      decs: 'Cashback',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Pending'
    },
    {
      title: 'Cindy Alexandro',
      decs: 'Transfer',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Paipal',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    },
  ]

  threeData:type[] = [
    
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    },
    {
      title: 'Paipal',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Cindy Alexandro',
      decs: 'Transfer',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'XYZ Store ID',
      decs: 'Cashback',
      date: 'June 4, 2024',
      time: '05:34',
      reting: '+$5,553',
      status: 'Completed'
    },
    {
      title: 'Chef Renata',
      decs: 'Transfer',
      date: 'June 5, 2024',
      time: '06:34',
      reting: '-$167',
      status: 'Pending'
    }
  ]
}
