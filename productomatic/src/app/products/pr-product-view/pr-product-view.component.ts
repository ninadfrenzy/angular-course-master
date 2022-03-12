import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-pr-product-view',
  templateUrl: './pr-product-view.component.html',
  styleUrls: ['./pr-product-view.component.css']
})
export class PrProductViewComponent implements OnInit {


  selectedProduct: Product = {id: '', name: ''};
  @Input() product!: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }
}
