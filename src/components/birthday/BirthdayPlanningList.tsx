
import React, { useState } from 'react';
import { Calendar, Filter, Search, Download, Eye, Edit, Check, X, User, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

const BirthdayPlanningList = () => {
  const [filters, setFilters] = useState({
    dateRange: '',
    city: 'all',
    eligibility: 'all',
    dispatchStatus: 'all',
    cultivatorStatus: 'all',
    searchTerm: ''
  });

  const [selectedRows, setSelectedRows] = useState([]);

  const mockPlanningData = [
    {
      id: 'BD001',
      icsId: 'ICS001',
      dmsId: 'DMS001',
      name: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      dob: '1985-06-28',
      address: '123 MG Road, Andheri West, Mumbai - 400058, Maharashtra, India',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400058',
      communicationPref: 'WhatsApp',
      familyDonation: 25000,
      leadTimeCategory: 'IMUM',
      leadTime: 4,
      dispatchStatus: 'Approved',
      cultivatorStatus: 'Approved',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 2,
      historicalCount: 5,
      firstDonation: '2020-01-15',
      lastDonation: '2024-05-20',
      zoomPooja: 'Yes',
      wishesVideo: 'Sent',
      cultivator: 'Priya Devi',
      highlight: 'green'
    },
    {
      id: 'BD002',
      icsId: 'ICS002',
      dmsId: 'DMS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      dob: '1990-06-25',
      address: '456 CP Street, New Delhi - 110001, Delhi, India',
      city: 'Delhi',
      state: 'Delhi',
      pincode: '110001',
      communicationPref: 'SMS',
      familyDonation: 12000,
      leadTimeCategory: 'ROI',
      leadTime: 7,
      dispatchStatus: 'Pending',
      cultivatorStatus: 'Pending Confirmation',
      eligibilityStatus: 'Eligible',
      cakeDispatchCount: 1,
      historicalCount: 3,
      firstDonation: '2021-03-10',
      lastDonation: '2024-04-15',
      zoomPooja: 'No',
      wishesVideo: 'Pending',
      cultivator: 'Sunil Das',
      highlight: 'yellow'
    },
    {
      id: 'BD003',
      icsId: 'ICS003',
      dmsId: 'DMS003',
      name: 'Sunil Gupta',
      phone: '+91-9876543212',
      dob: '1988-06-24',
      address: '789 Park Street, Mumbai - 400002, Maharashtra, India',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400002',
      communicationPref: 'Email',
      familyDonation: 8000,
      leadTimeCategory: 'IMUM',
      leadTime: 4,
      dispatchStatus: 'Missed',
      cultivatorStatus: 'Do Not Send',
      eligibilityStatus: 'Ineligible',
      cakeDispatchCount: 0,
      historicalCount: 2,
      firstDonation: '2022-01-05',
      lastDonation: '2024-02-10',
      zoomPooja: 'Yes',
      wishesVideo: 'Not Sent',
      cultivator: 'Ravi Kumar',
      highlight: 'red'
    }
  ];

  const getRowHighlight = (highlight) => {
    const colors = {
      'green': 'bg-green-50 hover:bg-green-100 border-l-4 border-l-green-500',
      'yellow': 'bg-yellow-50 hover:bg-yellow-100 border-l-4 border-l-yellow-500',
      'red': 'bg-red-50 hover:bg-red-100 border-l-4 border-l-red-500'
    };
    return colors[highlight] || 'hover:bg-gray-50';
  };

  const getStatusBadge = (status, type) => {
    const statusColors = {
      dispatch: {
        'Approved': 'bg-green-100 text-green-800',
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Dispatched': 'bg-blue-100 text-blue-800',
        'Rejected': 'bg-red-100 text-red-800',
        'Missed': 'bg-red-100 text-red-800'
      },
      cultivator: {
        'Approved': 'bg-green-100 text-green-800',
        'Do Not Send': 'bg-red-100 text-red-800',
        'Pending Confirmation': 'bg-yellow-100 text-yellow-800'
      },
      eligibility: {
        'Eligible': 'bg-green-100 text-green-800',
        'Ineligible': 'bg-red-100 text-red-800'
      }
    };
    return statusColors[type][status] || 'bg-gray-100 text-gray-800';
  };

  const filteredData = mockPlanningData.filter(item => {
    const cityMatch = filters.city === 'all' || item.city === filters.city;
    const eligibilityMatch = filters.eligibility === 'all' || item.eligibilityStatus === filters.eligibility;
    const dispatchMatch = filters.dispatchStatus === 'all' || item.dispatchStatus === filters.dispatchStatus;
    const cultivatorMatch = filters.cultivatorStatus === 'all' || item.cultivatorStatus === filters.cultivatorStatus;
    const searchMatch = filters.searchTerm === '' || 
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      item.icsId.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      item.phone.includes(filters.searchTerm);
    
    return cityMatch && eligibilityMatch && dispatchMatch && cultivatorMatch && searchMatch;
  });

  const handleBulkApprove = () => {
    console.log('Bulk approving:', selectedRows);
  };

  const handleRowSelect = (id) => {
    setSelectedRows(prev => 
      prev.includes(id) 
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Birthday Dispatch Planning Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <Input
              type="date"
              placeholder="Date Range (DOB)"
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
            />
            
            <Select value={filters.city} onValueChange={(value) => setFilters({...filters, city: value})}>
              <SelectTrigger>
                <SelectValue placeholder="City/State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.eligibility} onValueChange={(value) => setFilters({...filters, eligibility: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Eligibility Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Eligible">Eligible</SelectItem>
                <SelectItem value="Ineligible">Ineligible</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.dispatchStatus} onValueChange={(value) => setFilters({...filters, dispatchStatus: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Dispatch Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Dispatched">Dispatched</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.cultivatorStatus} onValueChange={(value) => setFilters({...filters, cultivatorStatus: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Cultivator Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Do Not Send">Do Not Send</SelectItem>
                <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search ICS/DMS/Name/Phone"
                value={filters.searchTerm}
                onChange={(e) => setFilters({...filters, searchTerm: e.target.value})}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {selectedRows.length > 0 && (
                <Button onClick={handleBulkApprove} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  <Check className="w-4 h-4 mr-2" />
                  Bulk Approve ({selectedRows.length})
                </Button>
              )}
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>ICS/DMS Details</TableHead>
                  <TableHead>Donor Information</TableHead>
                  <TableHead>Address Details</TableHead>
                  <TableHead>Lead Time & Status</TableHead>
                  <TableHead>Dispatch History</TableHead>
                  <TableHead>Donation & Engagement</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index} className={getRowHighlight(item.highlight)}>
                    <TableCell>
                      <Checkbox 
                        checked={selectedRows.includes(item.id)}
                        onCheckedChange={() => handleRowSelect(item.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">ICS: {item.icsId}</div>
                        <div className="text-sm text-gray-600">DMS: {item.dmsId}</div>
                        <div className="text-xs text-gray-500">
                          DOB: {new Date(item.dob).toLocaleDateString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.phone}</div>
                        <div className="text-xs text-gray-500">
                          Pref: {item.communicationPref}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 max-w-48">
                        <div className="text-sm font-medium">{item.city}, {item.state}</div>
                        <div className="text-xs text-gray-600">PIN: {item.pincode}</div>
                        <div className="text-xs text-gray-500 truncate" title={item.address}>
                          {item.address}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {item.leadTime} days ({item.leadTimeCategory})
                        </Badge>
                        <div className="space-y-1">
                          <Badge className={getStatusBadge(item.dispatchStatus, 'dispatch') + " text-xs"}>
                            {item.dispatchStatus}
                          </Badge>
                          <Badge className={getStatusBadge(item.cultivatorStatus, 'cultivator') + " text-xs"}>
                            {item.cultivatorStatus}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div>This FY: {item.cakeDispatchCount}</div>
                        <div>Historical: {item.historicalCount}</div>
                        <div className="text-xs text-gray-500">
                          First: {new Date(item.firstDonation).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          Last: {new Date(item.lastDonation).toLocaleDateString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">₹{item.familyDonation.toLocaleString()}</div>
                        <div className="text-xs">Zoom: {item.zoomPooja}</div>
                        <div className="text-xs">Video: {item.wishesVideo}</div>
                        <Badge className={getStatusBadge(item.eligibilityStatus, 'eligibility') + " text-xs"}>
                          {item.eligibilityStatus}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col space-y-1">
                        <Link to={`/birthday/dispatch/${item.id}`}>
                          <Button variant="ghost" size="sm" title="View Profile">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="text-green-600" title="Approve">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600" title="Mark Ineligible">
                          <X className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-blue-600" title="Add Comment">
                          <User className="w-4 h-4" />
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

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {filteredData.filter(item => item.dispatchStatus === 'Approved').length}
                </div>
                <div className="text-sm text-gray-600">Approved for Dispatch</div>
              </div>
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {filteredData.filter(item => item.dispatchStatus === 'Pending').length}
                </div>
                <div className="text-sm text-gray-600">Pending Approval</div>
              </div>
              <Calendar className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {filteredData.filter(item => item.dispatchStatus === 'Missed').length}
                </div>
                <div className="text-sm text-gray-600">Missed Dispatches</div>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-[#b33324]">{filteredData.length}</div>
                <div className="text-sm text-gray-600">Total Records</div>
              </div>
              <User className="w-8 h-8 text-[#b33324]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BirthdayPlanningList;
