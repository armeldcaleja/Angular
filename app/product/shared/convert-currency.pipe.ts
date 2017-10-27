import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'convertcurrency'})

export class ConvertCurrencyPipe implements PipeTransform {
    transform(value: number, currency: boolean): string {
        switch (currency) {
            case true: return "$" + value;
            case false: return "P" + (value*51.47);
        }
    }
} 