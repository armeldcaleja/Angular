import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter-product'})

export class FilterProductPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1: return "Test"
            default: return "Test2"
        }
    }
} 