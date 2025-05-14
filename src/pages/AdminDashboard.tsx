import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboardIcon,
  PackageIcon,
  DollarSignIcon,
  UsersIcon,
  BarChart2Icon,
  SettingsIcon,
  ShoppingCartIcon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  ShieldIcon,
  TagIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
// Mock Dashboard Components
const AdminOverview = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-indigo-100 p-3 mr-4">
            <DollarSignIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <h3 className="text-2xl font-bold text-gray-900">$128,560.45</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +15.3% from last month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <ShoppingCartIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold text-gray-900">1,845</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +8.4% from last month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <UsersIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Users</p>
            <h3 className="text-2xl font-bold text-gray-900">2,456</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +12.1% from last month
            </p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <PackageIcon className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Products</p>
            <h3 className="text-2xl font-bold text-gray-900">584</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              +5.8% from last month
            </p>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Platform Revenue
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
            <p className="text-gray-500">Revenue chart visualization</p>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Top Sellers
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      index % 2 === 0 ? "men" : "women"
                    }/${index + 20}.jpg`}
                    alt="Seller"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {index === 0
                        ? "Tech Gadgets Inc."
                        : index === 1
                        ? "Fashion World"
                        : index === 2
                        ? "Home Essentials"
                        : index === 3
                        ? "Sports Unlimited"
                        : "Beauty & Beyond"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {index === 0
                        ? "245 products"
                        : index === 1
                        ? "189 products"
                        : index === 2
                        ? "156 products"
                        : index === 3
                        ? "134 products"
                        : "112 products"}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${(Math.random() * 10000 + 5000).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">This month</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Registrations
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="flex items-center pb-4 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    index % 2 === 0 ? "men" : "women"
                  }/${index + 30}.jpg`}
                  alt="User"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {index === 0
                      ? "John Smith"
                      : index === 1
                      ? "Emily Johnson"
                      : index === 2
                      ? "Michael Brown"
                      : index === 3
                      ? "Sarah Davis"
                      : "David Wilson"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Joined{" "}
                    {index === 0
                      ? "2 hours ago"
                      : index === 1
                      ? "5 hours ago"
                      : index === 2
                      ? "1 day ago"
                      : index === 3
                      ? "2 days ago"
                      : "3 days ago"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/admin/users"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              View all users
            </Link>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Order #{Math.floor(10000 + Math.random() * 90000)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {index === 0
                      ? "2 hours ago"
                      : index === 1
                      ? "5 hours ago"
                      : index === 2
                      ? "1 day ago"
                      : index === 3
                      ? "2 days ago"
                      : "3 days ago"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${(Math.random() * 200 + 50).toFixed(2)}
                  </p>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      index === 0
                        ? "bg-green-100 text-green-800"
                        : index === 1
                        ? "bg-blue-100 text-blue-800"
                        : index === 2
                        ? "bg-yellow-100 text-yellow-800"
                        : index === 3
                        ? "bg-green-100 text-green-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {index === 0
                      ? "Completed"
                      : index === 1
                      ? "Shipped"
                      : index === 2
                      ? "Processing"
                      : index === 3
                      ? "Completed"
                      : "Completed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link
              to="/admin/orders"
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              View all orders
            </Link>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            System Notifications
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "System maintenance scheduled",
                time: "Today, 10:00 PM",
                type: "warning",
              },
              {
                title: "New seller verification required",
                time: "1 day ago",
                type: "info",
              },
              {
                title: "Payment gateway issue resolved",
                time: "2 days ago",
                type: "success",
              },
              {
                title: "Security alert: Login attempts",
                time: "3 days ago",
                type: "danger",
              },
              {
                title: "Database backup completed",
                time: "5 days ago",
                type: "info",
              },
            ].map((notification, index) => (
              <div
                key={index}
                className="flex items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0"
              >
                <div
                  className={`flex-shrink-0 rounded-full p-2 mr-3 ${
                    notification.type === "warning"
                      ? "bg-yellow-100"
                      : notification.type === "info"
                      ? "bg-blue-100"
                      : notification.type === "success"
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  {notification.type === "warning" ? (
                    <AlertTriangleIcon className="h-4 w-4 text-yellow-600" />
                  ) : notification.type === "info" ? (
                    <BellIcon className="h-4 w-4 text-blue-600" />
                  ) : notification.type === "success" ? (
                    <CheckCircleIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircleIcon className="h-4 w-4 text-red-600" />
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
        </Card>
      </div>
    </div>
  );
};
const AdminUsers = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">User Management</h2>
        <Button variant="primary" className="flex items-center">
          <UsersIcon className="h-4 w-4 mr-1" />
          Add User
        </Button>
      </div>
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>All Users</option>
              <option>Buyers</option>
              <option>Sellers</option>
              <option>Admins</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Name (A-Z)</option>
              <option>Sort by: Name (Z-A)</option>
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
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
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
                  Joined
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
                  name: "John Smith",
                  email: "john@example.com",
                  role: "Buyer",
                  status: "Active",
                  joined: "2023-05-15",
                },
                {
                  id: 2,
                  name: "Emily Johnson",
                  email: "emily@example.com",
                  role: "Seller",
                  status: "Active",
                  joined: "2023-05-10",
                },
                {
                  id: 3,
                  name: "Michael Brown",
                  email: "michael@example.com",
                  role: "Buyer",
                  status: "Active",
                  joined: "2023-05-08",
                },
                {
                  id: 4,
                  name: "Sarah Davis",
                  email: "sarah@example.com",
                  role: "Seller",
                  status: "Inactive",
                  joined: "2023-05-05",
                },
                {
                  id: 5,
                  name: "David Wilson",
                  email: "david@example.com",
                  role: "Admin",
                  status: "Active",
                  joined: "2023-05-01",
                },
                {
                  id: 6,
                  name: "Jennifer Martinez",
                  email: "jennifer@example.com",
                  role: "Buyer",
                  status: "Active",
                  joined: "2023-04-28",
                },
                {
                  id: 7,
                  name: "Robert Taylor",
                  email: "robert@example.com",
                  role: "Seller",
                  status: "Active",
                  joined: "2023-04-25",
                },
                {
                  id: 8,
                  name: "Lisa Anderson",
                  email: "lisa@example.com",
                  role: "Buyer",
                  status: "Inactive",
                  joined: "2023-04-20",
                },
                {
                  id: 9,
                  name: "James Thomas",
                  email: "james@example.com",
                  role: "Seller",
                  status: "Active",
                  joined: "2023-04-15",
                },
                {
                  id: 10,
                  name: "Patricia White",
                  email: "patricia@example.com",
                  role: "Buyer",
                  status: "Active",
                  joined: "2023-04-10",
                },
              ].map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src={`https://randomuser.me/api/portraits/${
                            user.id % 2 === 0 ? "women" : "men"
                          }/${user.id + 20}.jpg`}
                          alt={user.name}
                          className="h-10 w-10 rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "Seller"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.joined}
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
            <span className="font-medium">97</span> users
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
const AdminSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Platform Settings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              General Settings
            </h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    defaultValue="MarketPlace"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Support Email
                  </label>
                  <input
                    type="email"
                    defaultValue="support@marketplace.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Platform Currency
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="UTC">
                      UTC - Coordinated Universal Time
                    </option>
                    <option value="EST">EST - Eastern Standard Time</option>
                    <option value="CST">CST - Central Standard Time</option>
                    <option value="MST">MST - Mountain Standard Time</option>
                    <option value="PST">PST - Pacific Standard Time</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </Card>
          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Payment Gateway Settings
            </h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Provider
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="stripe">Stripe</option>
                    <option value="paypal">PayPal</option>
                    <option value="square">Square</option>
                    <option value="braintree">Braintree</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    API Key
                  </label>
                  <input
                    type="password"
                    defaultValue="sk_test_1234567890abcdefghijklmn"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Secret Key
                  </label>
                  <input
                    type="password"
                    defaultValue="sk_secret_1234567890abcdefghijklmn"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="test-mode"
                    name="test-mode"
                    type="checkbox"
                    defaultChecked={true}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="test-mode"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Enable Test Mode
                  </label>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </Card>
        </div>
        <div>
          <Card className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Platform Fees
            </h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transaction Fee (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="2.5"
                    step="0.1"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seller Commission (%)
                  </label>
                  <input
                    type="number"
                    defaultValue="5.0"
                    step="0.1"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </Card>
          <Card>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Email Notifications
            </h3>
            <form>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">
                    New User Registration
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle-1"
                      defaultChecked={true}
                      className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle-1"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">
                    New Order Notification
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle-2"
                      defaultChecked={true}
                      className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle-2"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">
                    Product Review Notification
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle-3"
                      defaultChecked={false}
                      className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle-3"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">
                    Seller Registration
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle-4"
                      defaultChecked={true}
                      className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle-4"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-700">
                    Payment Failure
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle-5"
                      defaultChecked={true}
                      className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      htmlFor="toggle-5"
                      className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};
const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboardIcon,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: UsersIcon,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: PackageIcon,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: ShoppingCartIcon,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: TagIcon,
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart2Icon,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: SettingsIcon,
    },
  ];
  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full mt-2">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700">
          <Link
            to="/"
            className="text-xl font-bold text-white flex items-center"
          >
            <ShieldIcon className="h-6 w-6 mr-2" />
            Admin Panel
          </Link>
          <button
            className="p-1 rounded-md text-gray-400 hover:text-gray-200 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 py-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive(item.href)
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400" />
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
                    alt="Admin"
                  />
                  <span className="hidden md:flex md:items-center ml-2">
                    <span className="text-sm font-medium text-gray-700 mr-1">
                      Admin User
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
              <Route path="/" element={<AdminOverview />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/settings" element={<AdminSettings />} />
              <Route path="*" element={<AdminOverview />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminDashboard;
