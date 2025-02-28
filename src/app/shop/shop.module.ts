import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BarRatingModule } from "ngx-bar-rating";
import { RangeSliderModule } from 'ngx-rangeslider-component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxImgZoomModule } from 'ngx-img-zoom';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { LightboxModule } from 'ngx-lightbox';

// home-toolots components
import { HomeToolotsComponent } from './toolots/home-toolots.component';
import { HomeThirteenComponent } from './home-13/home-thirteen.component';
import { SliderThirteenComponent } from './home-13/slider/slider.component';
import { AboutComponent } from './home-13/about/about.component';
import { CollectionSliderThirteenComponent } from './home-13/collection-slider/collection-slider.component';
import { PopularProductsComponent } from './home-13/popular-products/popular-products.component';
import { FilterProductsComponent } from './home-13/filter-products/filter-products.component';
import { ProductTabThirteenComponent } from './home-13/product-tab/product-tab.component';
import { LogoThirteenComponent } from './home-13/logo/logo.component';

import { ToolotsCollectionSliderThirteenComponent } from './toolots/collection-slider/collection-slider.component';
import { ToolotsPopularProductsComponent } from './toolots/popular-products/popular-products.component';
import { ToolotsFilterProductsComponent } from './toolots/filter-products/filter-products.component';
import { ToolotsProductTabThirteenComponent } from './toolots/product-tab/product-tab.component';
import { ToolotsLogoThirteenComponent } from './toolots/logo/logo.component';



// Products Components 
import { ProductComponent } from './product/product.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { ProductBoxHoverComponent } from './product/product-box-hover/product-box-hover.component';
import { ProductBoxVerticalComponent } from './product/product-box-vertical/product-box-vertical.component';
import { ProductBoxMetroComponent } from './product/product-box-metro/product-box-metro.component';
import { CollectionLeftSidebarComponent } from './product/collection/collection-left-sidebar/collection-left-sidebar.component';
import { CollectionRightSidebarComponent } from './product/collection/collection-right-sidebar/collection-right-sidebar.component';
import { CollectionNoSidebarComponent } from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import { ColorComponent } from './product/collection/filter/color/color.component';
import { BrandComponent } from './product/collection/filter/brand/brand.component';
import { PriceComponent } from './product/collection/filter/price/price.component';
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
import { RelatedProductsComponent } from './product/product-details/related-products/related-products.component';
import { BoughtTogetherComponent } from './product/product-details/bought-together/bought-together.component';

import { SidebarComponent } from './product/product-details/sidebar/sidebar.component';
import { CategoriesComponent } from './product/widgets/categories/categories.component';
import { QuickViewComponent } from './product/widgets/quick-view/quick-view.component';
import { ModalCartComponent } from './product/widgets/modal-cart/modal-cart.component';
import { NewProductComponent } from './product/widgets/new-product/new-product.component';
import { FrequentlyBoughtProductComponent } from './product/widgets/frequently-bought-product/frequently-bought-product.component';

import { ToolotsReviewModalComponent } from './product/widgets/toolots-review-modal/toolots-review-modal.component';
import { WhyLowPriceModalComponent } from './product/widgets/why-low-price-modal/why-low-price-modal.component';


import { ProductCompareComponent } from './product/product-compare/product-compare.component';
import { WishlistComponent } from './product/wishlist/wishlist.component';
import { CartComponent } from './product/cart/cart.component';
import { CheckoutComponent } from './product/checkout/checkout.component';
import { SuccessComponent } from './product/success/success.component';
import { ExitPopupComponent } from './product/widgets/exit-popup/exit-popup.component';
import { AgeVerificationComponent } from './product/widgets/age-verification/age-verification.component';
import { NewsletterComponent } from './product/widgets/newsletter/newsletter.component';

import { ToolotsSliderComponent } from './toolots/slider/slider.component';
import { AboutToolotsComponent } from './toolots/about/about.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { ListComponent } from './toolots-mobile/list/list.component';
import { SettingsComponent } from './toolots-mobile/settings/settings.component';
import { OverviewComponent } from './toolots-mobile/product/overview/overview.component';
import { RelatedComponent } from './toolots-mobile/product/related/related.component';
import { ProductMobileComponent } from './toolots-mobile/product/product.component';
import { SearchComponent } from './toolots-mobile/search/search.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


import { CompanyComponent } from './toolots-mobile/company/company.component';
import { MenuComponent } from './toolots-mobile/menu/menu.component';

@NgModule({
    exports: [ExitPopupComponent],
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatTabsModule,
        MatGridListModule,
        MatListModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShopRoutingModule,
        SharedModule,
        SlickCarouselModule,
        BarRatingModule,
        RangeSliderModule,
        InfiniteScrollModule,
        NgxPayPalModule,
        NgxImgZoomModule,
        NgxImageZoomModule.forRoot(),
        LightboxModule,
        TooltipModule,
        NgbModule,
        CollapseModule.forRoot()
    ],
    declarations: [
        ToolotsCollectionSliderThirteenComponent,
        ToolotsPopularProductsComponent,
        ToolotsFilterProductsComponent,
        ToolotsProductTabThirteenComponent,
        ToolotsLogoThirteenComponent,
        WhyLowPriceModalComponent,
        ToolotsReviewModalComponent,
        ToolotsSliderComponent,
        AboutToolotsComponent,

        HomeToolotsComponent,

        // home thirteen
        HomeThirteenComponent,
        SliderThirteenComponent,
        AboutComponent,
        CollectionSliderThirteenComponent,
        PopularProductsComponent,
        FilterProductsComponent,
        ProductTabThirteenComponent,
        LogoThirteenComponent,


        // Product
        ProductComponent,
        ProductBoxComponent,
        ProductBoxHoverComponent,
        ProductBoxVerticalComponent,
        ProductBoxMetroComponent,
        CollectionLeftSidebarComponent,
        CollectionRightSidebarComponent,
        CollectionNoSidebarComponent,
        ColorComponent,
        BrandComponent,
        PriceComponent,
        ProductLeftSidebarComponent,
        ProductRightSidebarComponent,
        ProductNoSidebarComponent,
        ProductColLeftComponent,
        ProductColRightComponent,
        ProductColumnComponent,
        ProductAccordianComponent,
        ProductLeftImageComponent,
        ProductRightImageComponent,
        ProductVerticalTabComponent,
        RelatedProductsComponent,
        BoughtTogetherComponent,
        SidebarComponent,
        CategoriesComponent,
        QuickViewComponent,
        ModalCartComponent,
        NewProductComponent,
        FrequentlyBoughtProductComponent,
        SearchComponent,
        ProductCompareComponent,
        WishlistComponent,
        CartComponent,
        CheckoutComponent,
        SuccessComponent,
        ExitPopupComponent,
        AgeVerificationComponent,
        NewsletterComponent,



        // mobile new
        ListComponent,
        SettingsComponent,
        OverviewComponent,
        RelatedComponent,
        ProductMobileComponent,
        CompanyComponent,
        MenuComponent,
    ]
})
export class ShopModule { }
