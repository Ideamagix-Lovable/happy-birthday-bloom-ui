import React, { useState } from 'react';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, Gift, ChefHat } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DispatchDashboard = () => {
  const [weeklyStats, setWeeklyStats] = useState([
    { day: 'Sun', cakes: 5 },
    { day: 'Mon', cakes: 8 },
    { day: 'Tue', cakes: 12 },
    { day: 'Wed', cakes: 6 },
    { day: 'Thu', cakes: 9 },
    { day: 'Fri', cakes: 15 },
    { day: 'Sat', cakes: 7 }
  ]);
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, description: 'New dispatch created for Rajesh Kumar', time: '2 mins ago' },
    { id: 2, description: 'Shipment dispatched via Blue Dart', time: '15 mins ago' },
    { id: 3, description: 'Cultivator Priya Devi approved dispatch', time: '30 mins ago' },
  ]);

  const handleGenerateKitchenReport = () => {
    // Navigate to kitchen report detail page
    window.location.href = '/birthday/kitchen-report';
  };

  const handleGenerateCultivatorReport = () => {
    // Navigate to cultivator report page
    window.location.href = '/birthday/cultivator-report';
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Dispatches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">356</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-green-500">+20%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Average Delivery Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">3.2 days</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-red-500">-5%</span> slower than expected
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">24</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-orange-500">+8</span> new pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Delivery Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-green-500">+0.3%</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Dispatch Overview</CardTitle>
            <CardDescription>A summary of dispatch activities this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cakes" fill="#b33324" name="Cakes Dispatched" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Cultivators</CardTitle>
            <CardDescription>Cultivators with the highest approval rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-none space-y-3">
              <li className="flex items-center justify-between">
                <span>Priya Devi</span>
                <span className="font-medium text-green-600">95%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunil Das</span>
                <span className="font-medium text-green-600">92%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Ravi Kumar</span>
                <span className="font-medium text-green-600">90%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChefHat className="w-5 h-5 mr-2" />
              Kitchen Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate detailed kitchen requirements report for cake preparation
            </p>
            <Button 
              onClick={handleGenerateKitchenReport}
              className="w-full bg-[#b33324] hover:bg-[#b33324]/90"
            >
              Generate Kitchen Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Cultivator Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate cultivator assignment and approval report
            </p>
            <Button 
              onClick={handleGenerateCultivatorReport}
              className="w-full bg-[#b33324] hover:bg-[#b33324]/90"
            >
              Generate Cultivator Report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities in the dispatch module</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-none space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-[#b33324] rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Weekly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Statistics</CardTitle>
          <CardDescription>Key metrics for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">New Dispatches</p>
              <div className="text-xl font-bold text-blue-600">68</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Dispatches</p>
              <div className="text-xl font-bold text-green-600">55</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Dispatches</p>
              <div className="text-xl font-bold text-yellow-600">13</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average Dispatch Time</p>
              <div className="text-xl font-bold text-purple-600">2.8 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DispatchDashboard;
