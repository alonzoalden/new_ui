import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeToolotsComponent } from './toolots/home-toolots.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import { ProductLeftSidebarComponent } from './product/product-details/product-left-sidebar/product-left-sidebar.component';
import { ProductRightSidebarComponent } from './product/product-details/product-right-sidebar/product-right-sidebar.component';
import { ProductNoSidebarComponent } from './product/product-details/product-no-sidebar/product-no-sidebar.component';
import { ProductColLeftComponent } from './product/product-details/product-col-left/product-col-left.component';
import { ProductColRightComponent } from './product/product-details/product-col-right/product-col-right.component';
import { ProductColumnComponent } from './product/product-details/product-column/product-column.component';
import { ProductAccordianComponent } from './product/product-details/product-accordian/product-accordian.component';
import { ProductLeftImageComponent } from './product/product-details/product-left-image/product-left-image.component';
import { ProductRightImageComponent } from './product/product-details/product-right-image/product-right-image.component';
import { ProductVerticalTabComponent } from './product/product-details/product-vertical-tab/product-vertical-tab.component';
// import { SearchComponent } from './product/search/search.component';
import { SearchComponent } from './toolots-mobile/search/search.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';
import { ListComponent } from './toolots-mobile/list/list.component';
import { ProductComponent } from './product/product.component';
import { ProductMobileComponent } from './toolots-mobile/product/product.component';
import { CompanyComponent } from './toolots-mobile/company/company.component';
import { MenuComponent } from './toolots-mobile/menu/menu.component';
import { AboutToolotsComponent } from './toolots/about/about.component';

// Routes
const routes: Routes = [
    {
        path: 'toolots',
        component: HomeToolotsComponent,
    },
    {
        path: 'toolots/all',
        component: ListComponent,
    },
    {
        path: 'toolots/product/:id',
        component: ProductMobileComponent,
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'toolots/searchmobile',
        component: SearchComponent,
        pathMatch: 'full',
    },
    {
        path: 'toolots/company/:id',
        component: CompanyComponent,
        pathMatch: 'full',
    },
    {
        path: 'toolots/menu',
        component: MenuComponent,
        pathMatch: 'full',
    },
    {
        path: 'home/toolots/about',
        component: AboutToolotsComponent
    },
    {
        path: 'left-sidebar/collection/:category',
        component: CollectionLeftSidebarComponent
    },
    {
        path: 'right-sidebar/collection/:category',
        component: CollectionRightSidebarComponent
    },
    {
        path: 'no-sidebar/collection/:category',
        component: CollectionNoSidebarComponent
    },
    {
        path: 'left-sidebar/product/:id',
        component: ProductLeftSidebarComponent
    },
    {
        path: 'right-sidebar/product/:id',
        component: ProductRightSidebarComponent
    },
    {
        path: 'no-sidebar/product/:id',
        component: ProductNoSidebarComponent
    },
    {
        path: 'col-left/product/:id',
        component: ProductColLeftComponent
    },
    {
        path: 'col-right/product/:id',
        component: ProductColRightComponent
    },
    {
        path: 'column/product/:id',
        component: ProductColumnComponent
    },
    {
        path: 'accordian/product/:id',
        component: ProductAccordianComponent
    },
    {
        path: 'left-image/product/:id',
        component: ProductLeftImageComponent
    },
    {
        path: 'right-image/product/:id',
        component: ProductRightImageComponent
    },
    {
        path: 'vertical/product/:id',
        component: ProductVerticalTabComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'wishlist',
        component: WishlistComponent
    },
    {
        path: 'compare',
        component: ProductCompareComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'checkout/success',
        component: SuccessComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
