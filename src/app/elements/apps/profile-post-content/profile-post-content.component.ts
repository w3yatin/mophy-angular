import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-post-content',
  templateUrl: './profile-post-content.component.html',
  styleUrls: ['./profile-post-content.component.css']
})
export class ProfilePostContentComponent {
  active = 1;
  hide:boolean = false;

  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  show_pass(){
    this.hide = !this.hide;
  }

  select2Data = [
    {
      name: 'Choose...',
    },
    {
      name: 'Option 1',
    },
    {
      name: 'Option 2',
    },
    {
      name: 'Option 3',
    },
  ];
}
