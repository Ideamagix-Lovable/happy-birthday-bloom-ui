
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Crown } from 'lucide-react';

const TopDonorsManagement = () => {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-yellow-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Crown className="h-5 w-5 text-yellow-600" />
          Top 10 Donors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Legal Name</TableHead>
                <TableHead className="font-semibold">Cultivator</TableHead>
                <TableHead className="font-semibold">New/Repeat</TableHead>
                <TableHead className="font-semibold">Donation Received 27th June 2025</TableHead>
                <TableHead className="font-semibold">Donations in FY 25-26</TableHead>
                <TableHead className="font-semibold">Donations in FY 24-25</TableHead>
                <TableHead className="font-semibold">Donations in FY 23-24</TableHead>
                <TableHead className="font-semibold">Change Over Previous</TableHead>
                <TableHead className="font-semibold">Count of Donation</TableHead>
                <TableHead className="font-semibold">City</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={10} className="text-center py-8 text-gray-500">
                  No data available
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDonorsManagement;
