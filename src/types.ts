export type Category = string;

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  subcategory: string;
  colors: string[];
  tags: string[];
  imageDataUri: string;

  // Optional extended details for restaurant menu items
  chef?: string;
  calories?: number;
  prepMinutes?: number;
  description?: string;
  ingredients?: string[];
  servedWith?: string[];
  features?: string[];

  // Optional extended details for motorcycle products
  brand?: string;
  sku?: string;
  weightGrams?: number;
  certificates?: string[];
  materials?: string[];
  inBox?: string[];
  warranty?: string;
};

export type Filters = {
  category: string;
  subcategory: string;
  colors: string[];
  search?: string;
};

