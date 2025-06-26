
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Download, Plus, FileText, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const DonationListing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockDonations = [
    {
      submissionDate: '26-06-2025',
      bookNo: 'FY2526',
      receiptNo: '279615',
      icsReceiptNo: '-',
      dmsId: '1111044',
      icsId: '-',
      collectionType: 'Donation',
      donorName: 'Rupa',
      phone: '8002642280',
      email: 'pritijha1752002@gmail.com',
      amount: '₹500.00',
      scheme: 'Nitya Seva',
      transactionId: 'pay_QliLHrkJZNBTpn',
      transactionDate: '26-06-2025',
      donationDate: '26-06-2025',
      paymentMode: 'Online',
      vpa: 'testuser@razorpay',
      bankName: 'Razorpay',
      address: 'Room No. 10,Jankibai wadi, Nanda patekar Road',
      pan: 'KLMPK8393B',
      is80G: 'Yes',
      gstNo: '-',
      cultivator: 'Narottam Priya Das',
      collectedBy: '-',
      remarks: 'HBD',
      createdBy: 'Default Admin',
      dqStatus: 'DQ PENDING',
      diallerStatus: 'HAS CULTIVATOR',
      dispatchStatus: 'WAITING FOR DQ',
      dispatchDate: '-',
      deliveryDate: '-',
      commPref: 'Radhe',
      commPrefRemarks: '-',
      campaignUrl: '-'
    },
    {
      submissionDate: '26-06-2025',
      bookNo: 'FY2526',
      receiptNo: '279614',
      icsReceiptNo: '-',
      dmsId: '1007686',
      icsId: '-',
      collectionType: 'Donation',
      donorName: 'Ashish',
      phone: '9955006608',
      email: 'senghar15dec2015@gmail.com',
      amount: '₹100.00',
      scheme: 'Nitya Seva',
      transactionId: 'pay_QliDo7DuVAULjJ',
      transactionDate: '26-06-2025',
      donationDate: '26-06-2025',
      paymentMode: 'Online',
      vpa: 'testuser@razorpay',
      bankName: 'Razorpay',
      address: 'testtttttttttttt',
      pan: '',
      is80G: 'No',
      gstNo: '-',
      cultivator: '-',
      collectedBy: '-',
      remarks: 'testttt',
      createdBy: 'Default Admin',
      dqStatus: 'DQ PENDING',
      diallerStatus: 'INELIGIBLE AMOUNT',
      dispatchStatus: 'INELIGIBLE',
      dispatchDate: '-',
      deliveryDate: '-',
      commPref: '-',
      commPrefRemarks: '-',
      campaignUrl: '-'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'dq pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'dq completed':
        return 'bg-green-100 text-green-800';
      case 'qualified':
        return 'bg-green-100 text-green-800';
      case 'ineligible':
        return 'bg-red-100 text-red-800';
      case 'has cultivator':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Donations</h1>
            <p className="text-gray-600">Manage donation records and transactions</p>
          </div>
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Donation
          </Button>
        </div>

        {/* Action Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Search */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Exact Match"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter By
                </Button>
              </div>

              {/* Export Actions */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Donation
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Sale
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export In Mem. Donations
                </Button>
              </div>

              {/* Import Actions */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Database className="w-4 h-4 mr-2" />
                  Import Data (ICS)
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="w-4 h-4 mr-2" />
                  Import Data (DMS)
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-4 py-3 text-left font-medium">Submission Date</th>
                    <th className="px-4 py-3 text-left font-medium">Book NO.</th>
                    <th className="px-4 py-3 text-left font-medium">Receipt NO. (DMS)</th>
                    <th className="px-4 py-3 text-left font-medium">ICS Receipt NO.</th>
                    <th className="px-4 py-3 text-left font-medium">DMS ID</th>
                    <th className="px-4 py-3 text-left font-medium">ICS ID</th>
                    <th className="px-4 py-3 text-left font-medium">Collection Type</th>
                    <th className="px-4 py-3 text-left font-medium">Donor Name</th>
                    <th className="px-4 py-3 text-left font-medium">Phone</th>
                    <th className="px-4 py-3 text-left font-medium">Email</th>
                    <th className="px-4 py-3 text-left font-medium">Amount</th>
                    <th className="px-4 py-3 text-left font-medium">Scheme</th>
                    <th className="px-4 py-3 text-left font-medium">Transaction ID</th>
                    <th className="px-4 py-3 text-left font-medium">Transaction Date</th>
                    <th className="px-4 py-3 text-left font-medium">Donation Date</th>
                    <th className="px-4 py-3 text-left font-medium">Payment Mode</th>
                    <th className="px-4 py-3 text-left font-medium">VPA</th>
                    <th className="px-4 py-3 text-left font-medium">Bank Name</th>
                    <th className="px-4 py-3 text-left font-medium">Address</th>
                    <th className="px-4 py-3 text-left font-medium">PAN</th>
                    <th className="px-4 py-3 text-left font-medium">80G</th>
                    <th className="px-4 py-3 text-left font-medium">GST NO</th>
                    <th className="px-4 py-3 text-left font-medium">Cultivator</th>
                    <th className="px-4 py-3 text-left font-medium">Collected By</th>
                    <th className="px-4 py-3 text-left font-medium">Remarks</th>
                    <th className="px-4 py-3 text-left font-medium">Created By</th>
                    <th className="px-4 py-3 text-left font-medium">DQ Status</th>
                    <th className="px-4 py-3 text-left font-medium">Dialler Status</th>
                    <th className="px-4 py-3 text-left font-medium">Dispatch Status</th>
                    <th className="px-4 py-3 text-left font-medium">Dispatch Date</th>
                    <th className="px-4 py-3 text-left font-medium">Delivery Date</th>
                    <th className="px-4 py-3 text-left font-medium">Comm. Pref.</th>
                    <th className="px-4 py-3 text-left font-medium">Comm. Pref. Remarks</th>
                    <th className="px-4 py-3 text-left font-medium">Campaign URL</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDonations.map((donation, index) => (
                    <tr key={donation.receiptNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3">{donation.submissionDate}</td>
                      <td className="px-4 py-3">{donation.bookNo}</td>
                      <td className="px-4 py-3">
                        <Link to={`/donations/${donation.receiptNo}`} className="text-blue-600 hover:underline">
                          {donation.receiptNo}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{donation.icsReceiptNo}</td>
                      <td className="px-4 py-3">
                        <Link to={`/donors/${donation.dmsId}`} className="text-blue-600 hover:underline">
                          {donation.dmsId}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{donation.icsId}</td>
                      <td className="px-4 py-3">{donation.collectionType}</td>
                      <td className="px-4 py-3 font-medium">{donation.donorName}</td>
                      <td className="px-4 py-3">{donation.phone}</td>
                      <td className="px-4 py-3">{donation.email}</td>
                      <td className="px-4 py-3 font-medium text-green-600">{donation.amount}</td>
                      <td className="px-4 py-3">{donation.scheme}</td>
                      <td className="px-4 py-3">{donation.transactionId}</td>
                      <td className="px-4 py-3">{donation.transactionDate}</td>
                      <td className="px-4 py-3">{donation.donationDate}</td>
                      <td className="px-4 py-3">{donation.paymentMode}</td>
                      <td className="px-4 py-3">{donation.vpa}</td>
                      <td className="px-4 py-3">{donation.bankName}</td>
                      <td className="px-4 py-3 max-w-xs truncate">{donation.address}</td>
                      <td className="px-4 py-3">{donation.pan}</td>
                      <td className="px-4 py-3">
                        <Badge variant={donation.is80G === 'Yes' ? 'default' : 'secondary'}>
                          {donation.is80G}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{donation.gstNo}</td>
                      <td className="px-4 py-3">{donation.cultivator}</td>
                      <td className="px-4 py-3">{donation.collectedBy}</td>
                      <td className="px-4 py-3">{donation.remarks}</td>
                      <td className="px-4 py-3">{donation.createdBy}</td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusColor(donation.dqStatus)}>
                          {donation.dqStatus}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusColor(donation.diallerStatus)}>
                          {donation.diallerStatus}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusColor(donation.dispatchStatus)}>
                          {donation.dispatchStatus}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{donation.dispatchDate}</td>
                      <td className="px-4 py-3">{donation.deliveryDate}</td>
                      <td className="px-4 py-3">{donation.commPref}</td>
                      <td className="px-4 py-3">{donation.commPrefRemarks}</td>
                      <td className="px-4 py-3">{donation.campaignUrl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            1 of 58414 | View 1 - 10 of 584139 | Total: ₹21,600.00 | Selected 0
          </div>
          <div className="flex items-center space-x-2">
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

export default DonationListing;
