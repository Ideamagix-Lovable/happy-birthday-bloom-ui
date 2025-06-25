
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, MapPin, Clock, Phone, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ShipmentTrackingDetail = () => {
  const { awbNumber } = useParams();
  
  // Mock data
  const shipmentData = {
    awbNumber: 'BD123456789',
    orderID: 'ORD240624001',
    icsId: 'ICS001',
    donorName: 'Rajesh Kumar Sharma',
    phone: '+91-9876543210',
    address: '123 MG Road, Andheri West, Mumbai - 400058, Maharashtra',
    courierPartner: 'Blue Dart',
    currentStatus: 'Out for Delivery',
    dispatchDate: '2024-06-24',
    expectedDelivery: '2024-06-28',
    actualDelivery: null,
    weight: '0.5 kg',
    dimensions: '25 x 25 x 10 cm',
    value: '₹350',
    trackingEvents: [
      {
        timestamp: '2024-06-24 10:30 AM',
        location: 'Mumbai - Origin Hub',
        status: 'Shipment Created',
        description: 'Shipment has been created and assigned AWB number'
      },
      {
        timestamp: '2024-06-24 2:15 PM',
        location: 'Mumbai - Origin Hub',
        status: 'Picked Up',
        description: 'Package picked up from sender'
      },
      {
        timestamp: '2024-06-24 6:45 PM',
        location: 'Mumbai - Sorting Facility',
        status: 'In Transit',
        description: 'Package received at sorting facility'
      },
      {
        timestamp: '2024-06-25 8:30 AM',
        location: 'Mumbai - Delivery Hub',
        status: 'Arrived at Delivery Hub',
        description: 'Package arrived at local delivery hub'
      },
      {
        timestamp: '2024-06-25 9:15 AM',
        location: 'Mumbai - Out for Delivery',
        status: 'Out for Delivery',
        description: 'Package is out for delivery'
      }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      'Shipment Created': 'bg-blue-100 text-blue-800',
      'Picked Up': 'bg-yellow-100 text-yellow-800',
      'In Transit': 'bg-purple-100 text-purple-800',
      'Arrived at Delivery Hub': 'bg-orange-100 text-orange-800',
      'Out for Delivery': 'bg-green-100 text-green-800',
      'Delivered': 'bg-green-100 text-green-800',
      'RTO': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleRefreshTracking = () => {
    alert('Refreshing tracking information...');
  };

  const handleResendShipment = () => {
    alert('Initiating resend process...');
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/birthday?tab=tracker">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Tracker
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Shipment Tracking</h1>
                <p className="text-gray-600">AWB: {shipmentData.awbNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleRefreshTracking}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" className="text-red-600" onClick={handleResendShipment}>
                <AlertCircle className="w-4 h-4 mr-2" />
                Resend
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Current Status
                  </span>
                  <Badge className={getStatusColor(shipmentData.currentStatus)}>
                    {shipmentData.currentStatus}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Package is Out for Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Your package is on its way and will be delivered today.
                  </p>
                  <div className="text-sm text-gray-500">
                    Expected delivery: {new Date(shipmentData.expectedDelivery).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Tracking Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shipmentData.trackingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{event.status}</h4>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="mr-3">{event.location}</span>
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{event.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Shipment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Shipment Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">AWB Number</label>
                  <p className="text-lg font-mono">{shipmentData.awbNumber}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Order ID</label>
                  <p>{shipmentData.orderID}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Courier Partner</label>
                  <p>{shipmentData.courierPartner}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Dispatch Date</label>
                  <p>{new Date(shipmentData.dispatchDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Expected Delivery</label>
                  <p>{new Date(shipmentData.expectedDelivery).toLocaleDateString()}</p>
                </div>
              </CardContent>
            </Card>

            {/* Recipient Details */}
            <Card>
              <CardHeader>
                <CardTitle>Recipient Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">ICS ID</label>
                  <p>{shipmentData.icsId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="font-medium">{shipmentData.donorName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone</label>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {shipmentData.phone}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  <p className="text-sm">{shipmentData.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Package Details */}
            <Card>
              <CardHeader>
                <CardTitle>Package Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-600">Weight</label>
                  <p>{shipmentData.weight}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Dimensions</label>
                  <p>{shipmentData.dimensions}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Declared Value</label>
                  <p className="font-medium text-[#b33324]">{shipmentData.value}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTrackingDetail;
