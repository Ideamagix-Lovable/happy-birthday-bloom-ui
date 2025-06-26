
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Package, AlertTriangle, FileText, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MisReports = () => {
  const costAnalysisData = [
    { month: 'Jan', dispatch: 45000, dq: 12000, dialler: 18000, operations: 25000 },
    { month: 'Feb', dispatch: 52000, dq: 15000, dialler: 22000, operations: 28000 },
    { month: 'Mar', dispatch: 48000, dq: 11000, dialler: 19000, operations: 26000 },
    { month: 'Apr', dispatch: 58000, dq: 16000, dialler: 25000, operations: 32000 },
    { month: 'May', dispatch: 61000, dq: 14000, dialler: 23000, operations: 29000 },
    { month: 'Jun', dispatch: 55000, dq: 13000, dialler: 21000, operations: 27000 }
  ];

  const departmentEfficiencyData = [
    { name: 'Dispatch', efficiency: 85, cost: 55000, processed: 1250 },
    { name: 'DQ', efficiency: 92, cost: 13000, processed: 890 },
    { name: 'Dialler', efficiency: 78, cost: 21000, processed: 2100 },
    { name: 'Birthday', efficiency: 88, cost: 18000, processed: 760 },
    { name: 'Accounts', efficiency: 94, cost: 9000, processed: 340 }
  ];

  const modulePerformanceData = [
    { module: 'Birthday Dispatch', value: 35, color: '#b33324' },
    { module: 'Regular Dispatch', value: 28, color: '#059669' },
    { module: 'DQ Processing', value: 18, color: '#dc2626' },
    { module: 'Dialler Operations', value: 19, color: '#7c3aed' }
  ];

  const chartConfig = {
    dispatch: { label: 'Dispatch', color: '#b33324' },
    dq: { label: 'DQ', color: '#dc2626' },
    dialler: { label: 'Dialler', color: '#7c3aed' },
    operations: { label: 'Operations', color: '#059669' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MIS Reports</h1>
              <p className="text-gray-600">Comprehensive business analytics and performance insights</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Generate PDF</Button>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cost Savings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹2,45,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Process Efficiency</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">87.4%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.2% improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Modules</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">All systems operational</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Transaction</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">₹24.50</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -8.3% reduction
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Department Cost Analysis</CardTitle>
                <p className="text-sm text-gray-600">Monthly cost breakdown by department</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <BarChart data={costAnalysisData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="dispatch" fill="var(--color-dispatch)" />
                    <Bar dataKey="dq" fill="var(--color-dq)" />
                    <Bar dataKey="dialler" fill="var(--color-dialler)" />
                    <Bar dataKey="operations" fill="var(--color-operations)" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Module Performance Distribution</CardTitle>
                <p className="text-sm text-gray-600">Resource allocation across modules</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={modulePerformanceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {modulePerformanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Department Efficiency Table */}
          <Card>
            <CardHeader>
              <CardTitle>Department Efficiency Analysis</CardTitle>
              <p className="text-sm text-gray-600">Performance metrics and optimization opportunities</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Department</th>
                      <th className="text-left p-2">Efficiency %</th>
                      <th className="text-left p-2">Monthly Cost</th>
                      <th className="text-left p-2">Items Processed</th>
                      <th className="text-left p-2">Cost per Item</th>
                      <th className="text-left p-2">Optimization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentEfficiencyData.map((dept, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{dept.name}</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: `${dept.efficiency}%` }}
                              ></div>
                            </div>
                            {dept.efficiency}%
                          </div>
                        </td>
                        <td className="p-2">₹{dept.cost.toLocaleString()}</td>
                        <td className="p-2">{dept.processed}</td>
                        <td className="p-2">₹{Math.round(dept.cost / dept.processed)}</td>
                        <td className="p-2">
                          {dept.efficiency < 85 ? (
                            <span className="text-red-600 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              Needs Review
                            </span>
                          ) : (
                            <span className="text-green-600">Optimal</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Cost Optimization Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Dialler Module Optimization</h4>
                    <p className="text-sm text-gray-600">Implement automated call scheduling to reduce manual intervention by 30%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Dispatch Process Streamlining</h4>
                    <p className="text-sm text-gray-600">Consolidate shipping routes to reduce logistics costs by ₹15,000/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Resource Reallocation</h4>
                    <p className="text-sm text-gray-600">Move 2 resources from DQ to Birthday module during peak seasons</p>
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

export default MisReports;
