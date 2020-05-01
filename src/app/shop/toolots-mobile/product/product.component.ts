import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-product-mobile',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductMobileComponent implements OnInit {
    bgcolor = '#111111';
    selectedProduct: Product;
    products: Product[];
    selected = new FormControl(0);
    isLoading: boolean;
    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.productsService.getProducts()
            .subscribe(
                products => {
                    this.products = products;
                    this.route.params.subscribe(params => {
                        this.selected.setValue(0);
                        this.isLoading = true;
                        this.selectedProduct = this.products.find(product => product.id === Number(params['id']));
                        setTimeout(() => {
                            this.isLoading = false;
                        }, 1);
                    });
                }
            );
    }

}

