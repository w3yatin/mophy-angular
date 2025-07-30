import { Component } from '@angular/core';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tab-config',
  templateUrl: './tab-config.component.html',
  styleUrls: ['./tab-config.component.css']
})
export class TabConfigComponent {

  constructor(config: NgbNavConfig) {
    // customize default values of navs used by this component tree
    config.destroyOnHide = false;
    config.roles = false;
  }

  ngOnInit(): void {
  }
}
