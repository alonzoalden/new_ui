import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

	public product: Product = {};
	public products: Product[] = [];
	public counter: number = 1;
	public selectedSize: any = '';
	public lightboxSrc: any[] = [];
	public voteCount: number = 6;

	// @ViewChild('topReviewsTab') topReviewsTab: ElementRef;

	public slideNavConfig: any;
	public isLoaded: boolean = false;

	//Get Product By Id
	constructor(private route: ActivatedRoute, private router: Router, private lightbox: Lightbox,
		public productsService: ProductsService, private wishlistService: WishlistService,
		private cartService: CartService) {
		
	}

	ngOnInit() {		
		this.productsService.getProducts().subscribe(product => this.products = product);
		this.route.params.subscribe(params => {
			const id = +params['id'];
			this.productsService.getProduct(id).subscribe(product => {
				this.isLoaded = false;
				this.product = product;
				
				this.slideNavConfig = {};
				this.slideNavConfig = {
					vertical: false,
					slidesToShow: this.product.pictures.length - 1,
					slidesToScroll: 1,
					asNavFor: '.main-photo',
					arrows: true,
					nextArrow: "<i class='side-scroller-arrow fa fa-chevron-circle-right' style='margin-left: 4px; font-size: 30px; position: absolute; right: -10px;'></i>",
					prevArrow: "<i class='side-scroller-arrow fa fa-chevron-circle-left' style='margin-right: 4px; font-size: 30px; position: absolute; left: -10px;'></i>",
					dots: false,
					focusOnSelect: true
				}
				console.log(this.slideNavConfig)
				this.lightboxSrc = [];
				this.product.pictures.forEach(pictureUrl => {
					this.lightboxSrc.push(
						{ src: pictureUrl }
					)
				});
				setTimeout(() => this.isLoaded = true, 0);
			}
			)
		});

	}
	ngOnDestroy() {
		this.isLoaded = false;
		console.log('destroying', this.isLoaded)
	}
	public slideConfig = {
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.icon-display',
		arrows: true,
		nextArrow: "<i class='side-scroller-arrow fa fa-chevron-circle-right' style='margin-left: 4px; font-size: 36px; position: absolute; right: -1px; top: 50%;'></i>",
		prevArrow: "<i class='side-scroller-arrow fa fa-chevron-circle-left' style='margin-right: 4px; font-size: 36px; position: absolute; left: 0px; top: 50%;'></i>",
		fade: true,
	};



	public increment() {
		this.counter += 1;
	}

	public decrement() {
		if (this.counter > 1) {
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
			this.cartService.addToCart(product, parseInt(quantity));
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
		el.scrollIntoView();
		if (tab) tab.click();
	}
	open(index: number): void {
		// open lightbox
		this.lightbox.open(this.lightboxSrc, index, { wrapAround: true, showImageNumberLabel: true, alwaysShowNavOnTouchDevices: true });
	}
	close(): void {
		// close lightbox programmatically
		this.lightbox.close();
	}
	changeConfig() {
		this.slideNavConfig.dots = true;
	}
}
