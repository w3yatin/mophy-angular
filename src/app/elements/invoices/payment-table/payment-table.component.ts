import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  invoiceId: string;
  date: string;
  recipient: string;
  img: string;
  onlineStatus: boolean;
  email: string;
  serviceType: string;
  status: string;
}
@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent {
  page: any = 1;
  totalRows: number = 8;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  desserts: Dessert[] = [
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'XYZ Store ID',
      img: 'assets/images/avatar/25.png',
      email: 'xyzstore@mail.com',
      serviceType: 'Server Maintenance',
      status: 'Completed',
      onlineStatus: true
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'David Oconner',
      img: 'assets/images/avatar/19.png',
      email: 'davidocon@mail.com',
      serviceType: 'Clean Up',
      status: 'Pending',
      onlineStatus: false
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'Julia Esteh',
      img: 'assets/images/avatar/25.png',
      email: 'juliaesteh@mail.com',
      serviceType: 'Server Maintenance',
      status: 'Canceled',
      onlineStatus: false
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'Power Supp Store',
      img: 'assets/images/avatar/20.png',
      email: 'xyzstore@mail.com',
      serviceType: 'Server Maintenance ',
      status: 'Completed',
      onlineStatus: true
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'Rock Lee',
      img: 'assets/images/avatar/22.png',
      email: 'juliaesteh@mail.com',
      serviceType: 'Upgrade Component',
      status: 'Canceled',
      onlineStatus: false
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'James Known',
      img: 'assets/images/avatar/21.png',
      email: 'davidocon@mail.com',
      serviceType: 'Server Maintenance ',
      status: 'Pending',
      onlineStatus: true
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'David Oconner',
      img: 'assets/images/avatar/19.png',
      email: 'davidocon@mail.com',
      serviceType: 'Clean Up',
      status: 'Pending',
      onlineStatus: false
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'Power Supp Store',
      img: 'assets/images/avatar/20.png',
      email: 'xyzstore@mail.com',
      serviceType: 'Server Maintenance ',
      status: 'Completed',
      onlineStatus: true
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      recipient: 'Rock Lee',
      img: 'assets/images/avatar/22.png',
      email: 'juliaesteh@mail.com',
      serviceType: 'Upgrade Component',
      status: 'Canceled',
      onlineStatus: false
    },
  ];

  orderData: Dessert[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'recipient': return compare(a.recipient, b.recipient, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'serviceType': return compare(a.serviceType, b.serviceType, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}