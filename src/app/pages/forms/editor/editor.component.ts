import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  contantHead = {
    title: 'CkEditor',
    title_path: 'Form'    
  }

  public Editor = ClassicEditor;
}
