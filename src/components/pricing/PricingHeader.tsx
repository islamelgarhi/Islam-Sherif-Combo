import React from 'react';
import { CreditCard } from 'lucide-react';
import { cn } from '@/utils/cn';
import { ANNUAL_DISCOUNT } from '@/data/pricing';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'annually';
  onBillingPeriodChange: (period: 'monthly' | 'annually') => void;
}

export function PricingHeader({ billingPeriod, onBillingPeriodChange }: PricingHeaderProps) {
  const discount = Math.round(ANNUAL_DISCOUNT * 100);

  return (
    <div className="text-center mb-16">
      <div className="inline-block group">
        <CreditCard className="h-16 w-16 text-primary mx-auto mb-6 transform transition-transform group-hover:scale-110" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        Choose the perfect plan for your business needs
      </p>

      <div className="inline-flex items-center gap-2 bg-white/5 rounded-full p-1">
        <button 
          onClick={() => onBillingPeriodChange('monthly')}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium",
            "transition-all duration-300",
            billingPeriod === 'monthly' 
              ? "bg-primary text-black" 
              : "text-gray-400 hover:text-white"
          )}
        >
          Monthly
        </button>
        <button 
          onClick={() => onBillingPeriodChange('annually')}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium",
            "transition-all duration-300",
            billingPeriod === 'annually' 
              ? "bg-primary text-black" 
              : "text-gray-400 hover:text-white"
          )}
        >
          Annual (Save {discount}%)
        </button>
      </div>
    </div>
  );
}