import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Sweetalert2Service } from 'src/app/_services/sweet-alert2/sweetalert2.service';
@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent {
  contantHead = {
    title: 'Sweet Alert',
    title_path: 'Plugins'
  }

  constructor(private sweetAlert: Sweetalert2Service) { }

  alertMsg(itme: any) {
    this.sweetAlert.alertMsg(itme);
  }

  wrongAlert() {
    const title = "Oops...";
    const text = "Something went wrong!";
    const footer = '<a href="javascript(0);">Why do I have this issue?</a>';
    this.sweetAlert.wrongAlert(title, text, footer);
  }

  textAlert(title: any) {
    const text = "That thing is still around?"
    this.sweetAlert.textAlert(title, text);
  }

  successAlert(itme: any) {
    const text = "You clicked the button !!";
    this.sweetAlert.successAlert(itme, text);
  }

  confirmAlert(itme: any) {
    const text = "You won't be able to revert this!";
    this.sweetAlert.confirmAlert(itme, text);
  }
  imageAlert(itme: any) {
    const text = "Modal with a custom image."
    const imageUrl = "https://unsplash.it/400/200";
    this.sweetAlert.imageAlert(itme, text, imageUrl);
  }
  autoAlert(itme: any) {
    const html = "I will close in <b></b> milliseconds.";
    this.sweetAlert.autoAlert(itme, html);
  }
  promptAlert(itme: any) {
    const text = "You won't be able to revert this!";
    this.sweetAlert.promptAlert(itme, text);
  }
  ajexAlert(itme: any) {
    const text = "Submit to run ajax request !!";
    this.sweetAlert.ajexAlert(itme, text);
  }
}
