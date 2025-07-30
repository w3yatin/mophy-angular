import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-content-add',
  templateUrl: './content-add.component.html',
  styleUrls: ['./content-add.component.css']
})
export class ContentAddComponent {
  public Editor = ClassicEditor;
  imageURL: any = 'assets/images/no-img-avatar.png';
  
  contantHead = {
    title: 'Add Content',
    title_path: 'CMS'
  }
  listContacts: any = [];
  boxArrya: any = [
    'Page Attributes', 'Featured Image', 'Excerpt', 'Custom Fields',
    'Discussion', 'Slug', 'Author', 'Page Type', 'Seo'
  ];

  activeToggleArray = [1,2,3,4,5,6,7,8,9] 
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }
  getImage(ev: any) {
    if (ev.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = (event: any) => {
        this.imageURL = event.target.result;
      }
    }
  }
  checkValue(event: any) {
    let index = this.listContacts.indexOf(event);
    if (index == -1) {
      this.listContacts.push(event);
    } else {
      this.listContacts.splice(index, 1);
    }
  }

  select2User = [
    {
      name: 'admin@gmail.com',
    },
    {
      name: 'India',
    },
    {
      name: 'Information',
    },
    {
      name: 'New Menu',
    },
    {
      name: 'Page Menu',
    },
  ];

  select2Data = [
    {
      name: '(No Parent)',
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Contact Us',
    },
    {
      name: 'Important Information',
    },
    {
      name: 'Free shipping',
    },
    {
      name: 'Daily Gifts',
    },
    {
      name: 'Blog',
    },
    {
      name: 'About Us',
    },
    {
      name: 'Dummy Co',
    },
  ];

  select2Content = [
    {
      name: 'Page',
    },
    {
      name: 'Widget',
    }
  ];
}
