import { Component, VERSION } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

@Component({
  selector: 'app-light-gallery',
  templateUrl: './light-gallery.component.html',
  styleUrls: ['./light-gallery.component.css']
})
export class LightGalleryComponent {
  contantHead = {
    title: 'Light Gallery',
    title_path: 'Plugins'
  }

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom,lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
