import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  selectedProduct: Product = {id: '', name: ''};
  productSub: BehaviorSubject<Product> = new BehaviorSubject<Product>({name: '', id: ''});
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSub = this.productService.currentProduct;
    // this.productService.currentProduct.subscribe({
    //   next: (data) => {
    //     this.selectedProduct = data;
    //   }
    // })
  }

}
