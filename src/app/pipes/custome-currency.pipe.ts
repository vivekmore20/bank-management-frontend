import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeCurrency'
})
export class CustomeCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  }
}
