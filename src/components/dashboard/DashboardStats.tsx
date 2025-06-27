
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, TrendingDown, Users, Package, Phone, Gift, MapPin, DollarSign, Star, Clock, Target } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DashboardStats = () => {
  const [activeFilter, setActiveFilter] = useState('daily');

  // Mock data - replace with real API calls
  const dailyTrendsData = [
    { date: '01 Jun', amount: 45000, count: 12 },
    { date: '02 Jun', amount: 52000, count: 15 },
    { date: '03 Jun', amount: 48000, count: 11 },
    { date: '04 Jun', amount: 61000, count: 18 },
    { date: '05 Jun', amount: 55000, count: 14 },
    { date: '06 Jun', amount: 67000, count: 19 },
    { date: '07 Jun', amount: 72000, count: 22 }
  ];

  const topDonorsData = [
    { name: 'Rajesh Kumar', cultivator: 'Priya Devi', type: 'New', today: 15000, fy2526: 45000, fy2425: 32000, fy2324: 28000, change: 14.3, count: 5, city: 'Mumbai' },
    { name: 'Anita Sharma', cultivator: 'Sunil Das', type: 'Repeat', today: 12000, fy2526: 38000, fy2425: 29000, fy2324: 25000, change: 16.0, count: 8, city: 'Delhi' },
    { name: 'Vikram Singh', cultivator: 'Ravi Kumar', type: 'Repeat', today: 10000, fy2526: 35000, fy2425: 31000, fy2324: 27000, change: 14.8, count: 6, city: 'Bangalore' }
  ];

  const schemeData = [
    { scheme: 'Annadaan', amount: 125000, count: 45 },
    { scheme: 'Akshaya Tritiya', amount: 98000, count: 38 },
    { scheme: 'Ram Navami', amount: 85000, count: 32 },
    { scheme: 'Birthday Special', amount: 72000, count: 28 },
    { scheme: 'General Donation', amount: 65000, count: 25 }
  ];

  const rangeWiseData = [
    { range: 'HV', value: '10k and above', assigned: { amount: 285000, count: 28 }, unassigned: { amount: 145000, count: 14 } },
    { range: 'MV', value: '3k to 9999', assigned: { amount: 185000, count: 35 }, unassigned: { amount: 92000, count: 18 } },
    { range: 'LV', value: '1500 to 2999', assigned: { amount: 125000, count: 58 }, unassigned: { amount: 68000, count: 32 } },
    { range: 'AT', value: '300 to 1499', assigned: { amount: 85000, count: 125 }, unassigned: { amount: 45000, count: 68 } },
    { range: 'BT', value: 'below 300', assigned: { amount: 32000, count: 185 }, unassigned: { amount: 18000, count: 95 } }
  ];

  const sourceData = [
    { source: 'Razorpay', amount: 425000, percentage: 42.5 },
    { source: 'Cash', amount: 185000, percentage: 18.5 },
    { source: 'NEFT', amount: 145000, percentage: 14.5 },
    { source: 'Online', amount: 125000, percentage: 12.5 },
    { source: 'Cheque', amount: 85000, percentage: 8.5 },
    { source: 'Transfer', amount: 35000, percentage: 3.5 }
  ];

  const locationData = [
    { location: 'Mumbai', count: 125, amount: 285000 },
    { location: 'Delhi', count: 98, amount: 245000 },
    { location: 'Bangalore', count: 85, amount: 195000 },
    { location: 'Pune', count: 72, amount: 165000 },
    { location: 'Chennai', count: 65, amount: 145000 }
  ];

  const chartConfig = {
    amount: { label: 'Amount', color: '#b33324' },
    count: { label: 'Count', color: '#059669' }
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Dashboard Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="custom">Custom Range</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Total Donation Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Donation (DMS)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">₹8,45,000</div>
            <p className="text-sm text-gray-500">Donation Count: 285</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Donation (Accounts)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹8,42,500</div>
            <p className="text-sm text-gray-500">Variance: ₹2,500</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">New Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-blue-600">125</div>
            <div className="text-lg font-semibold text-blue-800">₹3,45,000</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Repeated Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-purple-600">160</div>
            <div className="text-lg font-semibold text-purple-800">₹5,00,000</div>
          </CardContent>
        </Card>
      </div>

      {/* Birthday & Anniversary Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Birthday Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Count:</span>
                <span className="font-semibold">85</span>
              </div>
              <div className="flex justify-between">
                <span>Amount:</span>
                <span className="font-semibold">₹1,85,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Anniversary Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Count:</span>
                <span className="font-semibold">62</span>
              </div>
              <div className="flex justify-between">
                <span>Amount:</span>
                <span className="font-semibold">₹1,35,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Trends - Last 30 Days</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            <LineChart data={dailyTrendsData}>
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="amount" stroke="var(--color-amount)" strokeWidth={2} name="Amount" />
              <Line type="monotone" dataKey="count" stroke="var(--color-count)" strokeWidth={2} name="Count" />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Top 10 Donors */}
      <Card>
        <CardHeader>
          <CardTitle>Top 10 Donors</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Legal Name</TableHead>
                <TableHead>Cultivator</TableHead>
                <TableHead>New/Repeat</TableHead>
                <TableHead>Today</TableHead>
                <TableHead>FY2526</TableHead>
                <TableHead>FY2425</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>City</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topDonorsData.map((donor, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>{donor.cultivator}</TableCell>
                  <TableCell>
                    <Badge variant={donor.type === 'New' ? 'default' : 'secondary'}>
                      {donor.type}
                    </Badge>
                  </TableCell>
                  <TableCell>₹{donor.today.toLocaleString()}</TableCell>
                  <TableCell>₹{donor.fy2526.toLocaleString()}</TableCell>
                  <TableCell>₹{donor.fy2425.toLocaleString()}</TableCell>
                  <TableCell className="text-green-600">+{donor.change}%</TableCell>
                  <TableCell>{donor.count}</TableCell>
                  <TableCell>{donor.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dispatch Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Dispatches Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">125</div>
            <p className="text-sm text-gray-500">Pending: 45</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Address Available</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">285</div>
            <div className="text-sm text-red-500">Not Available: 25</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Phone Available</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">295</div>
            <div className="text-sm text-red-500">Not Available: 15</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Birthday Dispatches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-purple-600">125</div>
            <div className="text-sm text-gray-600">MH: 80 | Outside: 45</div>
          </CardContent>
        </Card>
      </div>

      {/* Cake Dispatches & Pooja */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Cake Dispatches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Done Today:</span>
                <span className="font-semibold text-green-600">155</span>
              </div>
              <div className="flex justify-between">
                <span>Pending Overall:</span>
                <span className="font-semibold text-yellow-600">15</span>
              </div>
              <div className="flex justify-between">
                <span>Address Not Available:</span>
                <span className="font-semibold text-red-600">43</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pooja & Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Online Puja Done:</span>
                <span className="font-semibold">48</span>
              </div>
              <div className="flex justify-between">
                <span>Birthday Videos:</span>
                <span className="font-semibold">41</span>
              </div>
              <div className="flex justify-between">
                <span>Anniversary Videos:</span>
                <span className="font-semibold">26</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calls Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Call Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">Total Calls</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Today:</span>
                  <span className="font-semibold">1,200</span>
                </div>
                <div className="flex justify-between">
                  <span>This Month:</span>
                  <span className="font-semibold">28,500</span>
                </div>
                <div className="flex justify-between">
                  <span>This Year:</span>
                  <span className="font-semibold">2,85,000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Calls Done</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Today:</span>
                  <span className="font-semibold text-green-600">850</span>
                </div>
                <div className="flex justify-between">
                  <span>This Month:</span>
                  <span className="font-semibold text-green-600">18,500</span>
                </div>
                <div className="flex justify-between">
                  <span>This Year:</span>
                  <span className="font-semibold text-green-600">1,95,000</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Calls Pending</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Today:</span>
                  <span className="font-semibold text-yellow-600">350</span>
                </div>
                <div className="flex justify-between">
                  <span>This Month:</span>
                  <span className="font-semibold text-yellow-600">10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>This Year:</span>
                  <span className="font-semibold text-yellow-600">90,000</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thank You Calls & Response */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Thank You Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Address Collected:</span>
                <span className="font-semibold">1,200</span>
              </div>
              <div className="flex justify-between">
                <span>Calls Done:</span>
                <span className="font-semibold text-green-600">950</span>
              </div>
              <div className="flex justify-between">
                <span>DOB & DOA Collected:</span>
                <span className="font-semibold">850</span>
              </div>
              <div className="flex justify-between">
                <span>Calls Pending:</span>
                <span className="font-semibold text-yellow-600">250</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Excellent:
                </span>
                <span className="font-semibold">80</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Good:
                </span>
                <span className="font-semibold">50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  Neutral:
                </span>
                <span className="font-semibold">30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Bad:
                </span>
                <span className="font-semibold">10</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top 5 Schemes */}
      <Card>
        <CardHeader>
          <CardTitle>Top 5 Schemes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scheme Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Donation Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schemeData.map((scheme, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{scheme.scheme}</TableCell>
                  <TableCell>₹{scheme.amount.toLocaleString()}</TableCell>
                  <TableCell>{scheme.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Range wise donations */}
      <Card>
        <CardHeader>
          <CardTitle>Range wise Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Range Value</TableHead>
                <TableHead colSpan={2} className="text-center">Assigned</TableHead>
                <TableHead colSpan={2} className="text-center">Unassigned</TableHead>
              </TableRow>
              <TableRow>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rangeWiseData.map((range, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{range.range}</TableCell>
                  <TableCell>{range.value}</TableCell>
                  <TableCell>₹{range.assigned.amount.toLocaleString()}</TableCell>
                  <TableCell>{range.assigned.count}</TableCell>
                  <TableCell>₹{range.unassigned.amount.toLocaleString()}</TableCell>
                  <TableCell>{range.unassigned.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Source of Donation */}
      <Card>
        <CardHeader>
          <CardTitle>Source of Donation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sourceData.map((source, index) => (
              <div key={index} className="text-center p-3 border rounded-lg">
                <div className="font-medium">{source.source}</div>
                <div className="text-sm text-gray-600">({source.percentage}%)</div>
                <div className="font-semibold text-[#b33324]">₹{source.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Locations */}
      <Card>
        <CardHeader>
          <CardTitle>Top Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {locationData.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{location.location}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹{location.amount.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{location.count} donations</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
