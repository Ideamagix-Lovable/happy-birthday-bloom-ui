
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Filter, RefreshCw } from 'lucide-react';

// Import new dashboard components
import DashboardStatCards from '@/components/dashboard/DashboardStatCards';
import DonationAnalytics from '@/components/dashboard/DonationAnalytics';
import DispatchOperations from '@/components/dashboard/DispatchOperations';
import TopDonorsTable from '@/components/dashboard/TopDonorsTable';

const MisDashboardNew = () => {
  const [activeFilter, setActiveFilter] = useState('daily');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">MIS Dashboard</h1>
              <p className="text-gray-600 mt-1">Real-time insights and analytics</p>
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
              <TabsList className="grid w-fit grid-cols-2 bg-white shadow-sm">
                <TabsTrigger 
                  value="daily" 
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-6"
                >
                  Daily View
                </TabsTrigger>
                <TabsTrigger value="weekly" className="px-6">Weekly View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Dashboard Stats Cards */}
          <DashboardStatCards />

          {/* Donation Summary Card */}
          <Card className="mb-8 shadow-md">
            <CardHeader className="border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-white">
              <CardTitle className="text-xl font-bold text-gray-800">
                Bhiwandi - Donation Summary for Financial Year 2025-26
              </CardTitle>
              <p className="text-sm text-gray-600">As of 27th June 2025</p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹0</div>
                  <div className="text-sm text-gray-600 mt-1">As per Accounts</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">₹0</div>
                  <div className="text-sm text-gray-600 mt-1">As per DMS</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-gray-600 mt-1">Count of Donations</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donation Analytics Charts */}
          <DonationAnalytics />

          {/* Top Donors Table */}
          <TopDonorsTable />

          {/* Dispatch Operations */}
          <DispatchOperations />

          {/* Donor Summary */}
          <Card className="mb-8 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Donor Summary Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* New Donor */}
                <div className="p-6 border rounded-lg bg-blue-50">
                  <h3 className="font-semibold text-blue-800 mb-4">New Donors</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donor Count</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donation Count</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Amount</span>
                      <span className="font-medium">₹0</span>
                    </div>
                  </div>
                </div>

                {/* Repeat Donor */}
                <div className="p-6 border rounded-lg bg-green-50">
                  <h3 className="font-semibold text-green-800 mb-4">Repeat Donors</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donor Count</span>
                      <span className="font-medium">-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donation Count</span>
                      <span className="font-medium">-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Amount</span>
                      <span className="font-medium">-</span>
                    </div>
                  </div>
                </div>

                {/* Total */}
                <div className="p-6 border rounded-lg bg-purple-50">
                  <h3 className="font-semibold text-purple-800 mb-4">Total</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donor Count</span>
                      <span className="font-medium">-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Donation Count</span>
                      <span className="font-medium">-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Amount</span>
                      <span className="font-medium">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MisDashboardNew;
