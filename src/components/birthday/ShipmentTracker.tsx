
import React, { useState } from 'react';
import { Package, Search, Upload, Download, Eye, RotateCcw, Truck, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ShipmentTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [courierFilter, setCourierFilter] = useState('all');

  const mockShipments = [
    {
      id: 'SH001',
      icsId: 'ICS001',
      name: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      dispatchDate: '2024-06-20',
      birthdayDate: '2024-06-25',
      courier: 'Blue Dart',
      awbNumber: 'BD123456789',
      pickupDate: '2024-06-20',
      deliveredDate: '2024-06-24',
      edd: '2024-06-24',
      status: 'DELIVERED',
      address: '123 MG Road, Mumbai - 400001',
      redemptionComments: 'Successfully delivered',
      giftIssueId: 'GI001'
    },
    {
      id: 'SH002',
      icsId: 'ICS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      dispatchDate: '2024-06-21',
      birthdayDate: '2024-06-28',
      courier: 'Delhivery',
      awbNumber: 'DEL987654321',
      pickupDate: '2024-06-21',
      deliveredDate: '',
      edd: '2024-06-28',
      status: 'IN_TRANSIT',
      address: '456 CP Street, Delhi - 110001',
      redemptionComments: '',
      giftIssueId: 'GI002'
    },
    {
      id: 'SH003',
      icsId: 'ICS003',
      name: 'Sunil Gupta',
      phone: '+91-9876543212',
      dispatchDate: '2024-06-18',
      birthdayDate: '2024-06-22',
      courier: 'Blue Dart',
      awbNumber: 'BD555666777',
      pickupDate: '2024-06-18',
      deliveredDate: '',
      edd: '2024-06-22',
      status: 'RTO',
      address: '789 Park Street, Kolkata - 700001',
      redemptionComments: 'Address incomplete, returning to origin',
      giftIssueId: 'GI003'
    }
  ];

  const deliveryReport = [
    {
      giftIssueId: 'GI001',
      deliveryChannel: 'Blue Dart',
      deliveryCode: 'BD123456789',
      redemptionDate: '2024-06-24',
      redemptionComments: 'Successfully delivered',
      redemptionStatus: 'DELIVERED'
    },
    {
      giftIssueId: 'GI003',
      deliveryChannel: 'Blue Dart',
      deliveryCode: 'BD555666777',
      redemptionDate: '2024-06-22',
      redemptionComments: 'Address incomplete, returning to origin',
      redemptionStatus: 'RTO'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'DELIVERED': 'bg-green-100 text-green-800',
      'IN_TRANSIT': 'bg-blue-100 text-blue-800',
      'PICKED_UP': 'bg-yellow-100 text-yellow-800',
      'RTO': 'bg-red-100 text-red-800',
      'CANCELLED': 'bg-gray-100 text-gray-800',
      'OUT_FOR_DELIVERY': 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const filteredShipments = mockShipments.filter(shipment => {
    const searchMatch = shipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       shipment.icsId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       shipment.awbNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const statusMatch = statusFilter === 'all' || shipment.status === statusFilter;
    const courierMatch = courierFilter === 'all' || shipment.courier === courierFilter;

    return searchMatch && statusMatch && courierMatch;
  });

  const summaryStats = {
    total: filteredShipments.length,
    delivered: filteredShipments.filter(s => s.status === 'DELIVERED').length,
    inTransit: filteredShipments.filter(s => s.status === 'IN_TRANSIT').length,
    rto: filteredShipments.filter(s => s.status === 'RTO').length
  };

  const handleResend = (shipment) => {
    alert(`Initiating resend for ${shipment.name} (${shipment.icsId})`);
  };

  const handleUploadDispatchReport = () => {
    alert('Upload dispatch report functionality');
  };

  const handleUploadDeliveryReport = () => {
    alert('Upload delivery report functionality');
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.delivered}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{summaryStats.inTransit}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">RTO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{summaryStats.rto}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="tracker" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tracker">Shipment Tracker</TabsTrigger>
          <TabsTrigger value="dispatch-upload">Dispatch Upload</TabsTrigger>
          <TabsTrigger value="delivery-upload">Delivery Upload</TabsTrigger>
        </TabsList>

        <TabsContent value="tracker" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Shipment Tracking
                </CardTitle>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Tracking Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, ICS ID, AWB..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="DELIVERED">Delivered</SelectItem>
                    <SelectItem value="IN_TRANSIT">In Transit</SelectItem>
                    <SelectItem value="RTO">RTO</SelectItem>
                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={courierFilter} onValueChange={setCourierFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Courier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Couriers</SelectItem>
                    <SelectItem value="Blue Dart">Blue Dart</SelectItem>
                    <SelectItem value="Delhivery">Delhivery</SelectItem>
                    <SelectItem value="Xpressbees">Xpressbees</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Apply Filters
                </Button>
              </div>

              {/* Shipment Table */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Dispatch Date</TableHead>
                      <TableHead>Birthday Date</TableHead>
                      <TableHead>Courier Info</TableHead>
                      <TableHead>Tracking</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Delivery Info</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredShipments.map((shipment, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{shipment.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{shipment.name}</div>
                            <div className="text-sm text-gray-600">{shipment.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(shipment.dispatchDate).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(shipment.birthdayDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{shipment.courier}</div>
                            <div className="text-xs font-mono">{shipment.awbNumber}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {shipment.pickupDate && (
                              <div className="text-sm">
                                <span className="text-gray-600">Picked:</span> {new Date(shipment.pickupDate).toLocaleDateString()}
                              </div>
                            )}
                            <div className="text-sm">
                              <span className="text-gray-600">EDD:</span> {new Date(shipment.edd).toLocaleDateString()}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(shipment.status)}>
                            {shipment.status.replace('_', ' ')}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {shipment.deliveredDate && (
                              <div className="text-sm text-green-600">
                                Delivered: {new Date(shipment.deliveredDate).toLocaleDateString()}
                              </div>
                            )}
                            {shipment.redemptionComments && (
                              <div className="text-xs text-gray-600 max-w-32 truncate" title={shipment.redemptionComments}>
                                {shipment.redemptionComments}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            {shipment.status === 'RTO' && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-blue-600"
                                onClick={() => handleResend(shipment)}
                              >
                                <RotateCcw className="w-4 h-4" />
                              </Button>
                            )}
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

        <TabsContent value="dispatch-upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Dispatch Report Upload
              </CardTitle>
              <p className="text-sm text-gray-600">
                Upload dispatch data to ICS system with AWB numbers and courier details
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Format Information */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Required CSV Format</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>Columns: ICSID, Name, PhoneNo, GiftName, Qty, IssueDate, ValidFromDate, ValidTillDate, Comments, Status, DeliveryChannel, DeliveryCode</div>
                  <div className="mt-2 text-xs">
                    • GiftName: "Cake"<br />
                    • Status: "dispatched"<br />
                    • DeliveryChannel: Courier Name<br />
                    • DeliveryCode: AWB Number
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium mb-2">Upload Dispatch Report</p>
                <p className="text-sm text-gray-600 mb-4">
                  Select CSV file with dispatch data including AWB numbers
                </p>
                <Button onClick={handleUploadDispatchReport} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Choose File
                </Button>
              </div>

              {/* Sample Data Table */}
              <div>
                <h4 className="font-medium mb-3">Sample Data Format</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ICSID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>PhoneNo</TableHead>
                        <TableHead>GiftName</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead>IssueDate</TableHead>
                        <TableHead>DeliveryChannel</TableHead>
                        <TableHead>DeliveryCode</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>ICS001</TableCell>
                        <TableCell>Rajesh Kumar Sharma</TableCell>
                        <TableCell>+91-9876543210</TableCell>
                        <TableCell>Cake</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>2024-06-20</TableCell>
                        <TableCell>Blue Dart</TableCell>
                        <TableCell>BD123456789</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery-upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2" />
                Delivery Report Upload
              </CardTitle>
              <p className="text-sm text-gray-600">
                Upload delivery status updates from courier partners
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Format Information */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Required CSV Format</h4>
                <div className="text-sm text-green-700 space-y-1">
                  <div>Columns: GiftIssuedId, DeliveryChannel, DeliveryCode, RedemptionDate, RedemptionComments, RedemptionStatus</div>
                  <div className="mt-2 text-xs">
                    • RedemptionStatus: "DELIVERED", "RTO"<br />
                    • RedemptionDate: Actual delivery date<br />
                    • RedemptionComments: Delivery notes or failure reason
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium mb-2">Upload Delivery Report</p>
                <p className="text-sm text-gray-600 mb-4">
                  Select CSV file with delivery status updates
                </p>
                <Button onClick={handleUploadDeliveryReport} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Choose File
                </Button>
              </div>

              {/* Sample Delivery Data */}
              <div>
                <h4 className="font-medium mb-3">Recent Delivery Updates</h4>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Gift Issue ID</TableHead>
                        <TableHead>Delivery Channel</TableHead>
                        <TableHead>AWB Number</TableHead>
                        <TableHead>Redemption Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Comments</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deliveryReport.map((record, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{record.giftIssueId}</TableCell>
                          <TableCell>{record.deliveryChannel}</TableCell>
                          <TableCell className="font-mono text-xs">{record.deliveryCode}</TableCell>
                          <TableCell>{new Date(record.redemptionDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(record.redemptionStatus)}>
                              {record.redemptionStatus}
                            </Badge>
                          </TableCell>
                          <TableCell className="max-w-48 truncate">{record.redemptionComments}</TableCell>
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

export default ShipmentTracker;
