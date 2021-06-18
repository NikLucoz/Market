// import { Items } from './item';
// import { StripeService } from 'ngx-stripe';
// import { loadStripe } from '@stripe/stripe-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StripePaymentService {

  constructor() { }

  handler: any = null;

  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'inserire chiave Stripe',
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
      }
    });

    handler.open({
      name: 'Carrello',
      description: 'Oggetti nel carrello',
      amount: amount * 100
      });
    }



  loadstripe(){
    if(window.document.getElementById('stripe-script')){
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>Window).StripeCheckout.configure({
          key: 'inserire chaive Stripe',
          locale: "auto",
          token: function (token: any){
            console.log(token);
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }

  // stripePromise = loadStripe('inserire chiave Stripe');

  // async checkout(cart: Items[]) {
  //   //const stripe = await this.stripePromise;
  //   this.stripePromise.then(x => {

  //       x?.redirectToCheckout({
  //       mode: "payment",
  //       lineItems: this.getLineItems(cart),
  //       //items: [{sku: 'sku_GcouPGOUpl8ULh', quantity: 1}],
  //       successUrl: `${window.location.href}`,
  //       cancelUrl: `${window.location.href}`,
  //     });
  //   })
  // }

  // getLineItems(cart: Items[]){

  //   let lineItems: any[] = [];
  //   let quantity: number = 1;

  //   cart.sort(function(a, b) {
  //     return (a.id).toString().localeCompare(b.id.toString());
  //   });

  //   for (let i = 0; i < cart.length; i++) {
  //     if(i+1 < cart.length){
  //       if(cart[i].id == cart[i+1].id){
  //         quantity++;
  //       }else if(cart[i].id != cart[i+1].id){
  //         const price: string  = cart[i].prezzo.toString();
  //         lineItems.push( { price,  quantity } );
  //         quantity = 1;
  //       }
  //     }

  //   }
  //     console.log(lineItems);
  //     return lineItems;
  // }

}
