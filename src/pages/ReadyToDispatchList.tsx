
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Download, Edit, Filter, Package, Search, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

const ReadyToDispatchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const mockDispatchData = [
    {
      id: '1',
      dispatchType: 'Donation',
      dmsId: '2S24ND1059339',
      bookNo: 'FY2526',
      receiptNumbers: '266015',
      donorName: 'S N SRINIVASA MURTHY',
      phone: '9721560713',
      alternatePhone: '-',
      dispatchAddress: 'No 4 12th main puttenahalli j.p.nagar 7th phase bengalur',
      dispatchCity: 'Bangalore',
      dispatchState: 'Karnataka',
      dispatchCountry: 'India',
      dispatchPincode: '560078',
      donationDispatchAddressMatched: 'Yes',
      donationAddress: 'No 4 12th main puttenahalli j.p.nagar 7th phase bengalur',
      donationCity: 'Bangalore',
      donationState: 'Karnataka',
      donationCountry: 'India',
      donationPincode: '560078',
      amount: '₹1,500.00',
      scheme: 'Akshaya Tritiya',
      campaign: '-',
      transactionId: 'pay_QOnnaYoOTARzxp',
      transactionDate: '29-04-2025',
      pan: '-',
      is80G: 'No',
      commPref: 'IN!',
      commPrefRemarks: '-',
      isRepeat: 'Repeated',
      isCampaign: 'No',
      productsGifts: 'Prahlada Maharaja Book, Shakkar Pala Prasadam',
      box: 'Normal Box 26x15x2.5',
      dispatchRemarks: '-'
    },
    {
      id: '2',
      dispatchType: 'Donation',
      dmsId: '1U25ND1169591',
      bookNo: 'FY2526',
      receiptNumbers: '251685',
      donorName: 'J Prasad',
      phone: '9768030007',
      alternatePhone: '-',
      dispatchAddress: '1806 , Gami Jade,Sector 26, Vashi ,Navimumbai, Maharashtra',
      dispatchCity: 'Thane',
      dispatchState: 'Maharashtra',
      dispatchCountry: 'India',
      dispatchPincode: '400703',
      donationDispatchAddressMatched: 'Yes',
      donationAddress: '1806 , Gami Jade,Sector 26, Vashi ,Navimumbai, Maharashtra',
      donationCity: 'Thane',
      donationState: 'Maharashtra',
      donationCountry: 'India',
      donationPincode: '400703',
      amount: '₹3,000.00',
      scheme: 'Ram Navami',
      campaign: '-',
      transactionId: 'pay_QEbFGOkXh23vki',
      transactionDate: '03-04-2025',
      pan: 'AJEPJ1782F',
      is80G: 'Yes',
      commPref: '#Prnr!',
      commPrefRemarks: '-',
      isRepeat: 'New',
      isCampaign: 'No',
      productsGifts: 'Shakkar Pala Prasadam, Table Calendar 2025 - 13 sheeter',
      box: 'Normal Box 26x15x2.5',
      dispatchRemarks: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Ready To Dispatch</h1>
            <p className="text-gray-600">Manage dispatch queue and shipments</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Boxes: 869 | Receipts: 1079
            </Badge>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refetch Donor Details
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="w-4 h-4 mr-2" />
            Bulk Update
          </Button>
          <Button variant="outline" size="sm">
            <Package className="w-4 h-4 mr-2" />
            Bulk Print
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter By
          </Button>
          <Button variant="outline" size="sm">
            Revoke / Send For Review
          </Button>
          <Button variant="outline" size="sm">
            Merge Dispatch
          </Button>
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
            Create Shipment
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
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dispatch Type</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">DMS ID</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Book NO.</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Receipt Number(s)</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Donor Name</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Phone</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Alternate Phone</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Dispatch Address</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">City</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">State</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Amount</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Scheme</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Products/Gifts</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Box</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDispatchData.map((item, index) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-3 py-2">{item.dispatchType}</td>
                      <td className="px-3 py-2">{item.dmsId}</td>
                      <td className="px-3 py-2">{item.bookNo}</td>
                      <td className="px-3 py-2">{item.receiptNumbers}</td>
                      <td className="px-3 py-2 font-medium">
                        <div>{item.donorName}</div>
                      </td>
                      <td className="px-3 py-2">{item.phone}</td>
                      <td className="px-3 py-2">{item.alternatePhone}</td>
                      <td className="px-3 py-2 max-w-xs truncate">{item.dispatchAddress}</td>
                      <td className="px-3 py-2">{item.dispatchCity}</td>
                      <td className="px-3 py-2">{item.dispatchState}</td>
                      <td className="px-3 py-2 font-medium text-green-600">{item.amount}</td>
                      <td className="px-3 py-2">{item.scheme}</td>
                      <td className="px-3 py-2 max-w-xs truncate">{item.productsGifts}</td>
                      <td className="px-3 py-2">
                        <Badge variant="outline" className="text-xs">
                          {item.box}
                        </Badge>
                      </td>
                      <td className="px-3 py-2">
                        <Link to={`/dispatch/details/${item.id}`}>
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
            <span className="text-sm text-gray-600">1 of 87</span>
            <span className="text-sm text-gray-600">View 1 - 10 of 869</span>
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

export default ReadyToDispatchList;
