import { ContattiComponent } from './contatti/contatti.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'visualizzaProdotto', component: ProductInfoComponent },
  { path: 'cercaProdotto', component: SearchProductComponent },
  { path: 'contatti', component: ContattiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
