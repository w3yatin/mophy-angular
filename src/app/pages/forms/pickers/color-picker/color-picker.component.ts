import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {

  public color1: string = '#2889e9';
  public color2: string = 'hsl(322,100%,56%)';
  public color3: string = 'rgb(64,236,192)';
}
