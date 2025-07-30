import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  @Input() head_title: any = '';
  breadcrumbItem: string = '';
  desc: string = '';
  breadcrumb_path?: string = '';
  ngOnInit() {
    this.breadcrumbItem = this.head_title.title;
    this.desc = this.head_title.desc;
    this.breadcrumb_path = this.head_title.title_path;
  }
}
