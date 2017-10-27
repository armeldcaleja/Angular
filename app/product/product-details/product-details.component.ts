import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../shared/category';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(  
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.productId = (+this.route.snapshot.params['id']);
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
        .subscribe((products) => {
            this.product = products.
                find(products => products.id === this.productId);
        });
    }

}
