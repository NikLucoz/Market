import { Items } from './../item';
import { Router } from '@angular/router';
import { ShopService } from './../shop.service';
import { Component, OnInit, Inject} from '@angular/core';
import { ProductInfoService } from '../product-info.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  item: Items[] = [];

  selectedFilter: string | null = null;

  listOptions = [
    { categoria: "tutto" },
    { categoria: "pasta" },
    { categoria: "latticini" },
    { categoria: "pesce" },
    { categoria: "frutta" },
    { categoria: "verdura" },
    { categoria: "snack" },
    { categoria: "surgelati" },
    { categoria: "carne" },
    { categoria: "bevande" },
  ];

  constructor(private snackBar: MatSnackBar, public service: ShopService, public productInfo: ProductInfoService, public router: Router) { }

  ngOnInit(): void {
    this.populateItems();
  }

  populateItems(){
    this.item = this.service.getItems(this.selectedFilter);
  }

  buyItem(id: number){
    this.snackBar.open("Prodotto aggiunto al carrello", "chiudi");
    this.service.SelectItem(id);
  }

  showProductInfo(prod: Items){
    this.productInfo.showProductInfo(prod);
  }
}
