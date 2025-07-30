import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  active = 1;
  contantHead = {
    title: 'Profile',
    title_path: 'App'
  }

  profile_details = {
    name: 'Mitchell C. Shay',
    img: 'assets/images/profile/profile.png',
    email: 'info@example.com'
  }

}
