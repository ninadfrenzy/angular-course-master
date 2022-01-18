import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<Product> = [];
  @Output() productIdEvt: EventEmitter<string> = new EventEmitter<string>();
  filterStr: string = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }

  productOnClicked(id: any) {
    //this.productIdEvt.emit(id);
    this.productService.updateCurrentProduct(id);
    
  }

}
