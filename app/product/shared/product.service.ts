import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{
    private categoriesUrl = 'http://localhost:8090/categories';
    private productsUrl = 'http://localhost:8090/products';
    isDollar: boolean = true;

    constructor(
        private httpClient: HttpClient
    ) { }
 
    getCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.categoriesUrl)
            .catch(this.handleError);
    } 

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.productsUrl)
            .catch(this.handleError);
    }

    getCurrency(): boolean {
        this.isDollar = !this.isDollar;
        return this.isDollar;
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}