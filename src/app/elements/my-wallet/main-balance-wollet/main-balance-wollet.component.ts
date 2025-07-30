import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-balance-wollet',
  templateUrl: './main-balance-wollet.component.html',
  styleUrls: ['./main-balance-wollet.component.css']
})
export class MainBalanceWolletComponent {

  constructor(private modalService: NgbModal) { }

	openCenter(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}
