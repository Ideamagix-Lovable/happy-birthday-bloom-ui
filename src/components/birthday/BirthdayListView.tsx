
import React, { useState } from 'react';
import { Calendar, Filter, Download, Search, Eye, Edit, Clock, AlertTriangle, Users, FileUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BirthdayRecord {
  id: string;
  icsId: string;
  legalName: string;
  initiatedName?: string;
  salutation: string;
  phone: string;
  email?: string;
  dob: string;
  address: {
    address: string;
    city: string;
    state: string;
    pin: string;
    country: string;
  };
  category: string;
  status: string;
  commsPref: string;
  langPref?: string;
  litLangPref?: string;
  cultivator: string;
  isDonor: boolean;
  totalDonation: number;
  numDonations: number;
  firstDonation: string;
  recentDonation: string;
  recentDonationAmount: number;
  totalFamilyDonations: number;
  familyCategory: string;
  eligibilityStatus: 'Eligible' | 'No Address' | 'No Phone' | 'No Name' | 'Low Family Donation' | 'Company' | 'Late';
  cultivatorStatus: 'No Cultivator' | 'Pending Confirmation' | 'Approved' | 'Do Not Send' | 'Hand Delivery';
  dispatchStatus: 'Pending' | 'Approved' | 'Dispatched' | 'Delivered' | 'RTO' | 'Rejected';
  birthdayVideoSent: boolean;
  zoomPoojaStatus: boolean;
  leadTime: number;
  profileCakeDispatches: number;
  accountCakeDispatches: number;
  avgDonationPerCake: number;
  currentFYCakeDispatch: number;
  cultivatorComments: string;
  daysUntilBirthday: number;
  cakeCount: number;
  dobUpdated?: string;
  lastModified?: string;
  region: 'IMUM' | 'ROM' | 'ROI';
  trackingId?: string;
  courierName?: string;
  dispatchedDate?: string;
  deliveredDate?: string;
  edd?: string;
}

const BirthdayListView = () => {
  const [view, setView] = useState<'nearest' | 'date-range'>('nearest');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [eligibilityFilter, setEligibilityFilter] = useState('all');
  const [cultivatorFilter, setCultivatorFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');
  const [showUploads, setShowUploads] = useState(false);

  // Lead time mapping based on states
  const leadTimeMapping = {
    'IMUM': 4, // Mumbai Metropolitan Region
    'Maharashtra': 5, // Rest of Maharashtra
    'Gujarat': 5,
    'Madhya Pradesh': 5,
    'Goa': 5,
    'Bihar': 7,
    'Delhi': 7,
    'Uttar Pradesh': 7,
    'Rajasthan': 7,
    'Karnataka': 7,
    'Tamil Nadu': 7,
    'Telangana': 7,
    'Andhra Pradesh': 7,
    'West Bengal': 7,
    'Kerala': 7,
    'Odisha': 7,
    'Assam': 7,
    'Punjab': 7,
    'Haryana': 7,
    'Jharkhand': 7,
    'Chhattisgarh': 7,
    'Uttarakhand': 7,
    'Himachal Pradesh': 7,
    'Jammu & Kashmir': 7,
    'Sikkim': 7,
    'Arunachal Pradesh': 7,
    'Manipur': 7,
    'Meghalaya': 7,
    'Mizoram': 7,
    'Nagaland': 7,
    'Tripura': 7,
    'Chandigarh': 7,
    'Pondicherry': 7,
    'Dadra & Nagar Haveli': 7,
    'Daman & Diu': 7
  };

  // Mock data with comprehensive fields
  const mockData: BirthdayRecord[] = [
    {
      id: '1',
      icsId: 'ICS001',
      legalName: 'Rajesh Kumar Sharma',
      initiatedName: 'Rajesh Krishna Das',
      salutation: 'Mr.',
      phone: '+91-9876543210',
      email: 'rajesh@email.com',
      dob: '1985-06-25',
      address: {
        address: '123 MG Road, Andheri West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pin: '400001',
        country: 'India'
      },
      category: 'HV',
      status: 'Active',
      commsPref: 'Phone',
      langPref: 'Hindi',
      litLangPref: 'Hindi',
      cultivator: 'Priya Devi',
      isDonor: true,
      totalDonation: 25000,
      numDonations: 15,
      firstDonation: '2020-01-15',
      recentDonation: '2024-05-20',
      recentDonationAmount: 2500,
      totalFamilyDonations: 45000,
      familyCategory: 'HV',
      eligibilityStatus: 'Eligible',
      cultivatorStatus: 'Approved',
      dispatchStatus: 'Pending',
      birthdayVideoSent: false,
      zoomPoojaStatus: false,
      leadTime: 4,
      profileCakeDispatches: 3,
      accountCakeDispatches: 5,
      avgDonationPerCake: 1500,
      currentFYCakeDispatch: 1,
      cultivatorComments: 'VIP donor, handle with care',
      daysUntilBirthday: 2,
      cakeCount: 4,
      dobUpdated: '2024-01-15',
      lastModified: '2024-06-20 10:30:00',
      region: 'IMUM',
      trackingId: 'TRK123456',
      courierName: 'Blue Dart',
      dispatchedDate: '2024-06-20',
      edd: '2024-06-24'
    },
    {
      id: '2',
      icsId: 'ICS002',
      legalName: 'Priya Sharma',
      salutation: 'Mrs.',
      phone: '+91-9876543211',
      email: 'priya@email.com',
      dob: '1990-06-26',
      address: {
        address: '456 CP Street, Connaught Place',
        city: 'Delhi',
        state: 'Delhi',
        pin: '110001',
        country: 'India'
      },
      category: 'MV',
      status: 'Active',
      commsPref: 'WhatsApp',
      cultivator: 'Sunil Das',
      isDonor: false,
      totalDonation: 0,
      numDonations: 0,
      firstDonation: '',
      recentDonation: '',
      recentDonationAmount: 0,
      totalFamilyDonations: 15000,
      familyCategory: 'MV',
      eligibilityStatus: 'Eligible',
      cultivatorStatus: 'Pending Confirmation',
      dispatchStatus: 'Pending',
      birthdayVideoSent: false,
      zoomPoojaStatus: false,
      leadTime: 7,
      profileCakeDispatches: 0,
      accountCakeDispatches: 2,
      avgDonationPerCake: 0,
      currentFYCakeDispatch: 0,
      cultivatorComments: 'Family member of main donor',
      daysUntilBirthday: 3,
      cakeCount: 1,
      region: 'ROI'
    }
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
        'Delivered': 'bg-green-100 text-green-800',
        'RTO': 'bg-red-100 text-red-800',
        'Rejected': 'bg-red-100 text-red-800'
      }
    };

    return colors[type][status] || 'bg-gray-100 text-gray-800';
  };

  const isHighPriority = (record: BirthdayRecord) => {
    return record.daysUntilBirthday <= 3 || record.daysUntilBirthday < 0;
  };

  const isGroupHighlight = (record: BirthdayRecord, records: BirthdayRecord[]) => {
    // Check for same ICS ID grouping
    const sameIcsCount = records.filter(r => r.icsId === record.icsId && r.id !== record.id).length;
    
    // Check for same PIN code on same birthday date
    const samePinSameDate = records.filter(r => 
      r.address.pin === record.address.pin && 
      r.dob === record.dob && 
      r.id !== record.id
    ).length;

    return sameIcsCount > 0 || samePinSameDate > 0;
  };

  const filteredData = mockData.filter(record => {
    const searchMatch = record.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.phone.includes(searchTerm);
    
    const statusMatch = statusFilter === 'all' || record.dispatchStatus.toLowerCase() === statusFilter;
    const eligibilityMatch = eligibilityFilter === 'all' || record.eligibilityStatus === eligibilityFilter;
    const cultivatorMatch = cultivatorFilter === 'all' || record.cultivatorStatus === cultivatorFilter;

    return searchMatch && statusMatch && eligibilityMatch && cultivatorMatch;
  });

  const summaryStats = {
    upcoming: filteredData.filter(r => r.daysUntilBirthday >= 0 && r.daysUntilBirthday <= 7).length,
    pendingApproval: filteredData.filter(r => r.cultivatorStatus === 'Pending Confirmation').length,
    recentlyMissed: filteredData.filter(r => r.daysUntilBirthday < 0 && r.daysUntilBirthday >= -3).length,
    readyToDispatch: filteredData.filter(r => r.dispatchStatus === 'Approved').length
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Birthdays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.upcoming}</div>
            <p className="text-xs text-gray-500">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Pending Approval
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#f3b01b]">{summaryStats.pendingApproval}</div>
            <p className="text-xs text-gray-500">Awaiting confirmation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Recently Missed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{summaryStats.recentlyMissed}</div>
            <p className="text-xs text-gray-500">Past 3 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Ready to Dispatch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.readyToDispatch}</div>
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
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowUploads(!showUploads)}
              >
                <FileUp className="w-4 h-4 mr-2" />
                Upload Data
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, ICS ID, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Dispatch Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dispatch Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="dispatched">Dispatched</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={eligibilityFilter} onValueChange={setEligibilityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Eligibility" />
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
          <CardTitle className="flex items-center justify-between">
            <span>Birthday Records ({filteredData.length})</span>
            <div className="text-sm text-gray-500">
              Cost per cake: ₹350 | Total estimated cost: ₹{(filteredData.filter(r => r.eligibilityStatus === 'Eligible').length * 350).toLocaleString()}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ICS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Birthday</TableHead>
                  <TableHead>Cultivator</TableHead>
                  <TableHead>Donations</TableHead>
                  <TableHead>Eligibility</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cake History</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((record) => (
                  <TableRow 
                    key={record.id}
                    className={`
                      ${isHighPriority(record) ? 'bg-red-50 border-l-4 border-l-red-500' : ''}
                      ${isGroupHighlight(record, filteredData) ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : ''}
                    `}
                  >
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">{record.icsId}</div>
                        <div className="text-xs text-gray-500">
                          {record.isDonor ? 'Donor' : 'Family'}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{record.salutation} {record.legalName}</div>
                        {record.initiatedName && (
                          <div className="text-xs text-blue-600">{record.initiatedName}</div>
                        )}
                        <div className="text-xs text-gray-500">{record.category}</div>
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
                        {record.email && (
                          <div className="text-xs text-gray-500">{record.email}</div>
                        )}
                        <div className="text-xs text-gray-500">{record.commsPref}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>{record.address.address}</div>
                        <div>{record.address.city}, {record.address.state}</div>
                        <div className="text-xs text-gray-500">{record.address.pin}</div>
                        <Badge variant="outline" className="text-xs">
                          {record.region} ({record.leadTime}d)
                        </Badge>
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
                        <div className="text-xs">
                          Age: {new Date().getFullYear() - new Date(record.dob).getFullYear()}
                        </div>
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
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Personal: ₹{record.totalDonation.toLocaleString()}</div>
                        <div>Family: ₹{record.totalFamilyDonations.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">
                          {record.numDonations} donations
                        </div>
                        <div className="text-xs text-gray-500">
                          Recent: ₹{record.recentDonationAmount.toLocaleString()}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(record.eligibilityStatus, 'eligibility')}>
                        {record.eligibilityStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <Badge className={getStatusBadge(record.dispatchStatus, 'dispatch')}>
                          {record.dispatchStatus}
                        </Badge>
                        <div className="text-xs space-y-1">
                          <div>Video: {record.birthdayVideoSent ? '✓' : '✗'}</div>
                          <div>Zoom: {record.zoomPoojaStatus ? '✓' : '✗'}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div>Total: {record.cakeCount}</div>
                        <div>Profile: {record.profileCakeDispatches}</div>
                        <div>Account: {record.accountCakeDispatches}</div>
                        <div>FY 24-25: {record.currentFYCakeDispatch}</div>
                        <div className="text-xs text-gray-500">
                          Avg: ₹{record.avgDonationPerCake}
                        </div>
                      </div>
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

      {/* Upload Section */}
      {showUploads && (
        <Card>
          <CardHeader>
            <CardTitle>Data Upload Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cake-dispatch" className="w-full">
              <TabsList>
                <TabsTrigger value="cake-dispatch">Cake Dispatch Upload</TabsTrigger>
                <TabsTrigger value="full-dump">Full Dump Data</TabsTrigger>
                <TabsTrigger value="master-file">Master File Update</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cake-dispatch" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileUp className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">Upload Cake Dispatch Data</p>
                  <p className="text-xs text-gray-500">Format: ICS ID, Cake Sent, Date</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Choose File
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="full-dump" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileUp className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">Upload Full Dump Data</p>
                  <p className="text-xs text-gray-500">Complete donor data with all fields</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Choose File
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="master-file" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileUp className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">Update Master File</p>
                  <p className="text-xs text-gray-500">Birthday tracking and order management</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Choose File
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BirthdayListView;
