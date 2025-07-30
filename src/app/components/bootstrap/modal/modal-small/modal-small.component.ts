import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-small',
  templateUrl: './modal-small.component.html',
  styleUrls: ['./modal-small.component.css']
})
export class ModalSmallComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'sm' });
	}
}
