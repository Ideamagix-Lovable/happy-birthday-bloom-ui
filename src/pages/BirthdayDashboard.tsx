
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Calendar, Package, Truck, Clock, Users, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Gift, Target, DollarSign, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BirthdayDashboard = () => {
  const monthlyBirthdayData = [
    { month: 'Jan', cakes: 1850, dispatched: 1820, pending: 30, cost: 185000 },
    { month: 'Feb', cakes: 1620, dispatched: 1580, pending: 40, cost: 162000 },
    { month: 'Mar', cakes: 1920, dispatched: 1890, pending: 30, cost: 192000 },
    { month: 'Apr', cakes: 2150, dispatched: 2120, pending: 30, cost: 215000 },
    { month: 'May', cakes: 2380, dispatched: 2350, pending: 30, cost: 238000 },
    { month: 'Jun', cakes: 2100, dispatched: 2070, pending: 30, cost: 210000 }
  ];

  const weeklyDispatchData = [
    { week: 'W1', monday: 45, tuesday: 52, wednesday: 48, thursday: 55, friday: 49, saturday: 58, sunday: 62 },
    { week: 'W2', monday: 48, tuesday: 55, wednesday: 51, thursday: 58, friday: 52, saturday: 61, sunday: 65 },
    { week: 'W3', monday: 52, tuesday: 58, wednesday: 55, thursday: 62, friday: 56, saturday: 65, sunday: 68 },
    { week: 'W4', monday: 49, tuesday: 56, wednesday: 52, thursday: 59, friday: 53, saturday: 62, sunday: 66 }
  ];

  const cakeTypeDistribution = [
    { type: 'Chocolate', count: 850, percentage: 35 },
    { type: 'Vanilla', count: 610, percentage: 25 },
    { type: 'Butterscotch', count: 490, percentage: 20 },
    { type: 'Strawberry', count: 245, percentage: 10 },
    { type: 'Mixed Fruit', count: 245, percentage: 10 }
  ];

  const regionalPerformance = [
    { region: 'Mumbai', orders: 485, delivered: 478, pending: 7, success: 98.6, cost: 48500 },
    { region: 'Delhi', orders: 365, delivered: 358, pending: 7, success: 98.1, cost: 36500 },
    { region: 'Bangalore', orders: 285, delivered: 280, pending: 5, success: 98.2, cost: 28500 },
    { region: 'Pune', orders: 225, delivered: 220, pending: 5, success: 97.8, cost: 22500 },
    { region: 'Chennai', orders: 195, delivered: 191, pending: 4, success: 97.9, cost: 19500 },
    { region: 'Hyderabad', orders: 165, delivered: 162, pending: 3, success: 98.2, cost: 16500 }
  ];

  const qualityMetrics = [
    { metric: 'Freshness Score', value: 96.8, target: 95, status: 'above' },
    { metric: 'Delivery Time', value: 92.5, target: 90, status: 'above' },
    { metric: 'Customer Satisfaction', value: 94.2, target: 90, status: 'above' },
    { metric: 'Order Accuracy', value: 98.1, target: 95, status: 'above' },
    { metric: 'Packaging Quality', value: 97.3, target: 95, status: 'above' }
  ];

  const deliveryTimeAnalysis = [
    { timeSlot: '9-11 AM', orders: 285, onTime: 278, delayed: 7, percentage: 97.5 },
    { timeSlot: '11-1 PM', orders: 420, onTime: 408, delayed: 12, percentage: 97.1 },
    { timeSlot: '1-3 PM', orders: 385, onTime: 375, delayed: 10, percentage: 97.4 },
    { timeSlot: '3-5 PM', orders: 325, onTime: 318, delayed: 7, percentage: 97.8 },
    { timeSlot: '5-7 PM', orders: 485, onTime: 475, delayed: 10, percentage: 97.9 }
  ];

  const costAnalysis = [
    { category: 'Ingredients', amount: 125000, percentage: 45, variance: -2.5 },
    { category: 'Packaging', amount: 42000, percentage: 15, variance: 1.2 },
    { category: 'Delivery', amount: 70000, percentage: 25, variance: -1.8 },
    { category: 'Labor', amount: 28000, percentage: 10, variance: 0.5 },
    { category: 'Utilities', amount: 14000, percentage: 5, variance: -0.8 }
  ];

  const chartConfig = {
    cakes: { label: 'Cakes', color: '#b33324' },
    dispatched: { label: 'Dispatched', color: '#059669' },
    pending: { label: 'Pending', color: '#f59e0b' },
    cost: { label: 'Cost', color: '#7c3aed' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Birthday Dashboard</h1>
              <p className="text-gray-600">Comprehensive birthday cake dispatch analytics and operations</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Real-time Updates</Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Orders</CardTitle>
                <Gift className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">247</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dispatched</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">235</div>
                <p className="text-xs text-muted-foreground">95.1% success rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">12</div>
                <p className="text-xs text-muted-foreground">Within SLA</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">₹24,700</div>
                <p className="text-xs text-muted-foreground">Daily target: ₹25,000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">₹100</div>
                <p className="text-xs text-muted-foreground">Target: ₹95</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">96.8%</div>
                <p className="text-xs text-muted-foreground">Above target</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Birthday Cake Trends</CardTitle>
                <p className="text-sm text-gray-600">Order volume and dispatch patterns</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={monthlyBirthdayData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="cakes" stroke="var(--color-cakes)" fill="var(--color-cakes)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="dispatched" stroke="var(--color-dispatched)" fill="var(--color-dispatched)" fillOpacity={0.2} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cake Type Distribution</CardTitle>
                <p className="text-sm text-gray-600">Popular cake varieties</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={cakeTypeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="count"
                      label={({ type, percentage }) => `${type}: ${percentage}%`}
                    >
                      {cakeTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 72}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Regional Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Regional Performance Analysis</CardTitle>
              <p className="text-sm text-gray-600">City-wise delivery metrics and costs</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Region</th>
                      <th className="text-left p-2">Orders</th>
                      <th className="text-left p-2">Delivered</th>
                      <th className="text-left p-2">Pending</th>
                      <th className="text-left p-2">Success Rate</th>
                      <th className="text-left p-2">Cost</th>
                      <th className="text-left p-2">Cost per Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalPerformance.map((region, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{region.region}</td>
                        <td className="p-2">{region.orders}</td>
                        <td className="p-2 text-green-600">{region.delivered}</td>
                        <td className="p-2 text-orange-600">{region.pending}</td>
                        <td className="p-2">{region.success}%</td>
                        <td className="p-2">₹{region.cost.toLocaleString()}</td>
                        <td className="p-2">₹{Math.round(region.cost / region.orders)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Quality Metrics & Delivery Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quality Performance Metrics</CardTitle>
                <p className="text-sm text-gray-600">Service quality indicators</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qualityMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{metric.metric}</h4>
                        <p className="text-sm text-gray-600">Target: {metric.target}%</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{metric.value}%</div>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${(metric.value / 100) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Time Analysis</CardTitle>
                <p className="text-sm text-gray-600">Time slot performance</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <BarChart data={deliveryTimeAnalysis}>
                    <XAxis dataKey="timeSlot" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="onTime" fill="#059669" />
                    <Bar dataKey="delayed" fill="#dc2626" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Cost Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Breakdown Analysis</CardTitle>
              <p className="text-sm text-gray-600">Monthly cost distribution and variance</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={costAnalysis}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="amount"
                      label={({ category, percentage }) => `${category}: ${percentage}%`}
                    >
                      {costAnalysis.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
                <div className="space-y-4">
                  {costAnalysis.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.category}</h4>
                        <p className="text-sm text-gray-600">₹{item.amount.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${item.variance >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {item.variance >= 0 ? '+' : ''}{item.variance}%
                        </div>
                        <p className="text-xs text-gray-500">vs Last Month</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Dispatch Pattern */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Weekly Dispatch Pattern</CardTitle>
              <p className="text-sm text-gray-600">Day-wise order distribution across weeks</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <LineChart data={weeklyDispatchData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="monday" stroke="#b33324" />
                  <Line type="monotone" dataKey="tuesday" stroke="#059669" />
                  <Line type="monotone" dataKey="wednesday" stroke="#7c3aed" />
                  <Line type="monotone" dataKey="thursday" stroke="#f59e0b" />
                  <Line type="monotone" dataKey="friday" stroke="#dc2626" />
                  <Line type="monotone" dataKey="saturday" stroke="#0891b2" />
                  <Line type="monotone" dataKey="sunday" stroke="#ea580c" />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Operational Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Operational Insights & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Peak Performance</h4>
                    <p className="text-sm text-gray-600">Weekend orders show 15% higher success rate. Consider increasing weekend capacity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-blue-800">Cost Optimization</h4>
                    <p className="text-sm text-gray-600">Delivery costs can be reduced by 8% through route optimization in Mumbai and Delhi.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-orange-800">Quality Enhancement</h4>
                    <p className="text-sm text-gray-600">Packaging improvements could increase customer satisfaction by 3% based on feedback analysis.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-purple-800">Capacity Planning</h4>
                    <p className="text-sm text-gray-600">Expect 25% increase in orders during festival season. Plan capacity accordingly.</p>
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

export default BirthdayDashboard;
