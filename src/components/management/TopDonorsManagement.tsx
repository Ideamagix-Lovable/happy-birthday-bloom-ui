
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Crown } from 'lucide-react';

const TopDonorsManagement = () => {
  // Dummy data for top donors
  const topDonors = [
    {
      legalName: "Rajesh Kumar Sharma",
      cultivator: "DQ Team Mumbai",
      newRepeat: "Repeat",
      donationToday: "₹5,000",
      donationsFY2526: "₹25,000",
      donationsFY2425: "₹18,000",
      donationsFY2324: "₹12,000",
      changeOverPrevious: "+38.89%",
      donationCount: 8,
      city: "Mumbai"
    },
    {
      legalName: "Priya Mehta",
      cultivator: "DQ Team Delhi",
      newRepeat: "New",
      donationToday: "₹3,500",
      donationsFY2526: "₹15,500",
      donationsFY2425: "₹0",
      donationsFY2324: "₹0",
      changeOverPrevious: "New Donor",
      donationCount: 3,
      city: "Delhi"
    },
    {
      legalName: "Amit Singh Patel",
      cultivator: "DQ Team Pune",
      newRepeat: "Repeat",
      donationToday: "₹0",
      donationsFY2526: "₹22,000",
      donationsFY2425: "₹16,500",
      donationsFY2324: "₹14,000",
      changeOverPrevious: "+33.33%",
      donationCount: 12,
      city: "Pune"
    },
    {
      legalName: "Sunita Agarwal",
      cultivator: "DQ Team Bangalore",
      newRepeat: "Repeat",
      donationToday: "₹2,000",
      donationsFY2526: "₹18,000",
      donationsFY2425: "₹20,000",
      donationsFY2324: "₹15,000",
      changeOverPrevious: "-10.00%",
      donationCount: 15,
      city: "Bangalore"
    },
    {
      legalName: "Vikram Joshi",
      cultivator: "DQ Team Chennai",
      newRepeat: "New",
      donationToday: "₹1,500",
      donationsFY2526: "₹8,500",
      donationsFY2425: "₹0",
      donationsFY2324: "₹0",
      changeOverPrevious: "New Donor",
      donationCount: 4,
      city: "Chennai"
    }
  ];

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
              {topDonors.map((donor, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="text-sm font-medium">{donor.legalName}</TableCell>
                  <TableCell className="text-sm">{donor.cultivator}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={donor.newRepeat === 'New' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {donor.newRepeat}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-green-600">{donor.donationToday}</TableCell>
                  <TableCell className="text-sm font-medium">{donor.donationsFY2526}</TableCell>
                  <TableCell className="text-sm">{donor.donationsFY2425}</TableCell>
                  <TableCell className="text-sm">{donor.donationsFY2324}</TableCell>
                  <TableCell>
                    <span className={`text-sm font-medium ${
                      donor.changeOverPrevious.includes('+') ? 'text-green-600' : 
                      donor.changeOverPrevious.includes('-') ? 'text-red-600' : 
                      'text-blue-600'
                    }`}>
                      {donor.changeOverPrevious}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm font-medium">{donor.donationCount}</TableCell>
                  <TableCell className="text-sm">{donor.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopDonorsManagement;
