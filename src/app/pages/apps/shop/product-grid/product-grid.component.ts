import { Component } from '@angular/core';

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
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  contantHead = {
    title: 'Product Grid',
    title_path: 'Shop'
  }
  productGrid: type[] = [
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
      title: 'Striped Dress',
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
      title: 'BBow polka-dot',
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
      title: 'Z Product 360',
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
      title: 'Chair Grey',
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
      title: 'fox sake withe',
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
      title: 'Back Bag',
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
      title: 'FLARE DRESS',
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
      title: 'fox sake withe',
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
      title: 'Back Bag',
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
      img: 'assets/images/product/2.jpg',
      title: 'Back Bag',
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
      title: 'FLARE DRESS',
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
    }
  ]
}
