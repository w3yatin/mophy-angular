import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-large',
  templateUrl: './modal-large.component.html',
  styleUrls: ['./modal-large.component.css']
})
export class ModalLargeComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}
}
