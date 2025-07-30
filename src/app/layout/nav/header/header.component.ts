import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  fullScreenClass: boolean = false;
  toggleMode: any;
  elementValue: any;
  localData: any = '';

  selectValue: string = 'ENGLISH';
  valueDrop = ['ENGLISH', 'FRANCE', 'CANADA', 'GERMAN'];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme == 'dark' || params.theme == 'light') {
        localStorage.setItem("data-theme-version", params.theme);
      }
    });
  }

  getValueDrop(get: any) {
    this.selectValue = get.item;
  }
  ngDoCheck() {
    // this.urlActive(this.router.url);
    this.themeMode2();
  }

  themeMode2() {    // Theme mode dark - light 
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData != null) {
      document.body.setAttribute('data-theme-version', this.localData);
    }
  }

  themeMode() {     // Theme mode dark - light 
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.localData = localStorage.getItem('data-theme-version');

    if (this.elementValue == 'light' && this.localData == 'light') {
      this.toggleMode = 'dark';
    } else {
      this.toggleMode = 'light';
    }
    localStorage.setItem("data-theme-version", this.toggleMode);
    this.localData = localStorage.getItem('data-theme-version');
    document.body.setAttribute('data-theme-version', this.localData);
  }

  chatboxActive() { // Chatbox manage
    document.getElementById("chatBox")?.setAttribute("class", "chatbox active");
  }

  chatboxClose() {
    document.getElementById("chatBox")?.setAttribute("class", 'chatbox');
  }
}
