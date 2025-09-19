import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currency: string, lang: string): string {
    return lang === 'en'
      ? `${value} ${currency}`
      : `${currency} ${value}`;
  
  }

}
