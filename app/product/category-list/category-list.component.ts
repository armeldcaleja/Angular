import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { Product } from '../shared/product';

import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'my-product',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent {
  categories: Category[];
  products: Product[];
  isExpandedAll: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.productService.getCategories()
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products
      });
  } 

  getTotalProducts(id: number): any {
      return this.products.filter(product => product.categoryId === id).length;
  } 

  expandAll(): void{
    let expandedChecker: boolean = false;
    for(let category of this.categories){
      if(category.isExpanded){
        expandedChecker = true;
        break;
      }
    }

    for(let category of this.categories){
      category.isExpanded = expandedChecker == true ? false: true;
    }
  }
}
