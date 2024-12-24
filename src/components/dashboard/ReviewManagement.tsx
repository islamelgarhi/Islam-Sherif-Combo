import React from 'react';
import { useReviews } from '@/hooks/useReviews';
import { ActiveCase } from './ActiveCase';
import { ReviewCard } from './ReviewCard';

export function ReviewManagement() {
  const { reviews, isLoading } = useReviews();
  const activeCase = reviews?.[0]; // Assuming first review is the most recent

  const handleResolveCase = (review: any) => {
    // Handle case resolution
    console.log('Resolving case:', review);
  };

  return (
    <div className="space-y-8">
      {/* Active Case Section */}
      {activeCase && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Latest Active Case</h2>
            <span className="text-sm text-primary">
              Response time: 2-4 hours
            </span>
          </div>
          <ActiveCase 
            review={activeCase}
            onResolve={handleResolveCase}
          />
        </div>
      )}

      {/* Other Reviews */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Other Active Cases</h2>
          <button className="text-primary hover:text-primary/80 transition-colors">
            View All
          </button>
        </div>
        
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-white/5 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {reviews?.slice(1).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}