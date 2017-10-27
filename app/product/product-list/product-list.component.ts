import { Component, Input, Output } from '@angular/core';
import { Category } from '../shared/category';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
    @Input() id: number;
    isDollar: boolean;
    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.getProducts();
        this.productService.getCurrency()
            .subscribe(data => {this.isDollar = data}); 
        // this.isDollar = this.productService.isDollar;
        // console.log("isDollar = " + this.isDollar);
    }

    getProducts(): void {
        this.productService.getProducts()
          .subscribe((products) => {
            this.products = products.
                filter(products => products.categoryId === this.id);
          });
    }
} 