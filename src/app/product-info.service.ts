import { Router } from '@angular/router';
import { Items } from './item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  product: Items = {id: 0, name: "", prezzo: 0, categoria:"" , imgUrl: ""};

  constructor(private router: Router) { }

  private populateProd(item: Items){
    this.product = item;
  }

  getProd(){
    return this.product;
  }

  showProductInfo(prod: Items){
    this.populateProd(prod);
    this.router.navigate(['visualizzaProdotto']);
  }

}
