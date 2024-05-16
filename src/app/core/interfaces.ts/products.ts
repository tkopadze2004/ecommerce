export interface Products {
  id: string;
  name: string;
  description: string;
  instock: boolean;
  price: string;
  discount: string;
  image: string[];
  colorId: string;
  size: string;
  categoryId: string;

  review: {
    stars: number;
    count: number;
  };
}
