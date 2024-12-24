import React from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { DashboardTabs } from '../components/dashboard/DashboardTabs';
import { WidgetGrid } from '../components/dashboard/widgets/WidgetGrid';
import { AchievementsSection } from '../components/dashboard/achievements/AchievementsSection';
import { ProgressSection } from '../components/dashboard/progress/ProgressSection';
import { ChallengesSection } from '../components/dashboard/challenges/ChallengesSection';
import { PointsSummary } from '../components/dashboard/points/PointsSummary';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard Demo</h1>
          <Button 
            onClick={() => navigate('/free-trial')}
            className="bg-primary text-black hover:bg-primary/90"
          >
            Start Free Trial
          </Button>
        </div>

        <DashboardStats />
        <WidgetGrid className="mt-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ChallengesSection />
          </div>
          <div className="space-y-8">
            <PointsSummary />
            <ProgressSection />
          </div>
        </div>
        
        <div className="mt-8">
          <AchievementsSection />
        </div>
        
        <DashboardTabs className="mt-8" />
      </div>
    </main>
  );
}