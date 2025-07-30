import { Component } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar-striped',
  templateUrl: './progressbar-striped.component.html',
  styleUrls: ['./progressbar-striped.component.css']
})
export class ProgressbarStripedComponent {
	constructor(private config: NgbProgressbarConfig) {
		config.animated = true;
	}
}
