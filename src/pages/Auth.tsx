import { useState } from "react";
import { Link } from "react-router-dom";
import {
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  LockIcon,
  MailIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer");
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card padding="lg" className="w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {isLogin ? "Sign in to your account" : "Create an account"}
            </h1>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Enter your details to access your account"
                : "Fill in your information to create an account"}
            </p>
          </div>
          {/* Toggle Login/Register */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md ${
                  isLogin ? "bg-white shadow-sm text-gray-900" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  !isLogin
                    ? "bg-white shadow-sm text-gray-900"
                    : "text-gray-500"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
          </div>
          {/* Form */}
          <form className="space-y-6">
            {!isLogin && (
              <>
                <div className="flex gap-4">
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="John"
                    required
                    fullWidth
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    required
                    fullWidth
                  />
                </div>
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I want to
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className={`flex items-center justify-center p-4 border rounded-lg ${
                        userType === "buyer"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-gray-300 text-gray-500"
                      }`}
                      onClick={() => setUserType("buyer")}
                    >
                      <UserIcon className="h-5 w-5 mr-2" />
                      Buy
                    </button>
                    <button
                      type="button"
                      className={`flex items-center justify-center p-4 border rounded-lg ${
                        userType === "seller"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-gray-300 text-gray-500"
                      }`}
                      onClick={() => setUserType("seller")}
                    >
                      <ShoppingBagIcon className="h-5 w-5 mr-2" />
                      Sell
                    </button>
                  </div>
                </div>
              </>
            )}
            <div>
              <div className="relative">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  required
                  fullWidth
                  className="pl-10"
                />
                <MailIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  fullWidth
                  className="pl-10 pr-10"
                />
                <LockIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  className="absolute right-3 top-9"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            {!isLogin && (
              <div>
                <div className="relative">
                  <Input
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    fullWidth
                    className="pl-10"
                  />
                  <LockIcon className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
                </div>
              </div>
            )}
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}
            <div>
              <Button type="submit" variant="primary" fullWidth>
                {isLogin ? "Sign in" : "Create account"}
              </Button>
            </div>
          </form>
          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="#4285F4" viewBox="0 0 24 24">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                <span className="sr-only">Sign in with Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="#3b5998" viewBox="0 0 24 24">
                  <path d="M24,12.073c0,-6.627 -5.373,-12 -12,-12c-6.627,0 -12,5.373 -12,12c0,5.99 4.388,10.954 10.125,11.854l0,-8.385l-3.047,0l0,-3.469l3.047,0l0,-2.642c0,-3.007 1.792,-4.669 4.533,-4.669c1.312,0 2.686,0.235 2.686,0.235l0,2.953l-1.514,0c-1.491,0 -1.956,0.925 -1.956,1.874l0,2.249l3.328,0l-0.532,3.469l-2.796,0l0,8.385c5.737,-0.9 10.125,-5.864 10.125,-11.854Z" />
                </svg>
                <span className="sr-only">Sign in with Facebook</span>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Auth;
