export interface Product {
  name: string;
  manufacturer: Manufacturer;
  normalPrice: number;
  currentPrice?: number;
  description?: string;
  // TODO: change to required later, change type if needed
  img?: File;
  nutrients?: string[];
  stock: number;
  sale?: Sale;
  categories: Category[];
}

export interface Manufacturer {
  name: string;
}

export interface Sale {
  multiplier: number;
  startDate: Date;
  endDate: Date;
}

export interface Category {
  name: string;
  color: string;
  textColor: string;
  description: string;
}
