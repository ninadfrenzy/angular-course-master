import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  currentProduct: BehaviorSubject<Product> = new BehaviorSubject<Product>({name: '', id: ''});
  constructor(private httpClient: HttpClient) { }

  // addProduct(product: Product) {
  //   this.productDetails.push(product);
  //   this.productList.push({id: product.id, name: product.name});
  // }
  // deleteProduct(product: Product) {
  //   let index = this.getProductIndex(product.id);
  //   this.productDetails = this.productDetails.splice(index, 1);
  //   this.productList = this.productList.splice(index, 1);
  // }
  // updateProduct(product: Product) {
  //   let index = this.getProductIndex(product.id);
  //   this.productDetails[index] = product;
  //   this.productList[index] = {id: product.id, name: product.name};
  //   return product;
  // }
  getProductById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>('https://61de43e5f60e8f0017668c3c.mockapi.io/products/'+productId);
  }
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://61de43e5f60e8f0017668c3c.mockapi.io/products');
  }
  // getProductIndex(productId: string) {
  //   return this.productDetails.map((item) => item.id).indexOf(productId);
  // }
  updateCurrentProduct(productId: string) {
    this.getProductById(productId).subscribe({
      next: (product) => {
        this.currentProduct.next(product);
      }
    })
    
  }
}
