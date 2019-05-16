import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
declare var $: any;

@Component({
  selector: 'app-home-toolots',
  templateUrl: './home-toolots.component.html',
  styleUrls: ['./home-toolots.component.scss']
})
export class HomeToolotsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  
  constructor(private productsService: ProductsService) {   }
  

  ngOnInit() {
      document.body.addEventListener('click', function handler() {
        
        var promise = document.querySelector('video').play();
        if (promise !== undefined) {
        promise.then(() => {
            console.log ("Auto-play started from click event");
            this.removeEventListener('click', handler);
            
        }).catch((error) => {
            console.log ("Auto-play failed click event", error)
        });
      }
});

    
  	this.productsService.getProducts().subscribe(product => { 
  	  product.filter((item: Product) => {
         if(item.category == 'tools')
         	this.products.push(item)
      })
    });
    document.body.classList.add('tools-bg'); // Add class in body
    //document.getElementsByClassName("header-type")[0].classList.add("header-tools");  // Change header 4 class
    
  }

  ngOnDestroy(){
    document.body.classList.remove('tools-bg');
    //document.getElementsByClassName("header-type")[0].classList.remove("header-tools");
  }

}
