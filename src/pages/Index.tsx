
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, BarChart, Bar, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Gift, Calendar, Package, FileText, TrendingUp, Users, DollarSign, Activity, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const donationTrendData = [
    { month: 'Jan', donations: 45000, donors: 1200, efficiency: 85 },
    { month: 'Feb', donations: 52000, donors: 1350, efficiency: 88 },
    { month: 'Mar', donations: 48000, donors: 1280, efficiency: 86 },
    { month: 'Apr', donations: 58000, donors: 1450, efficiency: 91 },
    { month: 'May', donations: 61000, donors: 1520, efficiency: 89 },
    { month: 'Jun', donations: 55000, donors: 1480, efficiency: 92 }
  ];

  const departmentMetrics = [
    { name: 'Birthday', active: 245, pending: 12, completed: 1890, efficiency: 94 },
    { name: 'Dispatch', active: 156, pending: 23, completed: 2340, efficiency: 87 },
    { name: 'DQ', active: 89, pending: 5, completed: 1200, efficiency: 96 },
    { name: 'Dialler', active: 134, pending: 18, completed: 1650, efficiency: 82 }
  ];

  const revenueData = [
    { quarter: 'Q1', revenue: 145000, target: 140000, growth: 12.5 },
    { quarter: 'Q2', revenue: 168000, target: 155000, growth: 15.8 },
    { quarter: 'Q3', revenue: 152000, target: 150000, growth: 8.3 },
    { quarter: 'Q4', revenue: 189000, target: 170000, growth: 18.2 }
  ];

  const chartConfig = {
    donations: { label: 'Donations', color: '#b33324' },
    donors: { label: 'Donors', color: '#059669' },
    efficiency: { label: 'Efficiency', color: '#7c3aed' }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Management Information System</h1>
          <p className="text-lg text-gray-600">Welcome to ISKCON Bhiwandi Donor Management System</p>
        </div>

        {/* KPI Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">₹3,19,000</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +11.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">1,480</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                +156 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Efficiency</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">89.7%</div>
              <p className="text-xs text-muted-foreground">Across all modules</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">58</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Donation & Donor Trends</CardTitle>
              <CardDescription>Monthly performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <AreaChart data={donationTrendData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="donations" stroke="var(--color-donations)" fill="var(--color-donations)" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="donors" stroke="var(--color-donors)" fill="var(--color-donors)" fillOpacity={0.3} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quarterly Revenue vs Target</CardTitle>
              <CardDescription>Performance against set targets</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={revenueData}>
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="revenue" fill="#b33324" />
                  <Bar dataKey="target" fill="#059669" opacity={0.7} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Department Status */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Department Performance Overview</CardTitle>
            <CardDescription>Real-time status across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {departmentMetrics.map((dept, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{dept.name}</h4>
                    <div className="flex items-center">
                      {dept.efficiency > 90 ? 
                        <CheckCircle className="h-4 w-4 text-green-600" /> :
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                      }
                      <span className="ml-1 text-sm">{dept.efficiency}%</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active:</span>
                      <span className="font-medium text-blue-600">{dept.active}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending:</span>
                      <span className="font-medium text-orange-600">{dept.pending}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Completed:</span>
                      <span className="font-medium text-green-600">{dept.completed}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/donors">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Calendar className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <CardTitle className="text-lg">Donors</CardTitle>
                <CardDescription>Manage donor records and profiles</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/donations">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Package className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <CardTitle className="text-lg">Donations</CardTitle>
                <CardDescription>Handle donations and transactions</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/mis/reports">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <FileText className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <CardTitle className="text-lg">Reports</CardTitle>
                <CardDescription>Generate and view reports</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/birthday">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#b33324] bg-[#b33324]/5">
              <CardHeader className="text-center">
                <Gift className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <CardTitle className="text-lg text-[#b33324]">Birthday Dispatch</CardTitle>
                <CardDescription>Comprehensive birthday cake dispatch module</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Featured Module */}
        <Card className="bg-gradient-to-r from-[#b33324]/10 to-[#b33324]/5 border-[#b33324]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#b33324] flex items-center">
              <Gift className="w-6 h-6 mr-3" />
              Birthday Dispatch Module
            </CardTitle>
            <CardDescription className="text-lg">
              Complete birthday cake dispatch management with automated workflow, tracking, and reporting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4">
                <Calendar className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Planning & Dashboard</h4>
                <p className="text-sm text-gray-600">Comprehensive planning reports with lead time management and real-time analytics</p>
              </div>
              <div className="text-center p-4">
                <Package className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Dispatch Management</h4>
                <p className="text-sm text-gray-600">Queue management, courier integration, and shipment tracking with ShipRocket API</p>
              </div>
              <div className="text-center p-4">
                <FileText className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Master File & Reports</h4>
                <p className="text-sm text-gray-600">Complete data management with upload functionality and monthly reporting</p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/birthday">
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90 text-white px-8 py-3 text-lg">
                  Launch Birthday Dispatch Module
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
