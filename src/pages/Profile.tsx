import { useState } from "react";
import {
  UserIcon,
  LockIcon,
  CreditCardIcon,
  MapPinIcon,
  BellIcon,
  LogOutIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
const Profile = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "security" | "addresses" | "payment" | "notifications"
  >("profile");
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          My Account
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <Card className="p-0 overflow-hidden">
              <div className="p-6 bg-indigo-50 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="h-16 w-16 rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-sm text-gray-600">john@example.com</p>
                </div>
              </div>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center w-full px-6 py-3 text-sm ${
                    activeTab === "profile"
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <UserIcon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === "profile"
                        ? "text-indigo-700"
                        : "text-gray-400"
                    }`}
                  />
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex items-center w-full px-6 py-3 text-sm ${
                    activeTab === "security"
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <LockIcon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === "security"
                        ? "text-indigo-700"
                        : "text-gray-400"
                    }`}
                  />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`flex items-center w-full px-6 py-3 text-sm ${
                    activeTab === "addresses"
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <MapPinIcon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === "addresses"
                        ? "text-indigo-700"
                        : "text-gray-400"
                    }`}
                  />
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`flex items-center w-full px-6 py-3 text-sm ${
                    activeTab === "payment"
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <CreditCardIcon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === "payment"
                        ? "text-indigo-700"
                        : "text-gray-400"
                    }`}
                  />
                  Payment Methods
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`flex items-center w-full px-6 py-3 text-sm ${
                    activeTab === "notifications"
                      ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <BellIcon
                    className={`h-5 w-5 mr-3 ${
                      activeTab === "notifications"
                        ? "text-indigo-700"
                        : "text-gray-400"
                    }`}
                  />
                  Notifications
                </button>
                <div className="px-3 py-3">
                  <Button
                    variant="outline"
                    fullWidth
                    className="flex items-center justify-center text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <LogOutIcon className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </nav>
            </Card>
          </div>
          {/* Main Content */}
          <div className="flex-grow">
            {activeTab === "profile" && (
              <Card>
                <h2 className="text-xl font-medium text-gray-900 mb-6">
                  Profile Information
                </h2>
                <form>
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Profile"
                        className="h-24 w-24 rounded-full"
                      />
                      <button
                        type="button"
                        className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1 rounded-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      type="text"
                      defaultValue="John"
                      fullWidth
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      defaultValue="Doe"
                      fullWidth
                    />
                    <div className="relative">
                      <Input
                        label="Email"
                        type="email"
                        defaultValue="john@example.com"
                        fullWidth
                        className="pl-10"
                      />
                      <MailIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="relative">
                      <Input
                        label="Phone"
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        fullWidth
                        className="pl-10"
                      />
                      <PhoneIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        defaultValue="I love shopping for electronics and tech gadgets."
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card>
            )}
            {activeTab === "security" && (
              <Card>
                <h2 className="text-xl font-medium text-gray-900 mb-6">
                  Security Settings
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Change Password
                    </h3>
                    <form className="space-y-4">
                      <Input
                        label="Current Password"
                        type="password"
                        placeholder="••••••••"
                        fullWidth
                      />
                      <Input
                        label="New Password"
                        type="password"
                        placeholder="••••••••"
                        helperText="Password must be at least 8 characters and include a number and a special character."
                        fullWidth
                      />
                      <Input
                        label="Confirm New Password"
                        type="password"
                        placeholder="••••••••"
                        fullWidth
                      />
                      <div className="flex justify-end">
                        <Button variant="primary">Update Password</Button>
                      </div>
                    </form>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Two-Factor Authentication
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Add an extra layer of security to your account by
                          requiring a verification code in addition to your
                          password.
                        </p>
                        <p className="text-sm text-red-600">Not enabled</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Connected Accounts
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className="h-8 w-8 mr-3"
                            fill="#4285F4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Google
                            </p>
                            <p className="text-xs text-gray-500">
                              Not connected
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Connect
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg
                            className="h-8 w-8 mr-3"
                            fill="#3b5998"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24,12.073c0,-6.627 -5.373,-12 -12,-12c-6.627,0 -12,5.373 -12,12c0,5.99 4.388,10.954 10.125,11.854l0,-8.385l-3.047,0l0,-3.469l3.047,0l0,-2.642c0,-3.007 1.792,-4.669 4.533,-4.669c1.312,0 2.686,0.235 2.686,0.235l0,2.953l-1.514,0c-1.491,0 -1.956,0.925 -1.956,1.874l0,2.249l3.328,0l-0.532,3.469l-2.796,0l0,8.385c5.737,-0.9 10.125,-5.864 10.125,-11.854Z" />
                          </svg>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Facebook
                            </p>
                            <p className="text-xs text-green-600">Connected</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Disconnect
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Delete Account
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Once you delete your account, there is no going back.
                      Please be certain.
                    </p>
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </Card>
            )}
            {activeTab === "addresses" && (
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    My Addresses
                  </h2>
                  <Button variant="primary" size="sm">
                    Add New Address
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-base font-medium text-gray-900">
                            Home
                          </h3>
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Default
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">John Doe</p>
                        <p className="text-sm text-gray-600">
                          123 Main Street, Apt 4B
                        </p>
                        <p className="text-sm text-gray-600">
                          New York, NY 10001
                        </p>
                        <p className="text-sm text-gray-600">United States</p>
                        <p className="text-sm text-gray-600">
                          +1 (555) 123-4567
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-medium text-gray-900 mb-2">
                          Work
                        </h3>
                        <p className="text-sm text-gray-600">John Doe</p>
                        <p className="text-sm text-gray-600">
                          456 Business Ave, Suite 200
                        </p>
                        <p className="text-sm text-gray-600">
                          New York, NY 10002
                        </p>
                        <p className="text-sm text-gray-600">United States</p>
                        <p className="text-sm text-gray-600">
                          +1 (555) 987-6543
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
            {activeTab === "payment" && (
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    Payment Methods
                  </h2>
                  <Button variant="primary" size="sm">
                    Add New Card
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                          alt="Visa"
                          className="h-8"
                        />
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h3 className="text-base font-medium text-gray-900">
                              Visa ending in 4242
                            </h3>
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Default
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Expires 12/2025
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                          alt="Mastercard"
                          className="h-8"
                        />
                        <div className="ml-4">
                          <h3 className="text-base font-medium text-gray-900">
                            Mastercard ending in 5678
                          </h3>
                          <p className="text-sm text-gray-600">
                            Expires 08/2024
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-800">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
            {activeTab === "notifications" && (
              <Card>
                <h2 className="text-xl font-medium text-gray-900 mb-6">
                  Notification Preferences
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Email Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Order Updates
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive emails about your order status
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="orderUpdates"
                            id="orderUpdates"
                            defaultChecked={true}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="orderUpdates"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Promotions and Deals
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive emails about promotions, discounts and deals
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="promotions"
                            id="promotions"
                            defaultChecked={true}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="promotions"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Account Activity
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive emails for account activity and security
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="accountActivity"
                            id="accountActivity"
                            defaultChecked={true}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="accountActivity"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Product Reviews
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive emails asking for product reviews
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="productReviews"
                            id="productReviews"
                            defaultChecked={false}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="productReviews"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      Push Notifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Order Updates
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive push notifications about your order status
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="pushOrderUpdates"
                            id="pushOrderUpdates"
                            defaultChecked={true}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="pushOrderUpdates"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Promotions and Deals
                          </p>
                          <p className="text-xs text-gray-500">
                            Receive push notifications about promotions and
                            deals
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="pushPromotions"
                            id="pushPromotions"
                            defaultChecked={false}
                            className="checked:bg-indigo-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="pushPromotions"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button variant="primary">Save Preferences</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
