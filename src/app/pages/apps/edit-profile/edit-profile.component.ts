import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  contantHead = {
    title: 'Edit Profile',
    title_path: 'App'
  }
  
  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;

  selectGender = [
    {
      name: 'Please select',
    },
    {
      name: 'Male',
    },
    {
      name: 'Female',
    },
    {
      name: 'other',
    }
  ];

  selectCountry = [
    {
      name: 'Please select',
    },
    {
      name: 'Russia',
    },
    {
      name: 'Canada',
    },
    {
      name: 'China',
    },
    {
      name: 'India',
    },
  ];

  selectCity = [
    {
      name: 'Please select',
    },
    {
      name: 'Krasnodar',
    },
    {
      name: 'Tyumen',
    },
    {
      name: 'Chelyabinsk',
    },
    {
      name: 'Moscow',
    },
  ];
}
