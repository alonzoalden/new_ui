import { Component, Inject, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../services/windows.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-header-two',
    templateUrl: './header-two.component.html',
    styleUrls: ['./header-two.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderTwoComponent implements OnInit {

    public shoppingCartItems: CartItem[] = [];
    url: any;
    companyBackButton: any;

    constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private route: ActivatedRoute,
        @Inject(WINDOW) private window, private fix: LandingFixService, private cartService: CartService) {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    }

    ngOnInit() {
        $.getScript('assets/js/menu.js');
        if (!this.url) {
            this.url = this.router.url;
        }
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
                if (this.url.includes('/company/')) {
                    const previousID = event.url.split('/company/')[1];
                    this.companyBackButton = previousID;
                }
            }
        });
    }

    openNav() {
        this.fix.addNavFix();
    }

    closeNav() {
        this.fix.removeNavFix();
    }

    // @HostListener Decorator
    // @HostListener('window:scroll', [])
    // onWindowScroll() {
    //     const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    //     if (number >= 300) {
    //         // this.document.getElementById("sticky").classList.add('fixed');
    //     } else {
    //         // this.document.getElementById("sticky").classList.remove('fixed');
    //     }
    // }

    public getTotal(): Observable<number> {
        return this.cartService.getTotalAmount();
    }

}
