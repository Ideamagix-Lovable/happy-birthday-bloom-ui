
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Crown } from 'lucide-react';

const TopDonorsManagement = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-l-4 border-yellow-600 pb-3">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Crown className="h-4 w-4 text-yellow-600" />
          Top 10 Donors
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-medium text-xs">Legal Name</TableHead>
                <TableHead className="font-medium text-xs">Cultivator</TableHead>
                <TableHead className="font-medium text-xs">New/Repeat</TableHead>
                <TableHead className="font-medium text-xs">Donation Received 27th June 2025</TableHead>
                <TableHead className="font-medium text-xs">Donations in FY 25-26</TableHead>
                <TableHead className="font-medium text-xs">Donations in FY 24-25</TableHead>
                <TableHead className="font-medium text-xs">Donations in FY 23-24</TableHead>
                <TableHead className="font-medium text-xs">Change Over Previous</TableHead>
                <TableHead className="font-medium text-xs">Count of Donation</TableHead>
                <TableHead className="font-medium text-xs">City</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={10} className="text-center py-6 text-gray-500 text-sm">
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
