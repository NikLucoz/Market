import { Items } from './../item';
import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from '../product-info.service';
import { Router } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent implements OnInit {

  selectedProduct: Items = {id: 0, name: "", prezzo: 0, categoria:"" , imgUrl: ""};

  constructor(public shopService: ShopService, public service: ProductInfoService, public router: Router) { }

  ngOnInit(): void {
    this.selectedProduct = this.service.getProd();
  }

  returnToShop(){
    this.router.navigate(["shop"]);
  }

  buyItem(){
    this.shopService.buy(this.selectedProduct);
  }

}
