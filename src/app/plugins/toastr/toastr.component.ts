import { Component } from '@angular/core';
import { NgxToastrService } from 'src/app/_services/ngx-toastr/ngx-toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent {
  contantHead = {
    title: 'Toastr',
    title_path: 'Plugins'
  }
  position: any = 'toast-top-right';
  constructor(private alertService: NgxToastrService) { }

  topLeft() {
    this.position = 'toast-top-left';
    this.alertService.info('Top Left', this.position);
  }
  topCenter() {
    this.position = 'toast-top-center';
    this.alertService.info('Top Center', this.position);
  }
  topFullWidth() {
    this.position = 'toast-top-full-width';
    this.alertService.info('Top Center', this.position);
  }
  bottomFullWidth() {
    this.position = 'toast-bottom-full-width';
    this.alertService.info('Top Right', this.position);
  }
  topRight() {
    this.position = 'toast-top-right';
    this.alertService.info('Top Right', this.position);
  }
  bottomRight() {
    this.position = 'toast-bottom-right';
    this.alertService.info('Bottom Right', this.position);
  }
  bottomLeft() {
    this.position = 'toast-bottom-left';
    this.alertService.info('Bottom Left', this.position);
  }
  bottomCenter() {
    this.position = 'toast-bottom-center';
    this.alertService.info('Bottom Center', this.position);
  }
  warning() {
    this.alertService.warning('Top Right', this.position);
  }
  info() {
    this.alertService.info('Top Right', this.position);
  }
  error() {
    this.alertService.error('Top Right', this.position);
  }
  success() {
    this.alertService.success('Top Right', this.position);
  }
}
