import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  contantHead = {
    title: 'Add Blog',
    title_path: 'CMS'    
  }
  imageURL: any = 'assets/images/no-img-avatar.png';

  activeToggleArray = [1,2,3,4,5,6,7,8,9,10,11] 
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  public Editor = ClassicEditor;

  listContacts: any = [];
  boxArrya: any = ['Categories', 'Featured Image', 'Excerpt', 'Custom Fields',
    'Discussion', 'Slug', 'Author', 'Tag', 'Seo', 'Published'];

  checkValue(event: any) {
    let index = this.listContacts.indexOf(event);
    if (index == -1) {
      this.listContacts.push(event);
    } else {
      this.listContacts.splice(index, 1);
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

  select2Data = [
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
}
