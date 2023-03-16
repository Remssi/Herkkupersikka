export interface Product {
  id: string;
  name: string;
  manufacturerId: number;
  manufacturer: Manufacturer;
  normalPrice: number;
  currentPrice?: number;
  description?: string;
  // TODO: change to required later, change type if needed
  image?: string;
  nutrients?: string[];
  stock: number;
  saleId?: number;
  sale?: Sale;
  categoryIds: number[];
  categories: Category[];
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface Sale {
  id: number;
  multiplier: number;
  startDate: Date;
  endDate: Date;
}

export interface Category {
  id: number;
  name: string;
  color: string;
  textColor: string;
  description: string;
}
