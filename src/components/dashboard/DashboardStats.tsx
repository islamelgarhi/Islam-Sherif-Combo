import React from 'react';
import { Star, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { DashboardCard } from './DashboardCard';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Overall Rating"
        value={4.8}
        icon={Star}
        trend={{ value: 12, isPositive: true }}
        formatter={(val) => val.toFixed(1)}
        color="primary"
      />
      <DashboardCard
        title="Active Reviews"
        value={1284}
        icon={Users}
        trend={{ value: 8, isPositive: true }}
        color="success"
      />
      <DashboardCard
        title="Pending Cases"
        value={5}
        icon={AlertTriangle}
        trend={{ value: 2, isPositive: false }}
        color="warning"
      />
      <DashboardCard
        title="Success Rate"
        value={92}
        icon={TrendingUp}
        trend={{ value: 5, isPositive: true }}
        formatter={(val) => `${val.toFixed(0)}%`}
        color="info"
      />
    </div>
  );
}