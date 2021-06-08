import { PROMOCODES } from './PromoCodesDB';
import { Injectable } from '@angular/core';
import { ITEMS } from './itemDB';
import { Items } from "./item";
import { UserService } from './user.service';
import { PromoCode } from './promoCode';

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  itemSelected: Items = {id: 0, name: "", prezzo: 0, categoria:"" , imgUrl: ""};

  constructor(public service: UserService) { }

  getItems(category: string | null = null){
    if (category === "tutto") {
      category = null;
    }

    return ITEMS.filter(i => i.categoria === category || category == null);
  }

  SelectItem(id: number){
    for (let index = 0; index < ITEMS.length; index++) {
      if (ITEMS[index].id == id) {
        this.itemSelected = ITEMS[index];
        this.buy(this.itemSelected);
      }
    }
  }

  buy(item: Items){
    this.service.addToCart(item);
    console.log("Aggiunto al carrello:"+ item.name+ " id:"+item.id+ " prezzo:"+item.prezzo);
  }

  applyCode(PromoCode: string){

    let calculatedDiscount: number = 0;

    for (let index = 0; index < PROMOCODES.length; index++) {
      if(PROMOCODES[index].code === PromoCode){
        calculatedDiscount = PROMOCODES[index].discount;
      }
    }

    if(calculatedDiscount != 0){
      this.service.addPromoCode({code: PromoCode, discount: calculatedDiscount});
    }
  }
}
