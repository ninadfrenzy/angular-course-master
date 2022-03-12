import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productList: Array<Product> = [];
  productDetails: Array<Product> = [];
  selectedProduct: Product = {} as Product;
  constructor(private productService: ProductService, public authService: AuthService) { }

  ngOnInit(): void {

    this.productService.getProductList().subscribe({
      next: (products) => {
        this.productList = products;
      }
    })
  }

  findProductById(productId: any) {
    
  }

}
