
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Database, Users, Clock, AlertTriangle, CheckCircle, UserCheck, FileText, Target, Activity, Zap, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DQDashboard = () => {
  const dqProcessingData = [
    { month: 'Jan', processed: 1250, verified: 1188, rejected: 45, pending: 17, quality: 95 },
    { month: 'Feb', processed: 1450, verified: 1378, rejected: 52, pending: 20, quality: 95 },
    { month: 'Mar', processed: 1380, verified: 1325, rejected: 38, pending: 17, quality: 96 },
    { month: 'Apr', processed: 1620, verified: 1555, rejected: 48, pending: 17, quality: 96 },
    { month: 'May', processed: 1750, verified: 1685, rejected: 41, pending: 24, quality: 96 },
    { month: 'Jun', processed: 1580, verified: 1525, rejected: 35, pending: 20, quality: 97 }
  ];

  const dataQualityMetrics = [
    { category: 'Contact Info', total: 5200, clean: 4940, issues: 260, accuracy: 95 },
    { category: 'Address', total: 5200, clean: 4836, issues: 364, accuracy: 93 },
    { category: 'Demographics', total: 5200, clean: 5044, issues: 156, accuracy: 97 },
    { category: 'Preferences', total: 5200, clean: 4784, issues: 416, accuracy: 92 },
    { category: 'Financial', total: 5200, clean: 5096, issues: 104, accuracy: 98 }
  ];

  const processingTimeAnalysis = [
    { stage: 'Data Entry', avgTime: 2.5, target: 3.0, efficiency: 83, volume: 1580 },
    { stage: 'Verification', avgTime: 4.2, target: 5.0, efficiency: 84, volume: 1525 },
    { stage: 'Validation', avgTime: 1.8, target: 2.0, efficiency: 90, volume: 1525 },
    { stage: 'Approval', avgTime: 1.2, target: 1.5, efficiency: 80, volume: 1485 },
    { stage: 'Final QC', avgTime: 0.8, target: 1.0, efficiency: 80, volume: 1485 }
  ];

  const errorPatterns = [
    { type: 'Duplicate Records', count: 145, percentage: 35, severity: 'High', cost: 8700 },
    { type: 'Missing Phone', count: 98, percentage: 24, severity: 'Medium', cost: 2940 },
    { type: 'Invalid Address', count: 87, percentage: 21, severity: 'High', cost: 6960 },
    { type: 'Format Issues', count: 52, percentage: 13, severity: 'Low', cost: 1040 },
    { type: 'Incomplete Data', count: 28, percentage: 7, severity: 'Medium', cost: 1400 }
  ];

  const teamPerformance = [
    { member: 'Rajesh Kumar', processed: 285, accuracy: 97, avgTime: 8.2, rating: 'A+' },
    { member: 'Priya Sharma', processed: 268, accuracy: 96, avgTime: 8.8, rating: 'A+' },
    { member: 'Amit Patel', processed: 245, accuracy: 94, avgTime: 9.2, rating: 'A' },
    { member: 'Sunita Singh', processed: 231, accuracy: 95, avgTime: 9.0, rating: 'A' },
    { member: 'Vikram Gupta', processed: 198, accuracy: 93, avgTime: 10.1, rating: 'B+' }
  ];

  const dataSourceAnalysis = [
    { source: 'Website Forms', records: 2100, quality: 96, cost: 15.50, processing: 2.1 },
    { source: 'Manual Entry', records: 1200, quality: 88, cost: 45.00, processing: 8.5 },
    { source: 'Mobile App', records: 950, quality: 94, cost: 18.20, processing: 2.8 },
    { source: 'Import Files', records: 580, quality: 85, cost: 28.50, processing: 6.2 },
    { source: 'API Integration', records: 370, quality: 98, cost: 12.30, processing: 1.5 }
  ];

  const qualityTrends = [
    { week: 'Week 1', accuracy: 94.5, completeness: 92.1, consistency: 95.8, timeliness: 88.3 },
    { week: 'Week 2', accuracy: 95.2, completeness: 93.4, consistency: 96.1, timeliness: 90.1 },
    { week: 'Week 3', accuracy: 96.1, completeness: 94.2, consistency: 96.8, timeliness: 91.5 },
    { week: 'Week 4', accuracy: 96.8, completeness: 95.1, consistency: 97.2, timeliness: 92.8 }
  ];

  const chartConfig = {
    processed: { label: 'Processed', color: '#b33324' },
    verified: { label: 'Verified', color: '#059669' },
    rejected: { label: 'Rejected', color: '#dc2626' },
    pending: { label: 'Pending', color: '#f59e0b' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">DQ Dashboard</h1>
              <p className="text-gray-600">Data Quality management and processing analytics</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Export DQ Report</Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">Run Quality Check</Button>
            </div>
          </div>

          {/* Key DQ Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Records Processed</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">9,030</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Quality Score</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">96.2%</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +1.2% improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">8.5 min</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -1.2 min faster
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">2.8%</div>
                <p className="text-xs text-muted-foreground">Below 3% target</p>
              </CardContent>
            </Card>
          </div>

          {/* Processing Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly DQ Processing Trends</CardTitle>
                <p className="text-sm text-gray-600">Volume and quality metrics over time</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-80">
                  <AreaChart data={dqProcessingData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="processed" stroke="var(--color-processed)" fill="var(--color-processed)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="verified" stroke="var(--color-verified)" fill="var(--color-verified)" fillOpacity={0.3} />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Quality by Category</CardTitle>
                <p className="text-sm text-gray-600">Accuracy metrics across data types</p>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-80">
                  <BarChart data={dataQualityMetrics}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <ChartTooltip />
                    <Bar dataKey="accuracy" fill="#059669" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Processing Time Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Processing Stage Analysis</CardTitle>
              <p className="text-sm text-gray-600">Time and efficiency metrics by processing stage</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Processing Stage</th>
                      <th className="text-left p-2">Avg Time (min)</th>
                      <th className="text-left p-2">Target Time</th>
                      <th className="text-left p-2">Efficiency</th>
                      <th className="text-left p-2">Volume</th>
                      <th className="text-left p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processingTimeAnalysis.map((stage, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{stage.stage}</td>
                        <td className="p-2">{stage.avgTime}</td>
                        <td className="p-2">{stage.target}</td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${stage.efficiency}%` }}
                              ></div>
                            </div>
                            {stage.efficiency}%
                          </div>
                        </td>
                        <td className="p-2">{stage.volume.toLocaleString()}</td>
                        <td className="p-2">
                          {stage.avgTime <= stage.target ? (
                            <span className="text-green-600 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              On Target
                            </span>
                          ) : (
                            <span className="text-orange-600 flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-1" />
                              Needs Review
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Error Pattern Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Error Pattern Analysis</CardTitle>
              <p className="text-sm text-gray-600">Common data quality issues and impact</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {errorPatterns.map((error, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{error.type}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        error.severity === 'High' ? 'bg-red-100 text-red-800' :
                        error.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {error.severity}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Count:</span>
                        <span className="font-medium">{error.count}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Percentage:</span>
                        <span className="font-medium">{error.percentage}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cost Impact:</span>
                        <span className="font-medium">₹{error.cost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Team Performance Metrics</CardTitle>
              <p className="text-sm text-gray-600">Individual contributor analytics</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Team Member</th>
                      <th className="text-left p-2">Records Processed</th>
                      <th className="text-left p-2">Accuracy Rate</th>
                      <th className="text-left p-2">Avg Time (min)</th>
                      <th className="text-left p-2">Performance Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamPerformance.map((member, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{member.member}</td>
                        <td className="p-2">{member.processed}</td>
                        <td className="p-2">{member.accuracy}%</td>
                        <td className="p-2">{member.avgTime}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            member.rating.startsWith('A') ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {member.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Data Source Analysis */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Source Quality Analysis</CardTitle>
              <p className="text-sm text-gray-600">Quality metrics by data input source</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <BarChart data={dataSourceAnalysis}>
                  <XAxis dataKey="source" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="quality" fill="#7c3aed" />
                  <Bar dataKey="records" fill="#059669" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Quality Trends */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Weekly Quality Dimension Trends</CardTitle>
              <p className="text-sm text-gray-600">Data quality improvement across dimensions</p>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-80">
                <LineChart data={qualityTrends}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#b33324" />
                  <Line type="monotone" dataKey="completeness" stroke="#059669" />
                  <Line type="monotone" dataKey="consistency" stroke="#7c3aed" />
                  <Line type="monotone" dataKey="timeliness" stroke="#f59e0b" />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Additional KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Automation Rate</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">78.5%</div>
                <p className="text-xs text-muted-foreground">+12% from manual processes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cost per Record</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹23.80</div>
                <p className="text-xs text-muted-foreground">18% below industry avg</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Duplicate Detection</CardTitle>
                <Filter className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">97.2%</div>
                <p className="text-xs text-muted-foreground">AI-powered accuracy</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">SLA Compliance</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">94.8%</div>
                <p className="text-xs text-muted-foreground">Consistent performance</p>
              </CardContent>
            </Card>
          </div>

          {/* DQ Optimization Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Data Quality Optimization Recommendations</CardTitle>
              <p className="text-sm text-gray-600">Strategic improvements for enhanced data quality</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Automated Duplicate Detection</h4>
                    <p className="text-sm text-gray-600">Implement ML-based duplicate detection to reduce manual review by 60%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Source Data Validation</h4>
                    <p className="text-sm text-gray-600">Add real-time validation at Manual Entry points to improve accuracy by 8%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Team Training Enhancement</h4>
                    <p className="text-sm text-gray-600">Focus training on address validation to reduce processing time by 15%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">API Integration Expansion</h4>
                    <p className="text-sm text-gray-600">Increase API-sourced data to 40% for better quality and lower costs</p>
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

export default DQDashboard;
