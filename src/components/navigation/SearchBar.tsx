import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ className, placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch?.('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        "relative group",
        className
      )}
    >
      <Search className={cn(
        "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
        "text-gray-400 transition-colors duration-200",
        isFocused && "text-primary"
      )} />
      
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={cn(
          "w-full h-10 pl-10 pr-10",
          "bg-gray-100 dark:bg-gray-800",
          "border border-transparent",
          "rounded-lg",
          "text-sm text-gray-900 dark:text-white",
          "placeholder-gray-500 dark:placeholder-gray-400",
          "transition-all duration-200",
          "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
          "hover:bg-gray-200 dark:hover:bg-gray-700"
        )}
      />

      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2",
            "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
            "transition-colors duration-200"
          )}
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
}