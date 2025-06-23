
import React, { useState } from 'react';
import { Calendar, Filter, Download, Search, Eye, Edit, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BirthdayRecord {
  id: string;
  dmsId: string;
  icsId: string;
  salutation: string;
  name: string;
  phone: string;
  dob: string;
  address: {
    city: string;
    state: string;
    pin: string;
    country: string;
  };
  communicationPreference: string;
  totalFamilyDonations: number;
  familyCategory: string;
  eligibilityStatus: 'Eligible' | 'No Address' | 'No Phone' | 'No Name' | 'Low Family Donation' | 'Company' | 'Late';
  cultivatorStatus: 'No Cultivator' | 'Pending Confirmation' | 'Approved' | 'Do Not Send' | 'Hand Delivery';
  dispatchStatus: 'Pending' | 'Approved' | 'Dispatched' | 'Rejected';
  birthdayVideoSent: boolean;
  zoomPoojaStatus: boolean;
  firstDonation: string;
  lastDonation: string;
  leadTime: number;
  profileCakeDispatches: number;
  accountCakeDispatches: number;
  avgDonationPerCake: number;
  currentFYCakeDispatch: number;
  cultivatorComments: string;
  daysUntilBirthday: number;
}

const BirthdayListView = () => {
  const [view, setView] = useState<'nearest' | 'date-range'>('nearest');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  // Mock data - replace with actual API call
  const mockData: BirthdayRecord[] = [
    {
      id: '1',
      dmsId: 'DMS001',
      icsId: 'ICS001',
      salutation: 'Mr.',
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      dob: '1985-06-25',
      address: {
        city: 'Mumbai',
        state: 'Maharashtra',
        pin: '400001',
        country: 'India'
      },
      communicationPreference: 'Phone',
      totalFamilyDonations: 25000,
      familyCategory: 'HV',
      eligibilityStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      dispatchStatus: 'Pending',
      birthdayVideoSent: false,
      zoomPoojaStatus: false,
      firstDonation: '2020-01-15',
      lastDonation: '2024-05-20',
      leadTime: 4,
      profileCakeDispatches: 3,
      accountCakeDispatches: 5,
      avgDonationPerCake: 1500,
      currentFYCakeDispatch: 1,
      cultivatorComments: '',
      daysUntilBirthday: 2
    }
    // Add more mock data as needed
  ];

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
        'Rejected': 'bg-red-100 text-red-800'
      }
    };

    return colors[type][status] || 'bg-gray-100 text-gray-800';
  };

  const isHighPriority = (record: BirthdayRecord) => {
    return record.daysUntilBirthday <= 3 || record.daysUntilBirthday < 0;
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Upcoming Birthdays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">24</div>
            <p className="text-xs text-gray-500">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#f3b01b]">12</div>
            <p className="text-xs text-gray-500">Awaiting confirmation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Recently Missed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-gray-500">Past 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ready to Dispatch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">8</div>
            <p className="text-xs text-gray-500">Approved items</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button
                variant={view === 'nearest' ? 'default' : 'outline'}
                onClick={() => setView('nearest')}
                className={view === 'nearest' ? 'bg-[#b33324] hover:bg-[#b33324]/90' : ''}
              >
                <Clock className="w-4 h-4 mr-2" />
                Nearest Birthdays
              </Button>
              <Button
                variant={view === 'date-range' ? 'default' : 'outline'}
                onClick={() => setView('date-range')}
                className={view === 'date-range' ? 'bg-[#b33324] hover:bg-[#b33324]/90' : ''}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, DMS ID, ICS ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="eligible">Eligible</SelectItem>
                <SelectItem value="pending">Pending Approval</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            {view === 'date-range' && (
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Main Table */}
      <Card>
        <CardHeader>
          <CardTitle>Birthday Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DMS/ICS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Birthday</TableHead>
                  <TableHead>Eligibility</TableHead>
                  <TableHead>Cultivator</TableHead>
                  <TableHead>Dispatch</TableHead>
                  <TableHead>Donations</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((record) => (
                  <TableRow 
                    key={record.id}
                    className={`${isHighPriority(record) ? 'bg-red-50 border-l-4 border-l-red-500' : ''}`}
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{record.dmsId}</div>
                        <div className="text-xs text-gray-500">{record.icsId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{record.salutation} {record.name}</div>
                        <div className="text-xs text-gray-500">{record.familyCategory}</div>
                        {isHighPriority(record) && (
                          <div className="flex items-center text-red-600 text-xs">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Urgent
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{record.phone}</div>
                        <div className="text-xs text-gray-500">{record.communicationPreference}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {record.address.city}, {record.address.state}
                        <br />
                        <span className="text-xs text-gray-500">{record.address.pin}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{new Date(record.dob).toLocaleDateString()}</div>
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
                      <Badge className={getStatusBadge(record.eligibilityStatus, 'eligibility')}>
                        {record.eligibilityStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(record.cultivatorStatus, 'cultivator')}>
                        {record.cultivatorStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(record.dispatchStatus, 'dispatch')}>
                        {record.dispatchStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>₹{record.totalFamilyDonations.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">
                          Cakes: {record.profileCakeDispatches}
                        </div>
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

export default BirthdayListView;
