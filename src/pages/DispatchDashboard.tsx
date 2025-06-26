
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Package, Truck, Clock, AlertTriangle, CheckCircle, MapPin, DollarSign, Users, Target, Activity, Zap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DispatchDashboard = () => {
  const dispatchVolumeData = [
    { month: 'Jan', dispatched: 2450, returned: 45, delivered: 2380, pending: 25 },
    { month: 'Feb', dispatched: 2890, returned: 52, delivered: 2810, pending: 28 },
    { month: 'Mar', dispatched: 2650, returned: 38, delivered: 2595, pending: 17 },
    { month: 'Apr', dispatched: 3120, returned: 48, delivered: 3055, pending: 17 },
    { month: 'May', dispatched: 3350, returned: 41, delivered: 3285, pending: 24 },
    { month: 'Jun', dispatched: 3180, returned: 35, delivered: 3125, pending: 20 }
  ];

  const courierPerformance = [
    { courier: 'BlueDart', deliveries: 1250, onTime: 1188, delayed: 45, returned: 17, rating: 95 },
    { courier: 'DTDC', deliveries: 890, onTime: 825, delayed: 48, returned: 17, rating: 93 },
    { courier: 'Delhivery', deliveries: 1100, onTime: 1034, delayed: 52, returned: 14, rating: 94 },
    { courier: 'India Post', deliveries: 650, onTime: 598, delayed: 38, returned: 14, rating: 92 },
    { courier: 'Ecom Express', deliveries: 780, onTime: 715, delayed: 48, returned: 17, rating: 92 }
  ];

  const zoneWiseDispatch = [
    { zone: 'North', dispatched: 3850, cost: 285000, avgCost: 74, deliveryTime: 2.1 },
    { zone: 'South', dispatched: 2950, cost: 218000, avgCost: 74, deliveryTime: 2.3 },
    { zone: 'East', dispatched: 2100, cost: 168000, avgCost: 80, deliveryTime: 2.8 },
    { zone: 'West', dispatched: 4200, cost: 294000, avgCost: 70, deliveryTime: 1.9 },
    { zone: 'Central', dispatched: 1890, cost: 151000, avgCost: 80, deliveryTime: 2.5 }
  ];

  const productCategories = [
    { category: 'Prasadam', quantity: 4850, percentage: 35, avgWeight: 0.5, cost: 145000 },
    { category: 'Books', quantity: 3200, percentage: 23, avgWeight: 0.3, cost: 96000 },
    { category: 'Birthday Cakes', quantity: 2100, percentage: 15, avgWeight: 1.2, cost: 189000 },
    { category: 'Festivals Items', quantity: 1950, percentage: 14, avgWeight: 0.8, cost: 117000 },
    { category: 'Clothing', quantity: 1150, percentage: 8, avgWeight: 0.4, cost: 69000 },
    { category: 'Others', quantity: 750, percentage: 5, avgWeight: 0.6, cost: 45000 }
  ];

  const timeSlotAnalysis = [
    { slot: '6:00-9:00 AM', orders: 450, success: 425, cost: 31500, efficiency: 94 },
    { slot: '9:00-12:00 PM', orders: 1250, success: 1188, cost: 87500, efficiency: 95 },
    { slot: '12:00-3:00 PM', orders: 2100, success: 1995, cost: 147000, efficiency: 95 },
    { slot: '3:00-6:00 PM', orders: 1850, success: 1739, cost: 129500, efficiency: 94 },
    { slot: '6:00-9:00 PM', orders: 890, success: 827, cost: 62300, efficiency: 93 }
  ];

  const dispatchCostTrends = [
    { week: 'Week 1', packaging: 18000, shipping: 45000, handling: 12000, total: 75000 },
    { week: 'Week 2', packaging: 19500, shipping: 48000, handling: 13000, total: 80500 },
    { week: 'Week 3', packaging: 17800, shipping: 44000, handling: 11500, total: 73300 },
    { week: 'Week 4', packaging: 20200, shipping: 52000, handling: 14000, total: 86200 }
  ];

  const chartConfig = {
    dispatched: { label: 'Dispatched', color: '#b33324' },
    delivered: { label: 'Delivered', color: '#059669' },
    returned: { label: 'Returned', color: '#dc2626' },
    pending: { label: 'Pending', color: '#f59e0b' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dispatch Dashboard</h1>
              <p className="text-gray-600">Comprehensive logistics and delivery analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Dispatch Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Schedule Bulk Dispatch</Button>
            </div>
          </div>

          {/* Key Dispatch Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Dispatched</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">17,640</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +16.8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delivery Success Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">95.2%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +1.8% improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Delivery Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">2.3 days</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -0.4 days faster
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Delivery</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">₹74.50</div>
                <p className="text-xs text-muted-foreground">8% below target</p>
              </CardContent>
            </Card>
          </div>

          {/* Dispatch Volume Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Dispatch Performance</CardTitle>
                <p className="text-sm text-gray-600">Volume and delivery status tracking</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={dispatchVolumeData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="dispatched" stroke="var(--color-dispatched)" fill="var(--color-dispatched)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="delivered" stroke="var(--color-delivered)" fill="var(--color-delivered)" fillOpacity={0.3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Category Distribution</CardTitle>
                <p className="text-sm text-gray-600">Dispatch volume by product type</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={productCategories}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="quantity"
                      label={({ category, percentage }) => `${category}: ${percentage}%`}
                    >
                      {productCategories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 60}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Courier Performance Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Courier Partner Performance</CardTitle>
              <p className="text-sm text-gray-600">Delivery efficiency and reliability metrics</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Courier Partner</th>
                      <th className="text-left p-2">Total Deliveries</th>
                      <th className="text-left p-2">On-Time</th>
                      <th className="text-left p-2">Delayed</th>
                      <th className="text-left p-2">Returned</th>
                      <th className="text-left p-2">Success Rate</th>
                      <th className="text-left p-2">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courierPerformance.map((courier, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{courier.courier}</td>
                        <td className="p-2">{courier.deliveries.toLocaleString()}</td>
                        <td className="p-2 text-green-600">{courier.onTime}</td>
                        <td className="p-2 text-orange-600">{courier.delayed}</td>
                        <td className="p-2 text-red-600">{courier.returned}</td>
                        <td className="p-2">{((courier.onTime / courier.deliveries) * 100).toFixed(1)}%</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: `${courier.rating}%` }}
                              ></div>
                            </div>
                            {courier.rating}%
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Zone-wise Dispatch Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Zone-wise Dispatch Performance</CardTitle>
              <p className="text-sm text-gray-600">Regional delivery metrics and cost analysis</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {zoneWiseDispatch.map((zone, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{zone.zone} Zone</h4>
                      <MapPin className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Dispatched:</span>
                        <span className="font-medium">{zone.dispatched.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Cost:</span>
                        <span className="font-medium">₹{zone.cost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Avg Cost:</span>
                        <span className="font-medium">₹{zone.avgCost}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery Time:</span>
                        <span className="font-medium">{zone.deliveryTime} days</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Slot Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Time Slot Performance Analysis</CardTitle>
              <p className="text-sm text-gray-600">Delivery efficiency by time slots</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={timeSlotAnalysis}>
                  <XAxis dataKey="slot" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="orders" fill="#b33324" />
                  <Bar dataKey="success" fill="#059669" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Cost Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Weekly Dispatch Cost Analysis</CardTitle>
              <p className="text-sm text-gray-600">Cost breakdown by components</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <AreaChart data={dispatchCostTrends}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip />
                  <Area type="monotone" dataKey="packaging" fill="#7c3aed" />
                  <Area type="monotone" dataKey="shipping" fill="#dc2626" />
                  <Area type="monotone" dataKey="handling" fill="#059669" />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Operational KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Return Rate</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">1.8%</div>
                <p className="text-xs text-muted-foreground">Industry best performance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Peak Efficiency</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">95.1%</div>
                <p className="text-xs text-muted-foreground">12:00-3:00 PM slot</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resource Utilization</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">87.3%</div>
                <p className="text-xs text-muted-foreground">Optimal capacity usage</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">4.6/5</div>
                <p className="text-xs text-muted-foreground">Based on 2,450 reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Dispatch Optimization Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Strategic insights for logistics improvement</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Courier Partner Optimization</h4>
                    <p className="text-sm text-gray-600">Renegotiate rates with BlueDart for 15% cost reduction on high-volume routes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Zone Consolidation</h4>
                    <p className="text-sm text-gray-600">Combine East and Central zone shipments to reduce per-unit cost by ₹6</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Peak Hour Optimization</h4>
                    <p className="text-sm text-gray-600">Shift 20% of 3-6 PM dispatches to 12-3 PM for better efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Packaging Innovation</h4>
                    <p className="text-sm text-gray-600">Implement eco-friendly packaging to reduce costs by 12% and improve brand image</p>
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

export default DispatchDashboard;
