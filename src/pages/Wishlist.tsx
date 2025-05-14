import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon, TrashIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
// Mock data
const wishlistItems = [{
  id: '1',
  title: 'Wireless Noise Cancelling Headphones',
  price: 249.99,
  originalPrice: 299.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.5,
  reviewCount: 120,
  inStock: true,
  addedOn: '2023-06-10'
}, {
  id: '3',
  title: 'Ultra HD 4K Smart TV - 55 Inch',
  price: 499.99,
  originalPrice: 599.99,
  image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.7,
  reviewCount: 215,
  inStock: true,
  addedOn: '2023-06-08'
}, {
  id: '6',
  title: 'Bluetooth Portable Speaker',
  price: 79.99,
  originalPrice: 99.99,
  image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.4,
  reviewCount: 63,
  inStock: false,
  addedOn: '2023-06-05'
}, {
  id: '8',
  title: 'Wireless Gaming Mouse',
  price: 59.99,
  originalPrice: 79.99,
  image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.6,
  reviewCount: 89,
  inStock: true,
  addedOn: '2023-06-01'
}];
const Wishlist = () => {
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          My Wishlist
        </h1>
        {wishlistItems.length === 0 ? <Card className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100">
              <HeartIcon className="h-12 w-12 text-red-600" />
            </div>
            <h2 className="mt-4 text-xl font-medium text-gray-900">
              Your wishlist is empty
            </h2>
            <p className="mt-2 text-gray-600 mb-6">
              Save items you love to your wishlist and review them anytime.
            </p>
            <Link to="/products">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </Card> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map(item => <Card key={item.id} hover className="flex flex-col h-full">
                <div className="relative">
                  <Link to={`/product/${item.id}`} className="block overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105" />
                  </Link>
                  <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white shadow hover:bg-gray-100">
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                  {!item.inStock && <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center py-2 text-sm">
                      Out of Stock
                    </div>}
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="text-sm font-medium text-gray-900 hover:text-indigo-600 line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="mt-2 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => <svg key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>)}
                    </div>
                    <span className="ml-1 text-xs text-gray-500">
                      ({item.reviewCount})
                    </span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && <span className="ml-2 text-sm text-gray-500 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Added on {item.addedOn}
                  </p>
                  <div className="mt-4 mt-auto">
                    <Button variant="primary" size="sm" fullWidth className="flex items-center justify-center" disabled={!item.inStock}>
                      <ShoppingCartIcon className="h-4 w-4 mr-1" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>}
        {wishlistItems.length > 0 && <div className="mt-8 flex justify-between items-center">
            <Link to="/products" className="text-indigo-600 hover:text-indigo-800">
              Continue Shopping
            </Link>
            <Button variant="outline">Clear Wishlist</Button>
          </div>}
      </div>
    </div>;
};
export default Wishlist;