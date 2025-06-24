
import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Edit, AlertTriangle, Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DonorRecord {
  dmsId: string;
  icsId: string;
  salutation: string;
  legalName: string;
  initiatedName?: string;
  phone: string;
  dob: string;
  city: string;
  state: string;
  pin: string;
  country: string;
  commsPref: string;
  cultivator: string;
  cultivatorStatus: string;
  familyDonations: number;
  eligibilityStatus: string;
  dispatchStatus: string;
  leadTimeCategory: string;
  yearlyDispatches: number;
  lastDispatchDate?: string;
  cultivatorComments: string;
  daysUntilBirthday: number;
  isHighPriority: boolean;
  isDuplicate: boolean;
}

const PlanningReport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eligibilityFilter, setEligibilityFilter] = useState('all');
  const [cultivatorFilter, setCultivatorFilter] = useState('all');
  const [dispatchFilter, setDispatchFilter] = useState('all');
  const [dateRange, setDateRange] = useState('upcoming');

  // Mock data with all requirements
  const mockData: DonorRecord[] = [
    {
      dmsId: 'DMS001',
      icsId: 'ICS001',
      salutation: 'Mr.',
      legalName: 'Rajesh Kumar Sharma',
      initiatedName: 'Rajesh Krishna Das',
      phone: '+91-9876543210',
      dob: '1985-06-25',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin: '400001',
      country: 'India',
      commsPref: 'Phone',
      cultivator: 'Priya Devi',
      cultivatorStatus: 'Approved',
      familyDonations: 25000,
      eligibilityStatus: 'Eligible',
      dispatchStatus: 'Pending',
      leadTimeCategory: 'IMUM',
      yearlyDispatches: 3,
      lastDispatchDate: '2024-01-15',
      cultivatorComments: 'VIP donor, handle with care',
      daysUntilBirthday: 2,
      isHighPriority: true,
      isDuplicate: false
    },
    {
      dmsId: 'DMS002',
      icsId: 'ICS002',
      salutation: 'Mrs.',
      legalName: 'Priya Sharma',
      phone: '+91-9876543211',
      dob: '1990-06-26',
      city: 'Delhi',
      state: 'Delhi',
      pin: '110001',
      country: 'India',
      commsPref: 'WhatsApp',
      cultivator: 'Sunil Das',
      cultivatorStatus: 'Pending Confirmation',
      familyDonations: 15000,
      eligibilityStatus: 'Eligible',
      dispatchStatus: 'Pending',
      leadTimeCategory: 'ROI',
      yearlyDispatches: 1,
      cultivatorComments: 'New donor, first cake',
      daysUntilBirthday: 3,
      isHighPriority: false,
      isDuplicate: false
    },
    {
      dmsId: 'DMS003',
      icsId: 'ICS003',
      salutation: 'Late',
      legalName: 'Late Mohan Gupta',
      phone: '+91-9876543212',
      dob: '1975-06-20',
      city: 'Pune',
      state: 'Maharashtra',
      pin: '411001',
      country: 'India',
      commsPref: 'Phone',
      cultivator: 'Ravi Kumar',
      cultivatorStatus: 'Do Not Send',
      familyDonations: 5000,
      eligibilityStatus: 'Late',
      dispatchStatus: 'Rejected',
      leadTimeCategory: 'ROM',
      yearlyDispatches: 0,
      cultivatorComments: 'Deceased donor',
      daysUntilBirthday: -2,
      isHighPriority: false,
      isDuplicate: false
    }
  ];

  const getRowClassName = (record: DonorRecord) => {
    if (record.daysUntilBirthday < 0 || record.daysUntilBirthday < getLeadTime(record.leadTimeCategory)) {
      return 'bg-red-50 border-l-4 border-l-red-500'; // Missed birthdays
    }
    if (record.isDuplicate) {
      return 'bg-yellow-50 border-l-4 border-l-yellow-500'; // Duplicates
    }
    if (record.eligibilityStatus === 'Eligible' && record.cultivatorStatus === 'No Cultivator') {
      return 'bg-blue-50 border-l-4 border-l-blue-500'; // Eligible & unassigned
    }
    if (record.dispatchStatus === 'Approved') {
      return 'bg-green-50 border-l-4 border-l-green-500'; // Approved & scheduled
    }
    return '';
  };

  const getLeadTime = (category: string) => {
    const leadTimes = { 'IMUM': 4, 'ROM': 5, 'ROI': 7, 'NE': 10 };
    return leadTimes[category] || 7;
  };

  const getStatusBadge = (status: string, type: 'eligibility' | 'cultivator' | 'dispatch') => {
    const colors = {
      eligibility: {
        'Eligible': 'bg-green-100 text-green-800',
        'No Address': 'bg-red-100 text-red-800',
        'No Phone': 'bg-red-100 text-red-800',
        'No Name': 'bg-red-100 text-red-800',
        'Low Family Donation': 'bg-yellow-100 text-yellow-800',
        'Company': 'bg-gray-100 text-gray-800',
        'Late': 'bg-red-100 text-red-800'
      },
      cultivator: {
        'No Cultivator': 'bg-gray-100 text-gray-800',
        'Pending Confirmation': 'bg-yellow-100 text-yellow-800',
        'Approved': 'bg-green-100 text-green-800',
        'Do Not Send': 'bg-red-100 text-red-800',
        'Hand Delivery': 'bg-blue-100 text-blue-800'
      },
      dispatch: {
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Approved': 'bg-green-100 text-green-800',
        'Dispatched': 'bg-blue-100 text-blue-800',
        'Delivered': 'bg-green-100 text-green-800',
        'RTO': 'bg-red-100 text-red-800',
        'Rejected': 'bg-red-100 text-red-800'
      }
    };
    return colors[type][status] || 'bg-gray-100 text-gray-800';
  };

  const filteredData = mockData.filter(record => {
    const searchMatch = record.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.phone.includes(searchTerm);
    
    const eligibilityMatch = eligibilityFilter === 'all' || record.eligibilityStatus === eligibilityFilter;
    const cultivatorMatch = cultivatorFilter === 'all' || record.cultivatorStatus === cultivatorFilter;
    const dispatchMatch = dispatchFilter === 'all' || record.dispatchStatus === dispatchFilter;

    return searchMatch && eligibilityMatch && cultivatorMatch && dispatchMatch;
  });

  const summaryStats = {
    total: filteredData.length,
    eligible: filteredData.filter(r => r.eligibilityStatus === 'Eligible').length,
    pending: filteredData.filter(r => r.dispatchStatus === 'Pending').length,
    approved: filteredData.filter(r => r.dispatchStatus === 'Approved').length,
    missed: filteredData.filter(r => r.daysUntilBirthday < 0).length
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Total Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Eligible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.eligible}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Approved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.approved}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Missed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{summaryStats.missed}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Birthday Dispatch Planning Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, ICS ID, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={eligibilityFilter} onValueChange={setEligibilityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Eligibility Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Eligibility</SelectItem>
                <SelectItem value="Eligible">Eligible</SelectItem>
                <SelectItem value="No Address">No Address</SelectItem>
                <SelectItem value="No Phone">No Phone</SelectItem>
                <SelectItem value="Low Family Donation">Low Family Donation</SelectItem>
                <SelectItem value="Company">Company</SelectItem>
                <SelectItem value="Late">Late</SelectItem>
              </SelectContent>
            </Select>
            <Select value={cultivatorFilter} onValueChange={setCultivatorFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Cultivator Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cultivator Status</SelectItem>
                <SelectItem value="No Cultivator">No Cultivator</SelectItem>
                <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Do Not Send">Do Not Send</SelectItem>
                <SelectItem value="Hand Delivery">Hand Delivery</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dispatchFilter} onValueChange={setDispatchFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Dispatch Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dispatch Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Dispatched">Dispatched</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DMS/ICS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Birthday</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Cultivator</TableHead>
                  <TableHead>Family Donations</TableHead>
                  <TableHead>Eligibility</TableHead>
                  <TableHead>Dispatch Status</TableHead>
                  <TableHead>Lead Time</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((record, index) => (
                  <TableRow key={index} className={getRowClassName(record)}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">DMS: {record.dmsId}</div>
                        <div className="text-sm text-gray-600">ICS: {record.icsId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{record.salutation} {record.legalName}</div>
                        {record.initiatedName && (
                          <div className="text-sm text-blue-600">{record.initiatedName}</div>
                        )}
                        {record.isHighPriority && (
                          <div className="flex items-center text-red-600 text-xs">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            High Priority
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{record.phone}</div>
                        <div className="text-xs text-gray-500">{record.commsPref}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{new Date(record.dob).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-500">
                          {record.daysUntilBirthday > 0 
                            ? `In ${record.daysUntilBirthday} days`
                            : record.daysUntilBirthday === 0 
                            ? 'Today'
                            : `${Math.abs(record.daysUntilBirthday)} days ago`
                          }
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>{record.city}, {record.state}</div>
                        <div className="text-xs text-gray-500">{record.pin}</div>
                        <Badge variant="outline" className="text-xs">
                          {record.leadTimeCategory}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{record.cultivator}</div>
                        <Badge className={getStatusBadge(record.cultivatorStatus, 'cultivator')}>
                          {record.cultivatorStatus}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">₹{record.familyDonations.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">{record.yearlyDispatches} cakes sent</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(record.eligibilityStatus, 'eligibility')}>
                        {record.eligibilityStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(record.dispatchStatus, 'dispatch')}>
                        {record.dispatchStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">
                        {getLeadTime(record.leadTimeCategory)} days
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs bg-gray-50 p-2 rounded max-w-32">
                        {record.cultivatorComments || 'No comments'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
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

export default PlanningReport;
