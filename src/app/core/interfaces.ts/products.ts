import { SIZE } from "../types/size.type";

export interface Products {
  id: string;
  name: string;
  description: string;
  instock?: boolean;
  price: string;
  discount: string;
  image: string[];
  colorId: string;
  size: SIZE;
  categoryId: string;

  review: review;
}

export interface review {
  stars: number;
  count: number;
}
