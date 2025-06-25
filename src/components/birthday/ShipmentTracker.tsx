import React, { useState } from 'react';
import { Package, Calendar, User, Truck, Edit, Check, X, Filter, Download, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const ShipmentTracker = () => {
  const [courierFilter, setCourierFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');

  const mockShipmentData = [
    {
      awbNumber: 'BD123456789',
      orderID: 'ORD240624001',
      icsId: 'ICS001',
      donorName: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      address: '123 MG Road, Andheri West, Mumbai - 400058, Maharashtra',
      courierPartner: 'Blue Dart',
      currentStatus: 'Out for Delivery',
      dispatchDate: '2024-06-24',
      expectedDelivery: '2024-06-28'
    },
    {
      awbNumber: 'DEL987654321',
      orderID: 'ORD240623002',
      icsId: 'ICS002',
      donorName: 'Priya Sharma',
      phone: '+91-9876543211',
      address: '456 CP Street, Delhi - 110001',
      courierPartner: 'Delhivery',
      currentStatus: 'Shipped',
      dispatchDate: '2024-06-23',
      expectedDelivery: '2024-06-29'
    },
    {
      awbNumber: 'XPS567890123',
      orderID: 'ORD240625003',
      icsId: 'ICS003',
      donorName: 'Sunil Gupta',
      phone: '+91-9876543212',
      address: '789 Park Street, Mumbai - 400002',
      courierPartner: 'Xpressbees',
      currentStatus: 'In Transit',
      dispatchDate: '2024-06-25',
      expectedDelivery: '2024-06-30'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Shipped': 'bg-blue-100 text-blue-800',
      'In Transit': 'bg-purple-100 text-purple-800',
      'Out for Delivery': 'bg-green-100 text-green-800',
      'Delivered': 'bg-green-100 text-green-800',
      'RTO': 'bg-red-100 text-red-800',
      'Delayed': 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const filteredData = mockShipmentData.filter(item => {
    const courierMatch = courierFilter === 'all' || item.courierPartner === courierFilter;
    const statusMatch = statusFilter === 'all' || item.currentStatus === statusFilter;
    const dateMatch = dateFilter === '' || item.dispatchDate === dateFilter;
    return courierMatch && statusMatch && dateMatch;
  });

  const courierPartners = [...new Set(mockShipmentData.map(item => item.courierPartner))];
  const statuses = [...new Set(mockShipmentData.map(item => item.currentStatus))];

  const summaryStats = {
    total: filteredData.length,
    shipped: filteredData.filter(item => item.currentStatus === 'Shipped').length,
    inTransit: filteredData.filter(item => item.currentStatus === 'In Transit').length,
    outForDelivery: filteredData.filter(item => item.currentStatus === 'Out for Delivery').length,
    delivered: filteredData.filter(item => item.currentStatus === 'Delivered').length
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
            <CardTitle className="text-sm font-medium text-gray-600">Shipped</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{summaryStats.shipped}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">In Transit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{summaryStats.inTransit}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Out for Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.outForDelivery}</div>
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
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <CardTitle className="flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Shipment Tracking
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select value={courierFilter} onValueChange={setCourierFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Courier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Couriers</SelectItem>
                {courierPartners.map(courier => (
                  <SelectItem key={courier} value={courier}>{courier}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="date"
              placeholder="Filter by Date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>AWB Number</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Recipient Details</TableHead>
                  <TableHead>Courier Partner</TableHead>
                  <TableHead>Dispatch Date</TableHead>
                  <TableHead>Expected Delivery</TableHead>
                  <TableHead>Current Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Link 
                        to={`/birthday/shipment/${item.awbNumber}`}
                        className="text-blue-600 hover:text-blue-800 font-mono text-sm"
                      >
                        {item.awbNumber}
                      </Link>
                    </TableCell>
                    <TableCell>{item.orderID}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{item.donorName}</div>
                        <div className="text-sm text-gray-600">{item.phone}</div>
                        <div className="text-xs text-gray-500">{item.address}</div>
                      </div>
                    </TableCell>
                    <TableCell>{item.courierPartner}</TableCell>
                    <TableCell>{new Date(item.dispatchDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(item.expectedDelivery).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(item.currentStatus)}>
                        {item.currentStatus}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Delivery Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-xl font-bold text-green-600">{summaryStats.delivered}</div>
              <div className="text-sm text-gray-600">Total Delivered</div>
            </div>
            <div>
              <div className="text-xl font-bold text-yellow-600">{summaryStats.outForDelivery}</div>
              <div className="text-sm text-gray-600">Out for Delivery</div>
            </div>
            <div>
              <div className="text-xl font-bold text-purple-600">{summaryStats.inTransit}</div>
              <div className="text-sm text-gray-600">In Transit</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShipmentTracker;
