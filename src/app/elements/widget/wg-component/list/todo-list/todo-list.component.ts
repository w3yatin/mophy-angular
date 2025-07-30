import { Component } from '@angular/core';
interface type {
  name: string;
  date: string;
  btn_class?: string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: type[] = [
    {
      name: 'Get up',
      date: '29 July 2024 - 02:26 PM',
      btn_class: 'success'
    },
    {
      name: 'Stand up',
      date: '01 July 2024',
      btn_class: 'warning'
    },
    {
      name: `Don't give up the fight.`,
      date: '20 July 2024',
      btn_class: 'primary'
    },
    {
      name: 'Do something else',
      date: '20 January 2024',
      btn_class: 'info'
    },
    {
      name: 'Get up',
      date: '01 July 2024',
      btn_class: 'success'
    },
    {
      name: 'Stand up',
      date: '01 July 2024',
      btn_class: 'warning'
    }
  ]
}
