import { Component } from '@angular/core';
interface Alert {
  type: string;
  typeMsg: string;
  message: string;
}
const ALERTS: Alert[] = [{
    type: 'success',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'info',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'warning',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'danger',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'primary',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'secondary',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'light',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }, {
    type: 'dark',
    typeMsg: 'Notifications',
    message: 'Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
  }
];
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent {
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
}
