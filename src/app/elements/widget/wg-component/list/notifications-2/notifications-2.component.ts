import { Component } from '@angular/core';
interface type {
  img?: string;
  img_null?: string;
  name: string;
  date: string;
  icon?: string;
  status?: string;
  btn_class?: string;
}
@Component({
  selector: 'app-notifications-2',
  templateUrl: './notifications-2.component.html',
  styleUrls: ['./notifications-2.component.css']
})
export class Notifications2Component {
  items: type[] = [
    {
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      img_null: 'JT',
      status: 'warning',
      name: 'Resport created successfully',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'info'
    },
    {
      icon: 'fa fa-home',
      name: 'Reminder : Treatment Time!',
      date: '12 July 2024 - 02:26 PM',
      btn_class: 'success'
    },
    {
      status: 'danger',
      img: 'assets/images/avatar/1.jpg',
      name: 'Dr sultads Send you Photo',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'primary'
    },
    {
      status: 'success',
      img_null: 'TG',
      name: 'Resport created successfully',
      date: '30 July 2024 - 02:26 PM',
      btn_class: 'danger'
    }
  ]
}
