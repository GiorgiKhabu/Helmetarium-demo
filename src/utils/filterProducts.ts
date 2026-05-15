import type { Filters, Product } from '../types';

export function filterProducts(products: Product[], filters: Filters) {
  return products.filter((p) => {
    if (filters.category !== 'All' && p.category !== filters.category) return false;
    if (filters.subcategory !== 'All' && p.subcategory !== filters.subcategory) return false;

    if (filters.colors.length > 0) {
      const hasColor = filters.colors.some((c) => p.colors.includes(c));
      if (!hasColor) return false;
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesName = p.name.toLowerCase().includes(searchLower);
      const matchesTags = p.tags.some(tag => tag.toLowerCase().includes(searchLower));
      const matchesCategory = p.category.toLowerCase().includes(searchLower);
      const matchesSubcategory = p.subcategory.toLowerCase().includes(searchLower);
      if (!matchesName && !matchesTags && !matchesCategory && !matchesSubcategory) return false;
    }

    return true;
  });
}

