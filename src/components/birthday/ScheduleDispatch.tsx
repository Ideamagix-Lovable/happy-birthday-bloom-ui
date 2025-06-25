
import React, { useState } from 'react';
import { Calendar, Clock, Package, Plus, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ScheduleDispatch = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [scheduledBatches, setScheduledBatches] = useState([
    {
      id: 'SCH001',
      batchName: 'Morning Batch - IMUM',
      scheduleDate: '2024-06-25',
      scheduleTime: '09:00',
      region: 'IMUM',
      orderCount: 25,
      status: 'Scheduled',
      courier: 'Blue Dart'
    },
    {
      id: 'SCH002',
      batchName: 'Evening Batch - ROI',
      scheduleDate: '2024-06-25',
      scheduleTime: '17:00',
      region: 'ROI',
      orderCount: 42,
      status: 'Scheduled',
      courier: 'Delhivery'
    },
    {
      id: 'SCH003',
      batchName: 'Weekend Special',
      scheduleDate: '2024-06-26',
      scheduleTime: '11:00',
      region: 'ROM',
      orderCount: 18,
      status: 'Draft',
      courier: 'DTDC'
    }
  ]);

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newBatch, setNewBatch] = useState({
    batchName: '',
    scheduleDate: '',
    scheduleTime: '',
    region: '',
    courier: ''
  });

  const handleCreateBatch = () => {
    if (!newBatch.batchName || !newBatch.scheduleDate || !newBatch.scheduleTime) {
      alert('Please fill all required fields');
      return;
    }

    const batch = {
      id: `SCH${String(scheduledBatches.length + 1).padStart(3, '0')}`,
      ...newBatch,
      orderCount: 0,
      status: 'Draft'
    };

    setScheduledBatches([...scheduledBatches, batch]);
    setNewBatch({
      batchName: '',
      scheduleDate: '',
      scheduleTime: '',
      region: '',
      courier: ''
    });
    setShowCreateDialog(false);
    alert('Batch scheduled successfully!');
  };

  const handleDeleteBatch = (id: string) => {
    if (confirm('Are you sure you want to delete this scheduled batch?')) {
      setScheduledBatches(scheduledBatches.filter(batch => batch.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Scheduled': 'bg-blue-100 text-blue-800',
      'Draft': 'bg-yellow-100 text-yellow-800',
      'Processing': 'bg-purple-100 text-purple-800',
      'Completed': 'bg-green-100 text-green-800',
      'Cancelled': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const todaysBatches = scheduledBatches.filter(batch => batch.scheduleDate === new Date().toISOString().split('T')[0]);
  const upcomingBatches = scheduledBatches.filter(batch => batch.scheduleDate > new Date().toISOString().split('T')[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6 text-[#b33324]" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Schedule Dispatch</h1>
            <p className="text-gray-600">Plan future deliveries and batch processing</p>
          </div>
        </div>
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogTrigger asChild>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Plus className="w-4 h-4 mr-2" />
              Schedule New Batch
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Dispatch Batch</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Name *</label>
                <Input 
                  placeholder="Enter batch name..."
                  value={newBatch.batchName}
                  onChange={(e) => setNewBatch({...newBatch, batchName: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Date *</label>
                  <Input 
                    type="date"
                    value={newBatch.scheduleDate}
                    onChange={(e) => setNewBatch({...newBatch, scheduleDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Time *</label>
                  <Input 
                    type="time"
                    value={newBatch.scheduleTime}
                    onChange={(e) => setNewBatch({...newBatch, scheduleTime: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                  <Select value={newBatch.region} onValueChange={(value) => setNewBatch({...newBatch, region: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IMUM">IMUM</SelectItem>
                      <SelectItem value="ROM">ROM</SelectItem>
                      <SelectItem value="ROI">ROI</SelectItem>
                      <SelectItem value="NE">NE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Courier Partner</label>
                  <Select value={newBatch.courier} onValueChange={(value) => setNewBatch({...newBatch, courier: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select courier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Blue Dart">Blue Dart</SelectItem>
                      <SelectItem value="Delhivery">Delhivery</SelectItem>
                      <SelectItem value="Xpressbees">Xpressbees</SelectItem>
                      <SelectItem value="DTDC">DTDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateBatch} className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Schedule Batch
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Today's Batches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#b33324]">{todaysBatches.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Upcoming Batches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{upcomingBatches.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {scheduledBatches.reduce((sum, batch) => sum + batch.orderCount, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Schedules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {scheduledBatches.filter(batch => batch.status === 'Scheduled').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      {todaysBatches.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Today's Scheduled Batches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todaysBatches.map((batch) => (
                <div key={batch.id} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{batch.batchName}</h4>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="mr-4">⏰ {batch.scheduleTime}</span>
                        <span className="mr-4">📍 {batch.region}</span>
                        <span className="mr-4">📦 {batch.orderCount} orders</span>
                        <span>🚛 {batch.courier}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(batch.status)}>
                        {batch.status}
                      </Badge>
                      <Button size="sm" className="bg-[#b33324] hover:bg-[#b33324]/90">
                        Process Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Scheduled Batches */}
      <Card>
        <CardHeader>
          <CardTitle>All Scheduled Batches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch Name</TableHead>
                <TableHead>Schedule Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Courier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduledBatches.map((batch) => (
                <TableRow key={batch.id}>
                  <TableCell className="font-medium">{batch.batchName}</TableCell>
                  <TableCell>{new Date(batch.scheduleDate).toLocaleDateString()}</TableCell>
                  <TableCell>{batch.scheduleTime}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{batch.region}</Badge>
                  </TableCell>
                  <TableCell>{batch.orderCount}</TableCell>
                  <TableCell>{batch.courier}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(batch.status)}>
                      {batch.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteBatch(batch.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Schedule Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Schedule Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <h4 className="font-semibold mb-2">Daily Morning Batch</h4>
              <p className="text-sm text-gray-600 mb-3">IMUM region, 9:00 AM daily</p>
              <Button size="sm" variant="outline" className="w-full">
                Use Template
              </Button>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <h4 className="font-semibold mb-2">Weekend Special</h4>
              <p className="text-sm text-gray-600 mb-3">All regions, Saturday 11:00 AM</p>
              <Button size="sm" variant="outline" className="w-full">
                Use Template
              </Button>
            </div>
            <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <h4 className="font-semibold mb-2">Express Delivery</h4>
              <p className="text-sm text-gray-600 mb-3">Same day delivery, any time</p>
              <Button size="sm" variant="outline" className="w-full">
                Use Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleDispatch;
