
import React, { useState } from 'react';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, Gift, ChefHat, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const DispatchDashboard = () => {
  const { toast } = useToast();
  const [weeklyStats, setWeeklyStats] = useState([
    { day: 'Sun', cakes: 5 },
    { day: 'Mon', cakes: 8 },
    { day: 'Tue', cakes: 12 },
    { day: 'Wed', cakes: 6 },
    { day: 'Thu', cakes: 9 },
    { day: 'Fri', cakes: 15 },
    { day: 'Sat', cakes: 7 }
  ]);
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, description: 'New dispatch created for Rajesh Kumar', time: '2 mins ago' },
    { id: 2, description: 'Shipment dispatched via Blue Dart', time: '15 mins ago' },
    { id: 3, description: 'Cultivator Priya Devi approved dispatch', time: '30 mins ago' },
  ]);

  // Birthday dispatch specific data
  const [dailyDispatchData] = useState([
    { area: 'Mumbai', region: 'IMUM', assigned: 5, unassigned: 37 },
    { area: 'Rest of Maharashtra', region: 'ROM', assigned: 0, unassigned: 7 },
    { area: 'Rest Of India', region: 'ROI', assigned: 0, unassigned: 39 }
  ]);

  const [cultivatorData] = useState([
    { name: 'Priya Devi', assigned: 45, pending: 12, approved: 33 },
    { name: 'Sunil Das', assigned: 38, pending: 8, approved: 30 },
    { name: 'Ravi Kumar', assigned: 29, pending: 5, approved: 24 },
    { name: 'Anita Sharma', assigned: 23, pending: 7, approved: 16 }
  ]);

  const [weeklyDispatchData] = useState([
    { date: '19-06-2024', dispatches: 57, videos: 57, assigned: 3, unassigned: 54, total: 57 },
    { date: '20-06-2024', dispatches: 88, videos: 88, assigned: 3, unassigned: 85, total: 88 },
    { date: '21-06-2024', dispatches: 81, videos: 81, assigned: 3, unassigned: 78, total: 81 },
    { date: '22-06-2024', dispatches: 77, videos: 77, assigned: 6, unassigned: 71, total: 77 },
    { date: '23-06-2024', dispatches: 72, videos: 72, assigned: 3, unassigned: 69, total: 72 },
    { date: '24-06-2024', dispatches: 78, videos: 78, assigned: 8, unassigned: 70, total: 78 }
  ]);

  const handleGenerateKitchenReport = () => {
    toast({
      title: "Kitchen Report Generated",
      description: "The kitchen requirements report has been successfully generated.",
    });
    window.location.href = '/birthday/kitchen-report';
  };

  const handleGenerateCultivatorReport = () => {
    toast({
      title: "Cultivator Report Generated", 
      description: "The cultivator assignment and approval report has been successfully generated.",
    });
    window.location.href = '/birthday/cultivator-report';
  };

  const handleBulkDispatch = () => {
    toast({
      title: "Bulk Dispatch Initiated",
      description: "Bulk dispatch process has been started for pending orders.",
    });
  };

  const handleEmergencyDispatch = () => {
    toast({
      title: "Emergency Dispatch Created",
      description: "Emergency dispatch has been prioritized and assigned to fastest courier.",
    });
  };

  const handleExportDaily = () => {
    toast({
      title: "Export Initiated",
      description: "Daily dispatch report is being exported.",
    });
  };

  const grandTotal = weeklyDispatchData.reduce((acc, row) => ({
    dispatches: acc.dispatches + row.dispatches,
    videos: acc.videos + row.videos,
    assigned: acc.assigned + row.assigned,
    unassigned: acc.unassigned + row.unassigned,
    total: acc.total + row.total
  }), { dispatches: 0, videos: 0, assigned: 0, unassigned: 0, total: 0 });

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Dispatches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">356</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-green-500">+20%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Average Delivery Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">3.2 days</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-red-500">-5%</span> slower than expected
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">24</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-orange-500">+8</span> new pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Delivery Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <p className="text-sm text-gray-500 mt-1">
              <span className="text-green-500">+0.3%</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Birthday Dispatch Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Eligible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">245</div>
            <p className="text-sm text-gray-500 mt-1">Donors eligible for dispatch</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Dispatch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">89</div>
            <p className="text-sm text-gray-500 mt-1">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Dispatched</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">156</div>
            <p className="text-sm text-gray-500 mt-1">Successfully sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Missed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-sm text-gray-500 mt-1">Missed deadlines</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Resends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">8</div>
            <p className="text-sm text-gray-500 mt-1">RTO/Redelivery</p>
          </CardContent>
        </Card>
      </div>

      {/* Lead Time Distribution Cards */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Time Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">IMUM</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">4 days</div>
              <div className="text-lg font-semibold text-gray-800">45</div>
              <p className="text-sm text-gray-500 mt-1">18% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">ROM</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">5 days</div>
              <div className="text-lg font-semibold text-gray-800">67</div>
              <p className="text-sm text-gray-500 mt-1">27% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">ROI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">7 days</div>
              <div className="text-lg font-semibold text-gray-800">123</div>
              <p className="text-sm text-gray-500 mt-1">50% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">NE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">10 days</div>
              <div className="text-lg font-semibold text-gray-800">10</div>
              <p className="text-sm text-gray-500 mt-1">4% of total</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Dispatch Overview</CardTitle>
            <CardDescription>A summary of dispatch activities this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cakes" fill="#b33324" name="Cakes Dispatched" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Cultivators</CardTitle>
            <CardDescription>Cultivators with the highest approval rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-none space-y-3">
              <li className="flex items-center justify-between">
                <span>Priya Devi</span>
                <span className="font-medium text-green-600">95%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunil Das</span>
                <span className="font-medium text-green-600">92%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Ravi Kumar</span>
                <span className="font-medium text-green-600">90%</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Daily Dispatch Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daily Dispatch - 24-06-2024</CardTitle>
              <CardDescription>
                88 - Total Birthdays | 88 - Dispatches Done
              </CardDescription>
            </div>
            <Button onClick={handleExportDaily} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
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
              {dailyDispatchData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.area}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{row.region}</Badge>
                  </TableCell>
                  <TableCell>{row.assigned}</TableCell>
                  <TableCell>{row.unassigned}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Cultivator Performance Section */}
      <Card>
        <CardHeader>
          <CardTitle>Cultivator Performance</CardTitle>
          <CardDescription>Performance metrics for all cultivators</CardDescription>
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
              {cultivatorData.map((cultivator, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{cultivator.name}</TableCell>
                  <TableCell>{cultivator.assigned}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{cultivator.pending}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      {cultivator.approved}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Weekly Dispatch Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Dispatch Dashboard</CardTitle>
          <CardDescription>Comprehensive weekly dispatch statistics</CardDescription>
        </CardHeader>
        <CardContent>
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
              {weeklyDispatchData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.date}</TableCell>
                  <TableCell>{row.dispatches}</TableCell>
                  <TableCell>{row.videos}</TableCell>
                  <TableCell>{row.assigned}</TableCell>
                  <TableCell>{row.unassigned}</TableCell>
                  <TableCell className="font-semibold">{row.total}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-50 font-semibold">
                <TableCell>Grand Total</TableCell>
                <TableCell>{grandTotal.dispatches}</TableCell>
                <TableCell>{grandTotal.videos}</TableCell>
                <TableCell>{grandTotal.assigned}</TableCell>
                <TableCell>{grandTotal.unassigned}</TableCell>
                <TableCell>{grandTotal.total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Package className="w-8 h-8 text-[#b33324]" />
                  <div>
                    <h3 className="font-medium">Bulk Dispatch</h3>
                    <p className="text-sm text-gray-600">Process multiple orders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Bulk Dispatch</AlertDialogTitle>
              <AlertDialogDescription>
                This will initiate bulk dispatch for all pending orders. Are you sure you want to proceed?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleBulkDispatch} className="bg-[#b33324] hover:bg-[#b33324]/90">
                Proceed
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Bell className="w-8 h-8 text-red-500" />
                  <div>
                    <h3 className="font-medium">Emergency Dispatch</h3>
                    <p className="text-sm text-gray-600">Urgent priority orders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Create Emergency Dispatch</AlertDialogTitle>
              <AlertDialogDescription>
                This will create an emergency dispatch with highest priority. This action will override normal queue processing.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleEmergencyDispatch} className="bg-red-600 hover:bg-red-700">
                Create Emergency Dispatch
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="font-medium">Schedule Dispatch</h3>
                <p className="text-sm text-gray-600">Plan future deliveries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-gray-500" />
              <div>
                <h3 className="font-medium">Settings</h3>
                <p className="text-sm text-gray-600">Configure dispatch rules</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChefHat className="w-5 h-5 mr-2" />
              Kitchen Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate detailed kitchen requirements report for cake preparation
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-[#b33324] hover:bg-[#b33324]/90">
                  Generate Kitchen Report
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Generate Kitchen Report</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will generate a comprehensive kitchen requirements report including ingredient lists, preparation schedules, and resource allocation.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleGenerateKitchenReport} className="bg-[#b33324] hover:bg-[#b33324]/90">
                    Generate Report
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Cultivator Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate cultivator assignment and approval report
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full bg-[#b33324] hover:bg-[#b33324]/90">
                  Generate Cultivator Report
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Generate Cultivator Report</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will generate a detailed report on cultivator assignments, approval rates, and performance metrics.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleGenerateCultivatorReport} className="bg-[#b33324] hover:bg-[#b33324]/90">
                    Generate Report
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities in the dispatch module</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-none space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-[#b33324] rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Weekly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Statistics</CardTitle>
          <CardDescription>Key metrics for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600">New Dispatches</p>
              <div className="text-xl font-bold text-blue-600">68</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Approved Dispatches</p>
              <div className="text-xl font-bold text-green-600">55</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Dispatches</p>
              <div className="text-xl font-bold text-yellow-600">13</div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average Dispatch Time</p>
              <div className="text-xl font-bold text-purple-600">2.8 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DispatchDashboard;
