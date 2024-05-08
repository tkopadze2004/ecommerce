import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instock',
  standalone: true
})
export class StockPipe implements PipeTransform {

  transform(value?: unknown): 'In Stock' | 'Out Of Stock' {
    return value ? 'In Stock' : 'Out Of Stock';
   }
}
