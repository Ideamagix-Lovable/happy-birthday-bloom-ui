
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Filter, RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';

// Import management dashboard components
import ManagementStats from '@/components/management/ManagementStats';
import DonorAnalysis from '@/components/management/DonorAnalysis';
import BirthdayAnniversaryData from '@/components/management/BirthdayAnniversaryData';
import DailyTrendsChart from '@/components/management/DailyTrendsChart';
import TopDonorsManagement from '@/components/management/TopDonorsManagement';
import DispatchSummarySection from '@/components/management/DispatchSummarySection';
import CallsAnalytics from '@/components/management/CallsAnalytics';
import ResponseAnalytics from '@/components/management/ResponseAnalytics';
import SchemesAndRanges from '@/components/management/SchemesAndRanges';
import SourceOfDonation from '@/components/management/SourceOfDonation';
import TopLocations from '@/components/management/TopLocations';

const ManagementDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('daily');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Management Dashboard</h1>
              <p className="text-gray-600 mt-1">Comprehensive analytics and insights</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter By Date
              </Button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-fit grid-cols-3 bg-white shadow-sm">
                <TabsTrigger 
                  value="daily" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6"
                >
                  Daily
                </TabsTrigger>
                <TabsTrigger value="weekly" className="px-6">Weekly</TabsTrigger>
                <TabsTrigger value="monthly" className="px-6">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Total Donation Stats */}
          <ManagementStats />

          {/* Donor Analysis */}
          <DonorAnalysis />

          {/* Birthday & Anniversary Data */}
          <BirthdayAnniversaryData />

          {/* Daily Trends Chart */}
          <DailyTrendsChart />

          {/* Top 10 Donors Table */}
          <TopDonorsManagement />

          {/* Dispatch Summary */}
          <DispatchSummarySection />

          {/* Calls Analytics */}
          <CallsAnalytics />

          {/* Response Analytics */}
          <ResponseAnalytics />

          {/* Schemes and Ranges */}
          <SchemesAndRanges />

          {/* Source of Donation */}
          <SourceOfDonation />

          {/* Top Locations */}
          <TopLocations />
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
