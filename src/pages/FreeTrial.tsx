import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTrial } from '@/hooks/useTrial';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function FreeTrial() {
  const navigate = useNavigate();
  const { startTrial, loading, error } = useTrial();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    businessName: '',
    businessType: 'rental' as const
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await startTrial(formData);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80">
            Experience the power of professional review management risk-free.
          </p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle className="w-5 h-5" />
              <p>{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-black dark:text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-black dark:text-white mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-black dark:text-white mb-2">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="rental">Rental Property</option>
              <option value="restaurant">Restaurant</option>
            </select>
          </div>

          <Button 
            type="submit" 
            fullWidth 
            disabled={loading}
            className="relative"
          >
            {loading ? (
              <LoadingSpinner color="white" size="sm" />
            ) : (
              'Start Free Trial'
            )}
          </Button>

          <p className="text-sm text-center text-black/60 dark:text-white/60">
            No credit card required • 14-day free trial
          </p>
        </form>
      </div>
    </main>
  );
}