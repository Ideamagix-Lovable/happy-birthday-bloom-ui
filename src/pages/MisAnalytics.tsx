
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Activity, AlertTriangle, CheckCircle, BarChart3, PieChart as PieChartIcon, Calendar, Globe, Zap, Filter, Search, FileText, Database, Brain, Settings, Package, Truck, Phone, Mail, Clock, Award, Shield, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MisAnalytics = () => {
  // Ready To Ship Analytics Data
  const readyToShipData = [
    { status: 'Ready', boxes: 522, receipts: 546, percentage: 65 },
    { status: 'Pending Packing', boxes: 128, receipts: 142, percentage: 18 },
    { status: 'Quality Check', boxes: 89, receipts: 95, percentage: 12 },
    { status: 'On Hold', boxes: 42, receipts: 38, percentage: 5 }
  ];

  // Dispatched Performance Data
  const dispatchedData = [
    { month: 'Jan', boxes: 42850, receipts: 32180, efficiency: 94, cost: 285000 },
    { month: 'Feb', boxes: 45920, receipts: 34250, efficiency: 96, cost: 298000 },
    { month: 'Mar', boxes: 48650, receipts: 36890, efficiency: 95, cost: 312000 },
    { month: 'Apr', boxes: 52180, receipts: 39450, efficiency: 97, cost: 325000 },
    { month: 'May', boxes: 55890, receipts: 42180, efficiency: 98, cost: 342000 },
    { month: 'Jun', boxes: 58420, receipts: 44320, efficiency: 96, cost: 358000 }
  ];

  // Product Performance Analytics
  const productPerformanceData = [
    { category: 'Shakkar Pala Prasadam', sold: 15840, revenue: 2376000, margin: 18.5, stock: 2338 },
    { category: 'Books', sold: 8920, revenue: 178400, margin: 22.8, stock: 1984 },
    { category: 'Agarbatti', sold: 6450, revenue: 516000, margin: 15.2, stock: 4008 },
    { category: 'Calendar', sold: 4280, revenue: 1284000, margin: 28.5, stock: 850 },
    { category: 'Campaign Gifts', sold: 2180, revenue: 654000, margin: 35.2, stock: 1250 }
  ];

  // DQ Analytics Data
  const dqAnalyticsData = [
    { status: 'DQ Pending', count: 40662, percentage: 42.5, avgTime: 2.4 },
    { status: 'DQ Completed', count: 67595, percentage: 58.2, avgTime: 4.2 },
    { status: 'DQ Processing', count: 4250, percentage: 4.8, avgTime: 1.8 },
    { status: 'Ineligible', count: 8920, percentage: 9.5, avgTime: 0.5 }
  ];

  // Dialler Performance Data
  const diallerPerformanceData = [
    { day: 'Monday', calls: 1250, connected: 985, converted: 142, rate: 78.8 },
    { day: 'Tuesday', calls: 1350, connected: 1120, converted: 168, rate: 82.9 },
    { day: 'Wednesday', calls: 1180, connected: 945, converted: 125, rate: 80.1 },
    { day: 'Thursday', calls: 1420, connected: 1180, converted: 185, rate: 83.1 },
    { day: 'Friday', calls: 1580, connected: 1320, converted: 210, rate: 83.5 },
    { day: 'Saturday', calls: 980, connected: 745, converted: 95, rate: 76.0 },
    { day: 'Sunday', calls: 650, connected: 480, converted: 58, rate: 73.8 }
  ];

  // Cost Optimization Data
  const costOptimizationData = [
    { department: 'Dispatch', allocated: 2850000, spent: 2680000, saved: 170000, efficiency: 94.0 },
    { department: 'DQ Operations', allocated: 1250000, spent: 1180000, saved: 70000, efficiency: 94.4 },
    { department: 'Dialler Services', allocated: 890000, spent: 825000, saved: 65000, efficiency: 92.7 },
    { department: 'Product Management', allocated: 560000, spent: 535000, saved: 25000, efficiency: 95.5 },
    { department: 'Quality Control', allocated: 340000, spent: 315000, saved: 25000, efficiency: 92.6 }
  ];

  // Regional Performance Data
  const regionalPerformanceData = [
    { region: 'Mumbai', dispatches: 12850, dqCompleted: 8920, diallerCalls: 4250, revenue: 2850000 },
    { region: 'Delhi', dispatches: 9850, dqCompleted: 7120, diallerCalls: 3680, revenue: 2100000 },
    { region: 'Bangalore', dispatches: 8920, dqCompleted: 6450, diallerCalls: 3250, revenue: 1850000 },
    { region: 'Chennai', dispatches: 7450, dqCompleted: 5280, diallerCalls: 2890, revenue: 1450000 },
    { region: 'Pune', dispatches: 6850, dqCompleted: 4920, diallerCalls: 2580, revenue: 1280000 },
    { region: 'Hyderabad', dispatches: 5920, dqCompleted: 4180, diallerCalls: 2180, revenue: 980000 }
  ];

  // Packer Performance Data
  const packerPerformanceData = [
    { packer: 'Ganesh Dhyavarshetty', packages: 4250, efficiency: 96.5, quality: 98.2, errors: 8 },
    { packer: 'Arun Bhandari', packages: 3890, efficiency: 94.8, quality: 97.5, errors: 12 },
    { packer: 'Vamshi Jella', packages: 3650, efficiency: 95.2, quality: 96.8, errors: 15 },
    { packer: 'Satyanarayana Mitta', packages: 2890, efficiency: 93.5, quality: 95.2, errors: 18 },
    { packer: 'Sandeep Patel', packages: 2180, efficiency: 92.8, quality: 94.8, errors: 22 }
  ];

  // Campaign Effectiveness Data
  const campaignEffectivenessData = [
    { campaign: 'Ayodhya', donations: 12850, conversion: 18.5, revenue: 2585000, cost: 425000, roi: 6.1 },
    { campaign: 'Goloka', donations: 8920, conversion: 15.8, revenue: 1784000, cost: 298000, roi: 6.0 },
    { campaign: 'Mathura', donations: 6450, conversion: 14.2, revenue: 1290000, cost: 215000, roi: 6.0 },
    { campaign: 'Vaikuntha', donations: 4280, conversion: 16.8, revenue: 856000, cost: 142000, roi: 6.0 },
    { campaign: 'SAB', donations: 2180, conversion: 12.5, revenue: 436000, cost: 89000, roi: 4.9 }
  ];

  // System Performance Metrics
  const systemMetricsData = [
    { metric: 'Database Performance', current: 94.2, target: 95.0, status: 'good' },
    { metric: 'API Response Time', current: 98.5, target: 97.0, status: 'excellent' },
    { metric: 'Uptime', current: 99.8, target: 99.5, status: 'excellent' },
    { metric: 'Error Rate', current: 0.2, target: 0.5, status: 'excellent' },
    { metric: 'Storage Utilization', current: 78.5, target: 80.0, status: 'good' },
    { metric: 'Network Latency', current: 45, target: 50, status: 'good' }
  ];

  // Quality Metrics Data
  const qualityMetricsData = [
    { process: 'Address Verification', accuracy: 96.8, errors: 128, target: 97.0 },
    { process: 'Phone Validation', accuracy: 94.5, errors: 285, target: 95.0 },
    { process: 'Product Packing', accuracy: 98.2, errors: 89, target: 98.0 },
    { process: 'Data Entry', accuracy: 97.5, errors: 156, target: 97.0 },
    { process: 'Shipment Tracking', accuracy: 99.1, errors: 42, target: 99.0 }
  ];

  // Monthly Trends Data
  const monthlyTrendsData = [
    { month: 'Jan', donations: 15850, dispatches: 14920, dqComplete: 12580, calls: 8920, revenue: 3175000 },
    { month: 'Feb', donations: 18920, dispatches: 17850, dqComplete: 15280, calls: 10850, revenue: 3784000 },
    { month: 'Mar', donations: 21850, dispatches: 20450, dqComplete: 17920, calls: 12450, revenue: 4370000 },
    { month: 'Apr', donations: 24920, dispatches: 23180, dqComplete: 20850, calls: 14280, revenue: 4984000 },
    { month: 'May', donations: 28450, dispatches: 26920, dqComplete: 24180, calls: 16850, revenue: 5690000 },
    { month: 'Jun', donations: 32180, dispatches: 30450, dqComplete: 27920, calls: 19250, revenue: 6436000 }
  ];

  // Automated Process Analytics
  const automationData = [
    { process: 'Data Entry', automated: 78.5, manual: 21.5, savings: 285000, efficiency: 94.2 },
    { process: 'Address Validation', automated: 85.2, manual: 14.8, savings: 185000, efficiency: 96.8 },
    { process: 'Phone Verification', automated: 72.8, manual: 27.2, savings: 125000, efficiency: 92.5 },
    { process: 'Dispatch Routing', automated: 91.5, manual: 8.5, savings: 425000, efficiency: 98.2 },
    { process: 'Quality Checks', automated: 68.5, manual: 31.5, savings: 95000, efficiency: 89.5 }
  ];

  // Carrier Performance Data
  const carrierPerformanceData = [
    { carrier: 'Blue Dart', packages: 15850, delivered: 14920, rate: 94.1, avgTime: 2.8, cost: 285000 },
    { carrier: 'Delhivery', packages: 12450, delivered: 11850, rate: 95.2, avgTime: 3.2, cost: 218000 },
    { carrier: 'Xpressbees', packages: 9850, delivered: 9250, rate: 93.9, avgTime: 3.5, cost: 195000 },
    { carrier: 'DTDC', packages: 6450, delivered: 6120, rate: 94.9, avgTime: 4.1, cost: 142000 },
    { carrier: 'Others', packages: 3920, delivered: 3680, rate: 93.9, avgTime: 4.5, cost: 89000 }
  ];

  // Risk Assessment Data
  const riskAssessmentData = [
    { risk: 'Dispatch Delays', probability: 25, impact: 'High', mitigation: 'Carrier Diversification', cost: 285000 },
    { risk: 'Data Quality Issues', probability: 18, impact: 'Medium', mitigation: 'Automated Validation', cost: 125000 },
    { risk: 'System Downtime', probability: 12, impact: 'Critical', mitigation: 'Redundancy Setup', cost: 485000 },
    { risk: 'Staff Shortage', probability: 15, impact: 'Medium', mitigation: 'Cross Training', cost: 95000 },
    { risk: 'Inventory Shortage', probability: 8, impact: 'High', mitigation: 'Smart Forecasting', cost: 185000 }
  ];

  const chartConfig = {
    amount: { label: 'Amount', color: '#b33324' },
    count: { label: 'Count', color: '#059669' },
    target: { label: 'Target', color: '#7c3aed' },
    efficiency: { label: 'Efficiency', color: '#f59e0b' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MIS Analytics</h1>
              <p className="text-gray-600">Comprehensive business intelligence across all modules and departments</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Analytics Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Generate Insights</Button>
            </div>
          </div>

          {/* Executive Dashboard KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Dispatches</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">448,216</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ready to Ship</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">1,068</div>
                <p className="text-xs text-muted-foreground">522 boxes • 546 receipts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">DQ Queue</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">108,257</div>
                <p className="text-xs text-muted-foreground">40,662 pending • 67,595 completed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Dialler Calls</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">82,788</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  82.1% connection rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-600">98.2%</div>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost Efficiency</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">94.2%</div>
                <p className="text-xs text-muted-foreference">₹355K saved this month</p>
              </CardContent>
            </Card>
          </div>

          {/* 1. Ready to Ship Analytics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ready to Ship Analytics</CardTitle>
              <p className="text-sm text-gray-600">Current status of dispatch preparation</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={readyToShipData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="boxes"
                      label={({ status, percentage }) => `${status}: ${percentage}%`}
                    >
                      {readyToShipData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 90}, 70%, 50%)`} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {readyToShipData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.status}</h4>
                        <p className="text-sm text-gray-600">{item.boxes} boxes • {item.receipts} receipts</p>
                      </div>
                      <Badge variant="outline">{item.percentage}%</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Dispatched Performance Trends */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Dispatched Performance Trends</CardTitle>
              <p className="text-sm text-gray-600">Monthly dispatch volumes and efficiency metrics</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={dispatchedData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Area type="monotone" dataKey="boxes" stroke="#b33324" fill="#b33324" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="receipts" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 3. Product Performance Analytics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Product Performance Analytics</CardTitle>
              <p className="text-sm text-gray-600">Sales performance and inventory optimization</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Category</th>
                      <th className="text-left p-2">Units Sold</th>
                      <th className="text-left p-2">Revenue</th>
                      <th className="text-left p-2">Margin %</th>
                      <th className="text-left p-2">Stock Level</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productPerformanceData.map((product, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{product.category}</td>
                        <td className="p-2">{product.sold.toLocaleString()}</td>
                        <td className="p-2">₹{product.revenue.toLocaleString()}</td>
                        <td className="p-2 text-green-600">{product.margin}%</td>
                        <td className="p-2">{product.stock.toLocaleString()}</td>
                        <td className="p-2">
                          <Badge variant={product.stock > 1000 ? "default" : "destructive"}>
                            {product.stock > 1000 ? "In Stock" : "Low Stock"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 4. DQ Analytics Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>DQ Processing Analytics</CardTitle>
                <p className="text-sm text-gray-600">Data quality processing metrics</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dqAnalyticsData}>
                    <XAxis dataKey="status" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="count" fill="#7c3aed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dialler Performance</CardTitle>
                <p className="text-sm text-gray-600">Weekly call performance metrics</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={diallerPerformanceData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip />
                    <Line type="monotone" dataKey="calls" stroke="#059669" strokeWidth={2} />
                    <Line type="monotone" dataKey="connected" stroke="#b33324" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* 5. Cost Optimization Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Optimization Analysis</CardTitle>
              <p className="text-sm text-gray-600">Department-wise cost efficiency and savings</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {costOptimizationData.map((dept, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{dept.department}</h4>
                      <Badge variant="secondary">{dept.efficiency}% efficient</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Allocated</p>
                        <p className="font-semibold">₹{dept.allocated.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Spent</p>
                        <p className="font-semibold">₹{dept.spent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Saved</p>
                        <p className="font-semibold text-green-600">₹{dept.saved.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 6. Regional Performance Matrix */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Regional Performance Matrix</CardTitle>
              <p className="text-sm text-gray-600">Geographic performance across all operations</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={regionalPerformanceData}>
                  <XAxis dataKey="region" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="dispatches" fill="#b33324" name="Dispatches" />
                  <Bar dataKey="dqCompleted" fill="#059669" name="DQ Completed" />
                  <Bar dataKey="diallerCalls" fill="#7c3aed" name="Dialler Calls" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 7. Packer Performance Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Packer Performance Analysis</CardTitle>
              <p className="text-sm text-gray-600">Individual packer efficiency and quality metrics</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Packer Name</th>
                      <th className="text-left p-2">Packages</th>
                      <th className="text-left p-2">Efficiency %</th>
                      <th className="text-left p-2">Quality %</th>
                      <th className="text-left p-2">Errors</th>
                      <th className="text-left p-2">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packerPerformanceData.map((packer, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{packer.packer}</td>
                        <td className="p-2">{packer.packages.toLocaleString()}</td>
                        <td className="p-2 text-blue-600">{packer.efficiency}%</td>
                        <td className="p-2 text-green-600">{packer.quality}%</td>
                        <td className="p-2 text-red-600">{packer.errors}</td>
                        <td className="p-2">
                          <Badge variant={packer.efficiency > 95 ? "default" : "secondary"}>
                            {packer.efficiency > 95 ? "Excellent" : "Good"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 8. Campaign Effectiveness ROI */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Campaign Effectiveness & ROI</CardTitle>
              <p className="text-sm text-gray-600">Campaign performance and return on investment</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={campaignEffectivenessData}>
                    <XAxis dataKey="campaign" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="roi" fill="#f59e0b" name="ROI" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {campaignEffectivenessData.map((campaign, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{campaign.campaign}</h4>
                        <Badge variant="outline">{campaign.conversion}% conversion</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Revenue: ₹{campaign.revenue.toLocaleString()}</div>
                        <div>ROI: {campaign.roi}x</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. System Performance Metrics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>System Performance Metrics</CardTitle>
              <p className="text-sm text-gray-600">Infrastructure and application performance</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systemMetricsData.map((metric, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium">{metric.metric}</h4>
                      {metric.status === 'excellent' ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      {metric.metric.includes('Time') || metric.metric.includes('Latency') ? 
                        `${metric.current}ms` : `${metric.current}%`}
                    </div>
                    <div className="text-sm text-gray-600">
                      Target: {metric.metric.includes('Time') || metric.metric.includes('Latency') ? 
                        `${metric.target}ms` : `${metric.target}%`}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 10. Quality Control Analytics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quality Control Analytics</CardTitle>
              <p className="text-sm text-gray-600">Process accuracy and error tracking</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={qualityMetricsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="process" />
                  <PolarRadiusAxis />
                  <Radar name="Accuracy" dataKey="accuracy" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                  <ChartTooltip />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 11. Monthly Business Trends */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monthly Business Trends</CardTitle>
              <p className="text-sm text-gray-600">Overall business performance trends</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={monthlyTrendsData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#b33324" fill="#b33324" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="donations" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 12. Process Automation Analytics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Process Automation Analytics</CardTitle>
              <p className="text-sm text-gray-600">Automation levels and cost savings</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {automationData.map((process, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium">{process.process}</h4>
                      <Badge variant="outline">{process.automated}% automated</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Cost Savings</p>
                        <p className="font-semibold text-green-600">₹{process.savings.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Efficiency</p>
                        <p className="font-semibold">{process.efficiency}%</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Manual Work</p>
                        <p className="font-semibold text-orange-600">{process.manual}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 13. Carrier Performance Comparison */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Carrier Performance Comparison</CardTitle>
              <p className="text-sm text-gray-600">Delivery partner efficiency and cost analysis</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Carrier</th>
                      <th className="text-left p-2">Packages</th>
                      <th className="text-left p-2">Delivery Rate</th>
                      <th className="text-left p-2">Avg Time (Days)</th>
                      <th className="text-left p-2">Cost</th>
                      <th className="text-left p-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrierPerformanceData.map((carrier, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{carrier.carrier}</td>
                        <td className="p-2">{carrier.packages.toLocaleString()}</td>
                        <td className="p-2 text-green-600">{carrier.rate}%</td>
                        <td className="p-2">{carrier.avgTime}</td>
                        <td className="p-2">₹{carrier.cost.toLocaleString()}</td>
                        <td className="p-2">
                          <Badge variant={carrier.rate > 94 ? "default" : "secondary"}>
                            {carrier.rate > 94 ? "Excellent" : "Good"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 14. Risk Assessment Matrix */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Business Risk Assessment Matrix</CardTitle>
              <p className="text-sm text-gray-600">Risk analysis and mitigation strategies</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riskAssessmentData.map((risk, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{risk.risk}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        risk.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                        risk.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {risk.impact}
                      </span>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Probability</span>
                        <span>{risk.probability}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: `${risk.probability}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs">
                      <p className="text-gray-600 mb-1">Mitigation: {risk.mitigation}</p>
                      <p className="text-green-600">Budget: ₹{risk.cost.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 15. Executive Summary & Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Executive Summary & AI Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Key insights and actionable recommendations</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Key Performance Indicators</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Overall Efficiency</span>
                      <Badge variant="default">94.2%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost Optimization</span>
                      <Badge variant="default">₹355K Saved</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality Score</span>
                      <Badge variant="default">96.8%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Customer Satisfaction</span>
                      <Badge variant="default">92.5%</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">AI-Powered Recommendations</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="text-sm font-medium text-green-800">Optimize Dispatch Routes</h5>
                      <p className="text-xs text-green-700">AI routing can reduce delivery time by 18% and save ₹125K monthly</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <h5 className="text-sm font-medium text-blue-800">Automate DQ Processing</h5>
                      <p className="text-xs text-blue-700">ML-based validation can improve accuracy by 12% and reduce processing time</p>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <h5 className="text-sm font-medium text-purple-800">Predictive Inventory</h5>
                      <p className="text-xs text-purple-700">Smart forecasting can reduce stockouts by 35% and optimize inventory costs</p>
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

export default MisAnalytics;
