import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  CheckIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
} from "lucide-react";
import Button from "../components/ui/Button";
import ProductGrid from "../components/products/ProductGrid";
// Mock data
const product = {
  id: "1",
  title: "Wireless Noise Cancelling Headphones",
  description:
    "Experience crystal-clear audio with these premium wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for travel, work, or enjoying your favorite music without distractions.",
  price: 249.99,
  originalPrice: 299.99,
  discount: 17,
  rating: 4.5,
  reviewCount: 120,
  stock: 15,
  sku: "WH-1000XM4",
  brand: "SoundMaster",
  colors: [
    {
      name: "Black",
      value: "#000000",
    },
    {
      name: "Silver",
      value: "#C0C0C0",
    },
    {
      name: "Blue",
      value: "#0000FF",
    },
  ],
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Bluetooth 5.0 connectivity",
    "Built-in microphone for calls",
    "Foldable design for easy transport",
    "Touch controls for playback and volume",
  ],
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  ],
  specifications: [
    {
      name: "Bluetooth Version",
      value: "5.0",
    },
    {
      name: "Battery Life",
      value: "30 hours",
    },
    {
      name: "Charging Time",
      value: "3 hours",
    },
    {
      name: "Driver Size",
      value: "40mm",
    },
    {
      name: "Frequency Response",
      value: "4Hz-40,000Hz",
    },
    {
      name: "Weight",
      value: "254g",
    },
    {
      name: "Connectivity",
      value: "Bluetooth, 3.5mm audio cable",
    },
    {
      name: "Warranty",
      value: "1 year",
    },
  ],
};
const reviews = [
  {
    id: "1",
    user: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    date: "2023-06-15",
    title: "Best headphones I've ever owned",
    content:
      "These headphones are absolutely amazing. The sound quality is crystal clear, and the noise cancellation works like a charm. I use them for work calls and listening to music, and they excel at both. Battery life is impressive too!",
    helpfulCount: 24,
    verified: true,
  },
  {
    id: "2",
    user: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    date: "2023-05-28",
    title: "Great sound, slightly uncomfortable after long use",
    content:
      "The sound quality and noise cancellation are top-notch, no complaints there. My only issue is that after wearing them for 3+ hours, they start to feel a bit tight on my ears. Otherwise, they're fantastic headphones that I would recommend.",
    helpfulCount: 15,
    verified: true,
  },
  {
    id: "3",
    user: "Jessica Miller",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    date: "2023-04-10",
    title: "Perfect for travel",
    content:
      "Used these on a long international flight and they were perfect. The noise cancellation blocked out the airplane noise completely, and the battery lasted for the entire journey. Very comfortable to wear for extended periods too.",
    helpfulCount: 32,
    verified: true,
  },
];
const relatedProducts = [
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
  {
    id: "11",
    title: "Smartphone with Triple Camera",
    price: 649.99,
    originalPrice: 749.99,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviewCount: 183,
  },
];
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");
  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  return (
    <div className="bg-gray-50 w-full">
      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2 text-gray-500">•</span>
            <Link to="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                {/* Image navigation buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <ArrowRightIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border rounded-md overflow-hidden h-20 ${
                      selectedImage === index
                        ? "border-indigo-500 ring-2 ring-indigo-200"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              {/* Ratings */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-green-600 flex items-center">
                  <CheckIcon className="h-4 w-4 mr-1" /> In Stock (
                  {product.stock} available)
                </span>
              </div>
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="ml-3 text-lg text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-3 bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">
                        Save {product.discount}%
                      </span>
                    </>
                  )}
                </div>
              </div>
              {/* Short Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Color
                </h3>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative rounded-full h-8 w-8 ${
                        selectedColor.name === color.name
                          ? "ring-2 ring-offset-2 ring-indigo-500"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color.value,
                      }}
                      aria-label={`Color: ${color.name}`}
                    ></button>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Selected: {selectedColor.name}
                </p>
              </div>
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="border border-gray-300 rounded-l-md px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.stock}
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value) || 1)
                    }
                    className="border-t border-b border-gray-300 px-3 py-1 w-16 text-center focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="border border-gray-300 rounded-r-md px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Add to Cart and Buy Now */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1 flex items-center justify-center"
                >
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              {/* Product Meta */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-24">SKU:</span>
                    <span className="text-gray-900">{product.sku}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-24">Brand:</span>
                    <span className="text-gray-900">{product.brand}</span>
                  </div>
                </div>
              </div>
              {/* Shipping & Returns */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Free shipping on orders over $50
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      30-day money-back guarantee
                    </span>
                  </div>
                </div>
              </div>
              {/* Share */}
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">Share:</span>
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-blue-600">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388-10.954 10.125-11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-blue-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-blue-700">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "description"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "specifications"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "reviews"
                    ? "border-b-2 border-indigo-600 text-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
            <div className="p-6">
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="overflow-hidden border border-gray-200 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="divide-y divide-gray-200">
                        {product.specifications.map((spec, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {spec.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === "reviews" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Customer Reviews
                    </h3>
                    <Button variant="outline" size="sm">
                      Write a Review
                    </Button>
                  </div>
                  {/* Rating Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col items-center md:w-1/3 mb-4 md:mb-0">
                        <div className="text-5xl font-bold text-gray-900">
                          {product.rating}
                        </div>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : i < product.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {product.reviewCount} reviews
                        </div>
                      </div>
                      {/* Rating Bars */}
                      <div className="md:w-2/3">
                        {[5, 4, 3, 2, 1].map((rating) => {
                          // Calculate percentage (mock data)
                          const percentage =
                            rating === 5
                              ? 65
                              : rating === 4
                              ? 20
                              : rating === 3
                              ? 10
                              : rating === 2
                              ? 4
                              : 1;
                          return (
                            <div
                              key={rating}
                              className="flex items-center mb-2"
                            >
                              <div className="flex items-center w-12">
                                <span className="text-sm text-gray-700">
                                  {rating}
                                </span>
                                <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400 ml-1" />
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                                <div
                                  className="bg-yellow-400 h-2.5 rounded-full"
                                  style={{
                                    width: `${percentage}%`,
                                  }}
                                ></div>
                              </div>
                              <div className="w-12 text-right text-sm text-gray-700">
                                {percentage}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <img
                              src={review.avatar}
                              alt={review.user}
                              className="h-10 w-10 rounded-full"
                            />
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-gray-900">
                                {review.user}
                              </h4>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <StarIcon
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <div className="mt-4">
                          {review.verified && (
                            <div className="mb-2 flex items-center">
                              <CheckIcon className="h-4 w-4 text-green-500" />
                              <span className="ml-1 text-xs text-green-600">
                                Verified Purchase
                              </span>
                            </div>
                          )}
                          <h5 className="text-base font-medium text-gray-900 mb-1">
                            {review.title}
                          </h5>
                          <p className="text-gray-700 text-sm">
                            {review.content}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center">
                          <span className="text-sm text-gray-500 mr-4">
                            Was this review helpful?
                          </span>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 mr-4">
                            <ThumbsUpIcon className="h-4 w-4 mr-1" />
                            Yes ({review.helpfulCount})
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <ThumbsDownIcon className="h-4 w-4 mr-1" />
                            No
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Products
          </h2>
          <ProductGrid products={relatedProducts} columns={4} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
