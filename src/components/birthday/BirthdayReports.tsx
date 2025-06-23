
import React, { useState } from 'react';
import { Calendar, Download, Filter, FileText, Users, Package, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const BirthdayReports = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('');

  const leadTimes = {
    IMUM: 4,
    ROM: 5,
    ROI: 7
  };

  // Mock comprehensive report data
  const planningReport = [
    {
      date: '2025-01-01',
      icsId: 'ICS001',
      legalName: 'Rajesh Kumar Sharma',
      initiatedName: 'Rajesh Krishna Das',
      dob: '1985-01-01',
      phone: '+91-9876543210',
      email: 'rajesh@email.com',
      address: '123 MG Road, Andheri West',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      pin: '400001',
      category: 'HV',
      status: 'Active',
      commsPref: 'Phone',
      langPref: 'Hindi',
      litLangPref: 'Hindi',
      cultivator: 'Priya Devi',
      isDonor: true,
      totalDonation: 25000,
      numDonations: 15,
      firstDonation: '2020-01-15',
      recentDonation: '2024-05-20',
      leadTime: 4,
      region: 'IMUM',
      cakeCount: 4,
      totalFamilyDonations: 45000,
      cultivatorFinalComment: 'Yes',
      remarks: 'VIP donor',
      fyDonationsPhone: 15000,
      fyDonationsIcs: 25000,
      recentDonationAmount: 2500
    }
  ];

  const dispatchPlan = [
    {
      dispatchDate: '2024-12-28',
      birthdayDate: '2025-01-01',
      icsId: 'ICS001',
      name: 'Rajesh Kumar Sharma',
      region: 'IMUM',
      leadTime: 4,
      city: 'Mumbai',
      pin: '400001',
      cultivator: 'Priya Devi',
      status: 'Scheduled',
      cakeType: 'Chocolate',
      estimatedCost: 350
    }
  ];

  const pastDeliveries = [
    {
      date: '2024-12-15',
      icsId: 'ICS003',
      name: 'Sunil Gupta',
      birthdayDate: '2024-12-15',
      phone: '+91-9876543213',
      giftName: 'Cake',
      qty: 1,
      issueDate: '2024-12-12',
      validFromDate: '2024-12-12',
      validTillDate: '2024-12-16',
      comments: 'Birthday cake delivery',
      status: 'Delivered',
      deliveryChannel: 'Blue Dart',
      deliveryCode: 'BD123456789',
      redemptionDate: '2024-12-15',
      redemptionComments: 'Successfully delivered',
      redemptionStatus: 'DELIVERED',
      cakeDelivered: true,
      videoSent: true,
      zoomPooja: false,
      city: 'Bangalore'
    }
  ];

  const cultivatorReport = [
    {
      icsId: 'ICS001',
      name: 'Rajesh Kumar Sharma',
      day: 'Monday',
      dob: '1985-01-01',
      mobileNo: '+91-9876543210',
      address: '123 MG Road, Andheri West, Mumbai - 400001',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      pincode: '400001',
      cultivator: 'Priya Devi',
      totalDonation: 25000,
      cakeDispatch: 'Yes',
      totalFamilyDonation: 45000,
      cultivatorFinalComment: 'Yes',
      leadTime: 4,
      remarks: 'VIP donor, handle with care',
      fyDonationPhone: 15000,
      fyDonationIcs: 25000,
      commsPref: 'Phone',
      status: 'Confirmed',
      dod: 'Monday',
      recentDonationDate: '2024-05-20',
      recentDonationAmount: 2500
    }
  ];

  const monthlyCakeCount = [
    { icsId: 'ICS001', name: 'Rajesh Kumar', day: 'Monday', count: 1 },
    { icsId: 'ICS002', name: 'Priya Sharma', day: 'Tuesday', count: 1 },
    { icsId: 'ICS003', name: 'Sunil Gupta', day: 'Wednesday', count: 1 }
  ];

  const dashboardData = {
    daily: {
      date: '01-08-2024',
      totalBirthdays: 88,
      dispatched: 88,
      areas: [
        { area: 'Mumbai', region: 'IMUM', assigned: 5, unassigned: 37 },
        { area: 'Rest of Maharashtra', region: 'ROM', assigned: 0, unassigned: 7 },
        { area: 'Rest Of India', region: 'ROI', assigned: 0, unassigned: 39 }
      ]
    },
    weekly: [
      { date: '19-07-2024', dispatched: 57, videosSent: 57, assigned: 3, unassigned: 54 },
      { date: '20-07-2024', dispatched: 88, videosSent: 88, assigned: 3, unassigned: 85 },
      { date: '21-07-2024', dispatched: 81, videosSent: 81, assigned: 3, unassigned: 78 },
      { date: '22-07-2024', dispatched: 77, videosSent: 77, assigned: 6, unassigned: 71 },
      { date: '23-07-2024', dispatched: 72, videosSent: 72, assigned: 3, unassigned: 69 },
      { date: '24-07-2024', dispatched: 78, videosSent: 78, assigned: 8, unassigned: 70 },
      { date: '25-07-2024', dispatched: 92, videosSent: 92, assigned: 3, unassigned: 89 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Report Generation Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Input
              type="date"
              placeholder="From Date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
            <Input
              type="date"
              placeholder="To Date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="IMUM">IMUM (4 days)</SelectItem>
                <SelectItem value="ROM">ROM (5 days)</SelectItem>
                <SelectItem value="ROI">ROI (7 days)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger>
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-12">December 2024</SelectItem>
                <SelectItem value="2025-01">January 2025</SelectItem>
                <SelectItem value="2025-02">February 2025</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Filter className="w-4 h-4 mr-2" />
              Generate Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lead Time Information */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Lead Times & Coverage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-[#b33324]">IMUM</div>
              <div className="text-sm text-gray-600">4 days</div>
              <div className="text-xs text-gray-500">Mumbai Metro</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-[#b33324]">ROM</div>
              <div className="text-sm text-gray-600">5 days</div>
              <div className="text-xs text-gray-500">Rest of Maharashtra</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-[#b33324]">ROI</div>
              <div className="text-sm text-gray-600">7 days</div>
              <div className="text-xs text-gray-500">Rest of India</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Report Tables */}
      <Tabs defaultValue="planning" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="planning">Planning Report</TabsTrigger>
          <TabsTrigger value="dispatch">Dispatch Planning</TabsTrigger>
          <TabsTrigger value="history">Past Deliveries</TabsTrigger>
          <TabsTrigger value="cultivator">Cultivator Report</TabsTrigger>
          <TabsTrigger value="monthly">Monthly Count</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="planning" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Daily Planning Report</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Planning Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Planning Report Criteria</h4>
                <p className="text-sm text-blue-700">
                  Shows eligible data ready for dispatch based on eligibility criteria, lead times, and cultivator confirmations.
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Legal Name</TableHead>
                      <TableHead>Initiated Name</TableHead>
                      <TableHead>DoB</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>PIN</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Cultivator</TableHead>
                      <TableHead>Total Donation</TableHead>
                      <TableHead>Family Donation</TableHead>
                      <TableHead>Lead Time</TableHead>
                      <TableHead>Cake Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {planningReport.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.icsId}</TableCell>
                        <TableCell>{record.legalName}</TableCell>
                        <TableCell>{record.initiatedName || '-'}</TableCell>
                        <TableCell>{new Date(record.dob).toLocaleDateString()}</TableCell>
                        <TableCell>{record.phone}</TableCell>
                        <TableCell>{record.email || '-'}</TableCell>
                        <TableCell className="max-w-32 truncate">{record.address}</TableCell>
                        <TableCell>{record.city}</TableCell>
                        <TableCell>{record.state}</TableCell>
                        <TableCell>{record.pin}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{record.category}</Badge>
                        </TableCell>
                        <TableCell>{record.cultivator}</TableCell>
                        <TableCell>₹{record.totalDonation.toLocaleString()}</TableCell>
                        <TableCell>₹{record.totalFamilyDonations.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{record.leadTime} days</Badge>
                        </TableCell>
                        <TableCell>{record.cakeCount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dispatch" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Dispatch Planning with Lead Times</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Dispatch Plan
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Lead Time Calculation</h4>
                <p className="text-sm text-yellow-700">
                  Dispatches are calculated based on regional lead times. Items shown on each date need to be dispatched to arrive on time for the birthday.
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dispatch Date</TableHead>
                      <TableHead>Birthday Date</TableHead>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Lead Time</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>PIN</TableHead>
                      <TableHead>Cultivator</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dispatchPlan.map((dispatch, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {new Date(dispatch.dispatchDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{new Date(dispatch.birthdayDate).toLocaleDateString()}</TableCell>
                        <TableCell>{dispatch.icsId}</TableCell>
                        <TableCell>{dispatch.name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{dispatch.region}</Badge>
                        </TableCell>
                        <TableCell>{dispatch.leadTime} days</TableCell>
                        <TableCell>{dispatch.city}</TableCell>
                        <TableCell>{dispatch.pin}</TableCell>
                        <TableCell>{dispatch.cultivator}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{dispatch.status}</Badge>
                        </TableCell>
                        <TableCell>₹{dispatch.estimatedCost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Past Birthday Deliveries & ICS Upload Format</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Delivery Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">ICS Upload Format</h4>
                <p className="text-sm text-green-700 mb-2">
                  This report follows the ICS upload format for dispatch and delivery tracking.
                </p>
                <div className="text-xs text-green-600">
                  Dispatch Format: ICSID, Name, PhoneNo, GiftName, Qty, IssueDate, ValidFromDate, ValidTillDate, Comments, Status, DeliveryChannel, DeliveryCode
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Gift Name</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Delivery Channel</TableHead>
                      <TableHead>Delivery Code</TableHead>
                      <TableHead>Redemption Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Video Sent</TableHead>
                      <TableHead>Zoom Pooja</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastDeliveries.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.icsId}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.phone}</TableCell>
                        <TableCell>{record.giftName}</TableCell>
                        <TableCell>{record.qty}</TableCell>
                        <TableCell>{new Date(record.issueDate).toLocaleDateString()}</TableCell>
                        <TableCell>{record.deliveryChannel}</TableCell>
                        <TableCell className="font-mono text-xs">{record.deliveryCode}</TableCell>
                        <TableCell>{new Date(record.redemptionDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={record.redemptionStatus === 'DELIVERED' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {record.redemptionStatus}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={record.videoSent ? 'default' : 'secondary'}>
                            {record.videoSent ? 'Yes' : 'No'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={record.zoomPooja ? 'default' : 'secondary'}>
                            {record.zoomPooja ? 'Yes' : 'No'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cultivator" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Cultivator Report</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Cultivator Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Cultivator Report Details</h4>
                <p className="text-sm text-purple-700">
                  Monthly details processed for family donors with cultivator confirmations and family donations based on mobile number.
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Day</TableHead>
                      <TableHead>DoB</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>City/State</TableHead>
                      <TableHead>PIN</TableHead>
                      <TableHead>Cultivator</TableHead>
                      <TableHead>Total Donation</TableHead>
                      <TableHead>Family Donation</TableHead>
                      <TableHead>Cake Dispatch</TableHead>
                      <TableHead>Cultivator Comment</TableHead>
                      <TableHead>Lead Time</TableHead>
                      <TableHead>Recent Donation</TableHead>
                      <TableHead>FY 24-25 (Phone)</TableHead>
                      <TableHead>FY 24-25 (ICS)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cultivatorReport.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.icsId}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.day}</TableCell>
                        <TableCell>{new Date(record.dob).toLocaleDateString()}</TableCell>
                        <TableCell>{record.mobileNo}</TableCell>
                        <TableCell className="max-w-32 truncate">{record.address}</TableCell>
                        <TableCell>{record.city}, {record.state}</TableCell>
                        <TableCell>{record.pincode}</TableCell>
                        <TableCell>{record.cultivator}</TableCell>
                        <TableCell>₹{record.totalDonation.toLocaleString()}</TableCell>
                        <TableCell>₹{record.totalFamilyDonation.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={record.cakeDispatch === 'Yes' ? 'default' : 'secondary'}>
                            {record.cakeDispatch}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={record.cultivatorFinalComment === 'Yes' ? 'default' : 'secondary'}>
                            {record.cultivatorFinalComment}
                          </Badge>
                        </TableCell>
                        <TableCell>{record.leadTime} days</TableCell>
                        <TableCell>
                          <div className="text-xs space-y-1">
                            <div>{new Date(record.recentDonationDate).toLocaleDateString()}</div>
                            <div>₹{record.recentDonationAmount.toLocaleString()}</div>
                          </div>
                        </TableCell>
                        <TableCell>₹{record.fyDonationPhone.toLocaleString()}</TableCell>
                        <TableCell>₹{record.fyDonationIcs.toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Monthly Cake Count Report</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Monthly Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">Kitchen Department Report</h4>
                <p className="text-sm text-orange-700">
                  PivotTable with filter for ICSID, showing count of birthdays by day for kitchen planning.
                </p>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Day</TableHead>
                      <TableHead>Cake Count</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyCakeCount.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.icsId}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.day}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{record.count}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default">Scheduled</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard" className="mt-6">
          <div className="space-y-6">
            {/* Daily Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Daily Dispatch Dashboard - {dashboardData.daily.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#b33324]">{dashboardData.daily.totalBirthdays}</div>
                    <div className="text-sm text-gray-600">Total Birthdays</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{dashboardData.daily.dispatched}</div>
                    <div className="text-sm text-gray-600">Dispatches Done</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#f3b01b]">
                      {dashboardData.daily.areas.reduce((sum, area) => sum + area.assigned, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Assigned</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">
                      {dashboardData.daily.areas.reduce((sum, area) => sum + area.unassigned, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Unassigned</div>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Area</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Assigned</TableHead>
                      <TableHead>Unassigned</TableHead>
                      <TableHead>Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboardData.daily.areas.map((area, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{area.area}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{area.region}</Badge>
                        </TableCell>
                        <TableCell>{area.assigned}</TableCell>
                        <TableCell>{area.unassigned}</TableCell>
                        <TableCell className="font-medium">{area.assigned + area.unassigned}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Weekly Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Weekly Dispatch Dashboard (19th to 25th July 2024)
                </CardTitle>
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
                      {dashboardData.weekly.map((day, index) => (
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
                        <TableCell>{dashboardData.weekly.reduce((sum, day) => sum + day.dispatched, 0)}</TableCell>
                        <TableCell>{dashboardData.weekly.reduce((sum, day) => sum + day.videosSent, 0)}</TableCell>
                        <TableCell>{dashboardData.weekly.reduce((sum, day) => sum + day.assigned, 0)}</TableCell>
                        <TableCell>{dashboardData.weekly.reduce((sum, day) => sum + day.unassigned, 0)}</TableCell>
                        <TableCell>{dashboardData.weekly.reduce((sum, day) => sum + day.assigned + day.unassigned, 0)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BirthdayReports;
