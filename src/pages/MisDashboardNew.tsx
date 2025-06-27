
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Filter } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MisDashboardNew = () => {
  const [activeFilter, setActiveFilter] = useState('daily');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">MIS Dashboard</h1>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter By Date
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6">
            <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="grid w-fit grid-cols-2">
                <TabsTrigger value="daily" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  Daily
                </TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Donation Summary */}
          <Card className="mb-8">
            <CardHeader className="border-l-4 border-red-600">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Bhiwandi- Donation Summary for Financial Year 2025-26 As of 27th June 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-medium">27th June 2025</th>
                      <th className="text-center p-3 font-medium">As per Accounts</th>
                      <th className="text-center p-3 font-medium">As per DMS</th>
                      <th className="text-center p-3 font-medium">Count Of Donations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Total Donation Received</td>
                      <td className="text-center p-3">₹0</td>
                      <td className="text-center p-3">₹0</td>
                      <td className="text-center p-3">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Top 10 Donors */}
          <Card className="mb-8">
            <CardHeader className="border-l-4 border-red-600">
              <CardTitle className="text-lg font-semibold text-gray-800">Top 10 Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead>Legal Name</TableHead>
                      <TableHead>Cultivator</TableHead>
                      <TableHead>New/Repeat</TableHead>
                      <TableHead>Donation Received 27th June 2025</TableHead>
                      <TableHead>Donations in FY2526</TableHead>
                      <TableHead>Donations in FY2425</TableHead>
                      <TableHead>Donations in FY2324</TableHead>
                      <TableHead>Change Over FY2324</TableHead>
                      <TableHead>Count of Donation</TableHead>
                      <TableHead>City</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Grand Total</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>Repeat</TableCell>
                      <TableCell>₹0</TableCell>
                      <TableCell>₹0</TableCell>
                      <TableCell>₹0</TableCell>
                      <TableCell>₹0</TableCell>
                      <TableCell>₹0</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Donor Summary Table */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-3 font-medium" colSpan={3}>New Donor</th>
                      <th className="text-left p-3 font-medium" colSpan={3}>Repeat Donor</th>
                      <th className="text-left p-3 font-medium" colSpan={3}>Total</th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th className="text-center p-3 font-medium">Donor Count</th>
                      <th className="text-center p-3 font-medium">Donation Count</th>
                      <th className="text-center p-3 font-medium">Donation Amount</th>
                      <th className="text-center p-3 font-medium">Donor Count</th>
                      <th className="text-center p-3 font-medium">Donation Count</th>
                      <th className="text-center p-3 font-medium">Donation Amount</th>
                      <th className="text-center p-3 font-medium">Donor Count</th>
                      <th className="text-center p-3 font-medium">Donation Count</th>
                      <th className="text-center p-3 font-medium">Donation Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="text-center p-3">0</td>
                      <td className="text-center p-3">0</td>
                      <td className="text-center p-3">₹0</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Dispatch Report */}
          <Card className="mb-8">
            <CardHeader className="border-l-4 border-red-600">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Dispatch Report As of 27th June 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead>Description</TableHead>
                      <TableHead>Count (No of Donors with Phone numbers but No Addresses)</TableHead>
                      <TableHead>Total Receipts to be Dispatched (Address Available)</TableHead>
                      <TableHead>Dispatches done</TableHead>
                      <TableHead>Pending</TableHead>
                      <TableHead>Remark</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell className="text-center">1841</TableCell>
                      <TableCell className="text-center">632</TableCell>
                      <TableCell className="text-center">5644</TableCell>
                      <TableCell className="text-center">1996</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Birthday Dispatches */}
          <Card className="mb-8">
            <CardHeader className="border-l-4 border-red-600">
              <CardTitle className="text-lg font-semibold text-gray-800">
                Birthday Dispatches As of 27th June 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead>No of Birthdays</TableHead>
                      <TableHead>Dispatches Done</TableHead>
                      <TableHead>Area</TableHead>
                      <TableHead>Assigned Count</TableHead>
                      <TableHead>Unassigned Count</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>Mumbai</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Rest of Maharashtra</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MisDashboardNew;
