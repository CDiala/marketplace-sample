import React, { useState } from "react";
import { SlidersIcon, XIcon } from "lucide-react";
import Button from "../ui/Button";
interface FilterOption {
  id: string;
  name: string;
  count?: number;
}
interface FilterSection {
  id: string;
  name: string;
  options: FilterOption[];
  type: "checkbox" | "radio" | "range";
  min?: number;
  max?: number;
}
// interface ProductFilterProps {
//   filters: FilterSection[];
//   onFilterChange: (
//     filterId: string,
//     values: string[] | [number, number]
//   ) => void;
//   selectedFilters: Record<string, string[] | [number, number]>;
//   onClearAll: () => void;
//   className?: string;
// }
interface ProductFilterProps {
  filters: (Omit<FilterSection, "options"> & { options?: FilterOption[] })[];
  onFilterChange: (
    filterId: string,
    values: string[] | [number, number]
  ) => void;
  selectedFilters: Record<string, string[] | [number, number]>;
  onClearAll: () => void;
  className?: string;
}
const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  onFilterChange,
  selectedFilters,
  onClearAll,
  className = "",
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  // Count active filters
  const activeFilterCount = Object.values(selectedFilters).reduce(
    (count, values) =>
      count + (Array.isArray(values) && values.length > 0 ? 1 : 0),
    0
  );
  const handleCheckboxChange = (
    filterId: string,
    value: string,
    checked: boolean
  ) => {
    const currentValues = (selectedFilters[filterId] as string[]) || [];
    if (checked) {
      onFilterChange(filterId, [...currentValues, value]);
    } else {
      onFilterChange(
        filterId,
        currentValues.filter((v) => v !== value)
      );
    }
  };
  const handleRangeChange = (filterId: string, values: [number, number]) => {
    onFilterChange(filterId, values);
  };
  const renderFilterContent = () => (
    <div className="space-y-6">
      {filters.map((section) => (
        <div key={section.id} className="border-b border-gray-200 pb-6">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            {section.name}
          </h3>
          {section.type === "checkbox" && (
            <div className="space-y-2">
              {section.options?.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={`filter-${section.id}-${option.id}`}
                    name={`${section.id}[]`}
                    type="checkbox"
                    checked={(
                      (selectedFilters[section.id] as string[]) || []
                    ).includes(option.id)}
                    onChange={(e) =>
                      handleCheckboxChange(
                        section.id,
                        option.id,
                        e.target.checked
                      )
                    }
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${option.id}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.name}{" "}
                    {option.count !== undefined && (
                      <span className="text-gray-400">({option.count})</span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          )}
          {section.type === "radio" && (
            <div className="space-y-2">
              {section.options?.map((option) => (
                <div key={option.id} className="flex items-center">
                  <input
                    id={`filter-${section.id}-${option.id}`}
                    name={section.id}
                    type="radio"
                    checked={(
                      (selectedFilters[section.id] as string[]) || []
                    ).includes(option.id)}
                    onChange={() => onFilterChange(section.id, [option.id])}
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${option.id}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.name}
                  </label>
                </div>
              ))}
            </div>
          )}
          {section.type === "range" &&
            section.min !== undefined &&
            section.max !== undefined && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min={section.min}
                    max={section.max}
                    value={
                      (selectedFilters[section.id] as [number, number])?.[0] ||
                      section.min
                    }
                    onChange={(e) => {
                      const min = Math.max(
                        section.min ?? 0,
                        Number(e.target.value)
                      );
                      const max =
                        (
                          selectedFilters[section.id] as [number, number]
                        )?.[1] || section.max;
                      handleRangeChange(section.id, [
                        min || section.min || 0,
                        max || section.max || 0,
                      ]);
                    }}
                    className="w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    min={section.min}
                    max={section.max}
                    value={
                      (selectedFilters[section.id] as [number, number])?.[1] ||
                      section.max
                    }
                    onChange={(e) => {
                      const min =
                        (
                          selectedFilters[section.id] as [number, number]
                        )?.[0] || section.min;
                      const max = Math.min(
                        section.max ?? 0,
                        Number(e.target.value)
                      );
                      handleRangeChange(section.id, [
                        min || section.min || 0,
                        max || section.max || 0,
                      ]);
                    }}
                    className="w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}
        </div>
      ))}
    </div>
  );
  return (
    <div className={className}>
      {/* Mobile filter dialog */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center"
          >
            <SlidersIcon className="h-4 w-4 mr-1" />
            Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </Button>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onClearAll}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Clear all
            </button>
          )}
        </div>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-25">
            <div className="fixed inset-y-0 right-0 z-50 w-full bg-white p-4 sm:max-w-sm sm:p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <XIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              {renderFilterContent()}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    onClearAll();
                    setMobileFiltersOpen(false);
                  }}
                >
                  Clear all
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Desktop filter */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onClearAll}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Clear all
            </button>
          )}
        </div>
        {renderFilterContent()}
      </div>
    </div>
  );
};
export default ProductFilter;
