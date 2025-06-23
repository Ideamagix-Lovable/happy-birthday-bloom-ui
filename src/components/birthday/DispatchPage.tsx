
import React, { useState } from 'react';
import { Package, Truck, Clock, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DispatchItem {
  id: string;
  lotNumber: string;
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
}

const DispatchPage = () => {
  const [selectedTab, setSelectedTab] = useState('ready-dispatch');
  const [selectedLot, setSelectedLot] = useState('');

  // Mock data
  const dispatchItems: DispatchItem[] = [
    {
      id: '1',
      lotNumber: 'LOT001',
      recipientName: 'Rajesh Kumar',
      address: '123 MG Road, Andheri',
      city: 'Mumbai',
      pincode: '400001',
      phone: '+91-9876543210',
      birthdayDate: '2025-01-05',
      region: 'IMUM',
      dispatchStatus: 'Ready to Dispatch',
      cakeType: 'Chocolate',
      estimatedDelivery: '2025-01-04',
      cultivatorComments: 'Handle with care, VIP donor'
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

  const handleBulkAction = (action: string) => {
    console.log(`Performing bulk action: ${action}`);
    // Implement bulk action logic
  };

  const handleStatusUpdate = (itemId: string, newStatus: string) => {
    console.log(`Updating item ${itemId} to status: ${newStatus}`);
    // Implement status update logic
  };

  const syncWithShiprocket = () => {
    console.log('Syncing with Shiprocket...');
    // Implement Shiprocket sync logic
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Ready to Dispatch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#f3b01b]">12</div>
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
            <div className="text-2xl font-bold text-blue-600">8</div>
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
            <div className="text-2xl font-bold text-purple-600">15</div>
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
            <div className="text-2xl font-bold text-green-600">156</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <CardTitle>Dispatch Management</CardTitle>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={syncWithShiprocket}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Shiprocket
              </Button>
              <Select value={selectedLot} onValueChange={setSelectedLot}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Lot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LOT001">LOT001</SelectItem>
                  <SelectItem value="LOT002">LOT002</SelectItem>
                  <SelectItem value="LOT003">LOT003</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Dispatch Tables */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ready-dispatch">Ready to Dispatch</TabsTrigger>
          <TabsTrigger value="ready-ship">Ready to Ship</TabsTrigger>
          <TabsTrigger value="in-transit">In Transit</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>

        <TabsContent value="ready-dispatch" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Items Ready for Dispatch</CardTitle>
              <div className="flex items-center space-x-2">
                <Button 
                  size="sm" 
                  className="bg-[#b33324] hover:bg-[#b33324]/90"
                  onClick={() => handleBulkAction('confirm')}
                >
                  Confirm Selected
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleBulkAction('reject')}
                >
                  Reject Selected
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <input type="checkbox" />
                      </TableHead>
                      <TableHead>Lot</TableHead>
                      <TableHead>Recipient</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Birthday</TableHead>
                      <TableHead>Region</TableHead>
                      <TableHead>Cake Type</TableHead>
                      <TableHead>Comments</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dispatchItems
                      .filter(item => item.dispatchStatus === 'Ready to Dispatch')
                      .map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <input type="checkbox" />
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.lotNumber}</Badge>
                        </TableCell>
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
                        <TableCell>
                          {item.cultivatorComments && (
                            <div className="text-xs bg-yellow-50 p-2 rounded border">
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
              <CardTitle>Items Ready to Ship</CardTitle>
              <Button 
                size="sm" 
                className="bg-[#b33324] hover:bg-[#b33324]/90"
                onClick={() => handleBulkAction('ship')}
              >
                Ship Selected
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No items ready to ship at the moment.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-transit" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Items in Transit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <Truck className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No items currently in transit.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Delivered Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No delivered items to display.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DispatchPage;
