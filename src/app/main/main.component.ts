import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class MainComponent implements OnInit {
  
  public url : any; 

  constructor(private router: Router) {  
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.url = event.url;
          }
    });
  }

  ngOnInit() { 
   $.getScript('assets/js/script.js');
   document.body.addEventListener('click', function handler() {
        
    if (document.querySelector('video')) {
        var promise = document.querySelector('video').play();
        if (promise !== undefined) {
        promise.then(() => {
            console.log ("Auto-play started from click event");
            this.removeEventListener('click', handler);
            
        }).catch((error) => {
            console.log ("Auto-play failed click event", error)
        });
      }
      }
    });

   
  }
  ngAfterViewInit(){
    

    var promise = document.querySelector('video').play();
    
    if (promise !== undefined) {
        promise.then(val => {
            console.log ("Auto-play started from slider component", val);
            // Auto-play was failed
        }).catch((error) => {
            console.log ("Auto-play failed slider component", error)
            // Auto-play started
            document.querySelector('video').play();
        });
    }
  
  
}


}
