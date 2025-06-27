
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FileText, TrendingUp } from 'lucide-react';

const SchemesAndRanges = () => {
  const rangeData = [
    { type: 'HV', range: '10k and above', assignedAmount: '₹0', assignedCount: 0, unassignedAmount: '₹0', unassignedCount: 0 },
    { type: 'MV', range: '3k to 9999', assignedAmount: '₹0', assignedCount: 0, unassignedAmount: '₹0', unassignedCount: 0 },
    { type: 'LV', range: '1500 to 2999', assignedAmount: '₹0', assignedCount: 0, unassignedAmount: '₹0', unassignedCount: 0 },
    { type: 'AT', range: '300 to 1499', assignedAmount: '₹0', assignedCount: 0, unassignedAmount: '₹0', unassignedCount: 0 },
    { type: 'BT', range: 'below 300', assignedAmount: '₹0', assignedCount: 0, unassignedAmount: '₹0', unassignedCount: 0 }
  ];

  return (
    <div className="mb-8 space-y-6">
      {/* Top 5 Schemes */}
      <Card className="shadow-md">
        <CardHeader className="border-l-4 border-purple-600">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Top 5 Schemes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Scheme Type</TableHead>
                  <TableHead className="font-semibold">Amount</TableHead>
                  <TableHead className="font-semibold">Donation Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-gray-500">
                    No data available
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Range wise donations */}
      <Card className="shadow-md">
        <CardHeader className="border-l-4 border-green-600">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Range wise donations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Range Type</TableHead>
                  <TableHead className="font-semibold">Range Value</TableHead>
                  <TableHead colSpan={2} className="font-semibold text-center">Assigned</TableHead>
                  <TableHead colSpan={2} className="font-semibold text-center">Unassigned</TableHead>
                </TableRow>
                <TableRow className="bg-gray-25">
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                  <TableHead className="font-semibold text-sm">Amount</TableHead>
                  <TableHead className="font-semibold text-sm">Count</TableHead>
                  <TableHead className="font-semibold text-sm">Amount</TableHead>
                  <TableHead className="font-semibold text-sm">Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rangeData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.type}</TableCell>
                    <TableCell>{row.range}</TableCell>
                    <TableCell>{row.assignedAmount}</TableCell>
                    <TableCell>{row.assignedCount}</TableCell>
                    <TableCell>{row.unassignedAmount}</TableCell>
                    <TableCell>{row.unassignedCount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemesAndRanges;
