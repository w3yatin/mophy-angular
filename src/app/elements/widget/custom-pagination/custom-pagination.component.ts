import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css']
})
export class CustomPaginationComponent {
  @Input() page = '';
  @Input() totalPage = '';
  @Output() newPage = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('Child Componet-', this.totalPage)
  }
  pageChang(item: any) {
    this.page = item
    this.newPage.emit(item);
  }

  counter(i: number) {
    return new Array(i);
  }
}
