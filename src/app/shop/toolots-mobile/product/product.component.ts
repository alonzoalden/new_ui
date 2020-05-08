import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FooterDisplayService } from 'src/app/shared/services/footer-display.service';

@Component({
    selector: 'app-product-mobile',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductMobileComponent implements OnInit, OnDestroy {
    bgcolor = '#111111';
    selectedProduct: Product;
    products: Product[];
    selected = new FormControl(0);
    isLoading: boolean;
    constructor(
        private productsService: ProductsService,
        private footerDisplayService: FooterDisplayService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.productsService.getProducts()
            .subscribe(
                products => {
                    this.products = products;
                    this.route.params.subscribe(params => {
                        this.isLoading = true;
                        this.selectedProduct = this.products.find(product => product.id === Number(params['id']));

                        this.route.params.subscribe(routeParams => {
                            const id = +routeParams['id'];
                            this.productsService.product
                                .subscribe(item => {
                                    if (!item) {
                                        this.productsService.product.next(this.products.find(product => product.id === id));
                                    }
                                });
                        });

                        setTimeout(() => {
                            this.isLoading = false;
                        }, 1);
                    });
                }
            );
        this.selected.setValue(0);
        this.footerDisplayService.onShowFooter(true);

    }
    ngOnDestroy() {
        this.footerDisplayService.onShowFooter(false);
    }
    onShowFooter() {
        if (this.selected.value === 0) {
            this.footerDisplayService.onShowFooter(true);
        } else {
            this.footerDisplayService.onShowFooter(false);
        }
    }

}

