import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCardIcon, LockIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
// Mock data
const cartItems = [{
  id: '1',
  title: 'Wireless Noise Cancelling Headphones',
  price: 249.99,
  quantity: 1,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}, {
  id: '2',
  title: 'Smart Watch with Heart Rate Monitor',
  price: 199.99,
  quantity: 2,
  image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
}];
const Checkout = () => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping');
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
    email: '',
    saveInfo: true
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express' | 'priority'>('standard');
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMethod === 'standard' ? 0 : shippingMethod === 'express' ? 9.99 : 19.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shippingCost + tax;
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('review');
  };
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    console.log('Order submitted');
  };
  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Checkout
          </h1>
          <Link to="/cart" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <ChevronRightIcon className="h-5 w-5 rotate-180 mr-1" />
            Back to Cart
          </Link>
        </div>
        {/* Checkout Steps */}
        <div className="mb-8">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className={`flex md:w-full items-center ${step === 'shipping' ? 'text-indigo-600 dark:text-indigo-500' : step === 'payment' || step === 'review' ? 'text-green-600 dark:text-green-500' : ''}`}>
              <span className={`flex items-center justify-center w-6 h-6 mr-2 text-xs border rounded-full ${step === 'payment' || step === 'review' ? 'border-green-600 text-green-600' : 'border-gray-500'}`}>
                {step === 'payment' || step === 'review' ? <CheckIcon className="w-3 h-3" /> : '1'}
              </span>
              Shipping
              <span className="hidden sm:inline-flex sm:ml-2">Information</span>
              <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </li>
            <li className={`flex md:w-full items-center ${step === 'payment' ? 'text-indigo-600 dark:text-indigo-500' : step === 'review' ? 'text-green-600 dark:text-green-500' : ''}`}>
              <span className={`flex items-center justify-center w-6 h-6 mr-2 text-xs border rounded-full ${step === 'review' ? 'border-green-600 text-green-600' : 'border-gray-500'}`}>
                {step === 'review' ? <CheckIcon className="w-3 h-3" /> : '2'}
              </span>
              Payment
              <span className="hidden sm:inline-flex sm:ml-2">Details</span>
              <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              </svg>
            </li>
            <li className={`flex items-center ${step === 'review' ? 'text-indigo-600 dark:text-indigo-500' : ''}`}>
              <span className={`flex items-center justify-center w-6 h-6 mr-2 text-xs border rounded-full border-gray-500`}>
                3
              </span>
              Review
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              {/* Shipping Information */}
              {step === 'shipping' && <form onSubmit={handleShippingSubmit}>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input label="First Name" name="firstName" value={shippingInfo.firstName} onChange={handleShippingInfoChange} required fullWidth />
                    <Input label="Last Name" name="lastName" value={shippingInfo.lastName} onChange={handleShippingInfoChange} required fullWidth />
                  </div>
                  <div className="mb-4">
                    <Input label="Address" name="address" value={shippingInfo.address} onChange={handleShippingInfoChange} required fullWidth />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <Input label="City" name="city" value={shippingInfo.city} onChange={handleShippingInfoChange} required fullWidth />
                    <Input label="State/Province" name="state" value={shippingInfo.state} onChange={handleShippingInfoChange} required fullWidth />
                    <Input label="ZIP / Postal Code" name="zipCode" value={shippingInfo.zipCode} onChange={handleShippingInfoChange} required fullWidth />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select name="country" value={shippingInfo.country} onChange={e => setShippingInfo(prev => ({
                    ...prev,
                    country: e.target.value
                  }))} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                    <Input label="Phone Number" name="phone" type="tel" value={shippingInfo.phone} onChange={handleShippingInfoChange} required fullWidth />
                  </div>
                  <div className="mb-6">
                    <Input label="Email Address" name="email" type="email" value={shippingInfo.email} onChange={handleShippingInfoChange} required fullWidth />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-4">
                    Shipping Method
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className={`border rounded-lg p-4 cursor-pointer ${shippingMethod === 'standard' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`} onClick={() => setShippingMethod('standard')}>
                      <div className="flex items-center">
                        <input type="radio" name="shippingMethod" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                        <div className="ml-3 flex-grow">
                          <span className="block text-sm font-medium text-gray-900">
                            Standard Shipping
                          </span>
                          <span className="block text-sm text-gray-500">
                            3-5 business days
                          </span>
                        </div>
                        <span className="text-base font-medium text-gray-900">
                          Free
                        </span>
                      </div>
                    </div>
                    <div className={`border rounded-lg p-4 cursor-pointer ${shippingMethod === 'express' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`} onClick={() => setShippingMethod('express')}>
                      <div className="flex items-center">
                        <input type="radio" name="shippingMethod" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                        <div className="ml-3 flex-grow">
                          <span className="block text-sm font-medium text-gray-900">
                            Express Shipping
                          </span>
                          <span className="block text-sm text-gray-500">
                            1-2 business days
                          </span>
                        </div>
                        <span className="text-base font-medium text-gray-900">
                          $9.99
                        </span>
                      </div>
                    </div>
                    <div className={`border rounded-lg p-4 cursor-pointer ${shippingMethod === 'priority' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`} onClick={() => setShippingMethod('priority')}>
                      <div className="flex items-center">
                        <input type="radio" name="shippingMethod" checked={shippingMethod === 'priority'} onChange={() => setShippingMethod('priority')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                        <div className="ml-3 flex-grow">
                          <span className="block text-sm font-medium text-gray-900">
                            Priority Shipping
                          </span>
                          <span className="block text-sm text-gray-500">
                            Next day delivery
                          </span>
                        </div>
                        <span className="text-base font-medium text-gray-900">
                          $19.99
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <input id="saveInfo" name="saveInfo" type="checkbox" checked={shippingInfo.saveInfo} onChange={handleShippingInfoChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900">
                      Save this information for next time
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                      Continue to Payment
                    </Button>
                  </div>
                </form>}
              {/* Payment Information */}
              {step === 'payment' && <form onSubmit={handlePaymentSubmit}>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">
                    Payment Information
                  </h2>
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-base font-medium text-gray-900">
                        Payment Method
                      </span>
                      <div className="flex space-x-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-6" />
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <div className="relative">
                          <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" value={paymentInfo.cardNumber} onChange={handlePaymentInfoChange} className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                          <CreditCardIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <Input label="Name on Card" name="nameOnCard" value={paymentInfo.nameOnCard} onChange={handlePaymentInfoChange} required fullWidth />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Expiry Date (MM/YY)" name="expiryDate" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={handlePaymentInfoChange} required fullWidth />
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <div className="relative">
                            <input type="text" name="cvv" placeholder="123" value={paymentInfo.cvv} onChange={handlePaymentInfoChange} className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            <LockIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <input id="saveCard" name="saveCard" type="checkbox" checked={paymentInfo.saveCard} onChange={handlePaymentInfoChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-900">
                      Save this card for future purchases
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <button type="button" onClick={() => setStep('shipping')} className="text-indigo-600 hover:text-indigo-800">
                      Back to Shipping
                    </button>
                    <Button type="submit" variant="primary">
                      Review Order
                    </Button>
                  </div>
                </form>}
              {/* Order Review */}
              {step === 'review' && <form onSubmit={handleReviewSubmit}>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">
                    Review Your Order
                  </h2>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-2">
                        Shipping Information
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          {shippingInfo.firstName} {shippingInfo.lastName}
                          <br />
                          {shippingInfo.address}
                          <br />
                          {shippingInfo.city}, {shippingInfo.state}{' '}
                          {shippingInfo.zipCode}
                          <br />
                          {shippingInfo.country}
                          <br />
                          {shippingInfo.phone}
                          <br />
                          {shippingInfo.email}
                        </p>
                        <button type="button" onClick={() => setStep('shipping')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-2">
                        Payment Method
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          Credit Card ending in{' '}
                          {paymentInfo.cardNumber.slice(-4)}
                          <br />
                          {paymentInfo.nameOnCard}
                          <br />
                          Expires: {paymentInfo.expiryDate}
                        </p>
                        <button type="button" onClick={() => setStep('payment')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 mb-2">
                        Shipping Method
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">
                          {shippingMethod === 'standard' ? 'Standard Shipping (3-5 business days)' : shippingMethod === 'express' ? 'Express Shipping (1-2 business days)' : 'Priority Shipping (Next day delivery)'}
                        </p>
                        <button type="button" onClick={() => setStep('shipping')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h3 className="text-base font-medium text-gray-900 mb-4">
                      Order Items
                    </h3>
                    <div className="space-y-4">
                      {cartItems.map(item => <div key={item.id} className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded" />
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              Qty: {item.quantity}
                            </div>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>)}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" variant="primary" size="lg">
                      Place Order
                    </Button>
                  </div>
                </form>}
            </Card>
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
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{' '}
                    items)
                  </span>
                  <span className="text-gray-900 font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900 font-medium">
                    ${tax.toFixed(2)}
                  </span>
                </div>
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
              <div className="mt-6 space-y-4">
                {cartItems.map(item => <div key={item.id} className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16">
                      <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        Qty: {item.quantity} × ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>)}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;