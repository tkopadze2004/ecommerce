export interface Products {
  id: string;
  name: string;
  description: string;
  instock: boolean;
  price: string;
  discount: string;
  image: string[];
  colors: string[];
  sizes: string[];

  review: {
    stars: number;
    count: number;
  };
  categoryId: string;
}
