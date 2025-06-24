
import React, { useState } from 'react';
import { Database, Upload, Download, Eye, Edit, Filter, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MasterFile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const mockMasterData = [
    {
      icsId: 'ICS001',
      dmsId: 'DMS001',
      legalName: 'Rajesh Kumar Sharma',
      initiatedName: 'Rajesh Krishna Das',
      dob: '1985-06-25',
      dobUpdated: '2024-01-15 10:30:00',
      phone: '+91-9876543210',
      address: '123 MG Road, Mumbai - 400001',
      cultivator: 'Priya Devi',
      familyDonations: 25000,
      eligibilityStatus: 'Eligible',
      dispatchStatus: 'Dispatched',
      cakeDispatches: 4,
      currentFYDispatches: 2,
      profileUpdates: 3,
      lastModified: '2024-06-20 14:25:00',
      orderId: 'ORD240620001',
      trackingId: 'BD123456789',
      mergedProfiles: ['ICS001A', 'ICS001B'],
      isDuplicate: false
    },
    {
      icsId: 'ICS002',
      dmsId: 'DMS002',
      legalName: 'Priya Sharma',
      dob: '1990-06-26',
      dobUpdated: '2024-03-10 09:15:00',
      phone: '+91-9876543211',
      address: '456 CP Street, Delhi - 110001',
      cultivator: 'Sunil Das',
      familyDonations: 15000,
      eligibilityStatus: 'Eligible',
      dispatchStatus: 'Pending',
      cakeDispatches: 1,
      currentFYDispatches: 1,
      profileUpdates: 1,
      lastModified: '2024-06-22 11:45:00',
      orderId: '',
      trackingId: '',
      mergedProfiles: [],
      isDuplicate: false
    }
  ];

  const cakeDispatchHistory = [
    {
      icsId: 'ICS001',
      cakeSent: 'Yes',
      date: '2024-06-20',
      uploadedBy: 'Admin',
      uploadDate: '2024-06-20 15:30:00'
    },
    {
      icsId: 'ICS001',
      cakeSent: 'Yes',
      date: '2024-01-15',
      uploadedBy: 'Admin',
      uploadDate: '2024-01-15 10:20:00'
    }
  ];

  const filteredData = mockMasterData.filter(record => {
    const searchMatch = record.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       record.phone.includes(searchTerm);
    
    const statusMatch = statusFilter === 'all' || record.dispatchStatus === statusFilter;

    return searchMatch && statusMatch;
  });

  const summaryStats = {
    totalRecords: filteredData.length,
    eligibleDonors: filteredData.filter(r => r.eligibilityStatus === 'Eligible').length,
    dispatched: filteredData.filter(r => r.dispatchStatus === 'Dispatched').length,
    mergedProfiles: filteredData.filter(r => r.mergedProfiles.length > 0).length,
    recentUpdates: filteredData.filter(r => {
      const lastModified = new Date(r.lastModified);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return lastModified > weekAgo;
    }).length
  };

  const handleUploadFullDump = () => {
    alert('Upload full dump data functionality');
  };

  const handleUploadCakeDispatch = () => {
    alert('Upload cake dispatch data functionality');
  };

  const handleExportMaster = () => {
    alert('Exporting master file...');
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.totalRecords}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Eligible Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.eligibleDonors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Dispatched</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{summaryStats.dispatched}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Merged Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{summaryStats.mergedProfiles}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.recentUpdates}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="master" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="master">Master File</TabsTrigger>
          <TabsTrigger value="cake-upload">Cake Upload</TabsTrigger>
          <TabsTrigger value="data-upload">Data Upload</TabsTrigger>
          <TabsTrigger value="reports">Monthly Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="master" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Master Birthday File
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button onClick={handleExportMaster} variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Master
                  </Button>
                  <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                    <Filter className="w-4 h-4 mr-2" />
                    Advanced Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <Input
                  placeholder="Search by name, ICS ID, phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Dispatched">Dispatched</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Apply Filters</Button>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS/DMS ID</TableHead>
                      <TableHead>Donor Details</TableHead>
                      <TableHead>DOB & Updates</TableHead>
                      <TableHead>Contact & Address</TableHead>
                      <TableHead>Cultivator</TableHead>
                      <TableHead>Dispatch Info</TableHead>
                      <TableHead>Cake History</TableHead>
                      <TableHead>Profile Updates</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((record, index) => (
                      <TableRow key={index} className={record.mergedProfiles.length > 0 ? 'bg-yellow-50' : ''}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium text-sm">ICS: {record.icsId}</div>
                            <div className="text-sm text-gray-600">DMS: {record.dmsId}</div>
                            {record.mergedProfiles.length > 0 && (
                              <Badge className="bg-purple-100 text-purple-800 text-xs">
                                Merged ({record.mergedProfiles.length})
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{record.legalName}</div>
                            {record.initiatedName && (
                              <div className="text-sm text-blue-600">{record.initiatedName}</div>
                            )}
                            <Badge className={record.eligibilityStatus === 'Eligible' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {record.eligibilityStatus}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm font-medium">{new Date(record.dob).toLocaleDateString()}</div>
                            <div className="text-xs text-gray-500">
                              Updated: {new Date(record.dobUpdated).toLocaleDateString()}
                            </div>
                            <div className="text-xs text-gray-500">
                              {new Date(record.dobUpdated).toLocaleTimeString()}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">{record.phone}</div>
                            <div className="text-xs text-gray-500 max-w-32 truncate" title={record.address}>
                              {record.address}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium">{record.cultivator}</div>
                            <div className="text-xs text-gray-500">
                              Family: ₹{record.familyDonations.toLocaleString()}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge className={record.dispatchStatus === 'Dispatched' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {record.dispatchStatus}
                            </Badge>
                            {record.orderId && (
                              <div className="text-xs font-mono">{record.orderId}</div>
                            )}
                            {record.trackingId && (
                              <div className="text-xs font-mono text-blue-600">{record.trackingId}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="font-medium">Total:</span> {record.cakeDispatches}
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">FY 24-25:</span> {record.currentFYDispatches}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">
                              <span className="font-medium">Updates:</span> {record.profileUpdates}
                            </div>
                            <div className="text-xs text-gray-500">
                              Last: {new Date(record.lastModified).toLocaleDateString()}
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
        </TabsContent>

        <TabsContent value="cake-upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Cake Dispatch Upload
              </CardTitle>
              <p className="text-sm text-gray-600">
                Upload cake dispatch records to link with Profile and Account data
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Upload Format</h4>
                <div className="text-sm text-blue-700">
                  Required columns: ICS ID, Cake Sent, Date
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium mb-2">Upload Cake Dispatch Data</p>
                <p className="text-sm text-gray-600 mb-4">
                  CSV format with ICS ID, Cake Sent status, and dispatch date
                </p>
                <Button onClick={handleUploadCakeDispatch} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Choose File
                </Button>
              </div>

              <div>
                <h4 className="font-medium mb-3">Recent Cake Dispatch Uploads</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Cake Sent</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Uploaded By</TableHead>
                      <TableHead>Upload Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cakeDispatchHistory.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{record.icsId}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">{record.cakeSent}</Badge>
                        </TableCell>
                        <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                        <TableCell>{record.uploadedBy}</TableCell>
                        <TableCell>{new Date(record.uploadDate).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Full Dump Data Upload
              </CardTitle>
              <p className="text-sm text-gray-600">
                Upload complete donor data with DOB updates and modification timestamps
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Required Additional Columns</h4>
                <div className="text-sm text-green-700 space-y-1">
                  <div>• DOB Updated: Date and time when DOB was last modified</div>
                  <div>• Last Modified: Complete modification timestamp</div>
                  <div>• Profile Updates: Number of profile modifications</div>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Database className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium mb-2">Upload Full Dump Data</p>
                <p className="text-sm text-gray-600 mb-4">
                  Complete donor dataset with modification tracking
                </p>
                <Button onClick={handleUploadFullDump} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Choose File
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Monthly Reports Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Monthly Cake Count Report
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    PivotTable with filter for ICSID, showing count of birthdays by day for Kitchen Department
                  </p>
                  <Button className="w-full bg-[#b33324] hover:bg-[#b33324]/90">
                    Generate Kitchen Report
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Cultivator Report
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Monthly details for family donors with cultivator confirmations and family donations
                  </p>
                  <Button className="w-full bg-[#b33324] hover:bg-[#b33324]/90">
                    Generate Cultivator Report
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Report Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automatic family donation calculation based on mobile number</li>
                  <li>• Recent donation date and amount tracking</li>
                  <li>• Communication preference mapping</li>
                  <li>• Cultivator status and final comments</li>
                  <li>• Lead time calculation by region</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MasterFile;
