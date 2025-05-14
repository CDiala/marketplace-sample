import { useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon, PlusIcon, MinusIcon, ChevronRightIcon } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
// Mock data
const cartItems = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    originalPrice: 299.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    color: "Black",
    inStock: true,
  },
  {
    id: "2",
    title: "Smart Watch with Heart Rate Monitor",
    price: 199.99,
    originalPrice: 249.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    color: "Silver",
    inStock: true,
  },
];
const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoValid, setIsPromoValid] = useState<boolean | null>(null);
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };
  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleApplyPromoCode = () => {
    // Mock promo code validation
    setIsPromoValid(promoCode.toLowerCase() === "discount10");
  };
  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = isPromoValid ? subtotal * 0.1 : 0; // 10% discount if promo valid
  const shipping = subtotal > 100 ? 0 : 9.99; // Free shipping over $100
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal - discount + shipping + tax;
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>
        {items.length === 0 ? (
          <Card className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <div className="overflow-hidden">
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
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-16 w-16">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-16 w-16 object-cover rounded"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Color: {item.color}
                                </div>
                                {!item.inStock && (
                                  <div className="text-sm text-red-500">
                                    Out of Stock
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ${item.price.toFixed(2)}
                            </div>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                disabled={item.quantity <= 1}
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="px-2 py-1 border-x text-gray-900 min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <div className="flex justify-between items-center mt-6">
                <Link
                  to="/products"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <ChevronRightIcon className="h-5 w-5 rotate-180 mr-1" />
                  Continue Shopping
                </Link>
                <Button variant="outline" onClick={() => setItems([])}>
                  Clear Cart
                </Button>
              </div>
            </div>
            {/* Order Summary */}
            <div>
              <Card>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Subtotal (
                      {items.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                      items)
                    </span>
                    <span className="text-gray-900 font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900 font-medium">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900 font-medium">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  {isPromoValid && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-base font-medium text-gray-900">
                        Total
                      </span>
                      <span className="text-base font-bold text-gray-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      onClick={handleApplyPromoCode}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300"
                    >
                      Apply
                    </button>
                  </div>
                  {isPromoValid === true && (
                    <div className="text-sm text-green-600 mb-4">
                      Promo code applied successfully!
                    </div>
                  )}
                  {isPromoValid === false && (
                    <div className="text-sm text-red-600 mb-4">
                      Invalid promo code. Try "DISCOUNT10"
                    </div>
                  )}
                  <Link to="/checkout">
                    <Button variant="primary" fullWidth>
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
