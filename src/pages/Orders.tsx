import { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  FilterIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
// Mock data
const orders = [
  {
    id: "12345",
    date: "2023-06-15",
    status: "Delivered",
    total: 349.98,
    items: 2,
    tracking: "USP12345678",
    payment: "Credit Card",
  },
  {
    id: "12346",
    date: "2023-06-10",
    status: "Shipped",
    total: 199.99,
    items: 1,
    tracking: "USP87654321",
    payment: "PayPal",
  },
  {
    id: "12347",
    date: "2023-06-05",
    status: "Processing",
    total: 79.99,
    items: 1,
    tracking: null,
    payment: "Credit Card",
  },
  {
    id: "12348",
    date: "2023-05-28",
    status: "Delivered",
    total: 549.98,
    items: 3,
    tracking: "USP23456789",
    payment: "Credit Card",
  },
  {
    id: "12349",
    date: "2023-05-20",
    status: "Delivered",
    total: 129.99,
    items: 1,
    tracking: "USP34567890",
    payment: "PayPal",
  },
  {
    id: "12350",
    date: "2023-05-15",
    status: "Cancelled",
    total: 89.99,
    items: 1,
    tracking: null,
    payment: "Credit Card",
  },
];
const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const filteredOrders =
    filterStatus === "all"
      ? orders
      : orders.filter(
          (order) => order.status.toLowerCase() === filterStatus.toLowerCase()
        );
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          My Orders
        </h1>
        {orders.length === 0 ? (
          <Card className="text-center py-12">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-indigo-100">
              <ShoppingBagIcon className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="mt-4 text-xl font-medium text-gray-900">
              No orders yet
            </h2>
            <p className="mt-2 text-gray-600 mb-6">
              Once you place an order, it will appear here.
            </p>
            <Link to="/products">
              <Button variant="primary">Start Shopping</Button>
            </Link>
          </Card>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center">
                <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Orders</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Card key={order.id} hover className="overflow-hidden">
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() =>
                      setSelectedOrder(
                        selectedOrder === order.id ? null : order.id
                      )
                    }
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Placed on {order.date}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
                        <ChevronRightIcon
                          className={`ml-2 h-5 w-5 text-gray-400 transform transition-transform ${
                            selectedOrder === order.id ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-y-1 gap-x-4 text-sm text-gray-500">
                      <div>
                        <span className="font-medium text-gray-900">
                          {order.items}
                        </span>{" "}
                        {order.items === 1 ? "item" : "items"}
                      </div>
                      <div>
                        Total:{" "}
                        <span className="font-medium text-gray-900">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                      <div>
                        Payment:{" "}
                        <span className="font-medium text-gray-900">
                          {order.payment}
                        </span>
                      </div>
                      {order.tracking && (
                        <div>
                          Tracking:{" "}
                          <span className="font-medium text-gray-900">
                            {order.tracking}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedOrder === order.id && (
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Order Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img
                              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                              alt="Wireless Headphones"
                              className="h-16 w-16 object-cover rounded"
                            />
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className="text-sm font-medium text-gray-900">
                              Wireless Noise Cancelling Headphones
                            </div>
                            <div className="text-sm text-gray-500">
                              Color: Black
                            </div>
                            <div className="text-sm text-gray-500">Qty: 1</div>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            $249.99
                          </div>
                        </div>
                        {order.items > 1 && (
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-16 w-16">
                              <img
                                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="Smart Watch"
                                className="h-16 w-16 object-cover rounded"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <div className="text-sm font-medium text-gray-900">
                                Smart Watch with Heart Rate Monitor
                              </div>
                              <div className="text-sm text-gray-500">
                                Color: Silver
                              </div>
                              <div className="text-sm text-gray-500">
                                Qty: 1
                              </div>
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              $199.99
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="text-gray-900 font-medium">
                            ${(order.total - 9.99).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-gray-600">Shipping</span>
                          <span className="text-gray-900 font-medium">
                            $9.99
                          </span>
                        </div>
                        <div className="flex justify-between text-base mt-2 font-medium">
                          <span className="text-gray-900">Total</span>
                          <span className="text-gray-900">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button variant="primary" size="sm">
                          Track Order
                        </Button>
                        <Button variant="outline" size="sm">
                          View Invoice
                        </Button>
                        {order.status === "Delivered" && (
                          <Button variant="outline" size="sm">
                            Write a Review
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{filteredOrders.length}</span> of{" "}
                <span className="font-medium">{filteredOrders.length}</span>{" "}
                orders
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-md border border-gray-300 bg-indigo-50 text-indigo-600 font-medium">
                  1
                </button>
                <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Orders;
