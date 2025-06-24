
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const DispatchQueueEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    icsId: 'ICS001',
    dmsId: 'DMS001',
    name: 'Rajesh Kumar Sharma',
    phone: '+91-9876543210',
    dispatchDate: '2024-06-24',
    birthdayDate: '2024-06-28',
    address: '123 MG Road, Mumbai - 400001',
    cultivator: 'Priya Devi',
    lotNumber: 'LOT240624001',
    courierInfo: 'Blue Dart',
    status: 'Ready for Shipment',
    awbNumber: '',
    estimatedCost: 350,
    priority: 'High',
    specialInstructions: '',
    deliveryType: 'Standard'
  });

  const handleSave = () => {
    // Save logic here
    alert('Queue item updated successfully!');
    navigate('/birthday?tab=queue');
  };

  const handleCancel = () => {
    navigate('/birthday?tab=queue');
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
                <h1 className="text-2xl font-bold text-gray-900">Edit Dispatch Queue Item</h1>
                <p className="text-gray-600">Queue ID: {id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-[#b33324] hover:bg-[#b33324]/90">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="icsId">ICS ID</Label>
                <Input
                  id="icsId"
                  value={formData.icsId}
                  onChange={(e) => setFormData({...formData, icsId: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="dmsId">DMS ID</Label>
                <Input
                  id="dmsId"
                  value={formData.dmsId}
                  onChange={(e) => setFormData({...formData, dmsId: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="name">Donor Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="dispatchDate">Dispatch Date</Label>
                <Input
                  id="dispatchDate"
                  type="date"
                  value={formData.dispatchDate}
                  onChange={(e) => setFormData({...formData, dispatchDate: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="birthdayDate">Birthday Date</Label>
                <Input
                  id="birthdayDate"
                  type="date"
                  value={formData.birthdayDate}
                  onChange={(e) => setFormData({...formData, birthdayDate: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Dispatch Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Dispatch Settings</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="cultivator">Assigned Cultivator</Label>
                <Select value={formData.cultivator} onValueChange={(value) => setFormData({...formData, cultivator: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Priya Devi">Priya Devi</SelectItem>
                    <SelectItem value="Sunil Das">Sunil Das</SelectItem>
                    <SelectItem value="Ravi Kumar">Ravi Kumar</SelectItem>
                    <SelectItem value="Anita Sharma">Anita Sharma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="lotNumber">Lot Number</Label>
                <Input
                  id="lotNumber"
                  value={formData.lotNumber}
                  onChange={(e) => setFormData({...formData, lotNumber: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="courierInfo">Courier Partner</Label>
                <Select value={formData.courierInfo} onValueChange={(value) => setFormData({...formData, courierInfo: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Blue Dart">Blue Dart</SelectItem>
                    <SelectItem value="Delhivery">Delhivery</SelectItem>
                    <SelectItem value="Xpressbees">Xpressbees</SelectItem>
                    <SelectItem value="DTDC">DTDC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Dispatch Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ready for Shipment">Ready for Shipment</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="RTO">RTO</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="deliveryType">Delivery Type</Label>
                <Select value={formData.deliveryType} onValueChange={(value) => setFormData({...formData, deliveryType: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="Express">Express</SelectItem>
                    <SelectItem value="Hand Delivery">Hand Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="estimatedCost">Estimated Cost (₹)</Label>
                <Input
                  id="estimatedCost"
                  type="number"
                  value={formData.estimatedCost}
                  onChange={(e) => setFormData({...formData, estimatedCost: parseInt(e.target.value)})}
                />
              </div>
              <div>
                <Label htmlFor="awbNumber">AWB Number (if shipped)</Label>
                <Input
                  id="awbNumber"
                  value={formData.awbNumber}
                  onChange={(e) => setFormData({...formData, awbNumber: e.target.value})}
                  placeholder="Enter tracking number"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="specialInstructions">Special Instructions</Label>
                <Textarea
                  id="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({...formData, specialInstructions: e.target.value})}
                  placeholder="Any special delivery instructions..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchQueueEdit;
