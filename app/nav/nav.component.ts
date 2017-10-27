import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/shared/product.service';

@Component({
    selector: 'my-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent { 
    isDollar: boolean;
    cnt: number = 0;
    
    constructor (private productService: ProductService) { }
    
    ngOnInit(): void {
        
    }

    setCurrency(): void{
        this.isDollar = this.productService.getCurrency();
    }
} 