import { Component } from '@angular/core';

interface type {
  img: string;
  cardType: string;
  bank: string;
  cardNumber: string;
  namein: string;
}
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  this_week = {
    select: 'Newest',
    value: ['Newest', 'Details', 'Cancel']
  }
  cardList: type[] = [
    {
      img: 'assets/images/card/1.jpg',
      cardType: 'Primary',
      bank: 'ABC Bank',
      cardNumber: '**** **** **** 2256',
      namein: 'Franklin Jr.'
    },
    {
      img: 'assets/images/card/2.jpg',
      cardType: 'Secondary',
      bank: 'Finefine Bank',
      cardNumber: '**** **** **** 6615',
      namein: 'Franklin Jr.'
    },
    {
      img: 'assets/images/card/3.jpg',
      cardType: 'Secondary',
      bank: 'Makan Bank',
      cardNumber: '**** **** **** 6783',
      namein: 'Franklin Jr.'
    },
    {
      img: 'assets/images/card/4.jpg',
      cardType: 'Secondary',
      bank: 'Where Bank',
      cardNumber: '**** **** **** 8843',
      namein: 'Franklin Jr.'
    }
  ]
}
