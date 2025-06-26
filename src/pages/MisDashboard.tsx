
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Users, Package, Clock, Target, AlertTriangle, CheckCircle, Activity, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MisDashboard = () => {
  const performanceData = [
    { time: '9 AM', donors: 45, dispatch: 23, dq: 12, dialler: 18 },
    { time: '10 AM', donors: 52, dispatch: 28, dq: 15, dialler: 22 },
    { time: '11 AM', donors: 48, dispatch: 31, dq: 18, dialler: 25 },
    { time: '12 PM', donors: 61, dispatch: 35, dq: 22, dialler: 28 },
    { time: '1 PM', donors: 55, dispatch: 29, dq: 16, dialler: 24 },
    { time: '2 PM', donors: 67, dispatch: 38, dq: 25, dialler: 31 },
    { time: '3 PM', donors: 72, dispatch: 42, dq: 28, dialler: 35 },
    { time: '4 PM', donors: 58, dispatch: 33, dq: 19, dialler: 27 }
  ];

  const resourceUtilizationData = [
    { department: 'Birthday', utilization: 85, capacity: 100, efficiency: 92 },
    { department: 'Dispatch', utilization: 78, capacity: 100, efficiency: 87 },
    { department: 'DQ', utilization: 92, capacity: 100, efficiency: 94 },
    { department: 'Dialler', utilization: 73, capacity: 100, efficiency: 81 },
    { department: 'Accounts', utilization: 89, capacity: 100, efficiency: 96 }
  ];

  const systemHealthData = [
    { metric: 'Performance', value: 85, fullMark: 100 },
    { metric: 'Reliability', value: 92, fullMark: 100 },
    { metric: 'Scalability', value: 78, fullMark: 100 },
    { metric: 'Security', value: 94, fullMark: 100 },
    { metric: 'Usability', value: 87, fullMark: 100 },
    { metric: 'Efficiency', value: 89, fullMark: 100 }
  ];

  const costOptimizationData = [
    { month: 'Jan', actual: 125000, budget: 130000, savings: 5000 },
    { month: 'Feb', actual: 132000, budget: 135000, savings: 3000 },
    { month: 'Mar', actual: 118000, budget: 128000, savings: 10000 },
    { month: 'Apr', actual: 145000, budget: 140000, savings: -5000 },
    { month: 'May', actual: 128000, budget: 138000, savings: 10000 },
    { month: 'Jun', actual: 122000, budget: 135000, savings: 13000 }
  ];

  const chartConfig = {
    donors: { label: 'Donors', color: '#b33324' },
    dispatch: { label: 'Dispatch', color: '#059669' },
    dq: { label: 'DQ', color: '#dc2626' },
    dialler: { label: 'Dialler', color: '#7c3aed' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MIS Dashboard</h1>
              <p className="text-gray-600">Real-time system monitoring and business intelligence</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Refresh Data</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Auto-Refresh: ON</Button>
            </div>
          </div>

          {/* Real-time KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Activity className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">98.7%</div>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">47</div>
                <p className="text-xs text-muted-foreground">Currently online</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
                <Clock className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">1.2s</div>
                <p className="text-xs text-muted-foreground">System response time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Today</CardTitle>
                <Package className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">284</div>
                <p className="text-xs text-muted-foreground">Completed: 256</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost Efficiency</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">94.2%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.3% this month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Activity</CardTitle>
                <p className="text-sm text-gray-600">Hourly activity across departments</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="donors" stroke="var(--color-donors)" strokeWidth={2} />
                    <Line type="monotone" dataKey="dispatch" stroke="var(--color-dispatch)" strokeWidth={2} />
                    <Line type="monotone" dataKey="dq" stroke="var(--color-dq)" strokeWidth={2} />
                    <Line type="monotone" dataKey="dialler" stroke="var(--color-dialler)" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Health Radar</CardTitle>
                <p className="text-sm text-gray-600">Overall system performance metrics</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <RadarChart data={systemHealthData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="System Health" dataKey="value" stroke="#b33324" fill="#b33324" fillOpacity={0.3} />
                    <ChartTooltip />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Resource Utilization */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Resource Utilization & Efficiency</CardTitle>
              <p className="text-sm text-gray-600">Department-wise resource allocation and performance</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resourceUtilizationData.map((dept, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{dept.department}</h4>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">Utilization: {dept.utilization}%</span>
                          <span className="text-sm text-gray-600">Efficiency: {dept.efficiency}%</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${dept.utilization}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">Utilization</span>
                        </div>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${dept.efficiency}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">Efficiency</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {dept.efficiency > 90 ? 
                        <CheckCircle className="h-6 w-6 text-green-600" /> :
                        dept.efficiency > 80 ? 
                        <Target className="h-6 w-6 text-yellow-600" /> :
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      }
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cost Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Cost Optimization Tracking</CardTitle>
              <p className="text-sm text-gray-600">Budget vs actual spending with savings analysis</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80 mb-6">
                <BarChart data={costOptimizationData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="budget" fill="#94a3b8" name="Budget" />
                  <Bar dataKey="actual" fill="#b33324" name="Actual" />
                  <Bar dataKey="savings" fill="#059669" name="Savings" />
                </BarChart>
              </ChartContainer>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800">Total Savings</h4>
                  <p className="text-2xl font-bold text-green-600">₹36,000</p>
                  <p className="text-sm text-green-600">This quarter</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800">Budget Adherence</h4>
                  <p className="text-2xl font-bold text-blue-600">96.2%</p>
                  <p className="text-sm text-blue-600">Overall performance</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800">Cost per Transaction</h4>
                  <p className="text-2xl font-bold text-purple-600">₹22.50</p>
                  <p className="text-sm text-purple-600 flex items-center justify-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -12% reduction
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MisDashboard;
