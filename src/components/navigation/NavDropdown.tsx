import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="relative"
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2",
          "text-gray-600 dark:text-gray-300",
          "hover:text-primary dark:hover:text-primary",
          "transition-colors duration-200",
          isOpen && "text-primary"
        )}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      <div
        className={cn(
          "absolute top-full left-0 mt-1 w-64",
          "bg-white dark:bg-gray-800",
          "rounded-lg shadow-lg",
          "border border-gray-200 dark:border-gray-700",
          "transform transition-all duration-200 origin-top-left",
          "z-50",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "block px-4 py-2",
                "hover:bg-gray-50 dark:hover:bg-gray-700",
                "transition-colors duration-200"
              )}
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-gray-900 dark:text-white">
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}