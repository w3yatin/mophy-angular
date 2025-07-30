import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-configurable-slide-toggle',
  templateUrl: './configurable-slide-toggle.component.html',
  styleUrls: ['./configurable-slide-toggle.component.css']
})
export class ConfigurableSlideToggleComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

}
