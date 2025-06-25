import React, { useState } from 'react';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, Eye, Edit, Check, X, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PlanningReport = () => {
  const [dateFilter, setDateFilter] = useState('');
  const [cultivatorFilter, setCultivatorFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const mockPlanningData = [
    {
      id: 'BD001',
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
      status: 'Approved',
      cakeType: 'Vanilla',
      specialInstructions: 'No eggs',
      priority: 'High',
      eligibility: 'Eligible',
      familyDonation: 25000
    },
    {
      id: 'BD002',
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
      status: 'Pending Confirmation',
      cakeType: 'Chocolate',
      specialInstructions: 'Eggless, extra sweet',
      priority: 'Normal',
      eligibility: 'Eligible',
      familyDonation: 12000
    },
    {
      id: 'BD003',
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
      status: 'No Cultivator',
      cakeType: 'Vanilla',
      specialInstructions: '',
      priority: 'High',
      eligibility: 'Eligible',
      familyDonation: 8000
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-800',
      'Pending Confirmation': 'bg-yellow-100 text-yellow-800',
      'No Cultivator': 'bg-gray-100 text-gray-800'
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

  const getLeadTimeColor = (leadTimeCategory) => {
    const colors = {
      'IMUM': 'bg-green-100 text-green-800',
      'ROM': 'bg-blue-100 text-blue-800',
      'ROI': 'bg-purple-100 text-purple-800'
    };
    return colors[leadTimeCategory] || 'bg-gray-100 text-gray-800';
  };

  const getRowHighlight = (item) => {
    if (item.eligibility !== 'Eligible') {
      return 'bg-red-50 hover:bg-red-100';
    }
    if (item.familyDonation < 10000) {
      return 'bg-yellow-50 hover:bg-yellow-100';
    }
    return 'hover:bg-gray-50';
  };

  const filteredData = mockPlanningData.filter(item => {
    const dateMatch = dateFilter === '' || item.dispatchDate === dateFilter;
    const cultivatorMatch = cultivatorFilter === 'all' || item.cultivator === cultivatorFilter;
    const statusMatch = statusFilter === 'all' || item.status === statusFilter;
    return dateMatch && cultivatorMatch && statusMatch;
  });

  const summaryStats = {
    total: filteredData.length,
    approved: filteredData.filter(item => item.status === 'Approved').length,
    pending: filteredData.filter(item => item.status === 'Pending Confirmation').length,
    highPriority: filteredData.filter(item => item.priority === 'High').length
  };

  const cultivators = [...new Set(mockPlanningData.map(item => item.cultivator))];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{summaryStats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{summaryStats.approved}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Confirmation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{summaryStats.highPriority}</div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Planning Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <Input
              type="date"
              placeholder="Filter by Date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
            <Select value={cultivatorFilter} onValueChange={setCultivatorFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Cultivator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cultivators</SelectItem>
                {cultivators.map(cultivator => (
                  <SelectItem key={cultivator} value={cultivator}>{cultivator}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ICS/DMS ID</TableHead>
                  <TableHead>Donor Details</TableHead>
                  <TableHead>Dispatch Info</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Cultivator</TableHead>
                  <TableHead>Cake Details</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item, index) => (
                  <TableRow key={index} className={getRowHighlight(item)}>
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
                        <Badge variant="outline" className={getLeadTimeColor(item.leadTimeCategory) + " text-xs"}>
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
                      <div className="text-sm">
                        {item.cultivator}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{item.cakeType}</div>
                        {item.specialInstructions && (
                          <div className="text-xs text-gray-600">{item.specialInstructions}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(item.priority)}>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Link to={`/birthday/dispatch/${item.id}`}>
                          <Button variant="ghost" size="sm" title="View Details">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Link to={`/birthday/dispatch/edit/${item.id}`}>
                          <Button variant="ghost" size="sm" title="Edit">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="text-green-600" title="Approve">
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600" title="Reject">
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

      {/* Cultivator Assignments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Cultivator Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cultivators.map(cultivator => {
              const assignedCount = mockPlanningData.filter(item => item.cultivator === cultivator).length;
              return (
                <div key={cultivator} className="p-4 border rounded-lg">
                  <h4 className="font-medium">{cultivator}</h4>
                  <div className="text-sm text-gray-600">
                    {assignedCount} assignments
                  </div>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    View Details
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanningReport;
