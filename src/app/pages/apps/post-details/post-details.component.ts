import { Component } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  contantHead = {
    title: 'Post Details',
    title_path: 'App'
  }
  profile_details = {
    name: 'Mitchell C. Shay',
    img: 'assets/images/profile/profile.png',
    email: 'hello@email.com'
  }
}
