import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface type {
  img: string;
  title: string;
  discount: number;
  price: number;
  ratings_class?: {
    icon_class?: string;
  }[];
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  contantHead = {
    title: 'Product Details',
    title_path: 'Shop'
  }
  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }

  carouselData:type[] = [
    {
      img: 'assets/images/product/1.jpg',
      title: 'Bonorum et Malorum',
      discount: 761,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Bonorum et Malorum',
      discount: 159,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/3.jpg',
      title: 'Bonorum et Malorum',
      discount: 357,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Bonorum et Malorum',
      discount: 654,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Bonorum et Malorum',
      discount: 369,
      price: 149,
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
        }
      ]
    },
    {
      img: 'assets/images/product/6.jpg',
      title: 'Bonorum  Malorum withe',
      discount: 240,
      price: 149,
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
        }
      ]
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Bonorum et Malorum',
      discount: 364,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE et Malorum',
      discount: 654,
      price: 159,
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
        }
      ]
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Sake et Malorum',
      discount: 369.00,
      price: 149,
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
        }
      ]
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Bonorum et Malorum',
      discount: 240,
      price: 149,
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
        }
      ]
    },
  ]
}
