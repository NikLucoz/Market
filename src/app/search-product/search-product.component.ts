import { ITEMS } from './../itemDB';
import { Items } from './../item';
import { ProductInfoService } from './../product-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  items: Items[] = [];

  constructor(public InfoService: ProductInfoService) { }

  ngOnInit(): void {
  }

  showItemInformation(prod: Items){
    this.InfoService.showProductInfo(prod);
  }

  populateItem(filterValue: string){
    //console.log(this.items);
    this.items = [];

    for (let index = 0; index < ITEMS.length; index++) {

      if(filterValue != " "){
        if((ITEMS[index].name).toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()) || (ITEMS[index].categoria).toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())){
          this.items.push(ITEMS[index]);
        }
      }

    }
  }

}
