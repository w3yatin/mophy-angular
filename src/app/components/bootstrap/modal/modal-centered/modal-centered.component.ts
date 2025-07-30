import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-centered',
  templateUrl: './modal-centered.component.html',
  styleUrls: ['./modal-centered.component.css']
})
export class ModalCenteredComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}
