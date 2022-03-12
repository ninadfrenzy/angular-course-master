import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { PrProductListComponent } from './pr-product-list/pr-product-list.component';
import { PrProductViewComponent } from './pr-product-view/pr-product-view.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoaderDirective } from './loader.directive';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    PrProductListComponent,
    PrProductViewComponent,
    LoaderDirective,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
