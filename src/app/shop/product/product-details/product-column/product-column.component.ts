import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import * as $ from 'jquery';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-product-column',
  templateUrl: './product-column.component.html',
  styleUrls: ['./product-column.component.scss']
})
export class ProductColumnComponent implements OnInit {

  public product            :   Product = {};
  public products           :   Product[] = [];
  public counter            :   number = 1; 
  public selectedSize       :   any = '';
  public lightboxSrc        :   any[] = [];

  // @ViewChild('topReviewsTab') topReviewsTab: ElementRef;


  //Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router, private lightbox: Lightbox,
    public productsService: ProductsService, private wishlistService: WishlistService,
    private cartService: CartService) {
      this.route.params.subscribe(params => {
        const id = +params['id'];
        this.productsService.getProduct(id).subscribe(product => {
          this.product = product;
          this.product.pictures.forEach(pictureUrl => {
            this.lightboxSrc.push(
              { src: pictureUrl }
            )
          });
        }
          )
      });
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  public slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  public increment() { 
      this.counter += 1;
  }

  public decrement() {
      if(this.counter >1){
          this.counter -= 1;
      }
  }


  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    this.cartService.addToCart(product, parseInt(quantity));
  }

  // Add to cart
  public buyNow(product: Product, quantity) {
     if (quantity > 0) 
       this.cartService.addToCart(product,parseInt(quantity));
       this.router.navigate(['/home/checkout']);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
     this.wishlistService.addToWishlist(product);
  }
  
  // Change size variant
  public changeSizeVariant(variant) {
     this.selectedSize = variant;
  }

  scrollToEl(el: HTMLElement, tab) {
    tab.click();
    el.scrollIntoView();
  }
  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.lightboxSrc, index);
    console.log(this.lightboxSrc);
  }
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
