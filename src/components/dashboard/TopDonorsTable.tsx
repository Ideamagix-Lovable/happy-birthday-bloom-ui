
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Crown, TrendingUp, TrendingDown } from 'lucide-react';

const TopDonorsTable = () => {
  const topDonors = [
    {
      name: 'Sample Donor 1',
      cultivator: 'Yes',
      type: 'Repeat',
      todayAmount: 5000,
      fy2526: 25000,
      fy2425: 20000,
      fy2324: 18000,
      change: '+11%',
      count: 5,
      city: 'Mumbai'
    },
    {
      name: 'Sample Donor 2',
      cultivator: 'No',
      type: 'New',
      todayAmount: 3000,
      fy2526: 3000,
      fy2425: 0,
      fy2324: 0,
      change: 'New',
      count: 1,
      city: 'Pune'
    }
  ];

  return (
    <Card className="mb-8">
      <CardHeader className="border-l-4 border-red-600">
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
                <TableHead className="font-semibold">Today's Donation</TableHead>
                <TableHead className="font-semibold">FY 25-26</TableHead>
                <TableHead className="font-semibold">FY 24-25</TableHead>
                <TableHead className="font-semibold">FY 23-24</TableHead>
                <TableHead className="font-semibold">Change</TableHead>
                <TableHead className="font-semibold">Count</TableHead>
                <TableHead className="font-semibold">City</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topDonors.map((donor, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{donor.name}</TableCell>
                  <TableCell>
                    <Badge variant={donor.cultivator === 'Yes' ? 'default' : 'secondary'}>
                      {donor.cultivator}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={donor.type === 'New' ? 'outline' : 'secondary'}>
                      {donor.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">₹{donor.todayAmount.toLocaleString()}</TableCell>
                  <TableCell>₹{donor.fy2526.toLocaleString()}</TableCell>
                  <TableCell>₹{donor.fy2425.toLocaleString()}</TableCell>
                  <TableCell>₹{donor.fy2324.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {donor.change !== 'New' && donor.change.includes('+') && (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      )}
                      {donor.change !== 'New' && donor.change.includes('-') && (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`text-sm ${
                        donor.change === 'New' ? 'text-blue-600' :
                        donor.change.includes('+') ? 'text-green-600' :
                        donor.change.includes('-') ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {donor.change}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{donor.count}</TableCell>
                  <TableCell>{donor.city}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-50 font-semibold">
                <TableCell>Grand Total</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
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
  );
};

export default TopDonorsTable;
