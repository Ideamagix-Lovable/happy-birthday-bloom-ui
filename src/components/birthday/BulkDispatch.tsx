
import React, { useState } from 'react';
import { Package, Upload, Download, FileText, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BulkDispatch = () => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [batchName, setBatchName] = useState('');
  const [courierPartner, setCourierPartner] = useState('');
  const [comments, setComments] = useState('');

  const mockOrders = [
    {
      id: 'ORD001',
      icsId: 'ICS001',
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      address: 'Mumbai, Maharashtra',
      cakeType: 'Chocolate',
      priority: 'High',
      status: 'Ready'
    },
    {
      id: 'ORD002',
      icsId: 'ICS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      address: 'Delhi, Delhi',
      cakeType: 'Vanilla',
      priority: 'Normal',
      status: 'Ready'
    },
    {
      id: 'ORD003',
      icsId: 'ICS003',
      name: 'Sunil Gupta',
      phone: '+91-9876543212',
      address: 'Bangalore, Karnataka',
      cakeType: 'Black Forest',
      priority: 'High',
      status: 'Ready'
    }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(mockOrders.map(order => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleProcessBulk = () => {
    if (selectedOrders.length === 0) {
      alert('Please select orders to process');
      return;
    }
    alert(`Processing ${selectedOrders.length} orders in bulk batch: ${batchName}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Package className="w-6 h-6 text-[#b33324]" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bulk Dispatch</h1>
            <p className="text-gray-600">Process multiple orders simultaneously</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Import Orders
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Template
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{mockOrders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Selected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{selectedOrders.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockOrders.filter(order => order.priority === 'High').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Estimated Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹{(selectedOrders.length * 350).toLocaleString()}</div>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Processing Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Batch Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name</label>
              <Input 
                placeholder="Enter batch name..."
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Courier Partner</label>
              <Select value={courierPartner} onValueChange={setCourierPartner}>
                <SelectTrigger>
                  <SelectValue placeholder="Select courier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue-dart">Blue Dart</SelectItem>
                  <SelectItem value="delhivery">Delhivery</SelectItem>
                  <SelectItem value="xpressbees">Xpressbees</SelectItem>
                  <SelectItem value="dtdc">DTDC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleProcessBulk} 
                className="bg-[#b33324] hover:bg-[#b33324]/90 w-full"
                disabled={selectedOrders.length === 0}
              >
                Process Bulk ({selectedOrders.length})
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Batch Comments</label>
            <Textarea 
              placeholder="Add comments for this batch..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders Ready for Bulk Processing</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input 
                    type="checkbox" 
                    checked={selectedOrders.length === mockOrders.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                </TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>ICS ID</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Cake Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <input 
                      type="checkbox" 
                      checked={selectedOrders.includes(order.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedOrders([...selectedOrders, order.id]);
                        } else {
                          setSelectedOrders(selectedOrders.filter(id => id !== order.id));
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.icsId}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.name}</div>
                      <div className="text-sm text-gray-500">{order.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.cakeType}</TableCell>
                  <TableCell>
                    <Badge className={order.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}>
                      {order.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">{order.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BulkDispatch;
