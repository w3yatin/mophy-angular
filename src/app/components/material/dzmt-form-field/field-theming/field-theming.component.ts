import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-field-theming',
  templateUrl: './field-theming.component.html',
  styleUrls: ['./field-theming.component.css']
})
export class FieldThemingComponent {
  colorControl = new FormControl('primary' as ThemePalette);

}
