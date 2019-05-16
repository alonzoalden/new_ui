import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-frequently-bought',
  templateUrl: './frequently-bought-product.component.html',
  styleUrls: ['./frequently-bought-product.component.scss']
})
export class FrequentlyBoughtProductComponent implements OnInit {
  
  public products : Product[] = [];	

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  	this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
