import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { map } from 'rxjs';
import { CartComponent } from '../pages/profile/cart/cart.component';
import { FirebaseDocument } from '../core/interfaces.ts/firebase-document';
import { category } from '../core/interfaces.ts/category.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService extends ApiService {
  getCategories() {
    return this.get<FirebaseDocument<category>[]>('categories.json')
  }

  getCategoryById(id: string) {
    return this.get<FirebaseDocument<category>>(`categories/${id}.json`)
  }
}
