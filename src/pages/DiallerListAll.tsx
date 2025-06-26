
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const DiallerListAll = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockDiallerData = [
    {
      id: '1',
      dmsId: '2U24ND1020333',
      donorName: 'Ravi Raj K R',
      phone: '9886719444',
      diallerStatus: 'SENT TO DIALLER',
      dqRemarks: '-',
      fixedRemarks: '-',
      dialler: '-',
      disposition: '-',
      changes: '-',
      diallerCampaign: '-',
      reDial: '-',
      callbackDateTime: '-',
      dispositionTimestamp: '-',
      diallerAging: '-',
      dqAging: '-'
    },
    {
      id: '2',
      dmsId: '2U24ND1019123',
      donorName: 'Vinod N',
      phone: '9892064985',
      diallerStatus: 'SENT TO DIALLER',
      dqRemarks: '-',
      fixedRemarks: '-',
      dialler: '-',
      disposition: '-',
      changes: '-',
      diallerCampaign: '-',
      reDial: '-',
      callbackDateTime: '-',
      dispositionTimestamp: '-',
      diallerAging: '-',
      dqAging: '-'
    },
    {
      id: '3',
      dmsId: '2U24ND1017793',
      donorName: 'Siddhesh Sharad Chendvankar',
      phone: '9892785849',
      diallerStatus: 'SENT TO DIALLER',
      dqRemarks: '-',
      fixedRemarks: '-',
      dialler: '-',
      disposition: '-',
      changes: '-',
      diallerCampaign: '-',
      reDial: '-',
      callbackDateTime: '-',
      dispositionTimestamp: '-',
      diallerAging: '-',
      dqAging: '-'
    },
    {
      id: '4',
      dmsId: '2W24ND1004263',
      donorName: 'Manish Talreja',
      phone: '9970286396',
      diallerStatus: 'SENT TO DIALLER',
      dqRemarks: '-',
      fixedRemarks: 'ayodhya',
      dialler: '-',
      disposition: '-',
      changes: '-',
      diallerCampaign: 'Iskcon_BH_Ayodhya',
      reDial: '-',
      callbackDateTime: '-',
      dispositionTimestamp: '-',
      diallerAging: '43 days 21 hrs 18 mins',
      dqAging: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dialler List (All)</h1>
            <p className="text-gray-600">Total Pending Calls</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

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
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Donor Name</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Phone</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dialler Status</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">DQ Remarks</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Fixed Remarks</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dialler</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Disposition</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Changes</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dialler Campaign</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Re-Dial</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Callback Date and Time</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Disposition Timestamp</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dialler Aging</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">DQ Aging</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDiallerData.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-3 py-2">{item.dmsId}</td>
                      <td className="px-3 py-2 font-medium">{item.donorName}</td>
                      <td className="px-3 py-2">{item.phone}</td>
                      <td className="px-3 py-2">
                        <Badge variant="outline" className="text-xs">
                          {item.diallerStatus}
                        </Badge>
                      </td>
                      <td className="px-3 py-2">{item.dqRemarks}</td>
                      <td className="px-3 py-2">{item.fixedRemarks}</td>
                      <td className="px-3 py-2">{item.dialler}</td>
                      <td className="px-3 py-2">{item.disposition}</td>
                      <td className="px-3 py-2">{item.changes}</td>
                      <td className="px-3 py-2">{item.diallerCampaign}</td>
                      <td className="px-3 py-2">{item.reDial}</td>
                      <td className="px-3 py-2">{item.callbackDateTime}</td>
                      <td className="px-3 py-2">{item.dispositionTimestamp}</td>
                      <td className="px-3 py-2">{item.diallerAging}</td>
                      <td className="px-3 py-2">{item.dqAging}</td>
                      <td className="px-3 py-2">
                        <Link to={`/dialler/details/${item.id}`}>
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
            <span className="text-sm text-gray-600">1 of 989</span>
            <span className="text-sm text-gray-600">View 1 - 10 of 9885</span>
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

export default DiallerListAll;
