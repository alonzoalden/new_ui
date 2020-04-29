import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { CartItem } from '../../../shared/classes/cart-item';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../../shared/services/cart.service';
import { OrderService } from '../../../shared/services/order.service';
import { Observable, of } from 'rxjs';
//import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('collapseThree') collapseThree: ElementRef;
  @ViewChild('collapseTwo') collapseTwo: ElementRef;
  @ViewChild('collapseOne') collapseOne: ElementRef;


  // form group
  public checkoutFormBilling: FormGroup;
  public checkoutFormShipping: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public orderDetails: number;
  public payPalConfig?: PayPalConfig;
  public billing: Boolean = true;
  public shipping: Boolean = false;
  public shippingComplete: Boolean = false;
  public billingComplete: Boolean = false;
  public amount: any;
  public navbarCollapsed = true;
  public isShipping: boolean = true;
  public shoppingCartItems  :   CartItem[] = [];



  // Form Validator
  constructor(private fb: FormBuilder, private cartService: CartService,
    public productsService: ProductsService, private orderService: OrderService) {
    this.checkoutFormBilling = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      shipping: ['', Validators.required],
    });
    this.checkoutFormShipping = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      shipping: ['', Validators.required],
    });
  }
  ngOnInit() {
    //console.log(this.checkoutFormShipping.shipping)
    //
    //this.isShipping = true;
    // $(function () {
    //   $('[data-toggle="tooltip"]').tooltip()
    // })
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.shoppingCartItems = products);
    this.getTotal().subscribe(amount => this.amount = amount);

    //this.initConfig();
  }

  ngAfterViewInit(){
    // (<HTMLElement>document.getElementById('header-type')).style.display = 'none';
    //(<HTMLElement>document.querySelector('.footer-light')).style.display = 'none';

  }

  ngOnDestroy() {
    // (<HTMLElement>document.getElementById('header-type')).style.display = 'initial';
    // (<HTMLElement>document.querySelector('.footer-light')).style.display = 'initial';
  }

  onSaveShipping() {
    this.shippingComplete = true;
    const collapseTwo = $(this.collapseTwo.nativeElement);
    setTimeout(()=> {
      collapseTwo.collapse('show');
    }, 600)
  }

  onSaveBilling() {
    this.billingComplete = true;
    const collapseThree = $(this.collapseThree.nativeElement);
    setTimeout(()=> {
      collapseThree.collapse('show');
    }, 600)
  }


  copyCheckoutForm(e) {
    this.checkoutFormBilling = this.checkoutFormShipping;
  }

  // Get sub Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  captureEmail(inputText: any) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        //alert('SUCCESS! EMAIL SAVED: ' + inputText.value);
    }
    else {
        console.log('INVALID EMAIL, IGNORING: ' + inputText.value);
        //alert('INVALID EMAIL, IGNORING: ' + inputText.value);
        return false;
    }
}


  // stripe payment gateway
  // stripeCheckout() {
  //     var handler = (<any>window).StripeCheckout.configure({
  //       key: 'PUBLISHBLE_KEY', // publishble key
  //       locale: 'auto',
  //       token: (token: any) => {
  //         // You can access the token ID with `token.id`.
  //         // Get the token ID to your server-side code for use.
  //         this.orderService.createOrder(this.checkOutItems, this.checkoutFormBilling.value, token.id, this.amount);
  //       }
  //     });
  //     handler.open({
  //       name: 'Multikart',
  //       description: 'Online Fashion Store',
  //       amount: this.amount * 100
  //     })
  // }

  // Paypal payment gateway
  private initConfig(): void {
      this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
        commit: true,
        client: {
          sandbox: 'CLIENT_ID', // client Id
        },
        button: {
          label: 'paypal',
          size:  'small',    // small | medium | large | responsive
          shape: 'rect',     // pill | rect
          //color: 'blue',   // gold | blue | silver | black
          //tagline: false
        },
        onPaymentComplete: (data, actions) => {
          this.orderService.createOrder(this.checkOutItems, this.checkoutFormBilling.value, data.orderID, this.amount);
        },
        onCancel: (data, actions) => {
          console.log('OnCancel');
        },
        onError: (err) => {
          console.log('OnError');
        },
        transactions: [{
          amount: {
            currency: this.productsService.currency,
            total: this.amount
          }
        }]
      });
  }


}
