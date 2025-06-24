
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const BirthdayDispatchEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: 'Rajesh Kumar Sharma',
    phone: '+91-9876543210',
    email: 'rajesh.sharma@email.com',
    dob: '1985-06-28',
    address: '123 MG Road, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400058',
    country: 'India',
    cultivator: 'Priya Devi',
    eligibilityStatus: 'Eligible',
    cultivatorStatus: 'Approved',
    dispatchStatus: 'Dispatched',
    leadTimeCategory: 'IMUM',
    communicationPreference: 'WhatsApp',
    comments: 'Regular donor, prefers morning delivery'
  });

  const handleSave = () => {
    // Save logic here
    alert('Dispatch details updated successfully!');
    navigate(`/birthday/dispatch/${id}`);
  };

  const handleCancel = () => {
    navigate(`/birthday/dispatch/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to={`/birthday/dispatch/${id}`}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Details
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edit Birthday Dispatch</h1>
                <p className="text-gray-600">ID: {id}</p>
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
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
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
                <Label htmlFor="cultivator">Cultivator</Label>
                <Select value={formData.cultivator} onValueChange={(value) => setFormData({...formData, cultivator: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Priya Devi">Priya Devi</SelectItem>
                    <SelectItem value="Sunil Das">Sunil Das</SelectItem>
                    <SelectItem value="Ravi Kumar">Ravi Kumar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="eligibilityStatus">Eligibility Status</Label>
                <Select value={formData.eligibilityStatus} onValueChange={(value) => setFormData({...formData, eligibilityStatus: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Eligible">Eligible</SelectItem>
                    <SelectItem value="No Address">No Address</SelectItem>
                    <SelectItem value="No Phone">No Phone</SelectItem>
                    <SelectItem value="Low Family Donation">Low Family Donation</SelectItem>
                    <SelectItem value="Company">Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cultivatorStatus">Cultivator Status</Label>
                <Select value={formData.cultivatorStatus} onValueChange={(value) => setFormData({...formData, cultivatorStatus: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No Cultivator">No Cultivator</SelectItem>
                    <SelectItem value="Pending Confirmation">Pending Confirmation</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Do Not Send">Do Not Send</SelectItem>
                    <SelectItem value="Hand Delivery">Hand Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dispatchStatus">Dispatch Status</Label>
                <Select value={formData.dispatchStatus} onValueChange={(value) => setFormData({...formData, dispatchStatus: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Dispatched">Dispatched</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="leadTimeCategory">Lead Time Category</Label>
                <Select value={formData.leadTimeCategory} onValueChange={(value) => setFormData({...formData, leadTimeCategory: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="IMUM">IMUM (4 days)</SelectItem>
                    <SelectItem value="ROM">ROM (5 days)</SelectItem>
                    <SelectItem value="ROI">ROI (7 days)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="communicationPreference">Communication Preference</Label>
                <Select value={formData.communicationPreference} onValueChange={(value) => setFormData({...formData, communicationPreference: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                    <SelectItem value="SMS">SMS</SelectItem>
                    <SelectItem value="Email">Email</SelectItem>
                    <SelectItem value="Phone">Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({...formData, comments: e.target.value})}
                  placeholder="Add any special instructions or notes..."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BirthdayDispatchEdit;
