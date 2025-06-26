
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Download, Search, Eye, CheckCircle, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const AllDQList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockDQData = [
    {
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
      doa: '-',
      correspondingAddress: 'B-504 Green Lawn Apartment Opposite St Pius College Aarey Road Goregaon East.',
      pincode: '400063',
      donorDispatchAddressMatched: 'No',
      donationAddress: 'B-504 Green Lawn Apartment Opposite St Pius College Aarey Road Goregaon East',
      donationPincode: '400063',
      disposition: '-',
      changes: '',
      dqStatus: 'DQ PENDING',
      diallerStatus: 'HAS CULTIVATOR',
      dispatchStatus: 'WAITING FOR DQ',
      dispatchRemarks: '-',
      revokeRemarks: '-',
      dqAdmin: '-',
      dialler: '-',
      diallerCampaign: '-',
      dqRemarks: '-',
      agentRemarks: '-',
      transactionDate: '26/06/2025',
      commPref: '-',
      commPrefRemarks: '-',
      lastUpdatedAt: '26/06/2025, 11:44 AM',
      diallerAging: '-',
      dqAging: '-'
    },
    {
      id: '2',
      dmsId: '2U24ND1126975',
      type: 'Donation',
      transactionId: 'pay_QlikpLuTygAKWs',
      donorName: 'Priyanka Pramod Maurya',
      amount: '₹15,000.00',
      phone: '7499759466',
      email: 'priyankamaurya922@gmail.com',
      pan: 'HFGPM0962H',
      dob: '28-09-2002',
      doa: '-',
      correspondingAddress: 'Building No -172 Room No 102 Tulip Chs Sector 6 Evershine City Vasai East',
      pincode: '401208',
      donorDispatchAddressMatched: 'No',
      donationAddress: 'Building No -172 Room no 102 Tulip CHS Sector 6 Evershine City Vasai East Thane Maharashtra India. Thane, Maharashtra, India. 401208',
      donationPincode: '401208',
      disposition: '-',
      changes: '',
      dqStatus: 'DQ PENDING',
      diallerStatus: 'ALREADY SENT',
      dispatchStatus: 'WAITING FOR DQ',
      dispatchRemarks: '-',
      revokeRemarks: '-',
      dqAdmin: '-',
      dialler: '-',
      diallerCampaign: '-',
      dqRemarks: '-',
      agentRemarks: '-',
      transactionDate: '26/06/2025',
      commPref: '-',
      commPrefRemarks: 'Donor wants only prasadam.',
      lastUpdatedAt: '26/06/2025, 11:42 AM',
      diallerAging: '-',
      dqAging: '-'
    }
  ];

  const statusOptions = [
    'Waiting For DQ',
    'Qualified',
    'Missing Items',
    'Ineligible',
    'Incomplete Address',
    'Incomplete Phone',
    'Dispatch Revoked',
    'No Action Required',
    'Rejected',
    'Sent to Dispatch',
    'Dispatched'
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">DQ Donors</h1>
            <p className="text-gray-600">Manage donor qualification process</p>
          </div>
        </div>

        {/* Status Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">DQ Status</h3>
              <div className="flex flex-wrap gap-1">
                {statusOptions.slice(0, 4).map((status) => (
                  <Badge key={status} variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                    {status}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dialler Status</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">HAS CULTIVATOR</Badge>
                <Badge variant="outline" className="text-xs">IN QUEUE</Badge>
                <Badge variant="outline" className="text-xs">ALREADY SENT</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Dispatch Status</h3>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">WAITING FOR DQ</Badge>
                <Badge variant="outline" className="text-xs">QUALIFIED</Badge>
                <Badge variant="outline" className="text-xs">INELIGIBLE</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <Button size="sm" variant="outline" className="w-full">
                  Apply Status
                </Button>
                <Button size="sm" variant="outline" className="w-full">
                  Fetch State/City
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter By Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export All Data
          </Button>
          <Button variant="outline" size="sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            Confirm DQ
          </Button>
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
            <Send className="w-4 h-4 mr-2" />
            Send to Dispatch
          </Button>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Exact Match"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Data Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">DMS ID</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Type</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Transaction ID</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Donor Name</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Amount</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Phone</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Email</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Address</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">DQ Status</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dialler Status</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dispatch Status</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Transaction Date</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Last Updated</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDQData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-3 py-2 font-medium">{item.dmsId}</td>
                      <td className="px-3 py-2">{item.type}</td>
                      <td className="px-3 py-2">{item.transactionId}</td>
                      <td className="px-3 py-2 font-medium">{item.donorName}</td>
                      <td className="px-3 py-2 font-medium text-green-600">{item.amount}</td>
                      <td className="px-3 py-2">{item.phone}</td>
                      <td className="px-3 py-2 max-w-xs truncate">{item.email}</td>
                      <td className="px-3 py-2 max-w-xs truncate">{item.correspondingAddress}</td>
                      <td className="px-3 py-2">
                        <Badge variant="outline" className="text-xs">
                          {item.dqStatus}
                        </Badge>
                      </td>
                      <td className="px-3 py-2">
                        <Badge variant="outline" className="text-xs">
                          {item.diallerStatus}
                        </Badge>
                      </td>
                      <td className="px-3 py-2">
                        <Badge variant="outline" className="text-xs">
                          {item.dispatchStatus}
                        </Badge>
                      </td>
                      <td className="px-3 py-2">{item.transactionDate}</td>
                      <td className="px-3 py-2">{item.lastUpdatedAt}</td>
                      <td className="px-3 py-2">
                        <Link to={`/dq/details/${item.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">1 of 10826</span>
            <span className="text-sm text-gray-600">View 1 - 10 of 108258</span>
            <span className="text-sm text-gray-600">Selected 0</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">First 10</Button>
            <Button variant="outline" size="sm">Back</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">Next</Button>
            <Button variant="outline" size="sm">Last 10</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDQList;
