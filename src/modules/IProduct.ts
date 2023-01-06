export interface IProduct {
  category: number;
  color: string;
  heelSize: string;
  id: number;
  images: string[];
  manufacturer: string;
  material: string;
  price: number;
  reason: string;
  season: string;
  sizes: Sizes[];
  sku: number;
  title: string;
}

export interface Sizes {
  size: string;
  avalible: boolean;
}