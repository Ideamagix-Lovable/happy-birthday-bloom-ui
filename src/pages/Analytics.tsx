import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ComposedChart 
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Users, DollarSign, Package, Phone, 
  Calendar, Gift, FileText, Clock, Target, Award, AlertCircle, 
  CheckCircle, Activity, Database, MapPin, CreditCard, Mail, 
  UserCheck, ShoppingCart, Truck, MessageSquare, Star
} from 'lucide-react';

const Analytics = () => {
  // Mock data for analytics
  const monthlyDonationsData = [
    { month: 'Jan', amount: 125000, count: 450, goal: 140000 },
    { month: 'Feb', amount: 145000, count: 520, goal: 150000 },
    { month: 'Mar', amount: 165000, count: 580, goal: 160000 },
    { month: 'Apr', amount: 185000, count: 640, goal: 180000 },
    { month: 'May', amount: 195000, count: 680, goal: 200000 },
    { month: 'Jun', amount: 215000, count: 750, goal: 220000 }
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
    { region: 'Mumbai', donations: 450, amount: 85000, dispatches: 412 },
    { region: 'Delhi', donations: 380, amount: 72000, dispatches: 358 },
    { region: 'Bangalore', donations: 320, amount: 65000, dispatches: 298 },
    { region: 'Chennai', donations: 280, amount: 58000, dispatches: 265 },
    { region: 'Pune', donations: 250, amount: 48000, dispatches: 235 },
    { region: 'Others', donations: 420, amount: 95000, dispatches: 398 }
  ];

  const weeklyCallsData = [
    { day: 'Mon', connected: 85, notConnected: 15, converted: 12 },
    { day: 'Tue', connected: 92, notConnected: 18, converted: 15 },
    { day: 'Wed', connected: 78, notConnected: 22, converted: 10 },
    { day: 'Thu', connected: 88, notConnected: 12, converted: 14 },
    { day: 'Fri', connected: 95, notConnected: 15, converted: 18 },
    { day: 'Sat', connected: 72, notConnected: 28, converted: 8 },
    { day: 'Sun', connected: 65, notConnected: 35, converted: 6 }
  ];

  const campaignPerformanceData = [
    { campaign: 'Akshaya Tritiya', donations: 1200, amount: 245000, conversion: 15.8, dispatches: 1150 },
    { campaign: 'Ram Navami', donations: 890, amount: 178000, conversion: 12.4, dispatches: 856 },
    { campaign: 'Janmashtami', donations: 750, amount: 156000, conversion: 18.2, dispatches: 725 },
    { campaign: 'Diwali', donations: 1100, amount: 225000, conversion: 14.6, dispatches: 1078 },
    { campaign: 'General', donations: 2100, amount: 380000, conversion: 8.9, dispatches: 2045 }
  ];

  const systemHealthData = [
    { metric: 'Database Performance', value: 94, status: 'good' },
    { metric: 'API Response Time', value: 98, status: 'excellent' },
    { metric: 'Server Uptime', value: 99.8, status: 'excellent' },
    { metric: 'Error Rate', value: 0.2, status: 'excellent' },
    { metric: 'Storage Utilization', value: 78, status: 'good' }
  ];

  const moduleUsageData = [
    { module: 'Donors', activeUsers: 45, totalSessions: 1250, avgSessionTime: '12m' },
    { module: 'Donations', activeUsers: 38, totalSessions: 980, avgSessionTime: '18m' },
    { module: 'Dispatch', activeUsers: 28, totalSessions: 756, avgSessionTime: '25m' },
    { module: 'DQ', activeUsers: 22, totalSessions: 642, avgSessionTime: '15m' },
    { module: 'Dialler', activeUsers: 18, totalSessions: 432, avgSessionTime: '22m' },
    { module: 'Analytics', activeUsers: 12, totalSessions: 298, avgSessionTime: '8m' }
  ];

  const dqStatusBreakdown = [
    { status: 'Qualified', count: 2847, percentage: 45.2 },
    { status: 'Pending', count: 1923, percentage: 30.5 },
    { status: 'Ineligible', count: 892, percentage: 14.2 },
    { status: 'Rejected', count: 445, percentage: 7.1 },
    { status: 'Review Needed', count: 193, percentage: 3.0 }
  ];

  const dailyActivityData = [
    { time: '00:00', donations: 5, dispatches: 2, calls: 0 },
    { time: '04:00', donations: 8, dispatches: 5, calls: 12 },
    { time: '08:00', donations: 45, dispatches: 38, calls: 85 },
    { time: '12:00', donations: 92, dispatches: 78, calls: 156 },
    { time: '16:00', donations: 78, dispatches: 65, calls: 142 },
    { time: '20:00', donations: 32, dispatches: 28, calls: 98 },
    { time: '24:00', donations: 12, dispatches: 8, calls: 45 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive insights and performance metrics across all modules</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Export Report</Button>
            <Button size="sm" className="bg-[#b33324] hover:bg-[#b33324]/90">
              Schedule Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="donors">Donors</TabsTrigger>
            <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
            <TabsTrigger value="dq-dialler">DQ & Dialler</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
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

            {/* System Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">DQ Queue</CardTitle>
                    <FileText className="h-4 w-4 text-indigo-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">2,847</div>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">Avg. 2.4h processing</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Active Campaigns</CardTitle>
                    <Gift className="h-4 w-4 text-pink-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-600">12</div>
                  <div className="flex items-center mt-1">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-500">Best: Janmashtami 18.2%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">Tasks Running</CardTitle>
                    <Activity className="h-4 w-4 text-cyan-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600">8</div>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">94.2% completion rate</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">System Health</CardTitle>
                    <Database className="h-4 w-4 text-emerald-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">98.2%</div>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">All systems operational</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Activity Pattern</CardTitle>
                  <CardDescription>System activity throughout the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={dailyActivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="donations" fill="#8884d8" name="Donations" />
                      <Bar dataKey="dispatches" fill="#82ca9d" name="Dispatches" />
                      <Line type="monotone" dataKey="calls" stroke="#ff7300" name="Calls" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance vs Goals</CardTitle>
                  <CardDescription>Revenue tracking against targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={monthlyDonationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value, name) => [
                        name === 'amount' || name === 'goal' ? `₹${value.toLocaleString()}` : value,
                        name === 'amount' ? 'Actual Revenue' : name === 'goal' ? 'Target' : 'Count'
                      ]} />
                      <Bar dataKey="amount" fill="#8884d8" name="amount" />
                      <Line type="monotone" dataKey="goal" stroke="#ff7300" strokeWidth={2} name="goal" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Module Usage Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Module Usage Analytics</CardTitle>
                <CardDescription>User engagement across different modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moduleUsageData.map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="font-medium text-gray-900">{module.module}</div>
                        <Badge variant="secondary">{module.activeUsers} active users</Badge>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div>{module.totalSessions} sessions</div>
                        <div>Avg: {module.avgSessionTime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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

          <TabsContent value="dq-dialler" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">DQ Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">1,923</div>
                  <p className="text-sm text-gray-500 mt-1">Awaiting qualification</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">DQ Qualified</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">2,847</div>
                  <p className="text-sm text-gray-500 mt-1">Ready for dispatch</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Dialler Calls Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">456</div>
                  <p className="text-sm text-gray-500 mt-1">82% connection rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">14.2%</div>
                  <p className="text-sm text-gray-500 mt-1">Call to donation</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>DQ Status Breakdown</CardTitle>
                  <CardDescription>Current distribution of DQ records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dqStatusBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="font-medium">{item.status}</div>
                          <Badge variant="outline">{item.percentage}%</Badge>
                        </div>
                        <div className="text-lg font-semibold">{item.count.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Call Performance</CardTitle>
                  <CardDescription>Dialler performance by day</CardDescription>
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
                      <Bar dataKey="converted" fill="#8884d8" name="Converted" />
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

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemHealthData.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-gray-600">{item.metric}</CardTitle>
                      {item.status === 'excellent' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : item.status === 'good' ? (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {item.metric === 'Error Rate' ? `${item.value}%` : 
                       item.metric === 'Server Uptime' ? `${item.value}%` : 
                       `${item.value}${item.metric.includes('Time') ? 'ms' : '%'}`}
                    </div>
                    <Badge 
                      variant={item.status === 'excellent' ? 'default' : 
                              item.status === 'good' ? 'secondary' : 'destructive'}
                      className="mt-2"
                    >
                      {item.status.toUpperCase()}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>System Performance Metrics</CardTitle>
                <CardDescription>Real-time system health indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">99.8%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">45ms</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2.1TB</div>
                    <div className="text-sm text-gray-600">Data Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">0.02%</div>
                    <div className="text-sm text-gray-600">Error Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
