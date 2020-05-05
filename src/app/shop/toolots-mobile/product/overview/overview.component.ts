import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
    selector: 'app-product-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    // Slick slider config
    public productSlideConfig: any = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 3000,
        // tslint:disable-next-line: max-line-length
        nextArrow: '<i class=\'side-scroller-arrow fa fa-chevron-circle-right\' style=\'font-size: 36px; right: 16px; position: absolute;\'></i>',
        // tslint:disable-next-line: max-line-length
        prevArrow: '<i class=\'side-scroller-arrow fa fa-chevron-circle-left\' style=\'font-size: 36px; margin-left: 16px; position: absolute;\'></i>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
    @Input() product: Product;
    @ViewChild('myScrollContainer') private myScrollContainer: ElementRef;
    @ViewChild('slickModal') private slickModal: SlickCarouselComponent;
    constructor(
        public cartService: CartService
    ) { }

    slickInit(e) {
        console.log('slick initialized');
      }
    ngOnInit() {
    }
    scrollToBottom(event): void {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }
    // Add to cart
    public addToCart(product: Product,  quantity: number = 1) {
        this.cartService.addToCart(product, quantity);
    }

}
