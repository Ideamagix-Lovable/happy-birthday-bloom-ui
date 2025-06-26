
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Users, DollarSign, Package, Phone, 
  Calendar, Gift, FileText, Clock, Target, Award
} from 'lucide-react';

const Analytics = () => {
  // Mock data for analytics
  const monthlyDonationsData = [
    { month: 'Jan', amount: 125000, count: 450 },
    { month: 'Feb', amount: 145000, count: 520 },
    { month: 'Mar', amount: 165000, count: 580 },
    { month: 'Apr', amount: 185000, count: 640 },
    { month: 'May', amount: 195000, count: 680 },
    { month: 'Jun', amount: 215000, count: 750 }
  ];

  const donorTypeData = [
    { name: 'New Donors', value: 35, color: '#8884d8' },
    { name: 'Repeat Donors', value: 45, color: '#82ca9d' },
    { name: 'Corporate', value: 15, color: '#ffc658' },
    { name: 'Others', value: 5, color: '#ff7300' }
  ];

  const dispatchStatusData = [
    { status: 'Pending', count: 125, color: '#ff7300' },
    { status: 'Dispatched', count: 890, color: '#82ca9d' },
    { status: 'Delivered', count: 756, color: '#8884d8' },
    { status: 'Returned', count: 23, color: '#ff0000' }
  ];

  const regionWiseData = [
    { region: 'Mumbai', donations: 450, amount: 85000 },
    { region: 'Delhi', donations: 380, amount: 72000 },
    { region: 'Bangalore', donations: 320, amount: 65000 },
    { region: 'Chennai', donations: 280, amount: 58000 },
    { region: 'Pune', donations: 250, amount: 48000 },
    { region: 'Others', donations: 420, amount: 95000 }
  ];

  const weeklyCallsData = [
    { day: 'Mon', connected: 85, notConnected: 15 },
    { day: 'Tue', connected: 92, notConnected: 18 },
    { day: 'Wed', connected: 78, notConnected: 22 },
    { day: 'Thu', connected: 88, notConnected: 12 },
    { day: 'Fri', connected: 95, notConnected: 15 },
    { day: 'Sat', connected: 72, notConnected: 28 },
    { day: 'Sun', connected: 65, notConnected: 35 }
  ];

  const campaignPerformanceData = [
    { campaign: 'Akshaya Tritiya', donations: 1200, amount: 245000, conversion: 15.8 },
    { campaign: 'Ram Navami', donations: 890, amount: 178000, conversion: 12.4 },
    { campaign: 'Janmashtami', donations: 750, amount: 156000, conversion: 18.2 },
    { campaign: 'Diwali', donations: 1100, amount: 225000, conversion: 14.6 },
    { campaign: 'General', donations: 2100, amount: 380000, conversion: 8.9 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive insights and performance metrics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Export Report</Button>
            <Button size="sm" className="bg-[#b33324] hover:bg-[#b33324]/90">
              Schedule Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">₹12,45,000</div>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+18.2% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Active Donors</CardTitle>
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">8,456</div>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+12.5% growth</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Dispatches</CardTitle>
                    <Package className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">1,794</div>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">+8.7% efficiency</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Call Success Rate</CardTitle>
                    <Phone className="h-4 w-4 text-orange-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">82.5%</div>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    <span className="text-sm text-red-500">-2.1% from target</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Donation Trends</CardTitle>
                  <CardDescription>Revenue and donation count over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyDonationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [
                        name === 'amount' ? `₹${value.toLocaleString()}` : value,
                        name === 'amount' ? 'Amount' : 'Count'
                      ]} />
                      <Area type="monotone" dataKey="amount" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="count" stackId="2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Donor Distribution</CardTitle>
                  <CardDescription>Breakdown by donor type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={donorTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                      >
                        {donorTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Region-wise Performance</CardTitle>
                  <CardDescription>Donations by geographical region</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={regionWiseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="donations" fill="#8884d8" name="Donations" />
                      <Bar dataKey="amount" fill="#82ca9d" name="Amount (₹)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Top performing campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campaignPerformanceData.map((campaign, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{campaign.campaign}</div>
                          <div className="text-sm text-gray-600">
                            {campaign.donations} donations • ₹{campaign.amount.toLocaleString()}
                          </div>
                        </div>
                        <Badge variant={campaign.conversion > 15 ? "default" : "secondary"}>
                          {campaign.conversion}% conversion
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="donors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">New Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">2,847</div>
                  <p className="text-sm text-gray-500 mt-1">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Retention Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">68.5%</div>
                  <p className="text-sm text-gray-500 mt-1">Donor retention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Avg. Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">₹1,475</div>
                  <p className="text-sm text-gray-500 mt-1">Per donor</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dispatch" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispatch Status Overview</CardTitle>
                  <CardDescription>Current status of all dispatches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={dispatchStatusData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="count"
                        label={(entry) => `${entry.status}: ${entry.count}`}
                      >
                        {dispatchStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Call Performance</CardTitle>
                  <CardDescription>Connected vs Not Connected calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyCallsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="connected" stackId="a" fill="#82ca9d" name="Connected" />
                      <Bar dataKey="notConnected" stackId="a" fill="#ff7300" name="Not Connected" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <p className="text-sm text-gray-500 mt-1">Currently running</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Best Performer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-green-600">Janmashtami</div>
                  <p className="text-sm text-gray-500 mt-1">18.2% conversion</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">45,678</div>
                  <p className="text-sm text-gray-500 mt-1">People reached</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Campaign ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">4.2x</div>
                  <p className="text-sm text-gray-500 mt-1">Return on investment</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="operations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Task Completion</CardTitle>
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <p className="text-sm text-gray-500 mt-1">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">2.4h</div>
                  <p className="text-sm text-gray-500 mt-1">To donor queries</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Quality Score</CardTitle>
                    <Award className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">8.7/10</div>
                  <p className="text-sm text-gray-500 mt-1">Service quality</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">System Uptime</CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">99.8%</div>
                  <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
