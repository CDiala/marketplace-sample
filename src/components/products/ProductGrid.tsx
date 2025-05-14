import React from 'react';
import ProductCard from './ProductCard';
interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  inWishlist?: boolean;
}
interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  columns?: 2 | 3 | 4 | 5;
}
const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  columns = 4
}) => {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
  };
  if (loading) {
    return <div className={`grid ${columnClasses[columns]} gap-6`}>
        {[...Array(8)].map((_, index) => <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3" />
              <div className="h-8 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>)}
      </div>;
  }
  if (products.length === 0) {
    return <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No products found</h3>
        <p className="mt-2 text-gray-500">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>;
  }
  return <div className={`grid ${columnClasses[columns]} gap-6`}>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </div>;
};
export default ProductGrid;