import { forwardRef, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, fullWidth = false, className = "", ...props },
    ref
  ) => {
    const widthClass = fullWidth ? "w-full" : "";
    const errorClass = error
      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
      : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500";
    return (
      <div className={`${widthClass}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 text-gray-900 placeholder-gray-500 sm:text-sm ${errorClass} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);
export default Input;
