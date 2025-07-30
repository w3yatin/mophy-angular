import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-head',
  templateUrl: './content-head.component.html',
  styleUrls: ['./content-head.component.css']
})
export class ContentHeadComponent {
  @Input() head_title:any = '';
  title: string = '';
  desc: string = '';
  title_path?: string = '';
  ngOnInit(){
    this.title = this.head_title.title;
    this.desc = this.head_title.desc;
    this.title_path = this.head_title.title_path;
  }
}
