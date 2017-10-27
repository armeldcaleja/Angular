import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../shared/category';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-product-details',
    templateUrl: './product-details-list.component.html'
})

export class ProductDetailsListComponent {
    products: Product[];
    category: Category;
    categoryId: number;
    test: string;

    constructor(  
        private productService: ProductService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.categoryId = (+this.route.snapshot.params['id']);
        this.getCategory();
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts()
            .subscribe((products) => {
                this.products = products.
                    filter(products => products.categoryId === this.categoryId);
            });
    }

    getCategory(): void {
        this.productService.getCategories()
            .subscribe((categories) => {
            this.category = categories.
                find(category => category.id === this.categoryId);
            });
    }
}