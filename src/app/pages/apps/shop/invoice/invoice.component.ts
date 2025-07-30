import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  contantHead = {
    title: 'Invoice',
    title_path: 'Shop'
  }
  invoiceData = [
    {
      item: 'Origin License',
      desc: 'Extended License',
      unitCost: '$999,00',
      qty: '1',
      total: '$999,00'
    },
    {
      item: 'Custom Services',
      desc: 'Instalation and Customization (cost per hour)',
      unitCost: '$150,00',
      qty: '3',
      total: '$3.000,00'
    },
    {
      item: 'Hosting',
      desc: '1 year subcription',
      unitCost: '$499,00',
      qty: '1',
      total: '$499,00'
    }
  ]
}
