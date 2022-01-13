import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {productList, productDetails} from '../products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productList: Array<Product> = productList;
  productDetails: Array<Product> = productDetails;
  selectedProduct: Product = this.productDetails[0];
  constructor() { }

  ngOnInit(): void {

  }

  findProductById(productId: any) {
    console.log(productId);
    this.selectedProduct = this.productDetails.filter((product) => {
      return product.id === productId;
    })[0];
  }


}
