import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import {productList, productDetails} from '../products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productList: Array<Product> = [];
  productDetails: Array<Product> = [];
  selectedProduct: Product = {} as Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productDetails = this.productService.productDetails;
    this.productList = this.productService.productList;
    this.selectedProduct = this.productDetails[0];
  }

  findProductById(productId: any) {
    this.selectedProduct = this.productService.getProductById(productId);
  }


}
