import { Component } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  title: string = 'Accordion';
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
  }
  contantHead = {
    title: 'Accordion',
    title_path: 'Bootstrap'
  }


  accordion = [
    {
      defaultAccordion: [{ hedingClass: 'accordion-primary' }]
    },
    {
      borderedAccordion: [{ hedingClass: 'accordion-danger-solid' }]
    },
    {
      withoutspaceAccordion: [{ hedingClass: 'accordion-no-gutter accordion-header-bg' }]
    },
    {
      withoutSpaceBorderAccordion: [{ hedingClass: 'accordion-no-gutter accordion-bordered' }]
    },
    {
      leftPositionAccordion: [{ hedingClass: 'accordion accordion-left-indicator', postion: 'accordion-header-text' }]
    },
    {
      withIconAccordion: [{ hedingClass: 'accordion-with-icon', postion: 'accordion-header-text', icon: 'accordion-header-icon' }]
    },
    {
      headerBgAccordion: [{ hedingClass: 'accordion-header-bg accordion-bordered', bg:true }]
    },
    {
      solidBgAccordion: [{ hedingClass: 'accordion-solid-bg' }]
    },
    {
      activeBgAccordion: [{ hedingClass: 'accordion-active-header' }]
    },
    {
      herderShadowAccordion: [{ hedingClass: 'accordion-header-shadow accordion-rounded' }]
    },
    {
      roundedStylishAccordion: [{ hedingClass: 'accordion-rounded-stylish accordion-bordered' }]
    },
    {
      gradientAccordion: [{ hedingClass: 'accordion-gradient accordion-rounded-stylish' }]
    },
  ]

}
