import { Component } from '@angular/core';
export interface type{
  id:number,
  name:string
}
@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent {
  contantHead = {
    title: 'Blog Category',
    title_path: 'CMS'    
  }
  activeToggleArray = [1,2] 
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }
  catagory:type[] = [
    {
      id:1,
      name:'Beauty'
    },
    {
      id:2,
      name:'Fashion'
    },
    {
      id:3,
      name:'Lifestyle'
    },
    {
      id:4,
      name:'Food'
    },
    {
      id:5,
      name:'Beauty'
    },
    {
      id:6,
      name:'Fashion'
    },
    {
      id:7,
      name:'Lifestyle'
    },
    {
      id:8,
      name:'Food'
    },
    {
      id:9,
      name:'Lifestyle'
    },
    {
      id:10,
      name:'Food'
    },
    {
      id:11,
      name:'Beauty'
    },
    {
      id:12,
      name:'Fashion'
    },
  ]
}
