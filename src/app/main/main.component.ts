import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { CartService } from '../shared/services/cart.service';
import { WishlistService } from '../shared/services/wishlist.service';
import { FooterDisplayService } from '../shared/services/footer-display.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
declare var $: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [ProductsService, CartService, WishlistService, FooterDisplayService]
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

    public url: any;
    showFooter: boolean;
    private _unsubscribeAll: Subject<boolean>;
    product: any;

    constructor(private router: Router, public footerDisplayService: FooterDisplayService, private productService: ProductsService) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        });
    }

    ngOnInit() {
        this._unsubscribeAll = new Subject();
        $.getScript('assets/js/script.js');
        document.body.addEventListener('click', function handler() {

            if (document.querySelector('video')) {
                const promise = document.querySelector('video').play();
                if (promise !== undefined) {
                    promise.then(() => {
                        console.log('Auto-play started from click event');
                        this.removeEventListener('click', handler);

                    }).catch((error) => {
                        console.log('Auto-play failed click event', error);
                    });
                }
            }
        });

    }
    ngAfterViewInit() {
        document.body.addEventListener('click', function handler() {
            if (document.querySelector('video')) {
                const promise = document.querySelector('video').play();
                if (promise !== undefined) {
                    promise.then(() => {
                        console.log('Auto-play started from click event');
                        this.removeEventListener('click', handler);

                    }).catch((error) => {
                        console.log('Auto-play failed click event', error);
                    });
                }
            }
        });
        this.footerDisplayService.showFooter
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(value => {
                setTimeout(() => this.showFooter = value, 100);
            });
        this.productService.product
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {
                this.product = product;
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
