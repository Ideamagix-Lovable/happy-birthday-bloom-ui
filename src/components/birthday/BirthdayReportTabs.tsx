
import React, { useState } from 'react';
import { Calendar, FileText, Users, BarChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BirthdayReportTabs = () => {
  const [selectedDate, setSelectedDate] = useState('2024-06-24');

  // Mock data for Birthday Report
  const birthdayData = [
    { icsId: 'ICS001', name: 'Rajesh Kumar', dob: '1985-06-24', city: 'Mumbai', status: 'Eligible' },
    { icsId: 'ICS002', name: 'Priya Sharma', dob: '1990-06-24', city: 'Delhi', status: 'Eligible' },
    { icsId: 'ICS003', name: 'Sunil Gupta', dob: '1988-06-24', city: 'Mumbai', status: 'Dispatched' }
  ];

  // Mock data for Dispatch Calculations
  const dispatchData = [
    { icsId: 'ICS001', name: 'Rajesh Kumar', leadTime: 4, category: 'IMUM', dispatchDate: '2024-06-20', status: 'On Time' },
    { icsId: 'ICS002', name: 'Priya Sharma', leadTime: 7, category: 'ROI', dispatchDate: '2024-06-17', status: 'On Time' },
    { icsId: 'ICS003', name: 'Sunil Gupta', leadTime: 4, category: 'IMUM', dispatchDate: '2024-06-20', status: 'Dispatched' }
  ];

  // Mock data for Historical Reports
  const historicalData = [
    { icsId: 'ICS001', name: 'Rajesh Kumar', dispatched: 'Yes', wishes: 'Sent', zoomPooja: 'Attended', date: '2024-06-24' },
    { icsId: 'ICS002', name: 'Priya Sharma', dispatched: 'Yes', wishes: 'Sent', zoomPooja: 'Not Attended', date: '2024-06-24' },
    { icsId: 'ICS003', name: 'Sunil Gupta', dispatched: 'Yes', wishes: 'Pending', zoomPooja: 'Attended', date: '2024-06-24' }
  ];

  // Mock data for Cultivator Report
  const cultivatorData = [
    { cultivator: 'Priya Devi', assigned: 15, approved: 12, pending: 3, recentDonation: 25000, comments: 'Active response' },
    { cultivator: 'Sunil Das', assigned: 12, approved: 10, pending: 2, recentDonation: 18000, comments: 'Good engagement' },
    { cultivator: 'Ravi Kumar', assigned: 8, approved: 6, pending: 2, recentDonation: 12000, comments: 'Needs follow-up' }
  ];

  // Mock data for Monthly Cake Count
  const cakeCountData = [
    { date: '2024-06-01', cakes: 25, duplicates: 0, notes: 'Normal day' },
    { date: '2024-06-02', cakes: 30, duplicates: 2, notes: 'High volume' },
    { date: '2024-06-03', cakes: 18, duplicates: 0, notes: 'Weekend low' },
    { date: '2024-06-04', cakes: 35, duplicates: 1, notes: 'Peak day' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Birthday Dispatch Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="birthdays" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="birthdays">All Birthdays</TabsTrigger>
              <TabsTrigger value="dispatches">Dispatch Calculations</TabsTrigger>
              <TabsTrigger value="historical">Historical Reports</TabsTrigger>
              <TabsTrigger value="cultivator">Cultivator Report</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Cake Count</TabsTrigger>
            </TabsList>

            <TabsContent value="birthdays" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      All Birthdays on Selected Date
                    </CardTitle>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-48"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ICS ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date of Birth</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {birthdayData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.icsId}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{new Date(item.dob).toLocaleDateString()}</TableCell>
                          <TableCell>{item.city}</TableCell>
                          <TableCell>
                            <Badge className={item.status === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                              {item.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dispatches" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="w-5 h-5 mr-2" />
                    Dispatches Calculated via Lead Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ICS ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Lead Time</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Dispatch Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dispatchData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.icsId}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>{item.leadTime} days</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.category}</Badge>
                          </TableCell>
                          <TableCell>{new Date(item.dispatchDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge className={item.status === 'On Time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                              {item.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historical" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Historical Reports (Dispatched + Wishes + Zoom Pooja)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ICS ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Cake Dispatched</TableHead>
                        <TableHead>Wishes Video</TableHead>
                        <TableHead>Zoom Pooja</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historicalData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.icsId}</TableCell>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">{item.dispatched}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={item.wishes === 'Sent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {item.wishes}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={item.zoomPooja === 'Attended' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                              {item.zoomPooja}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cultivator" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Cultivator Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cultivator</TableHead>
                        <TableHead>Assigned</TableHead>
                        <TableHead>Approved</TableHead>
                        <TableHead>Pending</TableHead>
                        <TableHead>Recent Donation</TableHead>
                        <TableHead>Comments</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cultivatorData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.cultivator}</TableCell>
                          <TableCell>{item.assigned}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">{item.approved}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-100 text-yellow-800">{item.pending}</Badge>
                          </TableCell>
                          <TableCell>₹{item.recentDonation.toLocaleString()}</TableCell>
                          <TableCell className="text-sm text-gray-600">{item.comments}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monthly" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="w-5 h-5 mr-2" />
                    Monthly Cake Count - Pivot Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Cakes Sent</TableHead>
                        <TableHead>Duplicates</TableHead>
                        <TableHead>Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cakeCountData.map((item, index) => (
                        <TableRow key={index} className={item.duplicates > 0 ? 'bg-yellow-50' : ''}>
                          <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                          <TableCell className="font-medium">{item.cakes}</TableCell>
                          <TableCell>
                            {item.duplicates > 0 ? (
                              <Badge className="bg-red-100 text-red-800">{item.duplicates}</Badge>
                            ) : (
                              <Badge className="bg-green-100 text-green-800">0</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">{item.notes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthdayReportTabs;
