import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface type {
  icon: string;
}
@Component({
  selector: 'app-flat-icons',
  templateUrl: './flat-icons.component.html',
  styleUrls: ['./flat-icons.component.css']
})
export class FlatIconsComponent {

  private modalService = inject(NgbModal);

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  contantHead = {
    title: 'Flat icons',
    title_path: 'Icons'
  }
  iconData: type[] = [
    { icon: 'flaticon-025-dashboard' },
    { icon: 'flaticon-050-info' },
    { icon: 'flaticon-046-home' },
    { icon: 'flaticon-001-arrow-down' },
    { icon: 'flaticon-003-arrow-up' },
    { icon: 'flaticon-005-back-arrow' },
    { icon: 'flaticon-006-brightness' },
    { icon: 'flaticon-007-bulleye' },
    { icon: 'flaticon-008-check' },
    { icon: 'flaticon-009-check' },
    { icon: 'flaticon-015-chevron' },
    { icon: 'flaticon-016-double-chevron' },
    { icon: 'flaticon-017-clipboard' },
    { icon: 'flaticon-018-clock' },
    { icon: 'flaticon-020-close' },
    { icon: 'flaticon-021-command' },
    { icon: 'flaticon-023-cut' },
    { icon: 'flaticon-028-download' },
    { icon: 'flaticon-030-ellipsis' },
    { icon: 'flaticon-033-feather' },
    { icon: 'flaticon-034-filter' },
    { icon: 'flaticon-036-floppy-disk' },
    { icon: 'flaticon-038-gauge' },
    { icon: 'flaticon-039-goal' },
    { icon: 'flaticon-040-graph' },
    { icon: 'flaticon-043-menu' },
    { icon: 'flaticon-045-heart' },
    { icon: 'flaticon-046-home' },
    { icon: 'flaticon-050-info' },
    { icon: 'flaticon-052-inside' },
    { icon: 'flaticon-054-maximize' },
    { icon: 'flaticon-058-minus' },
    { icon: 'flaticon-062-pencil' },
    { icon: 'flaticon-063-pencil' },
    { icon: 'flaticon-064-pin' },
    { icon: 'flaticon-065-pin' },
    { icon: 'flaticon-070-power' },
    { icon: 'flaticon-071-print' },
    { icon: 'flaticon-073-question' },
    { icon: 'flaticon-075-reload' },
    { icon: 'flaticon-076-remove' },
    { icon: 'flaticon-082-share' },
    { icon: 'flaticon-083-share' },
    { icon: 'flaticon-084-share' },
    { icon: 'flaticon-085-signal' },
    { icon: 'flaticon-086-star' },
    { icon: 'flaticon-087-stop' },
    { icon: 'flaticon-088-time' },
    { icon: 'flaticon-089-trash' },
    { icon: 'flaticon-090-upload' },
    { icon: 'flaticon-024-dashboard' },
    { icon: 'flaticon-091-warning' },
    { icon: 'flaticon-092-warning' },
    { icon: 'flaticon-013-checkmark' },
    { icon: 'flaticon-381-gift' },
    { icon: 'flaticon-381-hourglass' },
    { icon: 'flaticon-381-id-card' },
    { icon: 'flaticon-381-hide' },
    { icon: 'flaticon-381-high-volume' },
    { icon: 'flaticon-381-idea' },
    { icon: 'flaticon-381-internet' },
    { icon: 'flaticon-381-magic-wand' },
    { icon: 'flaticon-381-settings-5' },
    { icon: 'flaticon-381-smartphone-4' },
    { icon: 'flaticon-381-sunglasses' },
    { icon: 'flaticon-381-umbrella' },
    { icon: 'flaticon-381-video-player' },
    { icon: 'flaticon-381-trash-1' },
    { icon: 'flaticon-381-switch-4' },
    { icon: 'flaticon-381-shuffle-1' },
    { icon: 'flaticon-381-quaver' },
    { icon: 'flaticon-381-route' },
    { icon: 'flaticon-381-search-2' },
    { icon: 'flaticon-381-panel' },
    { icon: 'flaticon-381-price-tag' },
    { icon: 'flaticon-381-photo' },
    { icon: 'flaticon-381-picture' },
    { icon: 'flaticon-381-percentage-1' },
  ]
}
