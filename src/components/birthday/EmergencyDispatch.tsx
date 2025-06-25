
import React, { useState } from 'react';
import { AlertTriangle, Clock, Phone, MapPin, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const EmergencyDispatch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);

  const mockUrgentOrders = [
    {
      id: 'URG001',
      icsId: 'ICS001',
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      address: 'Mumbai, Maharashtra - 400001',
      birthdayDate: '2024-06-25',
      hoursLeft: 2,
      reason: 'Birthday tomorrow, missed regular dispatch',
      status: 'Critical'
    },
    {
      id: 'URG002',
      icsId: 'ICS002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      address: 'Delhi, Delhi - 110001',
      birthdayDate: '2024-06-26',
      hoursLeft: 8,
      reason: 'VIP donor, special request',
      status: 'High'
    }
  ];

  const handleEmergencyDispatch = () => {
    if (!selectedDonor) {
      alert('Please select a donor for emergency dispatch');
      return;
    }
    alert(`Emergency dispatch initiated for ${selectedDonor.name}`);
  };

  const handleSearchDonor = () => {
    // Mock search functionality
    setSelectedDonor({
      icsId: 'ICS999',
      name: 'Emergency Donor',
      phone: '+91-9999999999',
      address: 'Emergency Address',
      birthdayDate: '2024-06-25'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Emergency Dispatch</h1>
            <p className="text-gray-600">Urgent priority orders and last-minute dispatches</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-red-100 text-red-800 px-3 py-1">
            Emergency Mode Active
          </Badge>
        </div>
      </div>

      {/* Emergency Alert */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          Emergency dispatch bypasses normal lead time requirements. Use only for urgent cases.
        </AlertDescription>
      </Alert>

      {/* Current Urgent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-red-500" />
            Critical Pending Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockUrgentOrders.map((order) => (
              <div key={order.id} className="p-4 border rounded-lg bg-red-50 border-red-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <Badge className={order.status === 'Critical' ? 'bg-red-500' : 'bg-orange-500'}>
                        {order.status}
                      </Badge>
                      <span className="font-semibold">{order.name} ({order.icsId})</span>
                      <span className="text-sm text-gray-600">{order.phone}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {order.address}
                        </span>
                        <span className="flex items-center text-red-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {order.hoursLeft} hours left
                        </span>
                      </div>
                      <div className="mt-1 font-medium">Reason: {order.reason}</div>
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Dispatch Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Manual Emergency Dispatch */}
      <Card>
        <CardHeader>
          <CardTitle>Manual Emergency Dispatch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search Donor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Donor (ICS ID / Name / Phone)
                </label>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter ICS ID, name, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button onClick={handleSearchDonor} variant="outline">
                    Search
                  </Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency Level</label>
                <Select value={urgencyLevel} onValueChange={setUrgencyLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical (< 6 hours)</SelectItem>
                    <SelectItem value="high">High (< 12 hours)</SelectItem>
                    <SelectItem value="medium">Medium (< 24 hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Selected Donor Details */}
            {selectedDonor && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold mb-2">Selected Donor Details:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>ICS ID:</strong> {selectedDonor.icsId}</div>
                  <div><strong>Name:</strong> {selectedDonor.name}</div>
                  <div><strong>Phone:</strong> {selectedDonor.phone}</div>
                  <div><strong>Address:</strong> {selectedDonor.address}</div>
                </div>
              </div>
            )}

            {/* Emergency Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Emergency Reason *
              </label>
              <Textarea 
                placeholder="Explain why this is an emergency dispatch..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <Button variant="outline">
                Save as Draft
              </Button>
              <Button 
                onClick={handleEmergencyDispatch}
                className="bg-red-600 hover:bg-red-700"
                disabled={!selectedDonor || !reason.trim()}
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Dispatch
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Dispatch Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Dispatch Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">When to Use Emergency Dispatch:</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Birthday is within 24 hours</li>
                <li>• VIP donor special request</li>
                <li>• System error missed regular dispatch</li>
                <li>• Cultivator urgent recommendation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-600 mb-2">Additional Costs:</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Same-day delivery: +₹200</li>
                <li>• Express shipping: +₹150</li>
                <li>• Weekend delivery: +₹100</li>
                <li>• Hand delivery: +₹300</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyDispatch;
