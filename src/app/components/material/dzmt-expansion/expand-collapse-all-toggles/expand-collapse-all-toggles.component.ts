import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-expand-collapse-all-toggles',
  templateUrl: './expand-collapse-all-toggles.component.html',
  styleUrls: ['./expand-collapse-all-toggles.component.css']
})
export class ExpandCollapseAllTogglesComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

}
