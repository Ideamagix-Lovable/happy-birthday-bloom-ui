
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Download, Filter, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const CultivatorReport = () => {
  const [cultivatorFilter, setCultivatorFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('');
  
  // Mock data
  const cultivatorReportData = {
    reportDate: '2024-06-24',
    totalCultivators: 8,
    totalAssignments: 88,
    approvedDispatches: 65,
    pendingApprovals: 23,
    cultivatorSummary: [
      { name: 'Priya Devi', assigned: 15, approved: 12, pending: 3, rejected: 0 },
      { name: 'Sunil Das', assigned: 12, approved: 10, pending: 2, rejected: 0 },
      { name: 'Ravi Kumar', assigned: 18, approved: 15, pending: 3, rejected: 0 },
      { name: 'Anita Sharma', assigned: 10, approved: 8, pending: 2, rejected: 0 },
    ],
    items: [
      {
        id: 1,
        icsId: 'ICS001',
        donorName: 'Rajesh Kumar Sharma',
        phone: '+91-9876543210',
        birthdayDate: '2024-06-28',
        address: 'Mumbai - 400001',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        cultivator: 'Priya Devi',
        totalDonation: 15000,
        familyDonation: 25000,
        eligibilityStatus: 'Eligible',
        cultivatorStatus: 'Approved',
        leadTime: 4,
        leadTimeCategory: 'IMUM',
        cultivatorComments: 'Regular donor, good relationship',
        cakeDispatchDecision: 'Yes',
        recentDonation: '2024-05-20',
        recentDonationAmount: 2500,
        communicationPref: 'WhatsApp'
      },
      {
        id: 2,
        icsId: 'ICS002',
        donorName: 'Priya Sharma',
        phone: '+91-9876543211',
        birthdayDate: '2024-06-30',
        address: 'Delhi - 110001',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001',
        cultivator: 'Sunil Das',
        totalDonation: 8000,
        familyDonation: 12000,
        eligibilityStatus: 'Eligible',
        cultivatorStatus: 'Pending Confirmation',
        leadTime: 7,
        leadTimeCategory: 'ROI',
        cultivatorComments: 'Need to verify current address',
        cakeDispatchDecision: 'Pending',
        recentDonation: '2024-04-15',
        recentDonationAmount: 1500,
        communicationPref: 'Phone'
      }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      'Approved': 'bg-green-100 text-green-800',
      'Pending Confirmation': 'bg-yellow-100 text-yellow-800',
      'Do Not Send': 'bg-red-100 text-red-800',
      'Hand Delivery': 'bg-blue-100 text-blue-800',
      'Eligible': 'bg-green-100 text-green-800',
      'Yes': 'bg-green-100 text-green-800',
      'No': 'bg-red-100 text-red-800',
      'Pending': 'bg-yellow-100 text-yellow-800'
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
                <h1 className="text-2xl font-bold text-gray-900">Cultivator Report</h1>
                <p className="text-gray-600">Report Date: {new Date(cultivatorReportData.reportDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send to Cultivators
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
              <CardTitle className="text-sm font-medium text-gray-600">Total Cultivators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#b33324]">{cultivatorReportData.totalCultivators}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{cultivatorReportData.totalAssignments}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Approved Dispatches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{cultivatorReportData.approvedDispatches}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{cultivatorReportData.pendingApprovals}</div>
            </CardContent>
          </Card>
        </div>

        {/* Cultivator Summary */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Cultivator Performance Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cultivatorReportData.cultivatorSummary.map((cultivator, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">{cultivator.name}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Assigned:</span>
                      <span className="font-medium">{cultivator.assigned}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approved:</span>
                      <span className="font-medium text-green-600">{cultivator.approved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pending:</span>
                      <span className="font-medium text-yellow-600">{cultivator.pending}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Approval Rate:</span>
                      <span className="font-medium">
                        {Math.round((cultivator.approved / cultivator.assigned) * 100)}%
                      </span>
                    </div>
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Cultivator</label>
                <Select value={cultivatorFilter} onValueChange={setCultivatorFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cultivators</SelectItem>
                    <SelectItem value="Priya Devi">Priya Devi</SelectItem>
                    <SelectItem value="Sunil Das">Sunil Das</SelectItem>
                    <SelectItem value="Ravi Kumar">Ravi Kumar</SelectItem>
                    <SelectItem value="Anita Sharma">Anita Sharma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Pending Confirmation">Pending</SelectItem>
                    <SelectItem value="Do Not Send">Do Not Send</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Birthday Date</label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600 mb-2 block">Search</label>
                <Input placeholder="Search donor..." />
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
              <Calendar className="w-5 h-5 mr-2" />
              Detailed Cultivator Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ICS ID</TableHead>
                    <TableHead>Donor Name</TableHead>
                    <TableHead>Birthday</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Cultivator</TableHead>
                    <TableHead>Total Donation</TableHead>
                    <TableHead>Family Donation</TableHead>
                    <TableHead>Lead Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Decision</TableHead>
                    <TableHead>Comments</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cultivatorReportData.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.icsId}</TableCell>
                      <TableCell>{item.donorName}</TableCell>
                      <TableCell>{new Date(item.birthdayDate).toLocaleDateString()}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{item.city}, {item.state}</div>
                          <div className="text-gray-500">{item.pincode}</div>
                        </div>
                      </TableCell>
                      <TableCell>{item.cultivator}</TableCell>
                      <TableCell>₹{item.totalDonation.toLocaleString()}</TableCell>
                      <TableCell>₹{item.familyDonation.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getCategoryColor(item.leadTimeCategory)}>
                          {item.leadTime} days ({item.leadTimeCategory})
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.cultivatorStatus)}>
                          {item.cultivatorStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(item.cakeDispatchDecision)}>
                          {item.cakeDispatchDecision}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-32 truncate text-sm" title={item.cultivatorComments}>
                          {item.cultivatorComments}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <XCircle className="w-4 h-4" />
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

        {/* Comments Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Add Bulk Comments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea 
                placeholder="Add comments for all selected items..."
                rows={4}
              />
              <div className="flex items-center space-x-2">
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Save Comments
                </Button>
                <Button variant="outline">
                  Send Email to Cultivators
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CultivatorReport;
