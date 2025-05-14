import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
} from "lucide-react";
import ProductGrid from "../components/products/ProductGrid";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
// Mock data
const featuredProducts = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviewCount: 120,
    isNew: true,
  },
  {
    id: "2",
    title: "Smart Watch with Heart Rate Monitor",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    reviewCount: 98,
  },
  {
    id: "3",
    title: "Ultra HD 4K Smart TV - 55 Inch",
    price: 499.99,
    originalPrice: 599.99,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewCount: 215,
  },
  {
    id: "4",
    title: "Professional DSLR Camera with 18-55mm Lens",
    price: 799.99,
    originalPrice: 899.99,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
  },
];
const newArrivals = [
  {
    id: "5",
    title: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    reviewCount: 78,
    isNew: true,
  },
  {
    id: "6",
    title: "Bluetooth Portable Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    reviewCount: 63,
    isNew: true,
  },
  {
    id: "7",
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.1,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: "8",
    title: "Wireless Gaming Mouse",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewCount: 89,
    isNew: true,
  },
];
const categories = [
  {
    id: "electronics",
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fashion",
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "home",
    name: "Home & Garden",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "beauty",
    name: "Beauty & Health",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];
const Home = () => {
  return (
    <div className="bg-gray-50 w-full">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shop Millions of Products from Trusted Sellers
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Discover the best deals, latest trends, and exclusive offers all
              in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-100"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-indigo-600"
              >
                Become a Seller
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <Link
            to="/products"
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            Browse All Categories <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200 mt-1">Shop Now</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <Link
            to="/products?featured=true"
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            View All <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={featuredProducts} columns={4} />
      </section>
      {/* Banner */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Summer Sale is Live!
                </h2>
                <p className="text-indigo-100 mb-6 text-lg">
                  Get up to 50% off on thousands of products. Limited time
                  offer.
                </p>
                <Button
                  variant="primary"
                  className="bg-white text-indigo-600 hover:bg-gray-100 self-start"
                >
                  Shop the Sale
                </Button>
              </div>
              <div className="md:w-2/5 bg-indigo-500">
                <img
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Summer Sale"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            New Arrivals
          </h2>
          <Link
            to="/products?new=true"
            className="text-indigo-600 hover:text-indigo-800 flex items-center text-sm font-medium"
          >
            View All <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <ProductGrid products={newArrivals} columns={4} />
      </section>
      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <TruckIcon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered to your doorstep quickly and safely.
              </p>
            </Card>
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Buyer Protection</h3>
              <p className="text-gray-600">
                Shop with confidence with our money-back guarantee and buyer
                protection.
              </p>
            </Card>
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <CreditCardIcon className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Multiple secure payment options with end-to-end encryption.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sign Up for Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest updates, deals and exclusive offers straight to
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <Button variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
