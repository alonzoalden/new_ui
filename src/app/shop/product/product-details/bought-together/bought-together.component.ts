import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-bought-together',
  templateUrl: './bought-together.component.html',
  styleUrls: ['./bought-together.component.scss']
})
export class BoughtTogetherComponent implements OnInit {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => this.products = product);
  }
  public productSlideConfig: any = {
    // infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    nextArrow:"<i class='side-scroller-arrow fa fa-chevron-circle-right' style='margin-left: 16px;'></i>",
    prevArrow:"<i class='side-scroller-arrow fa fa-chevron-circle-left' style='margin-right: 16px;'></i>",
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
