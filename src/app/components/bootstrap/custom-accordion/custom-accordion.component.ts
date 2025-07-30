import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.css']
})
export class CustomAccordionComponent {
  @Input() theme: any = '';

  themeClass: any = '';
  maneClass: string = '';
  positionClass: string = '';
  iconClass: string = '';
  bg: string = '';
  ngOnInit() {
    this.themeClass = this.theme[0];
    this.maneClass = this.theme[0].hedingClass;
    this.positionClass = this.theme[0].postion;
    this.iconClass = this.theme[0].icon;
    this.bg = this.theme[0].bg;
  }
}
