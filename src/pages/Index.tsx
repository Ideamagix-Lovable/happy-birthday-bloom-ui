
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Package, Activity, AlertTriangle, CheckCircle, Calendar, Truck, Phone, FileText, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const overallPerformanceData = [
    { month: 'Jan', revenue: 2850000, donations: 8950, dispatches: 1850, calls: 12500, efficiency: 89 },
    { month: 'Feb', revenue: 3120000, donations: 9850, dispatches: 1620, calls: 13200, efficiency: 92 },
    { month: 'Mar', revenue: 2950000, donations: 9250, dispatches: 1920, calls: 12800, efficiency: 91 },
    { month: 'Apr', revenue: 3250000, donations: 10200, dispatches: 2150, calls: 14100, efficiency: 93 },
    { month: 'May', revenue: 3480000, donations: 10950, dispatches: 2380, calls: 15200, efficiency: 95 },
    { month: 'Jun', revenue: 3180000, donations: 10100, dispatches: 2100, calls: 13800, efficiency: 94 }
  ];

  const departmentKPIs = [
    { dept: 'Dispatch', revenue: 850000, orders: 2100, efficiency: 96, satisfaction: 94, growth: 12 },
    { dept: 'DQ', revenue: 420000, processed: 3200, efficiency: 93, satisfaction: 92, growth: 8 },
    { dept: 'Dialler', revenue: 680000, calls: 15200, efficiency: 89, satisfaction: 87, growth: 15 },
    { dept: 'Birthday', revenue: 320000, cakes: 2100, efficiency: 95, satisfaction: 96, growth: 18 },
    { dept: 'Accounts', revenue: 180000, transactions: 4800, efficiency: 97, satisfaction: 91, growth: 5 },
    { dept: 'MIS', revenue: 95000, reports: 250, efficiency: 98, satisfaction: 93, growth: 22 }
  ];

  const revenueStreams = [
    { stream: 'Regular Donations', amount: 1850000, percentage: 52, growth: 12 },
    { stream: 'Birthday Cakes', amount: 580000, percentage: 16, growth: 18 },
    { stream: 'Campaign Donations', amount: 480000, percentage: 13.5, growth: 25 },
    { stream: 'Subscription Services', amount: 420000, percentage: 12, growth: 8 },
    { stream: 'Product Sales', amount: 230000, percentage: 6.5, growth: 15 }
  ];

  const customerSegmentation = [
    { segment: 'Premium Donors', count: 580, revenue: 1450000, avgDonation: 2500, retention: 92 },
    { segment: 'Regular Donors', count: 2350, revenue: 1175000, avgDonation: 500, retention: 78 },
    { segment: 'New Donors', count: 1200, revenue: 480000, avgDonation: 400, retention: 45 },
    { segment: 'Corporate', count: 85, revenue: 850000, avgDonation: 10000, retention: 88 },
    { segment: 'Life Members', count: 180, revenue: 360000, avgDonation: 2000, retention: 95 }
  ];

  const operationalMetrics = [
    { metric: 'Order Fulfillment', value: 96.8, target: 95, unit: '%' },
    { metric: 'Customer Satisfaction', value: 94.2, target: 90, unit: '%' },
    { metric: 'System Uptime', value: 99.7, target: 99.5, unit: '%' },
    { metric: 'Cost per Transaction', value: 24.5, target: 30, unit: '₹' },
    { metric: 'Response Time', value: 2.3, target: 3, unit: 'min' },
    { metric: 'Data Accuracy', value: 98.5, target: 95, unit: '%' }
  ];

  const geographicalDistribution = [
    { region: 'West India', revenue: 1420000, donors: 4250, growth: 15 },
    { region: 'North India', revenue: 980000, donors: 3180, growth: 12 },
    { region: 'South India', revenue: 850000, donors: 2890, growth: 18 },
    { region: 'East India', revenue: 520000, donors: 1520, growth: 10 },
    { region: 'Central India', revenue: 410000, donors: 1280, growth: 8 }
  ];

  const processEfficiencyData = [
    { process: 'Order Processing', time: 12, accuracy: 98, volume: 2100, cost: 25000 },
    { process: 'Quality Check', time: 8, accuracy: 99, volume: 2050, cost: 18000 },
    { process: 'Dispatch', time: 15, accuracy: 97, volume: 2000, cost: 45000 },
    { process: 'Delivery', time: 180, accuracy: 96, volume: 1950, cost: 85000 },
    { process: 'Customer Service', time: 5, accuracy: 95, volume: 850, cost: 12000 }
  ];

  const technologyMetrics = [
    { system: 'CRM System', uptime: 99.8, users: 150, performance: 95 },
    { system: 'Dispatch System', uptime: 99.5, users: 85, performance: 92 },
    { system: 'Payment Gateway', uptime: 99.9, users: 5000, performance: 98 },
    { system: 'Analytics Platform', uptime: 99.2, users: 25, performance: 94 },
    { system: 'Mobile App', uptime: 99.6, users: 3200, performance: 89 }
  ];

  const chartConfig = {
    revenue: { label: 'Revenue', color: '#b33324' },
    donations: { label: 'Donations', color: '#059669' },
    dispatches: { label: 'Dispatches', color: '#7c3aed' },
    calls: { label: 'Calls', color: '#f59e0b' },
    efficiency: { label: 'Efficiency', color: '#dc2626' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Executive Dashboard</h1>
              <p className="text-gray-600">Comprehensive business intelligence and performance analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Download Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Live Updates</Button>
            </div>
          </div>

          {/* Executive KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹31.8L</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +14.2% this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">10,100</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.5% growth
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dispatches</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">2,100</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">94%</div>
                <p className="text-xs text-muted-foreground">+2% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">94.2%</div>
                <p className="text-xs text-muted-foreground">Above target</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">8.5x</div>
                <p className="text-xs text-muted-foreground">Industry leading</p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Overall Performance Trends</CardTitle>
                <p className="text-sm text-gray-600">Key metrics across all departments</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={overallPerformanceData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="donations" stroke="var(--color-donations)" fill="var(--color-donations)" fillOpacity={0.2} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Stream Distribution</CardTitle>
                <p className="text-sm text-gray-600">Income sources breakdown</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={revenueStreams}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="amount"
                      label={({ stream, percentage }) => `${stream}: ${percentage}%`}
                    >
                      {revenueStreams.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 72}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Department Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Department Performance Matrix</CardTitle>
              <p className="text-sm text-gray-600">Comprehensive departmental KPIs and metrics</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Department</th>
                      <th className="text-left p-2">Revenue</th>
                      <th className="text-left p-2">Volume</th>
                      <th className="text-left p-2">Efficiency</th>
                      <th className="text-left p-2">Satisfaction</th>
                      <th className="text-left p-2">Growth</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentKPIs.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{dept.dept}</td>
                        <td className="p-2">₹{dept.revenue.toLocaleString()}</td>
                        <td className="p-2">{dept.orders || dept.processed || dept.calls || dept.cakes || dept.transactions || dept.reports}</td>
                        <td className="p-2">{dept.efficiency}%</td>
                        <td className="p-2">{dept.satisfaction}%</td>
                        <td className="p-2 text-green-600">+{dept.growth}%</td>
                        <td className="p-2">
                          {dept.efficiency >= 95 ? (
                            <span className="text-green-600">Excellent</span>
                          ) : dept.efficiency >= 90 ? (
                            <span className="text-blue-600">Good</span>
                          ) : (
                            <span className="text-orange-600">Needs Attention</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Customer Analytics & Operational Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Customer Segmentation Analysis</CardTitle>
                <p className="text-sm text-gray-600">Donor categories and value metrics</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerSegmentation.map((segment, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{segment.segment}</h4>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {segment.retention}% retention
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>Count: {segment.count}</div>
                        <div>Revenue: ₹{segment.revenue.toLocaleString()}</div>
                        <div>Avg: ₹{segment.avgDonation}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Operational Excellence Metrics</CardTitle>
                <p className="text-sm text-gray-600">Key performance indicators</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {operationalMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{metric.metric}</h4>
                        <p className="text-sm text-gray-600">Target: {metric.target}{metric.unit}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          (metric.unit === '%' && metric.value >= metric.target) || 
                          (metric.unit !== '%' && metric.value <= metric.target) 
                            ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {metric.value}{metric.unit}
                        </div>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              (metric.unit === '%' && metric.value >= metric.target) || 
                              (metric.unit !== '%' && metric.value <= metric.target) 
                                ? 'bg-green-600' : 'bg-orange-600'
                            }`}
                            style={{ width: `${Math.min((metric.value / (metric.target * 1.2)) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geographic Distribution */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Geographical Performance Distribution</CardTitle>
              <p className="text-sm text-gray-600">Regional revenue and growth analysis</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={geographicalDistribution}>
                  <XAxis dataKey="region" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="revenue" fill="#b33324" />
                  <Bar dataKey="donors" fill="#059669" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Process Efficiency & Technology Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Process Efficiency Analysis</CardTitle>
                <p className="text-sm text-gray-600">Operational process performance</p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Process</th>
                        <th className="text-left p-2">Time (min)</th>
                        <th className="text-left p-2">Accuracy</th>
                        <th className="text-left p-2">Volume</th>
                        <th className="text-left p-2">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {processEfficiencyData.map((process, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-2 font-medium">{process.process}</td>
                          <td className="p-2">{process.time}</td>
                          <td className="p-2">{process.accuracy}%</td>
                          <td className="p-2">{process.volume}</td>
                          <td className="p-2">₹{process.cost.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology System Health</CardTitle>
                <p className="text-sm text-gray-600">IT infrastructure performance</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologyMetrics.map((system, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{system.system}</h4>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          system.uptime >= 99.5 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          {system.uptime}% uptime
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Users: {system.users.toLocaleString()}</div>
                        <div>Performance: {system.performance}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strategic Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Strategic Business Insights</CardTitle>
              <p className="text-sm text-gray-600">AI-powered recommendations and insights</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Revenue Growth Opportunity</h4>
                    <p className="text-sm text-gray-600">Campaign donations show 25% growth potential. Focus on digital marketing could yield ₹1.2L additional revenue.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-blue-800">Operational Excellence</h4>
                    <p className="text-sm text-gray-600">Birthday module shows highest efficiency (95%). Best practices can be applied to other departments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-orange-800">Cost Optimization</h4>
                    <p className="text-sm text-gray-600">Process automation in Dialler can reduce costs by ₹45K monthly while improving accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-purple-800">Geographic Expansion</h4>
                    <p className="text-sm text-gray-600">East and Central India show untapped potential. Strategic expansion could increase donor base by 30%.</p>
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

export default Index;
