import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { constructor } from 'jquery';
import { Product } from 'src/app/shared/classes/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    products: any;

    constructor(
        private productsService: ProductsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.products = [];
        this.productsService.getProducts().subscribe(product => {
            product.filter((item: Product) => {
                this.products.push(item);
            });
        });
    }
    redirectTo(uri: string) {
        this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate([uri]));
     }

}
