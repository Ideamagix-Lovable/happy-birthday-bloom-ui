
import React, { useState } from 'react';
import { Package, Calendar, User, Truck, Edit, Check, X, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const DispatchQueue = () => {
  const [lotFilter, setLotFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [courierFilter, setCourierFilter] = useState('all');

  const mockQueueData = [
    {
      id: 'DQ001',
      icsId: 'ICS001',
      dmsId: 'DMS001',
      name: 'Rajesh Kumar Sharma',
      phone: '+91-9876543210',
      dispatchDate: '2024-06-24',
      birthdayDate: '2024-06-28',
      leadTime: 4,
      leadTimeCategory: 'IMUM',
      address: '123 MG Road, Mumbai - 400001',
      cultivator: 'Priya Devi',
      lotNumber: 'LOT240624001',
      courierInfo: 'Blue Dart',
      status: 'Ready for Shipment',
      awbNumber: '',
      estimatedCost: 350,
      priority: 'High'
    },
    {
      id: 'DQ002',
      icsId: 'ICS002',
      dmsId: 'DMS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      dispatchDate: '2024-06-23',
      birthdayDate: '2024-06-30',
      leadTime: 7,
      leadTimeCategory: 'ROI',
      address: '456 CP Street, Delhi - 110001',
      cultivator: 'Sunil Das',
      lotNumber: 'LOT240623001',
      courierInfo: 'Delhivery',
      status: 'Shipped',
      awbNumber: 'DEL123456789',
      estimatedCost: 350,
      priority: 'Normal'
    },
    {
      id: 'DQ003',
      icsId: 'ICS003',
      dmsId: 'DMS003',
      name: 'Sunil Gupta',
      phone: '+91-9876543212',
      dispatchDate: '2024-06-25',
      birthdayDate: '2024-06-29',
      leadTime: 4,
      leadTimeCategory: 'IMUM',
      address: '789 Park Street, Mumbai - 400002',
      cultivator: 'Ravi Kumar',
      lotNumber: 'LOT240625001',
      courierInfo: 'Blue Dart',
      status: 'Processing',
      awbNumber: '',
      estimatedCost: 350,
      priority: 'High'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Ready for Shipment': 'bg-yellow-100 text-yellow-800',
      'Processing': 'bg-blue-100 text-blue-800',
      'Shipped': 'bg-green-100 text-green-800',
      'Delivered': 'bg-green-100 text-green-800',
      'RTO': 'bg-red-100 text-red-800',
      'Cancelled': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Normal': 'bg-blue-100 text-blue-800',
      'Low': 'bg-gray-100 text-gray-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  const filteredData = mockQueueData.filter(item => {
    const lotMatch = lotFilter === 'all' || item.lotNumber === lotFilter;
    const statusMatch = statusFilter === 'all' || item.status === statusFilter;
    const courierMatch = courierFilter === 'all' || item.courierInfo === courierFilter;
    return lotMatch && statusMatch && courierMatch;
  });

  const lotNumbers = [...new Set(mockQueueData.map(item => item.lotNumber))];
  const statuses = [...new Set(mockQueueData.map(item => item.status))];
  const couriers = [...new Set(mockQueueData.map(item => item.courierInfo))];

  const summaryStats = {
    total: filteredData.length,
    readyForShipment: filteredData.filter(item => item.status === 'Ready for Shipment').length,
    processing: filteredData.filter(item => item.status === 'Processing').length,
    shipped: filteredData.filter(item => item.status === 'Shipped').length,
    totalCost: filteredData.reduce((sum, item) => sum + item.estimatedCost, 0)
  };

  const handleBulkApprove = () => {
    alert('Bulk approval initiated for selected items');
  };

  const handleShipRocketSync = () => {
    alert('Syncing with ShipRocket API...');
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Ready for Shipment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.readyForShipment}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{summaryStats.processing}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Shipped</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.shipped}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">₹{summaryStats.totalCost.toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <CardTitle className="flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Dispatch Queue Management
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button onClick={handleBulkApprove} className="bg-[#b33324] hover:bg-[#b33324]/90">
                <Check className="w-4 h-4 mr-2" />
                Bulk Approve
              </Button>
              <Button onClick={handleShipRocketSync} variant="outline">
                <Truck className="w-4 h-4 mr-2" />
                Sync ShipRocket
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select value={lotFilter} onValueChange={setLotFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Lot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Lots</SelectItem>
                {lotNumbers.map(lot => (
                  <SelectItem key={lot} value={lot}>{lot}</SelectItem>
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
            <Select value={courierFilter} onValueChange={setCourierFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Courier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Couriers</SelectItem>
                {couriers.map(courier => (
                  <SelectItem key={courier} value={courier}>{courier}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <input type="checkbox" className="rounded" />
                  </TableHead>
                  <TableHead>ICS/DMS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Dispatch Info</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Lot & Courier</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" className="rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium text-sm">ICS: {item.icsId}</div>
                        <div className="text-sm text-gray-600">DMS: {item.dmsId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.phone}</div>
                        <div className="text-xs text-gray-500">
                          Cultivator: {item.cultivator}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="font-medium">Dispatch:</span> {new Date(item.dispatchDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Birthday:</span> {new Date(item.birthdayDate).toLocaleDateString()}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.leadTime} days ({item.leadTimeCategory})
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm max-w-48 truncate" title={item.address}>
                        {item.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{item.lotNumber}</div>
                        <div className="text-sm text-gray-600">{item.courierInfo}</div>
                        {item.awbNumber && (
                          <div className="text-xs text-blue-600 font-mono">{item.awbNumber}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(item.priority)}>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Link to={`/birthday/queue/edit/${item.id}`}>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <X className="w-4 h-4" />
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

      {/* Lot Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Lot Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {lotNumbers.map(lotNumber => {
              const lotItems = mockQueueData.filter(item => item.lotNumber === lotNumber);
              const lotStatus = lotItems.every(item => item.status === 'Shipped') ? 'Completed' : 'Active';
              
              return (
                <div key={lotNumber} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{lotNumber}</h4>
                    <Badge className={lotStatus === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                      {lotStatus}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Items: {lotItems.length}</div>
                    <div>Total Cost: ₹{(lotItems.length * 350).toLocaleString()}</div>
                    <div>Date: {lotItems[0]?.dispatchDate}</div>
                  </div>
                  <Link to={`/birthday/lot/${lotNumber}`}>
                    <Button size="sm" variant="outline" className="mt-2 w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DispatchQueue;
