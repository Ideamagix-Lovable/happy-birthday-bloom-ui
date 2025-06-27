
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          {/* Compact Header Section */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Management Dashboard</h1>
              <p className="text-sm text-gray-600">Comprehensive analytics and insights</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3" />
                Refresh
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="w-3 h-3" />
                Filter
              </Button>
            </div>
          </div>

          {/* Compact Filter Tabs */}
          <div className="mb-4">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-fit grid-cols-3 bg-white shadow-sm h-8">
                <TabsTrigger 
                  value="daily" 
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-4 text-xs"
                >
                  Daily
                </TabsTrigger>
                <TabsTrigger value="weekly" className="px-4 text-xs">Weekly</TabsTrigger>
                <TabsTrigger value="monthly" className="px-4 text-xs">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Compact Grid Layout */}
          <div className="space-y-4">
            {/* Row 1: Total Donation */}
            <ManagementStats />

            {/* Row 2: Donor Analysis & Birthday/Anniversary Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <DonorAnalysis />
              <BirthdayAnniversaryData />
            </div>

            {/* Row 3: Daily Trends Chart */}
            <DailyTrendsChart />

            {/* Row 4: Top Donors Table */}
            <TopDonorsManagement />

            {/* Row 5: Dispatch Summary */}
            <DispatchSummarySection />

            {/* Row 6: Calls Analytics */}
            <CallsAnalytics />

            {/* Row 7: Response Analytics & Source of Donation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ResponseAnalytics />
              <SourceOfDonation />
            </div>

            {/* Row 8: Schemes and Ranges */}
            <SchemesAndRanges />

            {/* Row 9: Top Locations */}
            <TopLocations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
