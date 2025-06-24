
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Calendar, Users, Truck, Download, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LotDetail = () => {
  const { lotNumber } = useParams();
  
  // Mock data
  const lotData = {
    lotNumber: 'LOT240624001',
    createdDate: '2024-06-24',
    status: 'Active',
    totalItems: 15,
    shippedItems: 12,
    deliveredItems: 10,
    totalCost: 5250,
    courierPartner: 'Blue Dart',
    createdBy: 'Admin User',
    items: [
      {
        id: 'DQ001',
        icsId: 'ICS001',
        name: 'Rajesh Kumar Sharma',
        phone: '+91-9876543210',
        address: 'Mumbai - 400001',
        status: 'Delivered',
        awbNumber: 'BD123456789',
        dispatchDate: '2024-06-24',
        deliveryDate: '2024-06-26'
      },
      {
        id: 'DQ002',
        icsId: 'ICS002', 
        name: 'Priya Sharma',
        phone: '+91-9876543211',
        address: 'Delhi - 110001',
        status: 'Shipped',
        awbNumber: 'BD123456790',
        dispatchDate: '2024-06-24',
        deliveryDate: null
      },
      {
        id: 'DQ003',
        icsId: 'ICS003',
        name: 'Sunil Gupta',
        phone: '+91-9876543212',
        address: 'Mumbai - 400002',
        status: 'Processing',
        awbNumber: '',
        dispatchDate: '2024-06-25',
        deliveryDate: null
      }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      'Processing': 'bg-blue-100 text-blue-800',
      'Shipped': 'bg-purple-100 text-purple-800',
      'Delivered': 'bg-green-100 text-green-800',
      'RTO': 'bg-red-100 text-red-800',
      'Active': 'bg-blue-100 text-blue-800',
      'Completed': 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/birthday?tab=queue">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Queue
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lot Details</h1>
                <p className="text-gray-600">{lotData.lotNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Lot
              </Button>
              <Button variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Lot
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Summary Cards */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">{lotData.totalItems}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Shipped</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{lotData.shippedItems}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{lotData.deliveredItems}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">₹{lotData.totalCost.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Lot Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All ({lotData.items.length})</TabsTrigger>
                    <TabsTrigger value="processing">Processing</TabsTrigger>
                    <TabsTrigger value="shipped">Shipped</TabsTrigger>
                    <TabsTrigger value="delivered">Delivered</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ICS ID</TableHead>
                            <TableHead>Donor Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>AWB Number</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {lotData.items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.icsId}</TableCell>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.phone}</TableCell>
                              <TableCell>{item.address}</TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(item.status)}>
                                  {item.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-mono text-sm">
                                {item.awbNumber || '-'}
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="processing">
                    <div className="text-center py-8 text-gray-500">
                      Processing items will appear here
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="shipped">
                    <div className="text-center py-8 text-gray-500">
                      Shipped items will appear here
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="delivered">
                    <div className="text-center py-8 text-gray-500">
                      Delivered items will appear here
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lot Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Lot Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Lot Number</label>
                  <p className="text-lg font-semibold">{lotData.lotNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Created Date</label>
                  <p>{new Date(lotData.createdDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <div className="mt-1">
                    <Badge className={getStatusColor(lotData.status)}>
                      {lotData.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Created By</label>
                  <p>{lotData.createdBy}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Courier Partner</label>
                  <p>{lotData.courierPartner}</p>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Shipped Progress</span>
                    <span className="text-sm text-gray-600">
                      {lotData.shippedItems}/{lotData.totalItems}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(lotData.shippedItems / lotData.totalItems) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Delivery Progress</span>
                    <span className="text-sm text-gray-600">
                      {lotData.deliveredItems}/{lotData.totalItems}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(lotData.deliveredItems / lotData.totalItems) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Truck className="w-4 h-4 mr-2" />
                  Sync with ShipRocket
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Manifest
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Mark as Complete
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotDetail;
