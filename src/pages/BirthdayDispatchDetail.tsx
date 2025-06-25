
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Edit, Package, Calendar, User, Phone, MapPin, Clock, Gift, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BirthdayDispatchDetail = () => {
  const { id } = useParams();
  
  // Mock data - replace with actual data fetching
  const dispatchData = {
    id: 'BD001',
    icsId: 'ICS001',
    dmsId: 'DMS001',
    name: 'Rajesh Kumar Sharma',
    phone: '+91-9876543210',
    email: 'rajesh.sharma@email.com',
    dob: '1985-06-28',
    address: '123 MG Road, Andheri West, Mumbai - 400058, Maharashtra, India',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400058',
    country: 'India',
    cultivator: 'Priya Devi',
    totalDonations: 15000,
    familyDonations: 25000,
    eligibilityStatus: 'Eligible',
    cultivatorStatus: 'Approved',
    dispatchStatus: 'Dispatched',
    leadTime: 4,
    leadTimeCategory: 'IMUM',
    courierPartner: 'Blue Dart',
    awbNumber: 'BD123456789',
    dispatchDate: '2024-06-24',
    estimatedDelivery: '2024-06-28',
    lotNumber: 'LOT240624001',
    cakesSentThisYear: 2,
    totalCakesSent: 5,
    firstDonation: '2020-03-15',
    lastDonation: '2024-05-20',
    communicationPreference: 'WhatsApp',
    comments: 'Regular donor, prefers morning delivery'
  };

  const statusColors = {
    'Eligible': 'bg-green-100 text-green-800',
    'Approved': 'bg-blue-100 text-blue-800',
    'Dispatched': 'bg-purple-100 text-purple-800',
    'Delivered': 'bg-green-100 text-green-800'
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/birthday">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Module
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Birthday Dispatch Details</h1>
                <p className="text-gray-600">ID: {dispatchData.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Link to={`/birthday/dispatch/edit/${id}`}>
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Dispatch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Full Name</label>
                  <p className="text-lg font-semibold">{dispatchData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                  <p className="text-lg">{new Date(dispatchData.dob).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <p className="text-lg">{dispatchData.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Email</label>
                  <p className="text-lg">{dispatchData.email}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  <p className="text-lg">{dispatchData.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Dispatch Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Dispatch Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="dispatch" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="dispatch">Dispatch Details</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="dispatch" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Dispatch Date</label>
                        <p className="text-lg">{new Date(dispatchData.dispatchDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Lead Time</label>
                        <p className="text-lg">{dispatchData.leadTime} days ({dispatchData.leadTimeCategory})</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Lot Number</label>
                        <p className="text-lg">{dispatchData.lotNumber}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Cultivator</label>
                        <p className="text-lg">{dispatchData.cultivator}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="shipping" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Courier Partner</label>
                        <p className="text-lg">{dispatchData.courierPartner}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">AWB Number</label>
                        <p className="text-lg font-mono">{dispatchData.awbNumber}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Estimated Delivery</label>
                        <p className="text-lg">{new Date(dispatchData.estimatedDelivery).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="history" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Dispatch Created</p>
                          <p className="text-sm text-gray-600">June 24, 2024 at 10:30 AM</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">Created</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Shipped via Blue Dart</p>
                          <p className="text-sm text-gray-600">June 24, 2024 at 2:15 PM</p>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">Shipped</Badge>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>Status Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Eligibility</label>
                  <div className="mt-1">
                    <Badge className={statusColors[dispatchData.eligibilityStatus]}>
                      {dispatchData.eligibilityStatus}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Cultivator Status</label>
                  <div className="mt-1">
                    <Badge className={statusColors[dispatchData.cultivatorStatus]}>
                      {dispatchData.cultivatorStatus}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Dispatch Status</label>
                  <div className="mt-1">
                    <Badge className={statusColors[dispatchData.dispatchStatus]}>
                      {dispatchData.dispatchStatus}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Donation Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Total Donations</label>
                  <p className="text-xl font-bold text-[#b33324]">₹{dispatchData.totalDonations.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Family Donations</label>
                  <p className="text-xl font-bold">₹{dispatchData.familyDonations.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">First Donation</label>
                  <p>{new Date(dispatchData.firstDonation).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Last Donation</label>
                  <p>{new Date(dispatchData.lastDonation).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>

            {/* Cake History */}
            <Card>
              <CardHeader>
                <CardTitle>Cake Dispatch History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">This Year</label>
                  <p className="text-2xl font-bold text-[#b33324]">{dispatchData.cakesSentThisYear}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Total Sent</label>
                  <p className="text-2xl font-bold">{dispatchData.totalCakesSent}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Average Cost per Cake</label>
                  <p className="text-lg">₹350</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayDispatchDetail;
