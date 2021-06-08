import { ShopService } from './../shop.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Items } from '../item';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: Items[] = [];
  costoFinale: number = 0;

  constructor(private snackBar: MatSnackBar, public service: UserService, public service2: ShopService) { }

  ngOnInit(): void {
    this.cartItems = this.service.getCartItems();
  }

  getCostoFinale(): number{

    let value: number  = Math.round(this.service.calculateFinalPrice() * 100) / 100;

    if(value < 0){
      this.costoFinale = 0;
    }else{
      this.costoFinale = value;
    }

    return Math.round(this.service.calculateFinalPrice() * 100) / 100;
  }

  removeItemFromCart(item: Items){
    this.snackBar.open("Prodotto rimosso dal carrello", "chiudi");
    this.service.removeFromCart(item);
  }

  payItems(){
    this.snackBar.open("Prodotti acquistati", "chiudi");
    this.service.payItemsInCart();
  }

  addPromoCode(code: string){
    if(code != ""){
    this.service2.applyCode(code);
    }
  }

}

