import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-grid',
  templateUrl: './modal-grid.component.html',
  styleUrls: ['./modal-grid.component.css']
})
export class ModalGridComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
