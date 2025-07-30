import { Component } from '@angular/core';

@Component({
  selector: 'app-dzmt-ripple',
  templateUrl: './dzmt-ripple.component.html',
  styleUrls: ['./dzmt-ripple.component.css']
})
export class DzmtRippleComponent {
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;

  contantHead = {
    title: 'Ripple',
    title_path: 'Material'    
  }
}
