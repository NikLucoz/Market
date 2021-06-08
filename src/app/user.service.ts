import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Items } from './item';
import { PROMOCODES } from './PromoCodesDB';
import { PromoCode } from './promoCode';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userCart: Items[] = [];
  prezzoFinale: number = 0;

  constructor(public service: LocalStorageService) { }

  addToCart(item: Items){
    this.userCart.push(item);
    this.service.updateCart(this.userCart);
  }

  removeFromCart(item: Items){
    const index = this.userCart.findIndex(i => i.id == item.id);
    if(index >= 0){
      this.userCart.splice(index, 1);
      this.service.updateCart(this.userCart);
    }

    /*for (let index = 0; index < this.userCart.length; index++) {
      if(this.userCart[index].id === item.id){
        this.userCart.splice(index, 1);
      }
    }*/
  }

  getCartItems(){
    if (localStorage.getItem("Carrello") != null){

      let value = localStorage.getItem("Carrello");

      if(value != null){
        this.userCart = JSON.parse(value);
      }

      this.calculateFinalPrice();
      return this.userCart;

    } else {

      this.service.updateCart(this.userCart);
      this.calculateFinalPrice();
      return this.userCart;
    }
  }

  calculateFinalPrice(): number{
    var finalPrice: number = 0;

    for (let index = 0; index < this.userCart.length; index++) {
      finalPrice += this.userCart[index].prezzo;
    }

    return finalPrice;
  }

  payItemsInCart(){
    this.prezzoFinale = 0;
    this.userCart = [];
    this.service.removeFromStorage("Carrello")
  }

  addPromoCode(Code: PromoCode){
    this.userCart.push({id:100,name: Code.code, prezzo: -Code.discount, categoria:"Codice Promozionale", imgUrl:""});
    this.service.updateCart(this.userCart);
  }

}
