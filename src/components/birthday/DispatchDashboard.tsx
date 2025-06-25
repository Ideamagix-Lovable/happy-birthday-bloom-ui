
import React from 'react';
import { Calendar, Package, Users, TrendingUp, AlertTriangle, CheckCircle, Clock, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DispatchDashboard = () => {
  const kpiData = {
    totalEligible: 245,
    pendingDispatch: 89,
    dispatched: 156,
    missed: 12,
    resends: 8
  };

  const dailyData = {
    date: '24-06-2024',
    totalBirthdays: 88,
    dispatched: 88,
    areas: [
      { area: 'Mumbai', region: 'IMUM', assigned: 5, unassigned: 37 },
      { area: 'Rest of Maharashtra', region: 'ROM', assigned: 0, unassigned: 7 },
      { area: 'Rest Of India', region: 'ROI', assigned: 0, unassigned: 39 }
    ]
  };

  const weeklyData = [
    { date: '19-06-2024', dispatched: 57, videosSent: 57, assigned: 3, unassigned: 54 },
    { date: '20-06-2024', dispatched: 88, videosSent: 88, assigned: 3, unassigned: 85 },
    { date: '21-06-2024', dispatched: 81, videosSent: 81, assigned: 3, unassigned: 78 },
    { date: '22-06-2024', dispatched: 77, videosSent: 77, assigned: 6, unassigned: 71 },
    { date: '23-06-2024', dispatched: 72, videosSent: 72, assigned: 3, unassigned: 69 },
    { date: '24-06-2024', dispatched: 78, videosSent: 78, assigned: 8, unassigned: 70 }
  ];

  const leadTimeBuckets = [
    { category: 'IMUM', days: 4, count: 45, percentage: 18 },
    { category: 'ROM', days: 5, count: 67, percentage: 27 },
    { category: 'ROI', days: 7, count: 123, percentage: 50 },
    { category: 'NE', days: 10, count: 10, percentage: 4 }
  ];

  const cultivatorAssignments = [
    { cultivator: 'Priya Devi', assigned: 45, pending: 12, approved: 33 },
    { cultivator: 'Sunil Das', assigned: 38, pending: 8, approved: 30 },
    { cultivator: 'Ravi Kumar', assigned: 29, pending: 5, approved: 24 },
    { cultivator: 'Anita Sharma', assigned: 23, pending: 7, approved: 16 }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Total Eligible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{kpiData.totalEligible}</div>
            <p className="text-xs text-gray-500">Donors eligible for dispatch</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Pending Dispatch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{kpiData.pendingDispatch}</div>
            <p className="text-xs text-gray-500">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Dispatched
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{kpiData.dispatched}</div>
            <p className="text-xs text-gray-500">Successfully sent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Missed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{kpiData.missed}</div>
            <p className="text-xs text-gray-500">Missed deadlines</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              Resends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{kpiData.resends}</div>
            <p className="text-xs text-gray-500">RTO/Redelivery</p>
          </CardContent>
        </Card>
      </div>

      {/* Lead Time Buckets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Lead Time Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {leadTimeBuckets.map((bucket) => (
              <div key={bucket.category} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{bucket.category}</Badge>
                  <span className="text-sm text-gray-500">{bucket.days} days</span>
                </div>
                <div className="text-2xl font-bold text-[#b33324]">{bucket.count}</div>
                <div className="text-sm text-gray-500">{bucket.percentage}% of total</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-[#b33324] h-2 rounded-full" 
                    style={{ width: `${bucket.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Dashboard */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Daily Dispatch - {dailyData.date}
            </CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-[#b33324]">{dailyData.totalBirthdays}</div>
                <div className="text-sm text-gray-600">Total Birthdays</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">{dailyData.dispatched}</div>
                <div className="text-sm text-gray-600">Dispatches Done</div>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Area</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Unassigned</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dailyData.areas.map((area, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{area.area}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{area.region}</Badge>
                    </TableCell>
                    <TableCell>{area.assigned}</TableCell>
                    <TableCell>{area.unassigned}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Cultivator Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Cultivator Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cultivator</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Pending</TableHead>
                  <TableHead>Approved</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cultivatorAssignments.map((cultivator, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{cultivator.cultivator}</TableCell>
                    <TableCell>{cultivator.assigned}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{cultivator.pending}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">{cultivator.approved}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Dashboard */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Weekly Dispatch Dashboard
          </CardTitle>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Weekly Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Dispatches Done</TableHead>
                  <TableHead>Videos Sent</TableHead>
                  <TableHead>Assigned</TableHead>
                  <TableHead>Unassigned</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklyData.map((day, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{day.date}</TableCell>
                    <TableCell>{day.dispatched}</TableCell>
                    <TableCell>{day.videosSent}</TableCell>
                    <TableCell>{day.assigned}</TableCell>
                    <TableCell>{day.unassigned}</TableCell>
                    <TableCell className="font-medium">{day.assigned + day.unassigned}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gray-50 font-medium">
                  <TableCell>Grand Total</TableCell>
                  <TableCell>{weeklyData.reduce((sum, day) => sum + day.dispatched, 0)}</TableCell>
                  <TableCell>{weeklyData.reduce((sum, day) => sum + day.videosSent, 0)}</TableCell>
                  <TableCell>{weeklyData.reduce((sum, day) => sum + day.assigned, 0)}</TableCell>
                  <TableCell>{weeklyData.reduce((sum, day) => sum + day.unassigned, 0)}</TableCell>
                  <TableCell>{weeklyData.reduce((sum, day) => sum + day.assigned + day.unassigned, 0)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DispatchDashboard;
