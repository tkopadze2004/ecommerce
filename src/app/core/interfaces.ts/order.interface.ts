import { Data } from '@angular/router';
import { Products } from './products';
import { User } from './user.interface';

export interface order {
  id?:string
  userId: string ;
  user: User;
  product: Products[];
  total: number;
  status: 'pending' | 'complited' | 'cancled';
  createdAt: Data;
  shipping: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    email: string;
    fullName: string;
  };
}
