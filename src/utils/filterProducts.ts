import type { Filters, Product } from '../types';

export function filterProducts(products: Product[], filters: Filters) {
  return products.filter((p) => {
    if (filters.category !== 'All' && p.category !== filters.category) return false;
    if (filters.subcategory !== 'All' && p.subcategory !== filters.subcategory) return false;

    if (filters.colors.length > 0) {
      const hasColor = filters.colors.some((c) => p.colors.includes(c));
      if (!hasColor) return false;
    }

    if (filters.sizes.length > 0) {
      const hasSize = filters.sizes.some((s) => p.sizes.includes(s));
      if (!hasSize) return false;
    }

    return true;
  });
}

