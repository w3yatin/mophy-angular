import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  elements: any = '';
  ngOnInit() {
    this.setCurrentYear();
  }
  setCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    this.elements = document.getElementsByClassName('current-year');

    for (const element of this.elements) {
      element.innerHTML = currentYear;
    }

  }
}
