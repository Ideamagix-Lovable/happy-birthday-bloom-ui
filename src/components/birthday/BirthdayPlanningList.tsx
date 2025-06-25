import React, { useState } from 'react';
import { Search, Filter, Download, Check, X, Eye, Calendar, MapPin, Phone, User, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

const BirthdayPlanningList = () => {
  const [dateRange, setDateRange] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const mockData = [
    {
      icsId: 'ICS001',
      dmsId: 'DMS001',
      name: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      dob: '1985-06-28',
      address: '123 MG Road, Andheri West, Mumbai, Maharashtra, 400001',
      communicationPref: 'WhatsApp',
      familyDonation: 85000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 3,
      firstDonation: '2020-01-15',
      lastDonation: '2024-05-20',
      zoomPooja: 'Yes',
      wishesVideo: 'Pending'
    },
    {
      icsId: 'ICS002',
      dmsId: 'DMS002',
      name: 'Priya Patel',
      phone: '+91-9876543211',
      dob: '1992-07-15',
      address: '456 Linking Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'Email',
      familyDonation: 45000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Pending',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 1,
      firstDonation: '2021-03-10',
      lastDonation: '2024-06-01',
      zoomPooja: 'No',
      wishesVideo: 'Completed'
    },
    {
      icsId: 'ICS003',
      dmsId: 'DMS003',
      name: 'Amit Singh',
      phone: '+91-9876543212',
      dob: '1978-08-01',
      address: '789 Marine Drive, Churchgate, Mumbai, Maharashtra, 400020',
      communicationPref: 'Call',
      familyDonation: 120000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 5,
      firstDonation: '2019-11-22',
      lastDonation: '2024-04-15',
      zoomPooja: 'Yes',
      wishesVideo: 'Pending'
    },
    {
      icsId: 'ICS004',
      dmsId: 'DMS004',
      name: 'Sneha Desai',
      phone: '+91-9876543213',
      dob: '1995-09-10',
      address: '321 Juhu Tara Road, Juhu, Mumbai, Maharashtra, 400049',
      communicationPref: 'WhatsApp',
      familyDonation: 60000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 2,
      firstDonation: '2022-05-01',
      lastDonation: '2024-05-25',
      zoomPooja: 'No',
      wishesVideo: 'Completed'
    },
    {
      icsId: 'ICS005',
      dmsId: 'DMS005',
      name: 'Vikram Khanna',
      phone: '+91-9876543214',
      dob: '1982-10-18',
      address: '555 Linking Road, Khar West, Mumbai, Maharashtra, 400052',
      communicationPref: 'Email',
      familyDonation: 95000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 4,
      firstDonation: '2020-09-18',
      lastDonation: '2024-06-10',
      zoomPooja: 'Yes',
      wishesVideo: 'Pending'
    },
    {
      icsId: 'ICS006',
      dmsId: 'DMS006',
      name: 'Divya Iyer',
      phone: '+91-9876543215',
      dob: '1990-11-25',
      address: '666 SV Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'Call',
      familyDonation: 50000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Pending',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 0,
      firstDonation: '2023-01-01',
      lastDonation: '2024-06-15',
      zoomPooja: 'No',
      wishesVideo: 'Completed'
    },
    {
      icsId: 'ICS007',
      dmsId: 'DMS007',
      name: 'Rohan Mehra',
      phone: '+91-9876543216',
      dob: '1988-12-02',
      address: '777 Carter Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'WhatsApp',
      familyDonation: 75000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 3,
      firstDonation: '2021-07-04',
      lastDonation: '2024-05-30',
      zoomPooja: 'Yes',
      wishesVideo: 'Pending'
    },
    {
      icsId: 'ICS008',
      dmsId: 'DMS008',
      name: 'Anjali Verma',
      phone: '+91-9876543217',
      dob: '1993-01-08',
      address: '888 Hill Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'Email',
      familyDonation: 55000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 1,
      firstDonation: '2022-11-11',
      lastDonation: '2024-06-20',
      zoomPooja: 'No',
      wishesVideo: 'Completed'
    },
    {
      icsId: 'ICS009',
      dmsId: 'DMS009',
      name: 'Kunal Kapoor',
      phone: '+91-9876543218',
      dob: '1980-02-14',
      address: '999 Turner Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'Call',
      familyDonation: 110000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 6,
      firstDonation: '2018-05-05',
      lastDonation: '2024-04-25',
      zoomPooja: 'Yes',
      wishesVideo: 'Pending'
    },
    {
      icsId: 'ICS010',
      dmsId: 'DMS010',
      name: 'Shweta Reddy',
      phone: '+91-9876543219',
      dob: '1991-03-22',
      address: '1010 Perry Cross Road, Bandra West, Mumbai, Maharashtra, 400050',
      communicationPref: 'WhatsApp',
      familyDonation: 65000,
      leadTimeCategory: 'IMUM',
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Pending',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 2,
      firstDonation: '2023-03-15',
      lastDonation: '2024-06-25',
      zoomPooja: 'No',
      wishesVideo: 'Completed'
    }
  ];

  const handleApprove = (item: any) => {
    toast({
      title: "Dispatch Approved",
      description: `${item.name} has been approved for birthday cake dispatch.`,
    });
  };

  const handleReject = (item: any) => {
    toast({
      title: "Dispatch Rejected", 
      description: `${item.name} has been rejected for birthday cake dispatch.`,
      variant: "destructive"
    });
  };

  const handleBulkApprove = () => {
    toast({
      title: "Bulk Approval Completed",
      description: "Selected items have been approved for dispatch.",
    });
  };

  const filteredData = mockData.filter(item => {
    const searchTermMatch = searchTerm
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dmsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone.includes(searchTerm)
      : true;

    const cityMatch = cityFilter ? item.address.toLowerCase().includes(cityFilter.toLowerCase()) : true;
    const statusMatch = statusFilter ? item.dispatchStatus === statusFilter : true;

    return searchTermMatch && cityMatch && statusMatch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Birthday Dispatch Planning Report</h1>
          <p className="text-gray-600">Manage upcoming birthday dispatches and eligibility</p>
        </div>
        <div className="flex items-center space-x-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                <Check className="w-4 h-4 mr-2" />
                Bulk Approve
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Bulk Approval</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to approve all selected items for birthday cake dispatch? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleBulkApprove} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Approve All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              type="text"
              placeholder="Search by Name, ICS ID, DMS ID, Phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Cities</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                <SelectItem value="Eligible">Eligible</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              placeholder="Select Date Range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Birthday Planning List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <input type="checkbox" />
                  </TableHead>
                  <TableHead>ICS/DMS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Birthday</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Lead Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.slice(0, 10).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">ICS: {item.icsId}</div>
                        <div className="text-sm text-gray-600">DMS: {item.dmsId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {item.phone}
                        </div>
                        <div className="text-xs text-gray-500">
                          Donation: ₹{item.familyDonation.toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{new Date(item.dob).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-500">
                          {Math.ceil((new Date(item.dob).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm max-w-48 truncate" title={item.address}>
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {item.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.leadTimeCategory}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge className={
                          item.dispatchStatus === 'Eligible' ? 'bg-green-100 text-green-800' :
                          item.dispatchStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {item.dispatchStatus}
                        </Badge>
                        <div className="text-xs text-gray-500">{item.cultivatorStatus}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-800">
                              <Check className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Approve Dispatch</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to approve {item.name} for birthday cake dispatch?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleApprove(item)} className="bg-green-600 hover:bg-green-700">
                                Approve
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                              <X className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Reject Dispatch</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to reject {item.name} for birthday cake dispatch? Please provide a reason.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleReject(item)} className="bg-red-600 hover:bg-red-700">
                                Reject
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
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

export default BirthdayPlanningList;
