
import React, { useState } from 'react';
import { Search, Package, Calendar, User, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CustomDispatch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);

  const mockDonors = [
    {
      icsId: 'ICS001',
      dmsId: 'DMS001',
      name: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      dob: '1985-06-25',
      address: '123 MG Road, Mumbai',
      eligibilityStatus: 'Eligible',
      yearlyDispatches: 2,
      lastDispatchDate: '2024-01-15',
      familyDonations: 25000,
      leadTimeCategory: 'IMUM'
    },
    {
      icsId: 'ICS002',
      dmsId: 'DMS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      dob: '1990-06-26',
      address: '456 CP Street, Delhi',
      eligibilityStatus: 'Eligible',
      yearlyDispatches: 1,
      lastDispatchDate: '2024-03-20',
      familyDonations: 15000,
      leadTimeCategory: 'ROI'
    }
  ];

  const filteredDonors = mockDonors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.phone.includes(searchTerm)
  );

  const handleSelectDonor = (donor) => {
    setSelectedDonor(donor);
  };

  const handleCreateDispatch = () => {
    if (selectedDonor) {
      // Logic to create custom dispatch
      console.log('Creating custom dispatch for:', selectedDonor);
      alert(`Custom dispatch created for ${selectedDonor.name}`);
      setSelectedDonor(null);
      setSearchTerm('');
    }
  };

  const getLeadTime = (category) => {
    const leadTimes = { 'IMUM': 4, 'ROM': 5, 'ROI': 7, 'NE': 10 };
    return leadTimes[category] || 7;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="w-5 h-5 mr-2" />
            Custom Cake Dispatch
          </CardTitle>
          <p className="text-sm text-gray-600">
            Create custom birthday cake dispatches for specific donors. These will bypass date restrictions and flow directly to the dispatch queue.
          </p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donor Search & Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Select Donor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by name, ICS ID, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {searchTerm && (
                <div className="border rounded-lg max-h-96 overflow-y-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Donor Details</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDonors.map((donor, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{donor.name}</div>
                              <div className="text-sm text-gray-500">
                                ICS: {donor.icsId} | DMS: {donor.dmsId}
                              </div>
                              <div className="text-xs text-gray-500">
                                DOB: {new Date(donor.dob).toLocaleDateString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div>{donor.phone}</div>
                              <div className="text-xs text-gray-500">{donor.address}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              className={donor.eligibilityStatus === 'Eligible' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                              }
                            >
                              {donor.eligibilityStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button 
                              size="sm" 
                              onClick={() => handleSelectDonor(donor)}
                              className="bg-[#b33324] hover:bg-[#b33324]/90"
                            >
                              Select
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Selected Donor Details & Dispatch Creation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Dispatch Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDonor ? (
              <div className="space-y-6">
                {/* Donor Information */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3">Selected Donor</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <div className="font-medium">{selectedDonor.name}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">ICS ID:</span>
                      <div className="font-medium">{selectedDonor.icsId}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <div className="font-medium">{selectedDonor.phone}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">DOB:</span>
                      <div className="font-medium">{new Date(selectedDonor.dob).toLocaleDateString()}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Address:</span>
                      <div className="font-medium">{selectedDonor.address}</div>
                    </div>
                  </div>
                </div>

                {/* Dispatch History & Eligibility */}
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Current Year Dispatch Status
                    </h5>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Cakes Sent (2024):</span>
                        <div className="font-medium">{selectedDonor.yearlyDispatches}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Dispatch:</span>
                        <div className="font-medium">
                          {selectedDonor.lastDispatchDate 
                            ? new Date(selectedDonor.lastDispatchDate).toLocaleDateString()
                            : 'None'
                          }
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600">Family Donations:</span>
                        <div className="font-medium">₹{selectedDonor.familyDonations.toLocaleString()}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Lead Time:</span>
                        <div className="font-medium">{getLeadTime(selectedDonor.leadTimeCategory)} days ({selectedDonor.leadTimeCategory})</div>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Check */}
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center">
                      {selectedDonor.eligibilityStatus === 'Eligible' ? (
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
                      )}
                      Eligibility Status
                    </h5>
                    <Badge 
                      className={selectedDonor.eligibilityStatus === 'Eligible' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }
                    >
                      {selectedDonor.eligibilityStatus}
                    </Badge>
                    {selectedDonor.eligibilityStatus === 'Eligible' && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ All criteria met for cake dispatch
                      </p>
                    )}
                  </div>

                  {/* Warning for Multiple Dispatches */}
                  {selectedDonor.yearlyDispatches > 0 && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertCircle className="w-4 h-4 mr-2 text-yellow-600" />
                        <span className="font-medium text-yellow-800">Multiple Dispatch Warning</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        This donor has already received {selectedDonor.yearlyDispatches} cake(s) in 2024. 
                        Please confirm if additional dispatch is required.
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    onClick={handleCreateDispatch}
                    className="bg-[#b33324] hover:bg-[#b33324]/90 flex-1"
                    disabled={selectedDonor.eligibilityStatus !== 'Eligible'}
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Create Custom Dispatch
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedDonor(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Select a donor from the search results to create a custom dispatch</p>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ICS ID</TableHead>
                <TableHead>Donor Name</TableHead>
                <TableHead>Dispatch Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Lead Time</TableHead>
                <TableHead>Created By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ICS003</TableCell>
                <TableCell>Sunil Gupta</TableCell>
                <TableCell>2024-06-22</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800">Dispatched</Badge>
                </TableCell>
                <TableCell>7 days (ROI)</TableCell>
                <TableCell>Admin User</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ICS004</TableCell>
                <TableCell>Anita Patel</TableCell>
                <TableCell>2024-06-21</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Delivered</Badge>
                </TableCell>
                <TableCell>4 days (IMUM)</TableCell>
                <TableCell>Admin User</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomDispatch;
