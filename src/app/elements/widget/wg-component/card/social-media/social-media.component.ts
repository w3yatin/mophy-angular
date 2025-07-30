import { Component } from '@angular/core';
interface type{
  icon: string;
  color: string;
  friends: number;
  followers: number;
}
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  dataList: type[] = [
    {
      icon: 'fab fa-facebook-f',
      color: 'widget-facebook',
      friends: 89,
      followers: 150,
    },
    {
      icon: 'fab fa-linkedin-in',
      color: 'widget-linkedin',
      friends: 60,
      followers: 179,
    },
    {
      icon: 'fab fa-google-plus-g',
      color: 'widget-googleplus',
      friends: 90,
      followers: 119,
    },
    {
      icon: 'fab fa-twitter',
      color: 'widget-twitter',
      friends: 80,
      followers: 169,
    }
  ]
}
