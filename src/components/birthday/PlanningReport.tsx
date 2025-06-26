
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, FileText, Users, Package, Clock, MapPin } from 'lucide-react';

const PlanningReport = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for planning report
  const planningData = [
    {
      id: 'ICS001',
      name: 'Rajesh Kumar',
      dob: '1985-06-26',
      phone: '9876543210',
      city: 'Mumbai',
      address: 'Andheri West, Mumbai - 400058',
      cakeType: 'Chocolate',
      status: 'Pending Planning',
      priority: 'High',
      leadTime: 3,
      estimatedCost: 500,
      cultivator: 'Priya Devi'
    },
    {
      id: 'ICS002',
      name: 'Priya Sharma',
      dob: '1990-06-26',
      phone: '9123456789',
      city: 'Delhi',
      address: 'Connaught Place, New Delhi - 110001',
      cakeType: 'Vanilla',
      status: 'Planned',
      priority: 'Medium',
      leadTime: 5,
      estimatedCost: 450,
      cultivator: 'Sunil Das'
    },
    {
      id: 'ICS003',
      name: 'Amit Patel',
      dob: '1988-06-26',
      phone: '9988776655',
      city: 'Ahmedabad',
      address: 'Satellite, Ahmedabad - 380015',
      cakeType: 'Butterscotch',
      status: 'Ready for Dispatch',
      priority: 'Low',
      leadTime: 2,
      estimatedCost: 550,
      cultivator: 'Ravi Kumar'
    }
  ];

  const filteredData = planningData.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status.toLowerCase().includes(filterStatus.toLowerCase());
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending Planning':
        return 'bg-red-100 text-red-800';
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800';
      case 'Ready for Dispatch':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Birthday Planning Report</h1>
          <p className="text-gray-600">Comprehensive planning overview for birthday dispatches</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Export Report</span>
          </Button>
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90 flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Generate Plan</span>
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Birthdays</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">247</div>
            <p className="text-xs text-muted-foreground">For selected date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Planning</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">45</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready to Dispatch</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">185</div>
            <p className="text-xs text-muted-foreground">Planning complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estimated Cost</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">₹1,23,500</div>
            <p className="text-xs text-muted-foreground">Total budget</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending Planning</SelectItem>
                  <SelectItem value="planned">Planned</SelectItem>
                  <SelectItem value="ready">Ready for Dispatch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Planning Table */}
      <Card>
        <CardHeader>
          <CardTitle>Birthday Planning Details</CardTitle>
          <p className="text-sm text-gray-600">Detailed planning information for birthday dispatches</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ICS ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Birthday</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Cake Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Lead Time</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Cultivator</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{new Date(item.dob).toLocaleDateString()}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{item.city}</div>
                      <div className="text-gray-500">{item.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>{item.cakeType}</TableCell>
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
                  <TableCell>{item.leadTime} days</TableCell>
                  <TableCell>₹{item.estimatedCost}</TableCell>
                  <TableCell>{item.cultivator}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Planning Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Planning Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-red-800">High Priority Items</h4>
                <p className="text-sm text-gray-600">45 items require immediate planning attention for timely delivery.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-blue-800">Cost Optimization</h4>
                <p className="text-sm text-gray-600">Bulk ordering can reduce costs by 15% for common cake types.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-green-800">Resource Allocation</h4>
                <p className="text-sm text-gray-600">Current cultivator assignments are well-balanced across regions.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanningReport;
