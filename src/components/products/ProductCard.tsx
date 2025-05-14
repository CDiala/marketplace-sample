import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon, ShoppingCartIcon } from 'lucide-react';
import Button from '../ui/Button';
interface ProductCardProps {
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
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isFeatured = false,
  inWishlist = false
}) => {
  const discount = originalPrice ? Math.round((originalPrice - price) / originalPrice * 100) : 0;
  return <div className="group relative bg-white rounded-lg shadow overflow-hidden transition-all hover:shadow-lg">
      {/* Badge */}
      {isNew && <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          New
        </span>}
      {discount > 0 && <span className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          -{discount}%
        </span>}
      {/* Wishlist button */}
      <button className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white shadow hover:bg-gray-100">
        <HeartIcon className={`h-5 w-5 ${inWishlist ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
      </button>
      {/* Product image */}
      <Link to={`/product/${id}`} className="block overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105" />
      </Link>
      {/* Product info */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-sm font-medium text-gray-700 line-clamp-2 hover:text-indigo-600">
            {title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
          </div>
          <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && <span className="ml-2 text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>}
          </div>
        </div>
        <div className="mt-3">
          <Button variant="primary" size="sm" fullWidth className="flex items-center justify-center">
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>;
};
export default ProductCard;