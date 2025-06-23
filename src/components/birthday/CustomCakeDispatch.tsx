
import React, { useState } from 'react';
import { Search, Plus, Gift, Calendar, AlertCircle, History, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Donor {
  id: string;
  icsId: string;
  legalName: string;
  initiatedName?: string;
  salutation: string;
  city: string;
  state: string;
  phone: string;
  email?: string;
  address: string;
  totalDonation: number;
  totalFamilyDonations: number;
  lastDonation: string;
  lastDonationAmount: number;
  cakesThisYear: number;
  cakeHistory: CakeDispatch[];
  region: 'IMUM' | 'ROM' | 'ROI';
  leadTime: number;
  eligibilityStatus: string;
  cultivator: string;
  familyCategory: string;
}

interface CakeDispatch {
  id: string;
  date: string;
  cakeType: string;
  occasion: string;
  status: string;
  cost: number;
  trackingId?: string;
  deliveredDate?: string;
}

interface CustomDispatch {
  id: string;
  donor: Donor;
  cakeType: string;
  deliveryDate: string;
  specialInstructions: string;
  createdDate: string;
  status: 'Created' | 'Ready to Ship' | 'Dispatched' | 'Delivered';
  cost: number;
  orderId: string;
}

const CustomCakeDispatch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [cakeType, setCakeType] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Mock donor data with comprehensive cake history
  const donors: Donor[] = [
    {
      id: '1',
      icsId: 'ICS001',
      legalName: 'Rajesh Kumar Sharma',
      initiatedName: 'Rajesh Krishna Das',
      salutation: 'Mr.',
      city: 'Mumbai',
      state: 'Maharashtra',
      phone: '+91-9876543210',
      email: 'rajesh@email.com',
      address: '123 MG Road, Andheri West, Mumbai - 400001',
      totalDonation: 25000,
      totalFamilyDonations: 45000,
      lastDonation: '2024-05-20',
      lastDonationAmount: 2500,
      cakesThisYear: 2,
      region: 'IMUM',
      leadTime: 4,
      eligibilityStatus: 'Eligible',
      cultivator: 'Priya Devi',
      familyCategory: 'HV',
      cakeHistory: [
        {
          id: 'CD001',
          date: '2024-01-15',
          cakeType: 'Chocolate',
          occasion: 'Birthday',
          status: 'Delivered',
          cost: 350,
          trackingId: 'BD123456',
          deliveredDate: '2024-01-17'
        },
        {
          id: 'CD002',
          date: '2024-06-10',
          cakeType: 'Vanilla',
          occasion: 'Custom',
          status: 'Delivered',
          cost: 350,
          trackingId: 'XB789123',
          deliveredDate: '2024-06-12'
        }
      ]
    },
    {
      id: '2',
      icsId: 'ICS002',
      legalName: 'Priya Sharma',
      salutation: 'Mrs.',
      city: 'Delhi',
      state: 'Delhi',
      phone: '+91-9876543211',
      address: '456 CP Street, Connaught Place, Delhi - 110001',
      totalDonation: 5000,
      totalFamilyDonations: 15000,
      lastDonation: '2024-03-15',
      lastDonationAmount: 1000,
      cakesThisYear: 0,
      region: 'ROI',
      leadTime: 7,
      eligibilityStatus: 'Eligible',
      cultivator: 'Sunil Das',
      familyCategory: 'MV',
      cakeHistory: [
        {
          id: 'CD003',
          date: '2023-12-25',
          cakeType: 'Black Forest',
          occasion: 'Birthday',
          status: 'Delivered',
          cost: 350,
          trackingId: 'DL456789',
          deliveredDate: '2023-12-27'
        }
      ]
    },
    {
      id: '3',
      icsId: 'ICS003',
      legalName: 'Late Ramesh Gupta',
      salutation: 'Late Mr.',
      city: 'Pune',
      state: 'Maharashtra',
      phone: '+91-9876543212',
      address: '789 FC Road, Pune - 411001',
      totalDonation: 15000,
      totalFamilyDonations: 25000,
      lastDonation: '2024-02-10',
      lastDonationAmount: 1500,
      cakesThisYear: 0,
      region: 'ROM',
      leadTime: 5,
      eligibilityStatus: 'Late',
      cultivator: 'Meera Devi',
      familyCategory: 'MV',
      cakeHistory: []
    },
    {
      id: '4',
      icsId: 'ICS004',
      legalName: 'ABC Corporation Pvt Ltd',
      salutation: 'M/s',
      city: 'Bangalore',
      state: 'Karnataka',
      phone: '+91-9876543213',
      address: '321 MG Road, Bangalore - 560001',
      totalDonation: 50000,
      totalFamilyDonations: 50000,
      lastDonation: '2024-04-20',
      lastDonationAmount: 5000,
      cakesThisYear: 0,
      region: 'ROI',
      leadTime: 7,
      eligibilityStatus: 'Company',
      cultivator: 'Anita Sharma',
      familyCategory: 'HV',
      cakeHistory: []
    }
  ];

  const cakeTypes = [
    'Chocolate',
    'Vanilla',
    'Black Forest',
    'Fruit Cake',
    'Butterscotch',
    'Strawberry',
    'Red Velvet',
    'Custom Design'
  ];

  // Mock recent custom dispatches
  const recentCustomDispatches: CustomDispatch[] = [
    {
      id: 'CCD001',
      donor: donors[0],
      cakeType: 'Chocolate',
      deliveryDate: '2024-06-20',
      specialInstructions: 'VIP delivery, call before delivery',
      createdDate: '2024-06-15',
      status: 'Delivered',
      cost: 350,
      orderId: 'CUSTOM001'
    },
    {
      id: 'CCD002',
      donor: donors[1],
      cakeType: 'Vanilla',
      deliveryDate: '2024-06-25',
      specialInstructions: 'Evening delivery preferred',
      createdDate: '2024-06-20',
      status: 'Ready to Ship',
      cost: 350,
      orderId: 'CUSTOM002'
    }
  ];

  const filteredDonors = donors.filter(donor => {
    const searchLower = searchTerm.toLowerCase();
    return donor.legalName.toLowerCase().includes(searchLower) ||
           donor.icsId.toLowerCase().includes(searchLower) ||
           donor.phone.includes(searchTerm) ||
           (donor.initiatedName && donor.initiatedName.toLowerCase().includes(searchLower));
  });

  const eligibleDonors = filteredDonors.filter(donor => 
    donor.eligibilityStatus === 'Eligible' && 
    donor.totalFamilyDonations >= 1000
  );

  const handleCreateDispatch = () => {
    if (!selectedDonor || !cakeType || !deliveryDate) {
      alert('Please fill all required fields');
      return;
    }

    console.log('Creating custom dispatch:', {
      donor: selectedDonor,
      cakeType,
      deliveryDate,
      specialInstructions
    });

    // Reset form
    setSelectedDonor(null);
    setCakeType('');
    setDeliveryDate('');
    setSpecialInstructions('');
    setIsDialogOpen(false);
    alert('Custom cake dispatch created successfully! It will flow directly to Ready to Ship queue.');
  };

  const getTotalCakesSent = (donor: Donor) => {
    return donor.cakeHistory.filter(cake => cake.status === 'Delivered').length;
  };

  const getLastCakeDate = (donor: Donor) => {
    if (donor.cakeHistory.length === 0) return 'Never';
    const lastCake = donor.cakeHistory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    return new Date(lastCake.date).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Custom Cake Dispatch</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Create special cake dispatches for donors outside of birthday schedules. These will flow directly to the dispatch queue.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-[#b33324]">{eligibleDonors.length}</div>
              <div className="text-sm text-gray-600">Eligible Donors</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{recentCustomDispatches.filter(d => d.status === 'Delivered').length}</div>
              <div className="text-sm text-gray-600">Custom Delivered</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-[#f3b01b]">{recentCustomDispatches.filter(d => d.status === 'Ready to Ship').length}</div>
              <div className="text-sm text-gray-600">Pending Dispatch</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">₹{(recentCustomDispatches.length * 350).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Value</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="create" className="w-full">
        <TabsList>
          <TabsTrigger value="create">Create Dispatch</TabsTrigger>
          <TabsTrigger value="recent">Recent Dispatches</TabsTrigger>
          <TabsTrigger value="history">Donor History</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          {/* Search and Create */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Donor Search */}
            <Card>
              <CardHeader>
                <CardTitle>Search & Select Donor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, ICS ID, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>

                <div className="text-sm text-gray-600 mb-2">
                  Showing {filteredDonors.length} donors ({eligibleDonors.length} eligible)
                </div>

                <div className="max-h-96 overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Donor Details</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Donations</TableHead>
                        <TableHead>Cake History</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDonors.map((donor) => (
                        <TableRow 
                          key={donor.id}
                          className={`
                            ${selectedDonor?.id === donor.id ? 'bg-blue-50' : ''}
                            ${donor.eligibilityStatus !== 'Eligible' ? 'bg-red-50' : ''}
                          `}
                        >
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{donor.salutation} {donor.legalName}</div>
                              {donor.initiatedName && (
                                <div className="text-xs text-blue-600">{donor.initiatedName}</div>
                              )}
                              <div className="text-xs text-gray-500">
                                {donor.icsId} | {donor.phone}
                              </div>
                              {donor.eligibilityStatus !== 'Eligible' && (
                                <Badge variant="secondary" className="text-xs">
                                  {donor.eligibilityStatus}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div>{donor.city}, {donor.state}</div>
                              <Badge variant="outline" className="text-xs">
                                {donor.region} ({donor.leadTime}d)
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div>Family: ₹{donor.totalFamilyDonations.toLocaleString()}</div>
                              <div>Personal: ₹{donor.totalDonation.toLocaleString()}</div>
                              <div className="text-xs text-gray-500">
                                Last: ₹{donor.lastDonationAmount.toLocaleString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div>Total: {getTotalCakesSent(donor)}</div>
                              <div>FY 24-25: {donor.cakesThisYear}</div>
                              <div className="text-xs text-gray-500">
                                Last: {getLastCakeDate(donor)}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant={selectedDonor?.id === donor.id ? "default" : "outline"}
                              onClick={() => setSelectedDonor(donor)}
                              className={selectedDonor?.id === donor.id ? 'bg-[#b33324] hover:bg-[#b33324]/90' : ''}
                              disabled={donor.eligibilityStatus !== 'Eligible' || donor.totalFamilyDonations < 1000}
                            >
                              {selectedDonor?.id === donor.id ? 'Selected' : 'Select'}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Dispatch Details */}
            <Card>
              <CardHeader>
                <CardTitle>Dispatch Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDonor ? (
                  <>
                    {/* Selected Donor Info */}
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900">{selectedDonor.salutation} {selectedDonor.legalName}</h4>
                      {selectedDonor.initiatedName && (
                        <p className="text-sm text-blue-700">{selectedDonor.initiatedName}</p>
                      )}
                      <p className="text-sm text-blue-700">{selectedDonor.address}</p>
                      <p className="text-sm text-blue-700">{selectedDonor.phone}</p>
                      <div className="mt-2 grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="font-medium">Family Donations:</span><br />
                          ₹{selectedDonor.totalFamilyDonations.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Last Donation:</span><br />
                          {new Date(selectedDonor.lastDonation).toLocaleDateString()}
                        </div>
                        <div>
                          <span className="font-medium">Cultivator:</span><br />
                          {selectedDonor.cultivator}
                        </div>
                        <div>
                          <span className="font-medium">Lead Time:</span><br />
                          {selectedDonor.leadTime} days ({selectedDonor.region})
                        </div>
                      </div>
                      {selectedDonor.cakesThisYear > 0 && (
                        <div className="mt-2 flex items-center space-x-2 text-amber-700 bg-amber-100 px-2 py-1 rounded text-xs">
                          <AlertCircle className="w-3 h-3" />
                          <span>{selectedDonor.cakesThisYear} cake(s) already sent this year</span>
                        </div>
                      )}
                      
                      {/* Cake History Summary */}
                      {selectedDonor.cakeHistory.length > 0 && (
                        <div className="mt-3 border-t pt-2">
                          <div className="text-xs font-medium text-blue-800 mb-1">Recent Cake History:</div>
                          <div className="space-y-1">
                            {selectedDonor.cakeHistory.slice(0, 2).map((cake) => (
                              <div key={cake.id} className="text-xs text-blue-700 flex justify-between">
                                <span>{cake.cakeType} ({cake.occasion})</span>
                                <span>{new Date(cake.date).toLocaleDateString()}</span>
                              </div>
                            ))}
                            {selectedDonor.cakeHistory.length > 2 && (
                              <div className="text-xs text-blue-600">
                                +{selectedDonor.cakeHistory.length - 2} more...
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Cake Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cake Type *
                        </label>
                        <Select value={cakeType} onValueChange={setCakeType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cake type" />
                          </SelectTrigger>
                          <SelectContent>
                            {cakeTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Delivery Date *
                        </label>
                        <Input
                          type="date"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        {deliveryDate && (
                          <div className="text-xs text-gray-500 mt-1">
                            Suggested dispatch date: {new Date(new Date(deliveryDate).getTime() - selectedDonor.leadTime * 24 * 60 * 60 * 1000).toLocaleDateString()}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Special Instructions
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33324] focus:border-transparent"
                          rows={3}
                          placeholder="Any special delivery instructions or cake customization notes..."
                          value={specialInstructions}
                          onChange={(e) => setSpecialInstructions(e.target.value)}
                        />
                      </div>

                      <div className="pt-4 border-t">
                        <div className="text-sm text-gray-600 mb-4">
                          <p className="font-medium">Cost Estimate: ₹350</p>
                          <p className="text-xs">Note: This dispatch will bypass normal birthday workflow and go directly to ready-to-ship queue.</p>
                        </div>
                        <Button
                          onClick={handleCreateDispatch}
                          className="w-full bg-[#b33324] hover:bg-[#b33324]/90"
                          disabled={!cakeType || !deliveryDate}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Create Custom Dispatch
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Gift className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a donor to create custom cake dispatch</p>
                    <p className="text-xs mt-2">Only eligible donors with family donations ≥ ₹1000 can be selected</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Custom Dispatches</span>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentCustomDispatches.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Donor</TableHead>
                        <TableHead>Cake Type</TableHead>
                        <TableHead>Delivery Date</TableHead>
                        <TableHead>Created Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Instructions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentCustomDispatches.map((dispatch) => (
                        <TableRow key={dispatch.id}>
                          <TableCell className="font-medium">{dispatch.orderId}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{dispatch.donor.salutation} {dispatch.donor.legalName}</div>
                              <div className="text-xs text-gray-500">{dispatch.donor.icsId}</div>
                            </div>
                          </TableCell>
                          <TableCell>{dispatch.cakeType}</TableCell>
                          <TableCell>{new Date(dispatch.deliveryDate).toLocaleDateString()}</TableCell>
                          <TableCell>{new Date(dispatch.createdDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge className={
                              dispatch.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              dispatch.status === 'Dispatched' ? 'bg-blue-100 text-blue-800' :
                              dispatch.status === 'Ready to Ship' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }>
                              {dispatch.status}
                            </Badge>
                          </TableCell>
                          <TableCell>₹{dispatch.cost}</TableCell>
                          <TableCell className="max-w-32 truncate text-xs">
                            {dispatch.specialInstructions || 'None'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No custom dispatches created yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Donor Cake History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search donor for cake history..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Donor</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Total Cakes</TableHead>
                        <TableHead>FY 24-25</TableHead>
                        <TableHead>Last Cake</TableHead>
                        <TableHead>Total Value</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDonors.map((donor) => (
                        <TableRow key={donor.id}>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{donor.salutation} {donor.legalName}</div>
                              <div className="text-xs text-gray-500">{donor.icsId}</div>
                              {donor.initiatedName && (
                                <div className="text-xs text-blue-600">{donor.initiatedName}</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {donor.city}, {donor.state}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-center">
                              <div className="text-lg font-bold">{getTotalCakesSent(donor)}</div>
                              <div className="text-xs text-gray-500">All time</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-center">
                              <div className="text-lg font-bold text-[#b33324]">{donor.cakesThisYear}</div>
                              <div className="text-xs text-gray-500">This year</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {getLastCakeDate(donor)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              ₹{(getTotalCakesSent(donor) * 350).toLocaleString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <History className="w-4 h-4 mr-2" />
                                  View History
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Cake History - {donor.legalName}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  {donor.cakeHistory.length > 0 ? (
                                    <Table>
                                      <TableHeader>
                                        <TableRow>
                                          <TableHead>Date</TableHead>
                                          <TableHead>Cake Type</TableHead>
                                          <TableHead>Occasion</TableHead>
                                          <TableHead>Status</TableHead>
                                          <TableHead>Tracking</TableHead>
                                        </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                        {donor.cakeHistory.map((cake) => (
                                          <TableRow key={cake.id}>
                                            <TableCell>{new Date(cake.date).toLocaleDateString()}</TableCell>
                                            <TableCell>{cake.cakeType}</TableCell>
                                            <TableCell>{cake.occasion}</TableCell>
                                            <TableCell>
                                              <Badge variant={cake.status === 'Delivered' ? 'default' : 'secondary'}>
                                                {cake.status}
                                              </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs">
                                              {cake.trackingId || '-'}
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  ) : (
                                    <div className="text-center py-8 text-gray-500">
                                      <Gift className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                      <p>No cake history found for this donor.</p>
                                    </div>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomCakeDispatch;
