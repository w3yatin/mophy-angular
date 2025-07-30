import { Component, TemplateRef, VERSION } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
@Component({
  selector: 'app-profile-sid-menu',
  templateUrl: './profile-sid-menu.component.html',
  styleUrls: ['./profile-sid-menu.component.css']
})
export class ProfileSidMenuComponent {

  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  modal_data: any = [];
  openModalBox(item: any) {
    this.modal_data = [{
      title: 'pass'
    }]
  }
  our_latest_item = [
    {
      img: 'assets/images/profile/5.jpg',
      title: 'Fintech innovates, contactless payments grow.',
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    },
    {
      img: 'assets/images/profile/6.jpg',
      title: 'Cryptocurrencies gain traction, transforming.',
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    },
    {
      img: 'assets/images/profile/7.jpg',
      title: 'Collection of textile samples',
      href: '/admin/post-details',
      decs: 'I shared this on my fb wall a few months back, and I thought.'
    }
  ]

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };
}
