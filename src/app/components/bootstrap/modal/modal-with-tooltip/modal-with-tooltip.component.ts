import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-with-tooltip',
  templateUrl: './modal-with-tooltip.component.html',
  styleUrls: ['./modal-with-tooltip.component.css']
})
export class ModalWithTooltipComponent {
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
