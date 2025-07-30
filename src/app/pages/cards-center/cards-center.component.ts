import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards-center',
  templateUrl: './cards-center.component.html',
  styleUrls: ['./cards-center.component.css']
})
export class CardsCenterComponent {
  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

}
