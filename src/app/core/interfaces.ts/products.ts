import { SIZE } from "../types/size.type";
import { category } from "./category.interface";
import { colors } from "./colors.interface";

export interface Products {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  instock: boolean;
  image: string[];
  colorId: string;
  size: SIZE;
  review: review,
  categoryId: string;
  // cover?: string;
  category: category;
  color: colors;
  quantity: number;
}

export interface review {
  stars: number;
  count: number;
}
