import { Component, OnInit } from '@angular/core';
interface Alert {
  type: string;
  typeMsg: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    typeMsg: 'Success!',
    message: 'This is an success alert',
  }, {
    type: 'info',
    typeMsg: 'info!',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    typeMsg: 'Warning!',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    typeMsg: 'Danger!',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    typeMsg: 'Primary!',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    typeMsg: 'Secondary!',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    typeMsg: 'Light!',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    typeMsg: 'Dark!',
    message: 'Message Sending failed.',
  }
];

@Component({
  selector: 'app-alert-dismissable',
  templateUrl: './alert-dismissable.component.html',
  styleUrls: ['./alert-dismissable.component.css']
})
export class AlertDismissableComponent implements OnInit {

  alerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  ngOnInit(): void {
  }

}
