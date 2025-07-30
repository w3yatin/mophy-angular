import { Component } from '@angular/core';
// import {ThemePalette} from '@angular/material/core';
//  import {ProgressBarMode} from '@angular/material/progress-bar';

 import {ThemePalette} from '@angular/material/core';
 import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
 import {MatSliderModule} from '@angular/material/slider';
 import {FormsModule} from '@angular/forms';
 import {MatRadioModule} from '@angular/material/radio';
 import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-configurable-progress-bar',
  templateUrl: './configurable-progress-bar.component.html',
  styleUrls: ['./configurable-progress-bar.component.css'],
})
export class ConfigurableProgressBarComponent {
  // color: ThemePalette = 'primary';
  // mode: ProgressBarMode = 'determinate';
  // value = 50;
  // bufferValue = 75;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

}
