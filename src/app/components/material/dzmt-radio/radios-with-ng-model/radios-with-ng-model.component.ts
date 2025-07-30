import { Component } from '@angular/core';

@Component({
  selector: 'app-radios-with-ng-model',
  templateUrl: './radios-with-ng-model.component.html',
  styleUrls: ['./radios-with-ng-model.component.css']
})
export class RadiosWithNgModelComponent {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}
