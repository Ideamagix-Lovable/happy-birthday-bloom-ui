
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Phone, Users, Clock, CheckCircle, XCircle, UserPlus, Target, Activity, Headphones, Calendar, PhoneCall, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiallerDashboard = () => {
  const callVolumeData = [
    { month: 'Jan', totalCalls: 8500, connected: 6375, converted: 1275, missed: 2125, success: 75 },
    { month: 'Feb', totalCalls: 9200, connected: 7176, converted: 1472, missed: 2024, success: 78 },
    { month: 'Mar', totalCalls: 8800, connected: 6864, converted: 1408, missed: 1936, success: 78 },
    { month: 'Apr', totalCalls: 10200, connected: 8262, converted: 1734, missed: 1938, success: 81 },
    { month: 'May', totalCalls: 11500, connected: 9545, converted: 2070, missed: 1955, success: 83 },
    { month: 'Jun', totalCalls: 10800, connected: 9180, converted: 1944, missed: 1620, success: 85 }
  ];

  const agentPerformance = [
    { agent: 'Rahul Sharma', calls: 450, connected: 382, converted: 95, rate: 85, avgTime: 4.2, rating: 4.8 },
    { agent: 'Priya Gupta', calls: 425, connected: 366, converted: 88, rate: 86, avgTime: 4.5, rating: 4.7 },
    { agent: 'Amit Singh', calls: 398, connected: 327, converted: 78, rate: 82, avgTime: 4.8, rating: 4.5 },
    { agent: 'Sunita Patel', calls: 378, connected: 317, converted: 82, rate: 84, avgTime: 4.3, rating: 4.6 },
    { agent: 'Vikram Kumar', calls: 365, connected: 299, converted: 69, rate: 82, avgTime: 5.1, rating: 4.4 }
  ];

  const campaignAnalysis = [
    { campaign: 'Birthday Outreach', calls: 2850, connected: 2279, converted: 570, cost: 85500, roi: 245 },
    { campaign: 'Festival Donations', calls: 2100, connected: 1680, converted: 420, cost: 63000, roi: 280 },
    { campaign: 'General Outreach', calls: 1950, connected: 1521, converted: 312, cost: 58500, roi: 198 },
    { campaign: 'Lapsed Donors', calls: 1680, connected: 1260, converted: 315, cost: 50400, roi: 315 },
    { campaign: 'New Prospects', calls: 1220, connected: 854, converted: 171, cost: 36600, roi: 165 }
  ];

  const timeSlotAnalysis = [
    { slot: '9:00-11:00 AM', calls: 1250, connected: 1000, rate: 80, cost: 37500, efficiency: 85 },
    { slot: '11:00-1:00 PM', calls: 1850, connected: 1554, rate: 84, cost: 55500, efficiency: 88 },
    { slot: '2:00-4:00 PM', calls: 2100, connected: 1785, rate: 85, cost: 63000, efficiency: 90 },
    { slot: '4:00-6:00 PM', calls: 1950, connected: 1677, rate: 86, cost: 58500, efficiency: 89 },
    { slot: '6:00-8:00 PM', calls: 1650, connected: 1386, rate: 84, cost: 49500, efficiency: 87 }
  ];

  const dispositionBreakdown = [
    { disposition: 'Interested', count: 1944, percentage: 18, followUp: 'Yes', color: '#059669' },
    { disposition: 'Not Interested', count: 3240, percentage: 30, followUp: 'No', color: '#dc2626' },
    { disposition: 'Call Back Later', count: 2700, percentage: 25, followUp: 'Yes', color: '#f59e0b' },
    { disposition: 'Wrong Number', count: 1080, percentage: 10, followUp: 'No', color: '#6b7280' },
    { disposition: 'Not Reachable', count: 1296, percentage: 12, followUp: 'Yes', color: '#7c3aed' },
    { disposition: 'Busy', count: 540, percentage: 5, followUp: 'Yes', color: '#0ea5e9' }
  ];

  const conversionFunnel = [
    { stage: 'Total Leads', count: 15800, percentage: 100, dropOff: 0 },
    { stage: 'Contacted', count: 10800, percentage: 68, dropOff: 32 },
    { stage: 'Connected', count: 9180, percentage: 58, dropOff: 15 },
    { stage: 'Interested', count: 3888, percentage: 25, dropOff: 58 },
    { stage: 'Converted', count: 1944, percentage: 12, dropOff: 50 }
  ];

  const costAnalysis = [
    { category: 'Agent Salaries', amount: 185000, percentage: 45, perCall: 17.12, trend: 'stable' },
    { category: 'Technology', amount: 82000, percentage: 20, perCall: 7.59, trend: 'decreasing' },
    { category: 'Infrastructure', amount: 61500, percentage: 15, perCall: 5.69, trend: 'stable' },
    { category: 'Training', amount: 41000, percentage: 10, perCall: 3.80, trend: 'increasing' },
    { category: 'Other Expenses', amount: 41000, percentage: 10, perCall: 3.80, trend: 'stable' }
  ];

  const chartConfig = {
    totalCalls: { label: 'Total Calls', color: '#b33324' },
    connected: { label: 'Connected', color: '#059669' },
    converted: { label: 'Converted', color: '#7c3aed' },
    missed: { label: 'Missed', color: '#dc2626' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dialler Dashboard</h1>
              <p className="text-gray-600">Call center operations and performance analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Call Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Start Campaign</Button>
            </div>
          </div>

          {/* Key Call Center Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
                <Phone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">59,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +22.8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Connection Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">85.0%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +7.2% improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">18.0%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.5% increase
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Call</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">₹38.00</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -8.5% reduction
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call Volume and Performance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Call Performance</CardTitle>
                <p className="text-sm text-gray-600">Volume and success rate trends</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={callVolumeData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="totalCalls" stroke="var(--color-totalCalls)" fill="var(--color-totalCalls)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="connected" stroke="var(--color-connected)" fill="var(--color-connected)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="converted" stroke="var(--color-converted)" fill="var(--color-converted)" fillOpacity={0.3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Disposition Breakdown</CardTitle>
                <p className="text-sm text-gray-600">Outcome distribution of calls</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={dispositionBreakdown}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="count"
                      label={({ disposition, percentage }) => `${disposition}: ${percentage}%`}
                    >
                      {dispositionBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Agent Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Agent Performance Analysis</CardTitle>
              <p className="text-sm text-gray-600">Individual agent metrics and ratings</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Agent Name</th>
                      <th className="text-left p-2">Total Calls</th>
                      <th className="text-left p-2">Connected</th>
                      <th className="text-left p-2">Converted</th>
                      <th className="text-left p-2">Success Rate</th>
                      <th className="text-left p-2">Avg Call Time</th>
                      <th className="text-left p-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agentPerformance.map((agent, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{agent.agent}</td>
                        <td className="p-2">{agent.calls}</td>
                        <td className="p-2 text-green-600">{agent.connected}</td>
                        <td className="p-2 text-purple-600">{agent.converted}</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${agent.rate}%` }}
                              ></div>
                            </div>
                            {agent.rate}%
                          </div>
                        </td>
                        <td className="p-2">{agent.avgTime} min</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {agent.rating}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Campaign Performance Analysis</CardTitle>
              <p className="text-sm text-gray-600">ROI and effectiveness by campaign type</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {campaignAnalysis.map((campaign, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{campaign.campaign}</h4>
                      <PhoneCall className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Calls:</span>
                        <span className="font-medium">{campaign.calls.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Connected:</span>
                        <span className="font-medium text-green-600">{campaign.connected.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Converted:</span>
                        <span className="font-medium text-purple-600">{campaign.converted}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cost:</span>
                        <span className="font-medium">₹{campaign.cost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ROI:</span>
                        <span className="font-medium text-blue-600">{campaign.roi}%</span>
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
              <CardTitle>Time Slot Performance</CardTitle>
              <p className="text-sm text-gray-600">Call effectiveness by time periods</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={timeSlotAnalysis}>
                  <XAxis dataKey="slot" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="calls" fill="#b33324" />
                  <Bar dataKey="connected" fill="#059669" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Conversion Funnel */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lead Conversion Funnel</CardTitle>
              <p className="text-sm text-gray-600">Customer journey from lead to conversion</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conversionFunnel.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">{stage.stage}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{stage.count.toLocaleString()}</span>
                        <span className="text-sm text-gray-600">{stage.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${stage.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    {stage.dropOff > 0 && (
                      <div className="text-sm text-red-600 w-16">-{stage.dropOff}%</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cost Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cost Structure Analysis</CardTitle>
              <p className="text-sm text-gray-600">Operational cost breakdown and trends</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Cost Category</th>
                      <th className="text-left p-2">Amount</th>
                      <th className="text-left p-2">Percentage</th>
                      <th className="text-left p-2">Cost per Call</th>
                      <th className="text-left p-2">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costAnalysis.map((cost, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{cost.category}</td>
                        <td className="p-2">₹{cost.amount.toLocaleString()}</td>
                        <td className="p-2">{cost.percentage}%</td>
                        <td className="p-2">₹{cost.perCall}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            cost.trend === 'decreasing' ? 'bg-green-100 text-green-800' :
                            cost.trend === 'increasing' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {cost.trend}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Additional KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Handle Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">4.6 min</div>
                <p className="text-xs text-muted-foreground">Within optimal range</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Agent Utilization</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">92.5%</div>
                <p className="text-xs text-muted-foreground">Excellent efficiency</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">4.7/5</div>
                <p className="text-xs text-muted-foreground">Based on 890 surveys</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Call Abandonment</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">3.2%</div>
                <p className="text-xs text-muted-foreground">Below 5% target</p>
              </CardContent>
            </Card>
          </div>

          {/* Dialler Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Call Center Optimization Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Strategic improvements for enhanced performance</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Peak Hour Optimization</h4>
                    <p className="text-sm text-gray-600">Increase staffing during 2-4 PM slot to handle 15% more calls efficiently</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Campaign Rebalancing</h4>
                    <p className="text-sm text-gray-600">Shift resources from General Outreach to high-ROI Lapsed Donors campaign</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Agent Training Program</h4>
                    <p className="text-sm text-gray-600">Focus on conversion techniques to improve overall rate from 18% to 22%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Technology Upgrade</h4>
                    <p className="text-sm text-gray-600">Implement predictive dialing to reduce cost per call by ₹5.50</p>
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

export default DiallerDashboard;
