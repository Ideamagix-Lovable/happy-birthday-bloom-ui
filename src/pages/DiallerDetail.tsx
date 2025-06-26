
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const DiallerDetail = () => {
  const { id } = useParams();

  const mockDiallerDetail = {
    id: '1',
    dmsId: '2U24ND1020333',
    donorName: 'Ravi Raj K R',
    phone: '9886719444',
    email: 'ravi.raj@example.com',
    address: '123 Main Street, Bangalore, Karnataka, India',
    diallerStatus: 'SENT TO DIALLER',
    dqRemarks: 'Pending review',
    fixedRemarks: 'Address verified',
    dialler: 'Agent 1',
    disposition: 'Follow up required',
    changes: 'Updated phone number',
    diallerCampaign: 'Iskcon_BH_Campaign',
    reDial: 'Yes',
    callbackDateTime: '2025-06-27 10:00 AM',
    dispositionTimestamp: '2025-06-26 15:30 PM',
    diallerAging: '2 days 5 hrs 30 mins',
    dqAging: '1 day 2 hrs 15 mins',
    pan: 'ABCDE1234F',
    dob: '15-04-1985',
    doa: '12-03-2010'
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <Link to="/dialler/list-all">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to List
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dialler Details - {mockDiallerDetail.dmsId}</h1>
            <p className="text-gray-600">{mockDiallerDetail.donorName}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DMS ID</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.dmsId}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.donorName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-900">{mockDiallerDetail.phone}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-900">{mockDiallerDetail.email}</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-900">{mockDiallerDetail.address}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PAN</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.pan}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.dob}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dialler Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dialler Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                  <Badge variant="outline" className="text-sm">
                    {mockDiallerDetail.diallerStatus}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dialler</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.dialler}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Disposition</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.disposition}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Changes</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.changes}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dialler Campaign</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.diallerCampaign}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Re-Dial Required</label>
                  <Badge variant={mockDiallerDetail.reDial === 'Yes' ? 'default' : 'secondary'}>
                    {mockDiallerDetail.reDial}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timing Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Timing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Callback Date and Time</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.callbackDateTime}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Disposition Timestamp</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.dispositionTimestamp}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dialler Aging</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.diallerAging}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DQ Aging</label>
                  <p className="text-sm text-gray-900">{mockDiallerDetail.dqAging}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Remarks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Remarks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DQ Remarks</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{mockDiallerDetail.dqRemarks}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fixed Remarks</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{mockDiallerDetail.fixedRemarks}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mt-6">
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
            Update Status
          </Button>
          <Button variant="outline">
            Schedule Callback
          </Button>
          <Button variant="outline">
            View History
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiallerDetail;
