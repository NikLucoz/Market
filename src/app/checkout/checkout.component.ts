import { Router } from '@angular/router';
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

  constructor(private snackBar: MatSnackBar, public userService: UserService, public shopService: ShopService) { }

  ngOnInit(): void {
    this.cartItems = this.userService.getCartItems();
  }

  getCostoFinale(): number{

    let value: number  = Math.round(this.userService.calculateFinalPrice() * 100) / 100;

    if(value < 0){
      this.costoFinale = 0;
    }else{
      this.costoFinale = value;
    }

    return Math.round(this.userService.calculateFinalPrice() * 100) / 100;
  }

  removeItemFromCart(item: Items){
    this.snackBar.open("Prodotto rimosso dal carrello", "chiudi");
    this.userService.removeFromCart(item);
  }

  payItems(){
    this.userService.payItemsInCart();
  }

  addPromoCode(code: string){
    if(code != ""){
    this.shopService.applyCode(code);
    }
  }

}

