export interface Product {
  _id: string;
  name: string;
  photo: string;
  price: number;
  weight: number;
  category_id?: string;
  count: number;
  buycount?: number;
}
