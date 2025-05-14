import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
  LogOutIcon,
} from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // In a real app, this would come from auth context
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              MarketPlace
            </Link>
          </div>
          {/* Search - hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products, categories, brands..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          {/* Nav Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-indigo-600"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              to="/wishlist"
              className="p-2 text-gray-600 hover:text-indigo-600 hidden sm:block"
            >
              <HeartIcon className="h-6 w-6" />
            </Link>
            <div className="relative">
              {isLoggedIn ? (
                <button
                  className="p-2 text-gray-600 hover:text-indigo-600"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <UserIcon className="h-6 w-6" />
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hidden sm:block"
                >
                  Sign In
                </Link>
              )}
              {/* User dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/seller"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Seller Dashboard
                  </Link>
                  <Link
                    to="/admin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Admin Panel
                  </Link>
                  <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOutIcon className="h-4 w-4 mr-2" /> Sign Out
                  </button>
                </div>
              )}
            </div>
            <button
              className="p-2 text-gray-600 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Mobile search - visible only on mobile */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-3 md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <Link
                to="/products"
                className="py-2 text-gray-700 hover:text-indigo-600"
              >
                All Products
              </Link>
              <Link
                to="/wishlist"
                className="py-2 text-gray-700 hover:text-indigo-600"
              >
                Wishlist
              </Link>
              <Link
                to="/cart"
                className="py-2 text-gray-700 hover:text-indigo-600"
              >
                Cart
              </Link>
              {!isLoggedIn && (
                <Link
                  to="/auth"
                  className="py-2 text-gray-700 hover:text-indigo-600"
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        )}
        {/* Categories Navigation */}
        <nav className="hidden md:flex mt-3 space-x-8">
          <Link
            to="/products?category=electronics"
            className="text-gray-600 hover:text-indigo-600"
          >
            Electronics
          </Link>
          <Link
            to="/products?category=fashion"
            className="text-gray-600 hover:text-indigo-600"
          >
            Fashion
          </Link>
          <Link
            to="/products?category=home"
            className="text-gray-600 hover:text-indigo-600"
          >
            Home & Garden
          </Link>
          <Link
            to="/products?category=beauty"
            className="text-gray-600 hover:text-indigo-600"
          >
            Beauty
          </Link>
          <Link
            to="/products?category=sports"
            className="text-gray-600 hover:text-indigo-600"
          >
            Sports
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-indigo-600">
            All Categories
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
