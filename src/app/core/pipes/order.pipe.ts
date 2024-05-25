import { Pipe, PipeTransform } from '@angular/core';
import { status } from '../interfaces.ts/order.interface';

@Pipe({
  name: 'order',
  standalone: true,
})
export class OrderPipe implements PipeTransform {
  transform(value: status): string {
    switch (value) {
      case 'pending':
        return 'Pending';
      case 'complited':
        return 'Complited';
      case 'cancled':
        return 'Cancled';
    }
  }
}
