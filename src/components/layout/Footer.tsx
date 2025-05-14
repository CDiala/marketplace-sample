import { Link } from "react-router-dom";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  CreditCardIcon,
  ShieldIcon,
  TruckIcon,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          <div className="flex items-center justify-center md:justify-start">
            <TruckIcon className="h-10 w-10 text-indigo-400" />
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-gray-400">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <CreditCardIcon className="h-10 w-10 text-indigo-400" />
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Secure Payment</h3>
              <p className="text-gray-400">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <ShieldIcon className="h-10 w-10 text-indigo-400" />
            <div className="ml-4">
              <h3 className="font-semibold text-lg">Buyer Protection</h3>
              <p className="text-gray-400">Money back guarantee</p>
            </div>
          </div>
        </div>
        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div>
            <h2 className="text-lg font-bold mb-4">MarketPlace</h2>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all your shopping needs with
              thousands of products across various categories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=electronics"
                  className="text-gray-400 hover:text-white"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=fashion"
                  className="text-gray-400 hover:text-white"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=home"
                  className="text-gray-400 hover:text-white"
                >
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link
                  to="/products?discount=true"
                  className="text-gray-400 hover:text-white"
                >
                  Deals & Discounts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-white">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-400 hover:text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/seller" className="text-gray-400 hover:text-white">
                  Become a Seller
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MarketPlace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
