import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() item:any = '';
  name:string = '';
  email:string = '';
  ngOnInit(){
    this.name = this.item.name;
    this.email = this.item.email;
  }
}
