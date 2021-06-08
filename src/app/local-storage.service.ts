import { Items } from './item';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  updateCart(Cart: Items[]){
    localStorage.removeItem("Carrello");

    let value =  JSON.stringify(Cart);

    if(value != null){
      localStorage.setItem("Carrello",value);
    }
  }

  removeFromStorage(key: string){
    localStorage.removeItem(key);
  }

}

