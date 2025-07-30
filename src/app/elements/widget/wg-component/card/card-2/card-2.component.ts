import { Component } from '@angular/core';
interface cardType2 {
  title: string;
  rank: string;
  increase: string;
  color: string;
  progress_bar: string;
  icone: any;
}
@Component({
  selector: 'app-card-2',
  templateUrl: './card-2.component.html',
  styleUrls: ['./card-2.component.css']
})
export class Card2Component {
  cardList_2: cardType2[] = [
    {
      title: 'Payments Officer',
      rank: '3280',
      increase: '80% Increase in 20 Days',
      icone: 'la la-users',
      progress_bar: '80',
      color: 'primary'
    },
    {
      title: 'Payment Supervisor',
      rank: '245',
      increase: '50% Increase in 25 Days',
      icone: 'la la-user',
      progress_bar: '50',
      color: 'warning'
    },
    {
      title: 'Payments',
      rank: '28',
      increase: '76% Increase in 20 Days',
      icone: 'la la-graduation-cap',
      progress_bar: '76',
      color: 'secondary'
    },
    {
      title: 'Treasury and Payments',
      rank: '250$',
      increase: '30% Increase in 30 Days',
      icone: 'la la-dollar',
      progress_bar: '30',
      color: 'danger'
    }
  ]
}
