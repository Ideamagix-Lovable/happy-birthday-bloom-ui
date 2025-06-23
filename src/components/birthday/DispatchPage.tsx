
import React, { useState } from 'react';
import { Package, Truck, Clock, RefreshCw, AlertCircle, CheckCircle, FileDown, Upload, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DispatchItem {
  id: string;
  lotNumber: string;
  icsId: string;
  recipientName: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  birthdayDate: string;
  region: string;
  dispatchStatus: 'Ready to Dispatch' | 'Ready to Ship' | 'Dispatched' | 'Delivered' | 'RTO' | 'Rejected';
  trackingId?: string;
  cakeType: string;
  estimatedDelivery: string;
  cultivatorComments?: string;
  courierName?: string;
  dispatchedDate?: string;
  pickedDate?: string;
  deliveredDate?: string;
  edd?: string;
  rtoReason?: string;
  cost: number;
  orderId?: string;
  shiprocketOrderId?: string;
  giftIssuedId?: string;
  returnReason?: string;
}

const DispatchPage = () => {
  const [selectedTab, setSelectedTab] = useState('ready-dispatch');
  const [selectedLot, setSelectedLot] = useState('');
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [rejectReason, setRejectReason] = useState('');

  // Mock data with comprehensive fields
  const dispatchItems: DispatchItem[] = [
    {
      id: '1',
      lotNumber: 'LOT001-240625',
      icsId: 'ICS001',
      recipientName: 'Rajesh Kumar Sharma',
      address: '123 MG Road, Andheri West',
      city: 'Mumbai',
      pincode: '400001',
      phone: '+91-9876543210',
      birthdayDate: '2025-01-05',
      region: 'IMUM',
      dispatchStatus: 'Ready to Dispatch',
      cakeType: 'Chocolate',
      estimatedDelivery: '2025-01-04',
      cultivatorComments: 'VIP donor, handle with care',
      cost: 350,
      orderId: 'ORD001'
    },
    {
      id: '2',
      lotNumber: 'LOT001-240625',
      icsId: 'ICS002',
      recipientName: 'Priya Sharma',
      address: '456 CP Street, Connaught Place',
      city: 'Delhi',
      pincode: '110001',
      phone: '+91-9876543211',
      birthdayDate: '2025-01-06',
      region: 'ROI',
      dispatchStatus: 'Ready to Ship',
      cakeType: 'Vanilla',
      estimatedDelivery: '2025-01-05',
      courierName: 'Blue Dart',
      cost: 350,
      orderId: 'ORD002',
      shiprocketOrderId: 'SR123456'
    },
    {
      id: '3',
      lotNumber: 'LOT002-240626',
      icsId: 'ICS003',
      recipientName: 'Sunil Gupta',
      address: '789 Brigade Road',
      city: 'Bangalore',
      pincode: '560001',
      phone: '+91-9876543212',
      birthdayDate: '2024-12-20',
      region: 'ROI',
      dispatchStatus: 'Dispatched',
      cakeType: 'Black Forest',
      estimatedDelivery: '2024-12-19',
      trackingId: 'BD123456789',
      courierName: 'Blue Dart',
      dispatchedDate: '2024-12-15',
      pickedDate: '2024-12-16',
      edd: '2024-12-19',
      cost: 350,
      orderId: 'ORD003',
      shiprocketOrderId: 'SR123457',
      giftIssuedId: 'GI001'
    },
    {
      id: '4',
      lotNumber: 'LOT002-240626',
      icsId: 'ICS004',
      recipientName: 'Anita Patel',
      address: '321 SG Highway',
      city: 'Ahmedabad',
      pincode: '380001',
      phone: '+91-9876543213',
      birthdayDate: '2024-12-18',
      region: 'ROI',
      dispatchStatus: 'Delivered',
      cakeType: 'Fruit Cake',
      estimatedDelivery: '2024-12-17',
      trackingId: 'XB987654321',
      courierName: 'Xpressbees',
      dispatchedDate: '2024-12-13',
      pickedDate: '2024-12-14',
      deliveredDate: '2024-12-17',
      cost: 350,
      orderId: 'ORD004',
      shiprocketOrderId: 'SR123458',
      giftIssuedId: 'GI002'
    },
    {
      id: '5',
      lotNumber: 'LOT003-240627',
      icsId: 'ICS005',
      recipientName: 'Deepak Shah',
      address: '555 Park Street',
      city: 'Kolkata',
      pincode: '700001',
      phone: '+91-9876543214',
      birthdayDate: '2024-12-25',
      region: 'ROI',
      dispatchStatus: 'RTO',
      cakeType: 'Chocolate',
      estimatedDelivery: '2024-12-24',
      trackingId: 'DL456789123',
      courierName: 'Delhivery',
      dispatchedDate: '2024-12-20',
      pickedDate: '2024-12-21',
      rtoReason: 'Address not found',
      cost: 350,
      orderId: 'ORD005',
      shiprocketOrderId: 'SR123459',
      giftIssuedId: 'GI003',
      returnReason: 'Incorrect address provided'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Ready to Dispatch': 'bg-yellow-100 text-yellow-800',
      'Ready to Ship': 'bg-blue-100 text-blue-800',
      'Dispatched': 'bg-purple-100 text-purple-800',
      'Delivered': 'bg-green-100 text-green-800',
      'RTO': 'bg-red-100 text-red-800',
      'Rejected': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusCounts = () => {
    return {
      readyToDispatch: dispatchItems.filter(item => item.dispatchStatus === 'Ready to Dispatch').length,
      readyToShip: dispatchItems.filter(item => item.dispatchStatus === 'Ready to Ship').length,
      dispatched: dispatchItems.filter(item => item.dispatchStatus === 'Dispatched').length,
      delivered: dispatchItems.filter(item => item.dispatchStatus === 'Delivered').length,
      rto: dispatchItems.filter(item => item.dispatchStatus === 'RTO').length,
      rejected: dispatchItems.filter(item => item.dispatchStatus === 'Rejected').length
    };
  };

  const statusCounts = getStatusCounts();

  const handleBulkAction = (action: string) => {
    console.log(`Performing bulk action: ${action} on items:`, selectedItems);
    if (action === 'reject') {
      setShowRejectDialog(true);
    } else {
      // Process other bulk actions
      alert(`Bulk action '${action}' performed on ${selectedItems.length} items`);
      setSelectedItems([]);
    }
  };

  const handleStatusUpdate = (itemId: string, newStatus: string) => {
    console.log(`Updating item ${itemId} to status: ${newStatus}`);
    // Implement status update logic
  };

  const handleRejectItems = () => {
    console.log(`Rejecting items:`, selectedItems, 'Reason:', rejectReason);
    setShowRejectDialog(false);
    setRejectReason('');
    setSelectedItems([]);
    alert(`${selectedItems.length} items rejected successfully`);
  };

  const syncWithShiprocket = () => {
    console.log('Syncing with Shiprocket...');
    alert('Syncing with Shiprocket... This will update tracking information and delivery status.');
  };

  const handleResend = (item: DispatchItem) => {
    console.log('Initiating resend for item:', item.id);
    alert(`Resend initiated for ${item.recipientName}. New order will be created in Ready to Ship queue.`);
  };

  const exportReport = (type: string) => {
    console.log(`Exporting ${type} report...`);
    alert(`${type} report exported successfully`);
  };

  const generateLot = () => {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '').substring(2);
    const lotNumber = `LOT${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}-${today}`;
    console.log('Generated lot number:', lotNumber);
    setSelectedLot(lotNumber);
  };

  const filteredItems = (status: string) => {
    return dispatchItems.filter(item => item.dispatchStatus === status);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Ready to Dispatch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#f3b01b]">{statusCounts.readyToDispatch}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Package className="w-4 h-4 mr-2" />
              Ready to Ship
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{statusCounts.readyToShip}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Truck className="w-4 h-4 mr-2" />
              In Transit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{statusCounts.dispatched}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Delivered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{statusCounts.delivered}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" />
              RTO
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{statusCounts.rto}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              Rejected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{statusCounts.rejected}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <CardTitle>Dispatch Management & Lot System</CardTitle>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={syncWithShiprocket}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Shiprocket
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={generateLot}
              >
                Generate Lot
              </Button>
              <Select value={selectedLot} onValueChange={setSelectedLot}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select/Create Lot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LOT001-240625">LOT001-240625</SelectItem>
                  <SelectItem value="LOT002-240626">LOT002-240626</SelectItem>
                  <SelectItem value="LOT003-240627">LOT003-240627</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded">
              <div className="text-lg font-bold">₹{(statusCounts.readyToDispatch * 350).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Pending Cost</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded">
              <div className="text-lg font-bold">₹{(statusCounts.delivered * 350).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Delivered Cost</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded">
              <div className="text-lg font-bold">₹{(statusCounts.rto * 350).toLocaleString()}</div>
              <div className="text-sm text-gray-600">RTO Loss</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <div className="text-lg font-bold">₹{(dispatchItems.length * 350).toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Value</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dispatch Tables */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="ready-dispatch">Ready to Dispatch</TabsTrigger>
          <TabsTrigger value="ready-ship">Ready to Ship</TabsTrigger>
          <TabsTrigger value="dispatched">In Transit</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="rto">RTO</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="ready-dispatch" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Items Ready for Dispatch ({filteredItems('Ready to Dispatch').length})</CardTitle>
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  className="bg-[#b33324] hover:bg-[#b33324]/90"
                  onClick={() => handleBulkAction('confirm')}
                  disabled={selectedItems.length === 0}
                >
                  Confirm Selected ({selectedItems.length})
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleBulkAction('reject')}
                  disabled={selectedItems.length === 0}
                >
                  Reject Selected
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => exportReport('Ready to Dispatch')}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <input 
                          type="checkbox" 
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedItems(filteredItems('Ready to Dispatch').map(item => item.id));
                            } else {
                              setSelectedItems([]);
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>Lot/Order</TableHead>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Birthday</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Cake Type</TableHead>
                      <TableHead>Cost</TableHead>
                      <TableHead>Comments</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems('Ready to Dispatch').map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <input 
                            type="checkbox" 
                            checked={selectedItems.includes(item.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedItems([...selectedItems, item.id]);
                              } else {
                                setSelectedItems(selectedItems.filter(id => id !== item.id));
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge variant="outline" className="text-xs">{item.lotNumber}</Badge>
                            <div className="text-xs text-gray-500">{item.orderId}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{item.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{item.recipientName}</div>
                            <div className="text-xs text-gray-500">{item.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm max-w-48">
                            {item.address}<br />
                            {item.city} - {item.pincode}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm">{new Date(item.birthdayDate).toLocaleDateString()}</div>
                            <div className="text-xs text-gray-500">
                              {Math.ceil((new Date(item.birthdayDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{item.region}</Badge>
                        </TableCell>
                        <TableCell>{item.cakeType}</TableCell>
                        <TableCell>₹{item.cost}</TableCell>
                        <TableCell>
                          {item.cultivatorComments && (
                            <div className="text-xs bg-yellow-50 p-2 rounded border max-w-32">
                              {item.cultivatorComments}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleStatusUpdate(item.id, 'Ready to Ship')}
                            >
                              Confirm
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleStatusUpdate(item.id, 'Rejected')}
                            >
                              Reject
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

        <TabsContent value="ready-ship" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Items Ready to Ship ({filteredItems('Ready to Ship').length})</CardTitle>
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  className="bg-[#b33324] hover:bg-[#b33324]/90"
                  onClick={() => handleBulkAction('ship')}
                >
                  Ship to Shiprocket
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => exportReport('Ready to Ship')}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Lot/Order</TableHead>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Courier</TableHead>
                      <TableHead>Shiprocket ID</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems('Ready to Ship').map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge variant="outline">{item.lotNumber}</Badge>
                            <div className="text-xs text-gray-500">{item.orderId}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{item.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{item.recipientName}</div>
                            <div className="text-xs text-gray-500">{item.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {item.address}<br />
                            {item.city} - {item.pincode}
                          </div>
                        </TableCell>
                        <TableCell>{item.courierName || 'Not Assigned'}</TableCell>
                        <TableCell className="font-mono text-xs">{item.shiprocketOrderId}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={() => handleStatusUpdate(item.id, 'Dispatched')}
                            >
                              Ship
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleStatusUpdate(item.id, 'Rejected')}
                            >
                              Reject
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

        <TabsContent value="dispatched" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Items in Transit ({filteredItems('Dispatched').length})</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => exportReport('In Transit')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Tracking ID</TableHead>
                      <TableHead>Courier</TableHead>
                      <TableHead>Dispatched</TableHead>
                      <TableHead>Picked</TableHead>
                      <TableHead>EDD</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems('Dispatched').map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{item.recipientName}</div>
                            <div className="text-xs text-gray-500">{item.city}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{item.trackingId}</TableCell>
                        <TableCell>{item.courierName}</TableCell>
                        <TableCell className="text-sm">{item.dispatchedDate ? new Date(item.dispatchedDate).toLocaleDateString() : '-'}</TableCell>
                        <TableCell className="text-sm">{item.pickedDate ? new Date(item.pickedDate).toLocaleDateString() : '-'}</TableCell>
                        <TableCell className="text-sm">{item.edd ? new Date(item.edd).toLocaleDateString() : '-'}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">In Transit</Badge>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStatusUpdate(item.id, 'Rejected')}
                          >
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Delivered Items ({filteredItems('Delivered').length})</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => exportReport('Delivered')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export ICS Format
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Gift Issued ID</TableHead>
                      <TableHead>Tracking ID</TableHead>
                      <TableHead>Courier</TableHead>
                      <TableHead>Delivered Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems('Delivered').map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{item.recipientName}</div>
                            <div className="text-xs text-gray-500">{item.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{item.giftIssuedId}</TableCell>
                        <TableCell className="font-mono text-xs">{item.trackingId}</TableCell>
                        <TableCell>{item.courierName}</TableCell>
                        <TableCell className="text-sm">{item.deliveredDate ? new Date(item.deliveredDate).toLocaleDateString() : '-'}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">DELIVERED</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rto" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>RTO Items ({filteredItems('RTO').length})</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => exportReport('RTO')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ICS ID</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Tracking ID</TableHead>
                      <TableHead>Courier</TableHead>
                      <TableHead>RTO Reason</TableHead>
                      <TableHead>Return Reason</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems('RTO').map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.icsId}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{item.recipientName}</div>
                            <div className="text-xs text-gray-500">{item.city}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs">{item.trackingId}</TableCell>
                        <TableCell>{item.courierName}</TableCell>
                        <TableCell className="text-sm text-red-600">{item.rtoReason}</TableCell>
                        <TableCell className="text-sm">{item.returnReason}</TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            className="bg-[#b33324] hover:bg-[#b33324]/90"
                            onClick={() => handleResend(item)}
                          >
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Resend
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Rejected Items ({filteredItems('Rejected').length})</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => exportReport('Rejected')}
              >
                <FileDown className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No rejected items at the moment.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reject Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject Items</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Are you sure you want to reject {selectedItems.length} selected items?</p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rejection Reason
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b33324] focus:border-transparent"
                rows={3}
                placeholder="Enter reason for rejection..."
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
                Cancel
              </Button>
              <Button 
                className="bg-red-600 hover:bg-red-700" 
                onClick={handleRejectItems}
                disabled={!rejectReason.trim()}
              >
                Reject Items
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DispatchPage;
