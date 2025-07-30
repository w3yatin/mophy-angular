import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-head-transaction',
  templateUrl: './head-transaction.component.html',
  styleUrls: ['./head-transaction.component.css']
})
export class HeadTransactionComponent {

  constructor(private modalService: NgbModal) { }

	openCenter(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}
