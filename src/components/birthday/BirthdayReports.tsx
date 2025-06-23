
import React, { useState } from 'react';
import { Calendar, Download, Filter, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BirthdayReports = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const leadTimes = {
    IMUM: 4,
    ROM: 5,
    ROI: 7,
    NE: 10
  };

  // Mock data for reports
  const birthdaysByDate = [
    {
      date: '2025-01-01',
      birthdays: [
        { name: 'Rajesh Kumar', region: 'IMUM', dob: '1985-01-01', city: 'Mumbai' },
        { name: 'Priya Sharma', region: 'ROM', dob: '1990-01-01', city: 'Delhi' }
      ]
    }
  ];

  const dispatchPlan = [
    {
      dispatchDate: '2025-01-01',
      dispatches: [
        { name: 'Rajesh Kumar', region: 'IMUM', birthdayDate: '2025-01-05', leadTime: 4, city: 'Mumbai' },
        { name: 'Priya Sharma', region: 'ROM', birthdayDate: '2025-01-06', leadTime: 5, city: 'Delhi' }
      ]
    }
  ];

  const pastBirthdays = [
    {
      name: 'Sunil Gupta',
      birthdayDate: '2024-12-15',
      cakeDelivered: true,
      videoSent: true,
      zoomPooja: false,
      deliveryStatus: 'Delivered',
      city: 'Bangalore'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                <SelectItem value="NE">NE (10 days)</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Filter className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lead Time Information */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Lead Times</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(leadTimes).map(([region, days]) => (
              <div key={region} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-[#b33324]">{region}</div>
                <div className="text-sm text-gray-600">{days} days</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Tables */}
      <Tabs defaultValue="birthdays" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="birthdays">Birthday Schedule</TabsTrigger>
          <TabsTrigger value="dispatch">Dispatch Planning</TabsTrigger>
          <TabsTrigger value="history">Past Deliveries</TabsTrigger>
        </TabsList>

        <TabsContent value="birthdays" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Birthdays by Selected Dates</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Date of Birth</TableHead>
                      <TableHead>Age</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {birthdaysByDate.map((dateGroup) =>
                      dateGroup.birthdays.map((birthday, index) => (
                        <TableRow key={`${dateGroup.date}-${index}`}>
                          <TableCell>{new Date(dateGroup.date).toLocaleDateString()}</TableCell>
                          <TableCell className="font-medium">{birthday.name}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              {birthday.region}
                            </span>
                          </TableCell>
                          <TableCell>{birthday.city}</TableCell>
                          <TableCell>{new Date(birthday.dob).toLocaleDateString()}</TableCell>
                          <TableCell>
                            {new Date().getFullYear() - new Date(birthday.dob).getFullYear()} years
                          </TableCell>
                        </TableRow>
                      ))
                    )}
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
                Export
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
                      <TableHead>Recipient</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Birthday Date</TableHead>
                      <TableHead>Lead Time</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dispatchPlan.map((dateGroup) =>
                      dateGroup.dispatches.map((dispatch, index) => (
                        <TableRow key={`${dateGroup.dispatchDate}-${index}`}>
                          <TableCell className="font-medium">
                            {new Date(dateGroup.dispatchDate).toLocaleDateString()}
                          </TableCell>
                          <TableCell>{dispatch.name}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              {dispatch.region}
                            </span>
                          </TableCell>
                          <TableCell>{new Date(dispatch.birthdayDate).toLocaleDateString()}</TableCell>
                          <TableCell>{dispatch.leadTime} days</TableCell>
                          <TableCell>{dispatch.city}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                              Scheduled
                            </span>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Past Birthday Deliveries</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Birthday Date</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Cake Delivered</TableHead>
                      <TableHead>Video Sent</TableHead>
                      <TableHead>Zoom Pooja</TableHead>
                      <TableHead>Delivery Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastBirthdays.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.name}</TableCell>
                        <TableCell>{new Date(record.birthdayDate).toLocaleDateString()}</TableCell>
                        <TableCell>{record.city}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            record.cakeDelivered 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {record.cakeDelivered ? 'Yes' : 'No'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            record.videoSent 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {record.videoSent ? 'Yes' : 'No'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            record.zoomPooja 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {record.zoomPooja ? 'Yes' : 'No'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {record.deliveryStatus}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BirthdayReports;
