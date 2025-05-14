import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboardIcon,
  PackageIcon,
  DollarSignIcon,
  UsersIcon,
  BarChart2Icon,
  SettingsIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
// Mock Dashboard Components
const SellerOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-indigo-100 p-3 mr-4">
            <DollarSignIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-900">$12,426.75</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUpIcon className="h-3 w-3 mr-1" /> +12.5% from last month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <ShoppingCartIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold text-gray-900">356</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUpIcon className="h-3 w-3 mr-1" /> +8.2% from last month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <PackageIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Products</p>
            <h3 className="text-2xl font-bold text-gray-900">48</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUpIcon className="h-3 w-3 mr-1" /> +3 new this month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <UsersIcon className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Customers</p>
            <h3 className="text-2xl font-bold text-gray-900">278</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUpIcon className="h-3 w-3 mr-1" /> +18 new this month
            </p>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Sales Overview
            </h3>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Sales chart visualization</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Order #{Math.floor(10000 + Math.random() * 90000)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(
                      Date.now() - Math.random() * 10 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${(Math.random() * 200 + 50).toFixed(2)}
                  </p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/seller/orders"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              View all orders
            </Link>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Top Products</h3>
            <Link
              to="/seller/products"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sold
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Revenue
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    name: "Wireless Noise Cancelling Headphones",
                    sold: 45,
                    revenue: 11250,
                    rating: 4.8,
                  },
                  {
                    name: "Smart Watch with Heart Rate Monitor",
                    sold: 38,
                    revenue: 7600,
                    rating: 4.5,
                  },
                  {
                    name: "Bluetooth Portable Speaker",
                    sold: 32,
                    revenue: 2560,
                    rating: 4.3,
                  },
                  {
                    name: "Ultra HD 4K Smart TV",
                    sold: 18,
                    revenue: 9000,
                    rating: 4.7,
                  },
                  {
                    name: "Wireless Gaming Mouse",
                    sold: 24,
                    revenue: 1440,
                    rating: 4.6,
                  },
                ].map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.sold} units
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        ${product.revenue.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {product.rating}/5.0
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "New order received",
                time: "10 minutes ago",
                type: "order",
              },
              {
                title: "Product inventory low",
                time: "2 hours ago",
                type: "inventory",
              },
              {
                title: "New review received",
                time: "5 hours ago",
                type: "review",
              },
              {
                title: "Payment processed",
                time: "1 day ago",
                type: "payment",
              },
            ].map((notification, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`flex-shrink-0 rounded-full p-2 mr-3 ${
                    notification.type === "order"
                      ? "bg-green-100"
                      : notification.type === "inventory"
                      ? "bg-yellow-100"
                      : notification.type === "review"
                      ? "bg-blue-100"
                      : "bg-indigo-100"
                  }`}
                >
                  {notification.type === "order" ? (
                    <ShoppingCartIcon className="h-4 w-4 text-green-600" />
                  ) : notification.type === "inventory" ? (
                    <PackageIcon className="h-4 w-4 text-yellow-600" />
                  ) : notification.type === "review" ? (
                    <UsersIcon className="h-4 w-4 text-blue-600" />
                  ) : (
                    <DollarSignIcon className="h-4 w-4 text-indigo-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/seller/notifications"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              View all notifications
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
const SellerProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Products</h2>
        <Button variant="primary" className="flex items-center">
          <PlusIcon className="h-4 w-4 mr-1" />
          Add Product
        </Button>
      </div>
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Home & Garden</option>
              <option>Fashion</option>
              <option>Sports & Outdoors</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Sort by: Latest</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Best Selling</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Inventory
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "Wireless Noise Cancelling Headphones",
                  category: "Electronics",
                  inventory: 45,
                  price: 249.99,
                  status: "Active",
                },
                {
                  id: 2,
                  name: "Smart Watch with Heart Rate Monitor",
                  category: "Electronics",
                  inventory: 38,
                  price: 199.99,
                  status: "Active",
                },
                {
                  id: 3,
                  name: "Bluetooth Portable Speaker",
                  category: "Electronics",
                  inventory: 32,
                  price: 79.99,
                  status: "Active",
                },
                {
                  id: 4,
                  name: "Ultra HD 4K Smart TV",
                  category: "Electronics",
                  inventory: 18,
                  price: 499.99,
                  status: "Active",
                },
                {
                  id: 5,
                  name: "Wireless Gaming Mouse",
                  category: "Electronics",
                  inventory: 24,
                  price: 59.99,
                  status: "Active",
                },
                {
                  id: 6,
                  name: "Ergonomic Office Chair",
                  category: "Home & Garden",
                  inventory: 15,
                  price: 199.99,
                  status: "Active",
                },
                {
                  id: 7,
                  name: "Stainless Steel Water Bottle",
                  category: "Sports & Outdoors",
                  inventory: 50,
                  price: 24.99,
                  status: "Active",
                },
                {
                  id: 8,
                  name: "Professional DSLR Camera",
                  category: "Electronics",
                  inventory: 12,
                  price: 799.99,
                  status: "Active",
                },
                {
                  id: 9,
                  name: "Smart Home Security Camera",
                  category: "Electronics",
                  inventory: 20,
                  price: 89.99,
                  status: "Active",
                },
                {
                  id: 10,
                  name: "Electric Coffee Grinder",
                  category: "Home & Garden",
                  inventory: 30,
                  price: 49.99,
                  status: "Active",
                },
              ].map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">#{product.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.inventory} in stock
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.price.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                    >
                      Edit
                    </a>
                    <a href="#" className="text-red-600 hover:text-red-900">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">24</span> products
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-indigo-50 text-indigo-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
const SellerOrders = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Orders</h2>
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>All Orders</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 12345,
                  customer: "John Doe",
                  date: "2023-06-15",
                  total: 349.98,
                  status: "Delivered",
                },
                {
                  id: 12346,
                  customer: "Jane Smith",
                  date: "2023-06-14",
                  total: 199.99,
                  status: "Shipped",
                },
                {
                  id: 12347,
                  customer: "Robert Johnson",
                  date: "2023-06-14",
                  total: 79.99,
                  status: "Processing",
                },
                {
                  id: 12348,
                  customer: "Emily Davis",
                  date: "2023-06-13",
                  total: 549.98,
                  status: "Delivered",
                },
                {
                  id: 12349,
                  customer: "Michael Brown",
                  date: "2023-06-12",
                  total: 129.99,
                  status: "Delivered",
                },
                {
                  id: 12350,
                  customer: "Sarah Wilson",
                  date: "2023-06-11",
                  total: 89.99,
                  status: "Cancelled",
                },
                {
                  id: 12351,
                  customer: "David Taylor",
                  date: "2023-06-10",
                  total: 199.99,
                  status: "Delivered",
                },
                {
                  id: 12352,
                  customer: "Jennifer Martinez",
                  date: "2023-06-10",
                  total: 299.98,
                  status: "Delivered",
                },
                {
                  id: 12353,
                  customer: "James Anderson",
                  date: "2023-06-09",
                  total: 49.99,
                  status: "Delivered",
                },
                {
                  id: 12354,
                  customer: "Lisa Thomas",
                  date: "2023-06-09",
                  total: 159.97,
                  status: "Delivered",
                },
              ].map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      #{order.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.customer}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${order.total.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">45</span> orders
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-indigo-50 text-indigo-600 font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
const SellerAnalytics = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Analytics & Reports
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Sales Performance
          </h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Sales performance chart</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Revenue by Category
          </h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Revenue by category chart</p>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Customer Demographics
          </h3>
          <div className="h-60 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Demographics chart</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Traffic Sources
          </h3>
          <div className="h-60 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Traffic sources chart</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Conversion Rate
          </h3>
          <div className="h-60 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Chart would go here */}
            <p className="text-gray-500">Conversion rate chart</p>
          </div>
        </Card>
      </div>
      <Card>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sales Reports
        </h3>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Daily Report
            </Button>
            <Button variant="outline" size="sm">
              Weekly Report
            </Button>
            <Button variant="outline" size="sm">
              Monthly Report
            </Button>
            <Button variant="outline" size="sm">
              Custom Range
            </Button>
            <Button variant="outline" size="sm">
              Export Data
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Orders
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Revenue
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Avg. Order Value
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Items Sold
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  date: "2023-06-15",
                  orders: 12,
                  revenue: 1245.87,
                  avgOrderValue: 103.82,
                  itemsSold: 25,
                },
                {
                  date: "2023-06-14",
                  orders: 15,
                  revenue: 1587.32,
                  avgOrderValue: 105.82,
                  itemsSold: 31,
                },
                {
                  date: "2023-06-13",
                  orders: 9,
                  revenue: 876.45,
                  avgOrderValue: 97.38,
                  itemsSold: 19,
                },
                {
                  date: "2023-06-12",
                  orders: 14,
                  revenue: 1432.56,
                  avgOrderValue: 102.33,
                  itemsSold: 28,
                },
                {
                  date: "2023-06-11",
                  orders: 11,
                  revenue: 1098.76,
                  avgOrderValue: 99.89,
                  itemsSold: 22,
                },
                {
                  date: "2023-06-10",
                  orders: 18,
                  revenue: 1876.23,
                  avgOrderValue: 104.24,
                  itemsSold: 36,
                },
                {
                  date: "2023-06-09",
                  orders: 16,
                  revenue: 1654.89,
                  avgOrderValue: 103.43,
                  itemsSold: 32,
                },
              ].map((day, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{day.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{day.orders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${day.revenue.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${day.avgOrderValue.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{day.itemsSold}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
const SellerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    {
      name: "Dashboard",
      href: "/seller",
      icon: LayoutDashboardIcon,
    },
    {
      name: "Products",
      href: "/seller/products",
      icon: PackageIcon,
    },
    {
      name: "Orders",
      href: "/seller/orders",
      icon: ShoppingCartIcon,
    },
    {
      name: "Analytics",
      href: "/seller/analytics",
      icon: BarChart2Icon,
    },
    {
      name: "Customers",
      href: "/seller/customers",
      icon: UsersIcon,
    },
    {
      name: "Settings",
      href: "/seller/settings",
      icon: SettingsIcon,
    },
  ];
  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            MarketPlace
          </Link>
          <button
            className="p-1 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="px-3 py-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive(item.href)
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    isActive(item.href)
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className={`lg:pl-64 flex flex-col min-h-screen`}>
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="h-16 flex items-center justify-between px-4">
            <button
              className="p-1 rounded-md text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <div className="relative">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                </button>
              </div>
              <div className="relative ml-4">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                  />
                  <span className="hidden md:flex md:items-center ml-2">
                    <span className="text-sm font-medium text-gray-700 mr-1">
                      John Doe
                    </span>
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<SellerOverview />} />
              <Route path="/products" element={<SellerProducts />} />
              <Route path="/orders" element={<SellerOrders />} />
              <Route path="/analytics" element={<SellerAnalytics />} />
              <Route path="*" element={<SellerOverview />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};
export default SellerDashboard;
