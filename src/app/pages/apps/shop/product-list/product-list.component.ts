import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface type {
  image: string;
  title: string;
  url: string;
  reviews: number;
  price: number;
  ratings_class?: {
    icon_class?: string;
  }[];
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  contantHead = {
    title: 'Product List',
    title_path: 'Shop'
  }

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  productList: type[] = [
    {
      image: "assets/images/product/2.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 350,
      reviews: 34,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
      ]
    },
    {
      image: "assets/images/product/3.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 320,
      reviews: 50,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
      ]
    },
    {
      image: "assets/images/product/4.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 520,
      reviews: 60,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
      ]
    },
    {
      image: "assets/images/product/5.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 380,
      reviews: 40,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
      ]
    },
    {
      image: "assets/images/product/6.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 280,
      reviews: 30,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
      ]
    },
    {
      image: "assets/images/product/7.jpg",
      title: "Solid Women's V-neck Dark T-Shirt",
      url: "ecom-product-detail",
      price: 680,
      reviews: 48,
      ratings_class: [
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
        {
          icon_class: "fa-regular fa-star",
        },
      ]
    }
  ]
}
