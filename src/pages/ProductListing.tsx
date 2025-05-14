import { useState } from "react";
import { SlidersIcon, GridIcon, ListIcon, XIcon } from "lucide-react";
import ProductGrid from "../components/products/ProductGrid";
import ProductFilter from "../components/products/ProductFilter";
import Button from "../components/ui/Button";
// Mock data
const products = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviewCount: 120,
    isNew: true,
  },
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
    id: "3",
    title: "Ultra HD 4K Smart TV - 55 Inch",
    price: 499.99,
    originalPrice: 599.99,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewCount: 215,
  },
  {
    id: "4",
    title: "Professional DSLR Camera with 18-55mm Lens",
    price: 799.99,
    originalPrice: 899.99,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
  },
  {
    id: "5",
    title: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    reviewCount: 78,
    isNew: true,
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
    id: "7",
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.1,
    reviewCount: 42,
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
    id: "9",
    title: "Smart Home Security Camera",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    reviewCount: 56,
  },
  {
    id: "10",
    title: "Electric Coffee Grinder",
    price: 49.99,
    originalPrice: 69.99,
    image:
      "https://images.unsplash.com/photo-1606763106698-62a0c2e5bb53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    reviewCount: 37,
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
  {
    id: "12",
    title: "Fitness Tracker with Heart Rate Monitor",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    reviewCount: 74,
  },
];
type FilterOption = {
  id: string;
  name: string;
  count?: number;
};

type FilterSection = {
  id: string;
  name: string;
  type: "checkbox" | "range" | "radio";
  options?: FilterOption[];
  min?: number;
  max?: number;
};

const filterOptions: FilterSection[] = [
  {
    id: "category",
    name: "Category",
    type: "checkbox",
    options: [
      {
        id: "electronics",
        name: "Electronics",
        count: 8,
      },
      {
        id: "fashion",
        name: "Fashion",
        count: 0,
      },
      {
        id: "home",
        name: "Home & Garden",
        count: 2,
      },
      {
        id: "beauty",
        name: "Beauty & Health",
        count: 0,
      },
      {
        id: "sports",
        name: "Sports & Outdoors",
        count: 2,
      },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    type: "checkbox",
    options: [
      {
        id: "apple",
        name: "Apple",
        count: 3,
      },
      {
        id: "samsung",
        name: "Samsung",
        count: 2,
      },
      {
        id: "sony",
        name: "Sony",
        count: 1,
      },
      {
        id: "logitech",
        name: "Logitech",
        count: 2,
      },
      {
        id: "anker",
        name: "Anker",
        count: 1,
      },
      {
        id: "other",
        name: "Other Brands",
        count: 3,
      },
    ],
  },
  {
    id: "price",
    name: "Price",
    type: "range",
    min: 0,
    max: 1000,
  },
  {
    id: "rating",
    name: "Rating",
    type: "radio",
    options: [
      {
        id: "4_plus",
        name: "4★ & above",
      },
      {
        id: "3_plus",
        name: "3★ & above",
      },
      {
        id: "2_plus",
        name: "2★ & above",
      },
      {
        id: "1_plus",
        name: "1★ & above",
      },
    ],
  },
  {
    id: "discount",
    name: "Discount",
    type: "checkbox",
    options: [
      {
        id: "10_plus",
        name: "10% or more",
      },
      {
        id: "20_plus",
        name: "20% or more",
      },
      {
        id: "30_plus",
        name: "30% or more",
      },
      {
        id: "40_plus",
        name: "40% or more",
      },
      {
        id: "50_plus",
        name: "50% or more",
      },
    ],
  },
];
const ProductListing = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[] | [number, number]>
  >({});
  const [sortOption, setSortOption] = useState("featured");
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const handleFilterChange = (
    filterId: string,
    values: string[] | [number, number]
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: values,
    }));
  };
  const clearAllFilters = () => {
    setSelectedFilters({});
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      {/* Page header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            All Products
          </h1>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <span>Home</span>
            <span className="mx-2">•</span>
            <span className="text-gray-900">All Products</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter dialog */}
        {isFilterSidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setIsFilterSidebarOpen(false)}
            ></div>
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsFilterSidebarOpen(false)}
                >
                  <XIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <div className="mt-4 px-4">
                <ProductFilter
                  filters={filterOptions}
                  onFilterChange={handleFilterChange}
                  selectedFilters={selectedFilters}
                  onClearAll={clearAllFilters}
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilter
              filters={filterOptions}
              onFilterChange={handleFilterChange}
              selectedFilters={selectedFilters}
              onClearAll={clearAllFilters}
            />
          </div>
          {/* Product grid */}
          <div className="flex-1">
            {/* Sort and view options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsFilterSidebarOpen(true)}
                className="flex items-center lg:hidden"
              >
                <SlidersIcon className="h-4 w-4 mr-1" />
                Filters
              </Button>
              <div className="flex items-center space-x-2 ml-auto">
                <label htmlFor="sort" className="text-sm text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="rounded border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="bg-gray-100 rounded-lg p-1 flex">
                  <button
                    className={`p-1.5 rounded-md ${
                      viewType === "grid" ? "bg-white shadow" : ""
                    }`}
                    onClick={() => setViewType("grid")}
                    aria-label="Grid view"
                  >
                    <GridIcon className="h-4 w-4 text-gray-600" />
                  </button>
                  <button
                    className={`p-1.5 rounded-md ${
                      viewType === "list" ? "bg-white shadow" : ""
                    }`}
                    onClick={() => setViewType("list")}
                    aria-label="List view"
                  >
                    <ListIcon className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            {/* Active filters */}
            {Object.keys(selectedFilters).length > 0 && (
              <div className="bg-gray-50 px-4 py-3 rounded-lg mb-6">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-sm font-medium text-gray-700">
                    Active Filters:
                  </h3>
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Clear all
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).map(([filterId, values]) => {
                    // Handle range filters
                    if (
                      filterId === "price" &&
                      Array.isArray(values) &&
                      values.length === 2
                    ) {
                      return (
                        <div
                          key={filterId}
                          className="inline-flex items-center rounded-full border border-gray-200 bg-white py-1 pl-3 pr-2 text-sm"
                        >
                          <span>
                            Price: ${values[0]} - ${values[1]}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const newFilters = {
                                ...selectedFilters,
                              };
                              delete newFilters[filterId];
                              setSelectedFilters(newFilters);
                            }}
                            className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </div>
                      );
                    }
                    // Handle array filters
                    if (
                      Array.isArray(values) &&
                      typeof values[0] === "string"
                    ) {
                      return values.map((value) => {
                        // Find the filter section
                        const filterSection = filterOptions.find(
                          (f) => f.id === filterId
                        );
                        // Find the option name
                        const optionName =
                          (filterSection?.options ?? []).find(
                            (o) => o.id === value
                          )?.name || value;
                        return (
                          <div
                            key={`${filterId}-${value}`}
                            className="inline-flex items-center rounded-full border border-gray-200 bg-white py-1 pl-3 pr-2 text-sm"
                          >
                            <span>
                              {filterSection?.name}: {optionName}
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                const newValues = (
                                  selectedFilters[filterId] as string[]
                                ).filter((v) => v !== value);
                                setSelectedFilters({
                                  ...selectedFilters,
                                  [filterId]: newValues,
                                });
                              }}
                              className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                            >
                              <XIcon className="h-3 w-3" />
                            </button>
                          </div>
                        );
                      });
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
            <ProductGrid products={products} columns={4} />
            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">12</span> of{" "}
                    <span className="font-medium">48</span> results
                  </p>
                </div>
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      4
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListing;
