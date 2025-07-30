import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-email-add',
  templateUrl: './email-add.component.html',
  styleUrls: ['./email-add.component.css']
})
export class EmailAddComponent {
  public Editor = ClassicEditor;  
  
  contantHead = {
    title: 'Add Email',
    title_path: 'CMS'    
  }

  activeToggleArray = [1] 
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }
}
