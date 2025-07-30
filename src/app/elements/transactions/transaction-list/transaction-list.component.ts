import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material/sort';

export interface Dessert {
  invoiceId: string;
  date: string;
  recipient: string;
  img: string;
  onlineStatus?: string;
  amount: string;
  type: string;
  loction: string;
  manLoction: string;
  status: string;
}
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {

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
      date: 'June 2, 2024, 08:22 AM',
      img: 'assets/images/avatar/17.png',
      recipient: 'Julia Esteh',
      amount: '128.89',
      type: 'Income',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Canceled',
    },
    {
      invoiceId: '#123412452',
      date: 'June 5, 2024, 08:22 AM',
      img: 'assets/images/avatar/25.png',
      recipient: 'Clown Studio',
      amount: '560.67',
      type: 'Outcome',
      manLoction: 'London',
      loction: 'England',
      status: 'Completed',
      onlineStatus: 'Freelancer'
    },
    {
      invoiceId: '#123412459',
      date: 'June 10, 2024, 08:22 AM',
      img: 'assets/images/avatar/11.png',
      recipient: 'David Oconner',
      amount: '168.89',
      type: 'Outcome',
      manLoction: 'Medan',
      loction: 'Sumut Indonesia',
      status: 'Pending'
    },
    {
      invoiceId: '#123412444',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/29.png',
      recipient: 'Cindy Seea',
      amount: '128.09',
      type: 'Outcome',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Canceled'
    },
    {
      invoiceId: '#123412455',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/17.png',
      recipient: 'Julia Esteh',
      amount: '288.09',
      type: 'Income',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Canceled',
    },
    {
      invoiceId: '#123412441',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/25.png',
      recipient: 'Clown Studio',
      amount: '888.09',
      type: 'Outcome',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Completed',
      onlineStatus: 'Freelancer'
    },
    {
      invoiceId: '#123412451',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/27.png',
      recipient: 'Jeremy Tedy',
      amount: '753.09',
      type: 'Income',
      manLoction: 'Medan',
      loction: 'Sumut Indonesia',
      status: 'Pending',
    },
    {
      invoiceId: '#123412441',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/23.png',
      recipient: 'Samuel Bro',
      amount: '128.09',
      type: 'Income',
      manLoction: 'Bangladesh',
      loction: 'Sumut Indonesia',
      status: 'Canceled',
    },
    {
      invoiceId: '#123412454',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/28.png',
      recipient: 'Yellow Caw',
      amount: '254.09',
      type: 'Income',
      manLoction: 'London',
      loction: 'England',
      status: 'Completed',
      onlineStatus: 'Studio'
    },
    {
      invoiceId: '#123412444',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/29.png',
      recipient: 'Cindy Seea',
      amount: '128.09',
      type: 'Outcome',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Canceled'
    },
    {
      invoiceId: '#123412451',
      date: 'June 1, 2024, 08:22 AM',
      img: 'assets/images/avatar/11.png',
      recipient: 'David Oconner',
      amount: '128.89',
      type: 'Outcome',
      manLoction: 'Medan',
      loction: 'Sumut Indonesia',
      status: 'Pending'
    },
    {
      invoiceId: '#123412445',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/25.png',
      recipient: 'XYZ Store ID',
      amount: '560.09',
      type: 'Outcome',
      manLoction: 'London',
      loction: 'England',
      status: 'Completed',
      onlineStatus: 'Online Shop'
    },
    {
      invoiceId: '#123412455',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/17.png',
      recipient: 'Julia Esteh',
      amount: '288.09',
      type: 'Income',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Canceled',
    },
    {
      invoiceId: '#123412441',
      date: 'June 6, 2024, 08:22 AM',
      img: 'assets/images/avatar/25.png',
      recipient: 'Clown Studio',
      amount: '888.09',
      type: 'Outcome',
      manLoction: 'Bangladesh',
      loction: 'India',
      status: 'Completed',
      onlineStatus: 'Freelancer'
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
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
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