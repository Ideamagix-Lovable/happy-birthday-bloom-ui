
import React, { useState } from 'react';
import { Search, Plus, Gift, Calendar, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Donor {
  id: string;
  dmsId: string;
  icsId: string;
  name: string;
  city: string;
  phone: string;
  address: string;
  totalDonations: number;
  lastDonation: string;
  cakesThisYear: number;
}

const CustomCakeDispatch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState<Donor | null>(null);
  const [cakeType, setCakeType] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock donor data
  const donors: Donor[] = [
    {
      id: '1',
      dmsId: 'DMS001',
      icsId: 'ICS001',
      name: 'Rajesh Kumar',
      city: 'Mumbai',
      phone: '+91-9876543210',
      address: '123 MG Road, Andheri, Mumbai - 400001',
      totalDonations: 25000,
      lastDonation: '2024-05-20',
      cakesThisYear: 1
    },
    {
      id: '2',
      dmsId: 'DMS002',
      icsId: 'ICS002',
      name: 'Priya Sharma',
      city: 'Delhi',
      phone: '+91-9876543211',
      address: '456 CP Street, Connaught Place, Delhi - 110001',
      totalDonations: 15000,
      lastDonation: '2024-03-15',
      cakesThisYear: 0
    }
  ];

  const cakeTypes = [
    'Chocolate',
    'Vanilla',
    'Black Forest',
    'Fruit Cake',
    'Custom Design'
  ];

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.dmsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.icsId.toLowerCase().includes(searchTerm.toLowerCase())
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
    alert('Custom cake dispatch created successfully!');
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
      </Card>

      {/* Search and Create */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donor Search */}
        <Card>
          <CardHeader>
            <CardTitle>Search Donor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, DMS ID, or ICS ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="max-h-96 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Donor</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Cakes (FY)</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDonors.map((donor) => (
                    <TableRow 
                      key={donor.id}
                      className={selectedDonor?.id === donor.id ? 'bg-blue-50' : ''}
                    >
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{donor.name}</div>
                          <div className="text-xs text-gray-500">
                            {donor.dmsId} / {donor.icsId}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{donor.city}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={donor.cakesThisYear > 0 ? "default" : "secondary"}>
                          {donor.cakesThisYear}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant={selectedDonor?.id === donor.id ? "default" : "outline"}
                          onClick={() => setSelectedDonor(donor)}
                          className={selectedDonor?.id === donor.id ? 'bg-[#b33324] hover:bg-[#b33324]/90' : ''}
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
                  <h4 className="font-medium text-blue-900">{selectedDonor.name}</h4>
                  <p className="text-sm text-blue-700">{selectedDonor.address}</p>
                  <p className="text-sm text-blue-700">{selectedDonor.phone}</p>
                  <div className="mt-2 flex items-center space-x-4 text-xs">
                    <span>Total Donations: ₹{selectedDonor.totalDonations.toLocaleString()}</span>
                    <span>Last Donation: {new Date(selectedDonor.lastDonation).toLocaleDateString()}</span>
                  </div>
                  {selectedDonor.cakesThisYear > 0 && (
                    <div className="mt-2 flex items-center space-x-2 text-amber-700 bg-amber-100 px-2 py-1 rounded text-xs">
                      <AlertCircle className="w-3 h-3" />
                      <span>{selectedDonor.cakesThisYear} cake(s) already sent this year</span>
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
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Custom Dispatches */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Custom Dispatches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No custom dispatches created yet.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomCakeDispatch;
