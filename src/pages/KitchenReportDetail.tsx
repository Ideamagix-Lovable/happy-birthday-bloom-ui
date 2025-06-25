
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChefHat, Calendar, Download, Filter, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const KitchenReportDetail = () => {
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock data
  const kitchenReportData = {
    reportDate: '2024-06-24',
    totalCakes: 88,
    totalCost: 30800,
    cakesByCategory: {
      IMUM: 42,
      ROM: 28,
      ROI: 18
    },
    cakesByStatus: {
      required: 88,
      prepared: 75,
      dispatched: 70,
      pending: 13
    },
    items: [
      {
        id: 1,
        icsId: 'ICS001',
        donorName: 'Rajesh Kumar Sharma',
        phone: '+91-9876543210',
        address: 'Mumbai - 400001',
        birthdayDate: '2024-06-28',
        dispatchDate: '2024-06-24',
        leadTimeCategory: 'IMUM',
        cakeType: 'Vanilla',
        specialInstructions: 'No eggs',
        status: 'Prepared',
        cultivator: 'Priya Devi',
        lotNumber: 'LOT240624001'
      },
      {
        id: 2,
        icsId: 'ICS002',
        donorName: 'Priya Sharma',
        phone: '+91-9876543211',
        address: 'Delhi - 110001',
        birthdayDate: '2024-06-30',
        dispatchDate: '2024-06-25',
        leadTimeCategory: 'ROI',
        cakeType: 'Chocolate',
        specialInstructions: 'Eggless, extra sweet',
        status: 'Required',
        cultivator: 'Sunil Das',
        lotNumber: 'LOT240625001'
      },
      {
        id: 3,
        icsId: 'ICS003',
        donorName: 'Sunil Gupta',
        phone: '+91-9876543212',
        address: 'Mumbai - 400002',
        birthdayDate: '2024-06-29',
        dispatchDate: '2024-06-25',
        leadTimeCategory: 'IMUM',
        cakeType: 'Vanilla',
        specialInstructions: '',
        status: 'Dispatched',
        cultivator: 'Ravi Kumar',
        lotNumber: 'LOT240625002'
      }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      'Required': 'bg-yellow-100 text-yellow-800',
      'Prepared': 'bg-blue-100 text-blue-800',
      'Dispatched': 'bg-green-100 text-green-800',
      'Pending': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'IMUM': 'bg-green-100 text-green-800',
      'ROM': 'bg-blue-100 text-blue-800',
      'ROI': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/birthday?tab=dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Kitchen Report Detail</h1>
                <p className="text-gray-600">Report Date: {new Date(kitchenReportData.reportDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Cakes Required</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">{kitchenReportData.totalCakes}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Cakes Prepared</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{kitchenReportData.cakesByStatus.prepared}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Cakes Dispatched</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{kitchenReportData.cakesByStatus.dispatched}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">₹{kitchenReportData.totalCost.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChefHat className="w-5 h-5 mr-2" />
              Cake Distribution by Lead Time Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(kitchenReportData.cakesByCategory).map(([category, count]) => (
                <div key={category} className="text-center p-4 border rounded-lg">
                  <Badge className={getCategoryColor(category)} variant="outline">
                    {category}
                  </Badge>
                  <div className="text-2xl font-bold mt-2">{count}</div>
                  <div className="text-sm text-gray-600">
                    {category === 'IMUM' ? '4 Days' : category === 'ROM' ? '5 Days' : '7 Days'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Dispatch Date</label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Required">Required</SelectItem>
                    <SelectItem value="Prepared">Prepared</SelectItem>
                    <SelectItem value="Dispatched">Dispatched</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Search</label>
                <Input placeholder="Search by name or ICS ID..." />
              </div>
              <div className="flex items-end">
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Detailed Kitchen Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ICS ID</TableHead>
                    <TableHead>Donor Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Birthday Date</TableHead>
                    <TableHead>Dispatch Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Cake Type</TableHead>
                    <TableHead>Special Instructions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Cultivator</TableHead>
                    <TableHead>Lot Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kitchenReportData.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.icsId}</TableCell>
                      <TableCell>{item.donorName}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{new Date(item.birthdayDate).toLocaleDateString()}</TableCell>
                      <TableCell>{new Date(item.dispatchDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={getCategoryColor(item.leadTimeCategory)}>
                          {item.leadTimeCategory}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.cakeType}</TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {item.specialInstructions || 'None'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.cultivator}</TableCell>
                      <TableCell className="font-mono text-sm">{item.lotNumber}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenReportDetail;
