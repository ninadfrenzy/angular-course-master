import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { LoaderDirective } from '../loader.directive';
import { PrProductViewComponent } from '../pr-product-view/pr-product-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: Array<Product> = [];
  productDetails: Array<Product> = [];
  selectedProduct: Product = {} as Product;
  @ViewChild(LoaderDirective, { static: true }) viewTemplate!: LoaderDirective;
  constructor(
    private productService: ProductService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe({
      next: (products) => {
        this.productList = products;
      },
    });

    this.productService.currentProduct.subscribe((newProduct: Product) => {
      const contRef = this.viewTemplate.containerRef;
      contRef.clear();
      if (newProduct.id.length > 0) {
        const componentRef: ComponentRef<PrProductViewComponent> =
          contRef.createComponent(PrProductViewComponent);
        componentRef.instance.product = newProduct;
      }
    });
  }

  findProductById(productId: any) {}
}
