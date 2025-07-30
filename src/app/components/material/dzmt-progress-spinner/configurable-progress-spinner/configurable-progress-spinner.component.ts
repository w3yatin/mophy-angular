import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-configurable-progress-spinner',
  templateUrl: './configurable-progress-spinner.component.html',
  styleUrls: ['./configurable-progress-spinner.component.css']
})
export class ConfigurableProgressSpinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
