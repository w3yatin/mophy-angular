import { Component } from '@angular/core';
interface cardType3 {
  title: string;
  rank: string;
  increase: string;
  color: string;
  progress_bar: string;
}
@Component({
  selector: 'app-card-3',
  templateUrl: './card-3.component.html',
  styleUrls: ['./card-3.component.css']
})
export class Card3Component {
  cardList_3: cardType3[] = [
    {
      title: 'Accounts Payable',
      rank: '3280',
      increase: '80% Increase in 20 Days',
      progress_bar: '80',
      color: 'primary'
    },
    {
      title: 'Revenue Analyst',
      rank: '245',
      increase: '50% Increase in 25 Days',
      progress_bar: '50',
      color: 'warning'
    },
    {
      title: 'Payroll Administrator',
      rank: '28',
      increase: '76% Increase in 20 Days',
      progress_bar: '76',
      color: 'red'
    },
    {
      title: 'Collections Officer',
      rank: '25160$',
      increase: '30% Increase in 30 Days',
      progress_bar: '30',
      color: 'success'
    }
  ]

}
