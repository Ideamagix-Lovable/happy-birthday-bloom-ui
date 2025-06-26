
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Activity, AlertTriangle, CheckCircle, BarChart3, PieChart as PieChartIcon, Calendar, Globe, Zap, Filter, Search, FileText, Database, Brain, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MisAnalytics = () => {
  const donationTrends = [
    { month: 'Jan', amount: 1250000, count: 2890, avgDonation: 432, target: 1500000, efficiency: 83 },
    { month: 'Feb', amount: 1450000, count: 3120, avgDonation: 465, target: 1500000, efficiency: 97 },
    { month: 'Mar', amount: 1380000, count: 2950, avgDonation: 468, target: 1400000, efficiency: 99 },
    { month: 'Apr', amount: 1620000, count: 3250, avgDonation: 498, target: 1600000, efficiency: 101 },
    { month: 'May', amount: 1750000, count: 3480, avgDonation: 503, target: 1700000, efficiency: 103 },
    { month: 'Jun', amount: 1580000, count: 3180, avgDonation: 497, target: 1600000, efficiency: 99 }
  ];

  const deptPerformance = [
    { dept: 'Dispatch', revenue: 850000, cost: 145000, efficiency: 96, satisfaction: 94, target: 900000 },
    { dept: 'DQ', revenue: 420000, cost: 85000, efficiency: 93, satisfaction: 92, target: 450000 },
    { dept: 'Dialler', revenue: 680000, cost: 125000, cost: 92, satisfaction: 89, target: 700000 },
    { dept: 'Kitchen', revenue: 320000, cost: 95000, efficiency: 88, satisfaction: 96, target: 350000 },
    { dept: 'Accounts', revenue: 180000, cost: 65000, efficiency: 94, satisfaction: 91, target: 200000 },
    { dept: 'MIS', revenue: 95000, cost: 45000, efficiency: 97, satisfaction: 93, target: 100000 }
  ];

  const costAnalysis = [
    { category: 'Personnel', amount: 2850000, percentage: 45, budget: 3000000, variance: -5 },
    { category: 'Operations', amount: 1890000, percentage: 30, budget: 1950000, variance: -3 },
    { category: 'Technology', amount: 632000, percentage: 10, budget: 650000, variance: -3 },
    { category: 'Marketing', amount: 474000, percentage: 7.5, budget: 500000, variance: -5 },
    { category: 'Infrastructure', amount: 316000, percentage: 5, budget: 320000, variance: -1 },
    { category: 'Miscellaneous', amount: 158000, percentage: 2.5, budget: 180000, variance: -12 }
  ];

  const donorSegmentation = [
    { segment: 'New Donors', count: 1280, amount: 896000, avgDonation: 700, retention: 45, growth: 18 },
    { segment: 'Regular Donors', count: 2450, amount: 1470000, avgDonation: 600, retention: 78, growth: 12 },
    { segment: 'Premium Donors', count: 380, amount: 1140000, avgDonation: 3000, retention: 92, growth: 8 },
    { segment: 'Corporate Donors', count: 85, amount: 850000, avgDonation: 10000, retention: 88, growth: 22 },
    { segment: 'Life Members', count: 245, amount: 490000, avgDonation: 2000, retention: 95, growth: 5 }
  ];

  const geographicalAnalysis = [
    { region: 'Mumbai', donations: 2850000, donors: 4250, campaigns: 12, cost: 285000, roi: 10.0 },
    { region: 'Delhi', donations: 2100000, donors: 3180, campaigns: 10, cost: 252000, roi: 8.3 },
    { region: 'Bangalore', donations: 1850000, donors: 2890, campaigns: 8, cost: 222000, roi: 8.3 },
    { region: 'Pune', donations: 1450000, donors: 2250, campaigns: 7, cost: 174000, roi: 8.3 },
    { region: 'Chennai', donations: 1280000, donors: 1980, campaigns: 6, cost: 153600, roi: 8.3 },
    { region: 'Hyderabad', donations: 980000, donors: 1520, campaigns: 5, cost: 117600, roi: 8.3 }
  ];

  const campaignEffectiveness = [
    { campaign: 'Ayodhya', launched: 45, successful: 38, roi: 4.2, cost: 125000, revenue: 525000 },
    { campaign: 'Goloka', launched: 32, successful: 28, roi: 3.8, cost: 95000, revenue: 361000 },
    { campaign: 'Mathura', launched: 25, successful: 21, roi: 3.5, cost: 75000, cost: 262500 },
    { campaign: 'Vaikuntha', launched: 18, successful: 16, roi: 4.1, cost: 58000, revenue: 237800 },
    { campaign: 'Birthday', launched: 65, successful: 58, roi: 2.8, cost: 185000, revenue: 518000 }
  ];

  const processEfficiency = [
    { process: 'Data Entry', time: 2.5, accuracy: 96, cost: 45, volume: 1580, target: 3.0 },
    { process: 'Verification', time: 4.2, accuracy: 94, cost: 78, volume: 1525, target: 5.0 },
    { process: 'Dispatch', time: 8.5, accuracy: 98, cost: 125, volume: 1485, target: 10.0 },
    { process: 'Quality Check', time: 1.8, accuracy: 99, cost: 35, volume: 1485, target: 2.0 },
    { process: 'Delivery', time: 2.3, accuracy: 95, cost: 85, volume: 1420, target: 2.5 }
  ];

  const predictiveAnalytics = [
    { month: 'Jul', predicted: 1650000, confidence: 85, factors: ['Season', 'Campaign'] },
    { month: 'Aug', predicted: 1780000, confidence: 82, factors: ['Festival', 'Growth'] },
    { month: 'Sep', predicted: 1920000, confidence: 79, factors: ['Campaign', 'Retention'] },
    { month: 'Oct', predicted: 2150000, confidence: 78, factors: ['Festival', 'Season'] },
    { month: 'Nov', predicted: 2380000, confidence: 75, factors: ['Peak Season', 'Festival'] },
    { month: 'Dec', predicted: 2100000, confidence: 77, factors: ['Year End', 'Campaign'] }
  ];

  const riskAnalysis = [
    { risk: 'Donor Churn', probability: 25, impact: 'High', mitigation: 'Retention Programs' },
    { risk: 'Cost Overrun', probability: 18, impact: 'Medium', mitigation: 'Budget Controls' },
    { risk: 'Quality Issues', probability: 12, impact: 'High', mitigation: 'Enhanced QC' },
    { risk: 'System Downtime', probability: 8, impact: 'High', mitigation: 'Backup Systems' },
    { risk: 'Compliance Issues', probability: 5, impact: 'Critical', mitigation: 'Audit Programs' }
  ];

  const competitiveAnalysis = [
    { metric: 'Donation Growth', ourPerformance: 18, industry: 12, benchmark: 15 },
    { metric: 'Cost Efficiency', ourPerformance: 92, industry: 85, benchmark: 90 },
    { metric: 'Donor Retention', ourPerformance: 78, industry: 65, benchmark: 70 },
    { metric: 'Process Accuracy', ourPerformance: 96, industry: 88, benchmark: 92 },
    { metric: 'Digital Adoption', ourPerformance: 85, industry: 72, benchmark: 80 }
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
              <p className="text-gray-600">Advanced business intelligence and predictive analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Analytics Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Generate Insights</Button>
            </div>
          </div>

          {/* Executive KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹1.89Cr</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">4,440</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.3% growth rate
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Donation</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">₹497</div>
                <p className="text-xs text-muted-foreground">Above ₹450 target</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Process Efficiency</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">96.2%</div>
                <p className="text-xs text-muted-foreground">+2.1% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">8.3x</div>
                <p className="text-xs text-muted-foreground">Industry leading</p>
              </CardContent>
            </Card>
          </div>

          {/* Donation Trends & Department Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Donation Trends Analysis</CardTitle>
                <p className="text-sm text-gray-600">Revenue, volume and efficiency trends</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={donationTrends}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="amount" stroke="var(--color-amount)" fill="var(--color-amount)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="target" stroke="var(--color-target)" fill="var(--color-target)" fillOpacity={0.2} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Performance Matrix</CardTitle>
                <p className="text-sm text-gray-600">Revenue vs efficiency by department</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <BarChart data={deptPerformance}>
                    <XAxis dataKey="dept" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="revenue" fill="#b33324" />
                    <Bar dataKey="cost" fill="#dc2626" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Cost Analysis Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Analysis & Budget Variance</CardTitle>
              <p className="text-sm text-gray-600">Operational cost breakdown with budget comparison</p>
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
                        <p className="text-xs text-gray-500">vs Budget</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donor Segmentation & Geographic Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Donor Segmentation Analysis</CardTitle>
                <p className="text-sm text-gray-600">Performance by donor categories</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donorSegmentation.map((segment, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{segment.segment}</h4>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          +{segment.growth}%
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Count: {segment.count.toLocaleString()}</div>
                        <div>Amount: ₹{segment.amount.toLocaleString()}</div>
                        <div>Avg: ₹{segment.avgDonation}</div>
                        <div>Retention: {segment.retention}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Performance</CardTitle>
                <p className="text-sm text-gray-600">Regional donation patterns and ROI</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <BarChart data={geographicalAnalysis}>
                    <XAxis dataKey="region" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="donations" fill="#059669" />
                    <Bar dataKey="cost" fill="#dc2626" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Effectiveness */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Campaign Effectiveness Analysis</CardTitle>
              <p className="text-sm text-gray-600">ROI and success metrics by campaign type</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Campaign</th>
                      <th className="text-left p-2">Launched</th>
                      <th className="text-left p-2">Successful</th>
                      <th className="text-left p-2">Success Rate</th>
                      <th className="text-left p-2">Cost</th>
                      <th className="text-left p-2">Revenue</th>
                      <th className="text-left p-2">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignEffectiveness.map((campaign, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{campaign.campaign}</td>
                        <td className="p-2">{campaign.launched}</td>
                        <td className="p-2 text-green-600">{campaign.successful}</td>
                        <td className="p-2">{((campaign.successful / campaign.launched) * 100).toFixed(1)}%</td>
                        <td className="p-2">₹{campaign.cost.toLocaleString()}</td>
                        <td className="p-2">₹{campaign.revenue.toLocaleString()}</td>
                        <td className="p-2 font-medium text-blue-600">{campaign.roi}x</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Process Efficiency & Predictive Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Process Efficiency Metrics</CardTitle>
                <p className="text-sm text-gray-600">Time, accuracy and cost by process</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <RadarChart data={processEfficiency}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="process" />
                    <PolarRadiusAxis />
                    <Radar name="Accuracy" dataKey="accuracy" stroke="#059669" fill="#059669" fillOpacity={0.3} />
                    <Radar name="Efficiency" dataKey="efficiency" stroke="#b33324" fill="#b33324" fillOpacity={0.3} />
                    <ChartTooltip />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Predictive Revenue Forecast</CardTitle>
                <p className="text-sm text-gray-600">AI-powered donation predictions</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <LineChart data={predictiveAnalytics}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip />
                    <Line type="monotone" dataKey="predicted" stroke="#7c3aed" strokeWidth={3} />
                    <Line type="monotone" dataKey="confidence" stroke="#f59e0b" strokeDasharray="5 5" />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Risk Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Business Risk Assessment</CardTitle>
              <p className="text-sm text-gray-600">Risk probability and impact analysis</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {riskAnalysis.map((risk, index) => (
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
                    <p className="text-xs text-gray-600">{risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitive Benchmarking */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Competitive Benchmarking</CardTitle>
              <p className="text-sm text-gray-600">Performance vs industry standards</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitiveAnalysis.map((metric, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{metric.metric}</h4>
                      <div className="flex gap-4 text-sm">
                        <span className="text-blue-600">Us: {metric.ourPerformance}%</span>
                        <span className="text-gray-600">Industry: {metric.industry}%</span>
                        <span className="text-purple-600">Benchmark: {metric.benchmark}%</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-blue-100 rounded h-2" style={{ height: `${metric.ourPerformance / 5}px`, minHeight: '8px' }}></div>
                      <div className="bg-gray-100 rounded h-2" style={{ height: `${metric.industry / 5}px`, minHeight: '8px' }}></div>
                      <div className="bg-purple-100 rounded h-2" style={{ height: `${metric.benchmark / 5}px`, minHeight: '8px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Quality Score</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">96.8%</div>
                <p className="text-xs text-muted-foreground">+2.1% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Automation Rate</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">78.5%</div>
                <p className="text-xs text-muted-foreground">Target: 85%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">99.7%</div>
                <p className="text-xs text-muted-foreground">SLA: 99.5%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">94.2%</div>
                <p className="text-xs text-muted-foreground">Audit ready</p>
              </CardContent>
            </Card>
          </div>

          {/* Actionable Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Business Insights</CardTitle>
              <p className="text-sm text-gray-600">Automated recommendations for optimization</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-green-800">Revenue Opportunity</h4>
                    <p className="text-sm text-gray-600">Premium donor segment shows 22% growth potential. Focus retention campaigns could yield ₹2.5L additional revenue.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-orange-800">Cost Optimization</h4>
                    <p className="text-sm text-gray-600">Process automation in DQ can reduce costs by ₹85K monthly while improving accuracy by 8%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-blue-800">Geographic Expansion</h4>
                    <p className="text-sm text-gray-600">Tier-2 cities show 35% untapped potential. Strategic expansion could increase donor base by 1,200.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-purple-800">Technology Enhancement</h4>
                    <p className="text-sm text-gray-600">ML-based donor scoring can improve campaign targeting efficiency by 25% and reduce acquisition costs.</p>
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
