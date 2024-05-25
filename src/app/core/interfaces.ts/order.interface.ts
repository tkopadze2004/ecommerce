import { Data } from '@angular/router';
import { Products } from './products';
import { User } from './user.interface';

export type status= 'pending' | 'complited' | 'cancled'

export interface order {
  id?:string
  userId: string ;
  user: User;
  products: Products[];

  total: number;
  status: 'pending' | 'complited' | 'cancled';
  createdAt: Date;
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
