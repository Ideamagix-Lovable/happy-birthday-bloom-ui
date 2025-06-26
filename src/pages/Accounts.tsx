
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, CreditCard, AlertTriangle, CheckCircle, Calculator, PiggyBank, Target, FileText, Clock, Percent, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Accounts = () => {
  const revenueData = [
    { month: 'Jan', revenue: 145000, expenses: 98000, profit: 47000, donations: 89000 },
    { month: 'Feb', revenue: 168000, expenses: 112000, profit: 56000, donations: 102000 },
    { month: 'Mar', revenue: 152000, expenses: 105000, profit: 47000, donations: 94000 },
    { month: 'Apr', revenue: 189000, expenses: 125000, profit: 64000, donations: 118000 },
    { month: 'May', revenue: 201000, expenses: 134000, profit: 67000, donations: 125000 },
    { month: 'Jun', revenue: 175000, expenses: 118000, profit: 57000, donations: 108000 }
  ];

  const expenseBreakdown = [
    { category: 'Staff Salaries', amount: 45000, percentage: 38, color: '#b33324' },
    { category: 'Operations', amount: 28000, percentage: 24, color: '#dc2626' },
    { category: 'Technology', amount: 18000, percentage: 15, color: '#059669' },
    { category: 'Marketing', amount: 12000, percentage: 10, color: '#7c3aed' },
    { category: 'Utilities', amount: 8000, percentage: 7, color: '#f59e0b' },
    { category: 'Others', amount: 7000, percentage: 6, color: '#6b7280' }
  ];

  const donorContributions = [
    { range: '₹1,000-5,000', donors: 1250, amount: 3125000, avgDonation: 2500 },
    { range: '₹5,001-10,000', donors: 890, amount: 6675000, avgDonation: 7500 },
    { range: '₹10,001-25,000', donors: 450, amount: 7875000, avgDonation: 17500 },
    { range: '₹25,001-50,000', donors: 180, amount: 6750000, avgDonation: 37500 },
    { range: '₹50,001+', donors: 85, amount: 5950000, avgDonation: 70000 }
  ];

  const cashFlowData = [
    { week: 'Week 1', inflow: 42000, outflow: 28000, net: 14000 },
    { week: 'Week 2', inflow: 38000, outflow: 31000, net: 7000 },
    { week: 'Week 3', inflow: 45000, outflow: 29000, net: 16000 },
    { week: 'Week 4', inflow: 50000, outflow: 35000, net: 15000 }
  ];

  const departmentBudgets = [
    { dept: 'Birthday', allocated: 45000, spent: 38000, remaining: 7000, utilization: 84 },
    { dept: 'Dispatch', allocated: 35000, spent: 32000, remaining: 3000, utilization: 91 },
    { dept: 'DQ', allocated: 25000, spent: 21000, remaining: 4000, utilization: 84 },
    { dept: 'Dialler', allocated: 30000, spent: 27000, remaining: 3000, utilization: 90 },
    { dept: 'Operations', allocated: 40000, spent: 35000, remaining: 5000, utilization: 88 }
  ];

  const paymentMethods = [
    { method: 'Online Transfer', count: 1850, amount: 12450000, avgTransaction: 6730 },
    { method: 'UPI', count: 2340, amount: 8190000, avgTransaction: 3500 },
    { method: 'Credit Card', count: 890, amount: 6780000, avgTransaction: 7620 },
    { method: 'Cash', count: 450, amount: 2250000, avgTransaction: 5000 },
    { method: 'Cheque', count: 125, amount: 1875000, avgTransaction: 15000 }
  ];

  const chartConfig = {
    revenue: { label: 'Revenue', color: '#b33324' },
    expenses: { label: 'Expenses', color: '#dc2626' },
    profit: { label: 'Profit', color: '#059669' },
    donations: { label: 'Donations', color: '#7c3aed' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Accounts Dashboard</h1>
              <p className="text-gray-600">Financial analytics and cost optimization insights</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export Financial Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Generate Invoice</Button>
            </div>
          </div>

          {/* Key Financial Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹10,30,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +14.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">₹3,38,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.5% margin improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Outstanding Dues</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">₹45,000</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -22% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Transaction</CardTitle>
                <Calculator className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">₹18.50</div>
                <p className="text-xs text-muted-foreground">15% below industry avg</p>
              </CardContent>
            </Card>
          </div>

          {/* Revenue & Expense Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Revenue vs Expenses Trend</CardTitle>
                <p className="text-sm text-gray-600">Monthly financial performance</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="expenses" stroke="var(--color-expenses)" fill="var(--color-expenses)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="profit" stroke="var(--color-profit)" fill="var(--color-profit)" fillOpacity={0.3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <p className="text-sm text-gray-600">Cost distribution by category</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <PieChart>
                    <Pie
                      data={expenseBreakdown}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="amount"
                      label={({ category, percentage }) => `${category}: ${percentage}%`}
                    >
                      {expenseBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Cash Flow Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Weekly Cash Flow Analysis</CardTitle>
              <p className="text-sm text-gray-600">Inflow vs Outflow tracking</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={cashFlowData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="inflow" fill="#059669" />
                  <Bar dataKey="outflow" fill="#dc2626" />
                  <Bar dataKey="net" fill="#7c3aed" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Donor Contribution Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Donor Contribution Analysis</CardTitle>
              <p className="text-sm text-gray-600">Revenue segmentation by donor categories</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Donation Range</th>
                      <th className="text-left p-2">Number of Donors</th>
                      <th className="text-left p-2">Total Amount</th>
                      <th className="text-left p-2">Average Donation</th>
                      <th className="text-left p-2">Revenue Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donorContributions.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{item.range}</td>
                        <td className="p-2">{item.donors.toLocaleString()}</td>
                        <td className="p-2">₹{item.amount.toLocaleString()}</td>
                        <td className="p-2">₹{item.avgDonation.toLocaleString()}</td>
                        <td className="p-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{ width: `${(item.amount / 30375000) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Department Budget Utilization */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Department Budget Utilization</CardTitle>
              <p className="text-sm text-gray-600">Budget allocation and spending analysis</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {departmentBudgets.map((dept, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{dept.dept}</h4>
                      <span className="text-sm text-gray-600">{dept.utilization}%</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Allocated:</span>
                        <span className="font-medium">₹{dept.allocated.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Spent:</span>
                        <span className="font-medium text-red-600">₹{dept.spent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Remaining:</span>
                        <span className="font-medium text-green-600">₹{dept.remaining.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${dept.utilization}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Payment Methods Performance</CardTitle>
              <p className="text-sm text-gray-600">Transaction analysis by payment type</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Payment Method</th>
                      <th className="text-left p-2">Transaction Count</th>
                      <th className="text-left p-2">Total Amount</th>
                      <th className="text-left p-2">Avg Transaction</th>
                      <th className="text-left p-2">Processing Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map((method, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{method.method}</td>
                        <td className="p-2">{method.count.toLocaleString()}</td>
                        <td className="p-2">₹{method.amount.toLocaleString()}</td>
                        <td className="p-2">₹{method.avgTransaction.toLocaleString()}</td>
                        <td className="p-2">₹{Math.round(method.amount * 0.015).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Financial KPIs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                <Percent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">24.5%</div>
                <p className="text-xs text-muted-foreground">Above industry standard</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Donor Retention</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">89.2%</div>
                <p className="text-xs text-muted-foreground">+3.1% improvement</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payment Success Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">96.8%</div>
                <p className="text-xs text-muted-foreground">Industry leading</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Collection Efficiency</CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">94.1%</div>
                <p className="text-xs text-muted-foreground">Excellent performance</p>
              </CardContent>
            </Card>
          </div>

          {/* Cost Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Financial Optimization Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Strategic insights for cost reduction and revenue enhancement</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Payment Processing Optimization</h4>
                    <p className="text-sm text-gray-600">Switch to UPI for small transactions to reduce processing fees by ₹8,000/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Donor Engagement Enhancement</h4>
                    <p className="text-sm text-gray-600">Focus on ₹10,001-25,000 segment to increase average donation by 15%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Budget Reallocation</h4>
                    <p className="text-sm text-gray-600">Transfer ₹5,000 from underutilized departments to high-performing modules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Automated Reconciliation</h4>
                    <p className="text-sm text-gray-600">Implement automated reconciliation to reduce manual processing costs by 40%</p>
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

export default Accounts;
