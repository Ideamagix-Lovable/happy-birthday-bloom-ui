
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Edit, Phone, Mail, CheckCircle, X, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const DQDetail = () => {
  const { id } = useParams();

  const mockDQDetail = {
    id: '1',
    dmsId: '2W21ND1090736',
    type: 'Donation',
    transactionId: 'pay_Qlin1qPph3UUgd',
    donorName: 'Nupoor Raju Joshi',
    amount: '₹1,000.00',
    phone: '9004263539',
    email: 'nupoorjoshi1504@gmail.com',
    pan: 'BEEPJ8215D',
    dob: '04-12-2002',
    correspondingAddress: 'B-504 Green Lawn Apartment Opposite St Pius College Aarey Road Goregaon East.',
    pincode: '400063',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    donationAddress: 'B-504 Green Lawn Apartment Opposite St Pius College Aarey Road Goregaon East',
    donationPincode: '400063',
    dqStatus: 'DQ PENDING',
    diallerStatus: 'HAS CULTIVATOR',
    dispatchStatus: 'WAITING FOR DQ',
    transactionDate: '26/06/2025',
    scheme: 'Nitya Seva',
    paymentMode: 'Online',
    commPref: 'Email',
    commPrefRemarks: 'Prefers email communication',
    cultivator: 'Priya Das',
    dqRemarks: '',
    agentRemarks: '',
    lastUpdatedAt: '26/06/2025, 11:44 AM'
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link to="/dq/all">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to DQ List
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">DQ Details - {id}</h1>
              <p className="text-gray-600">{mockDQDetail.donorName}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={mockDQDetail.dqStatus === 'DQ PENDING' ? 'destructive' : 'default'}>
              {mockDQDetail.dqStatus}
            </Badge>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Edit className="w-4 h-4 mr-2" />
              Edit DQ
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Donation Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Donation Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DMS ID</label>
                    <Input value={mockDQDetail.dmsId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID</label>
                    <Input value={mockDQDetail.transactionId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <Input value={mockDQDetail.amount} readOnly className="font-medium text-green-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scheme</label>
                    <Input value={mockDQDetail.scheme} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                    <Input value={mockDQDetail.paymentMode} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Date</label>
                    <Input value={mockDQDetail.transactionDate} readOnly />
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
                    <Input value={mockDQDetail.donorName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input value={mockDQDetail.phone} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input value={mockDQDetail.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN</label>
                    <Input value={mockDQDetail.pan} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <Input value={mockDQDetail.dob} type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <Input value={mockDQDetail.pincode} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Corresponding Address</label>
                    <Textarea value={mockDQDetail.correspondingAddress} rows={3} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <Input value={mockDQDetail.city} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <Input value={mockDQDetail.state} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DQ Status & Remarks */}
            <Card>
              <CardHeader>
                <CardTitle>DQ Status & Remarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DQ Status</label>
                    <Select defaultValue={mockDQDetail.dqStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DQ PENDING">DQ PENDING</SelectItem>
                        <SelectItem value="DQ COMPLETED">DQ COMPLETED</SelectItem>
                        <SelectItem value="QUALIFIED">QUALIFIED</SelectItem>
                        <SelectItem value="INELIGIBLE">INELIGIBLE</SelectItem>
                        <SelectItem value="INCOMPLETE ADDRESS">INCOMPLETE ADDRESS</SelectItem>
                        <SelectItem value="INCOMPLETE PHONE">INCOMPLETE PHONE</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dispatch Status</label>
                    <Select defaultValue={mockDQDetail.dispatchStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WAITING FOR DQ">WAITING FOR DQ</SelectItem>
                        <SelectItem value="QUALIFIED">QUALIFIED</SelectItem>
                        <SelectItem value="INELIGIBLE">INELIGIBLE</SelectItem>
                        <SelectItem value="INCOMPLETE ADDRESS">INCOMPLETE ADDRESS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Communication Preference</label>
                    <Select defaultValue={mockDQDetail.commPref}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Email">Email</SelectItem>
                        <SelectItem value="Phone">Phone</SelectItem>
                        <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                        <SelectItem value="SMS">SMS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cultivator</label>
                    <Input value={mockDQDetail.cultivator} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">DQ Remarks</label>
                    <Textarea 
                      placeholder="Add DQ remarks..."
                      value={mockDQDetail.dqRemarks}
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Agent Remarks</label>
                    <Textarea 
                      placeholder="Add agent remarks..."
                      value={mockDQDetail.agentRemarks}
                      rows={3}
                    />
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
                <Button className="w-full justify-start bg-green-600 hover:bg-green-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve DQ
                </Button>
                <Button className="w-full justify-start bg-red-600 hover:bg-red-700 text-white">
                  <X className="w-4 h-4 mr-2" />
                  Reject DQ
                </Button>
                <Button className="w-full justify-start bg-[#b33324] hover:bg-[#b33324]/90 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send to Dispatch
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>DQ Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant="outline">{mockDQDetail.dqStatus}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-green-600">{mockDQDetail.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dialler Status:</span>
                    <Badge variant="outline" className="text-xs">{mockDQDetail.diallerStatus}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dispatch Status:</span>
                    <Badge variant="outline" className="text-xs">{mockDQDetail.dispatchStatus}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span className="text-sm">{mockDQDetail.lastUpdatedAt}</span>
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

export default DQDetail;
