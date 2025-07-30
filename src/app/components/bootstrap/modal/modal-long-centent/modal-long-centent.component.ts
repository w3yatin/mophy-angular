import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-long-centent',
  templateUrl: './modal-long-centent.component.html',
  styleUrls: ['./modal-long-centent.component.css']
})
export class ModalLongCententComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}
}
