export type Category = 'Helmets' | 'Gloves' | 'Gear' | 'Accessories';

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  subcategory: string;
  colors: string[];
  sizes: Array<'S' | 'M' | 'L' | 'XL'>;
  tags: string[];
  imageDataUri: string;

  // Optional extended details (used on the product details page).
  brand?: string;
  certificates?: string[];
  materials?: string[];
  season?: string;
  fit?: string;
  weightGrams?: number;
  warrantyMonths?: number;
  modelYear?: number;
  sku?: string;
  inBox?: string[];
  features?: string[];
};

export type Filters = {
  category: Category | 'All';
  subcategory: string | 'All';
  colors: string[];
  sizes: Array<'S' | 'M' | 'L' | 'XL'>;
};

