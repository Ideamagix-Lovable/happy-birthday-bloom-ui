
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Edit, Package, Truck, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const DispatchDetail = () => {
  const { id } = useParams();

  const mockDispatch = {
    id: '1',
    dispatchType: 'Donation',
    dmsId: '2S24ND1059339',
    bookNo: 'FY2526',
    receiptNumbers: '266015',
    donorName: 'S N SRINIVASA MURTHY',
    phone: '9721560713',
    alternatePhone: '-',
    email: 'srinivasa@example.com',
    dispatchAddress: 'No 4 12th main puttenahalli j.p.nagar 7th phase bengaluru',
    dispatchCity: 'Bangalore',
    dispatchState: 'Karnataka',
    dispatchCountry: 'India',
    dispatchPincode: '560078',
    amount: '₹1,500.00',
    scheme: 'Akshaya Tritiya',
    transactionId: 'pay_QOnnaYoOTARzxp',
    transactionDate: '29-04-2025',
    pan: '-',
    is80G: 'No',
    productsGifts: 'Prahlada Maharaja Book, Shakkar Pala Prasadam',
    box: 'Normal Box 26x15x2.5',
    dispatchStatus: 'Ready To Dispatch',
    courierPartner: 'Not Assigned',
    awbNumber: '-',
    trackingUrl: '-'
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link to="/dispatch/ready-to-dispatch">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to List
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dispatch Details - {id}</h1>
              <p className="text-gray-600">{mockDispatch.donorName}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={mockDispatch.dispatchStatus === 'Ready To Dispatch' ? 'default' : 'secondary'}>
              {mockDispatch.dispatchStatus}
            </Badge>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Edit className="w-4 h-4 mr-2" />
              Edit Dispatch
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Dispatch Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Dispatch Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DMS ID</label>
                    <Input value={mockDispatch.dmsId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Book Number</label>
                    <Input value={mockDispatch.bookNo} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Number</label>
                    <Input value={mockDispatch.receiptNumbers} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dispatch Type</label>
                    <Input value={mockDispatch.dispatchType} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <Input value={mockDispatch.amount} readOnly className="font-medium text-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scheme</label>
                    <Input value={mockDispatch.scheme} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID</label>
                    <Input value={mockDispatch.transactionId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Date</label>
                    <Input value={mockDispatch.transactionDate} readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Products/Gifts</label>
                    <Input value={mockDispatch.productsGifts} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Box Type</label>
                    <Input value={mockDispatch.box} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dispatch Status</label>
                    <Badge variant="outline" className="mt-2">
                      {mockDispatch.dispatchStatus}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donor Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Donor Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name</label>
                    <Input value={mockDispatch.donorName} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input value={mockDispatch.phone} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
                    <Input value={mockDispatch.alternatePhone} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input value={mockDispatch.email} readOnly />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dispatch Address</label>
                    <Input value={mockDispatch.dispatchAddress} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <Input value={mockDispatch.dispatchCity} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <Input value={mockDispatch.dispatchState} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <Input value={mockDispatch.dispatchCountry} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <Input value={mockDispatch.dispatchPincode} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Courier Partner</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Courier Partner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bluedart">Blue Dart</SelectItem>
                        <SelectItem value="delhivery">Delhivery</SelectItem>
                        <SelectItem value="dtdc">DTDC</SelectItem>
                        <SelectItem value="fedex">FedEx</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">AWB Number</label>
                    <Input value={mockDispatch.awbNumber} placeholder="Not generated" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tracking URL</label>
                    <Input value={mockDispatch.trackingUrl} placeholder="Not available" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Donor
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="w-4 h-4 mr-2" />
                  Verify Address
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  Generate Label
                </Button>
                <Button className="w-full justify-start bg-[#b33324] hover:bg-[#b33324]/90 text-white">
                  <Truck className="w-4 h-4 mr-2" />
                  Create Shipment
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Dispatch Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant="outline">{mockDispatch.dispatchStatus}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-green-600">{mockDispatch.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Box Type:</span>
                    <span className="text-sm">{mockDispatch.box}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">80G Eligible:</span>
                    <Badge variant={mockDispatch.is80G === 'Yes' ? 'default' : 'destructive'}>
                      {mockDispatch.is80G}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchDetail;
