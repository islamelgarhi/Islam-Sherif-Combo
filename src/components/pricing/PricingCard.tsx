import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';
import { calculateAnnualPrice } from '@/data/pricing';
import type { PricingPlan } from '@/types/pricing';

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: 'monthly' | 'annually';
}

export function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  const price = billingPeriod === 'annually' 
    ? calculateAnnualPrice(plan.price) / 12 // Show monthly price for annual billing
    : plan.price;

  return (
    <div 
      className={cn(
        "group relative bg-white/5 backdrop-blur-sm rounded-xl p-8",
        "transform transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10",
        "hover:-translate-y-2",
        "border",
        plan.popular && "scale-105",
        plan.popular ? "border-primary hover:border-primary/80" : "border-white/10 hover:border-primary/20"
      )}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className={cn(
          "absolute -top-4 left-1/2 -translate-x-1/2",
          "px-4 py-1.5 rounded-full",
          "bg-primary text-black font-medium text-sm",
          "transform transition-transform duration-300",
          "group-hover:scale-105"
        )}>
          Most Popular
        </div>
      )}
      
      {/* Content */}
      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-2 transition-colors group-hover:text-primary">
          {plan.name}
        </h2>
        
        <p className="text-gray-400 mb-6 transition-colors group-hover:text-gray-300">
          {plan.description}
        </p>
        
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-white transition-colors group-hover:text-primary">
              ${Math.round(price)}
            </span>
            <span className="text-gray-400">/mo</span>
          </div>
          {billingPeriod === 'annually' && (
            <p className="mt-2 text-sm">
              <span className="text-primary">Billed annually</span>
              <span className="text-gray-400"> (${calculateAnnualPrice(plan.price)}/year)</span>
            </p>
          )}
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/feature">
              <Check className={cn(
                "w-5 h-5 mt-0.5 shrink-0 text-primary",
                "transition-all duration-300",
                "group-hover/feature:scale-110"
              )} />
              <span className="text-gray-300 group-hover:text-gray-200 transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <Button 
          fullWidth
          variant={plan.popular ? 'primary' : 'secondary'}
          className={cn(
            "transform transition-all duration-300",
            "group-hover:scale-[1.02]",
            "group-hover:shadow-lg",
            plan.popular ? "group-hover:shadow-primary/20" : "group-hover:shadow-white/10"
          )}
        >
          {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
        </Button>

        {/* Money-back guarantee */}
        <p className="mt-4 text-center text-sm text-gray-400">
          30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}