import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, User, MessageSquare, FileText, Mail, Activity } from 'lucide-react';
import Navigation from '@/components/Navigation';

const DonationDetail = () => {
  const { id } = useParams();

  const mockDonation = {
    receiptNo: '279615',
    bookNo: 'FY2526',
    icsReceiptNo: '',
    createdDate: '26-06-2025',
    donationDate: '26-06-2025',
    costCenter: 'Bhishma',
    schemeType: 'Nitya Seva',
    collectionType: 'Donation',
    submissionDate: '26-06-2025',
    donor: {
      name: 'Rupa',
      phone: '8002642280',
      dmsId: '1111044',
      icsId: '',
      email: 'pritijha1752002@gmail.com',
      donorType: 'Individual',
      panNumber: 'KLMPK8393B',
      address: 'Room No. 10,Jankibai wadi, Nanda patekar Road Nanda patekar Road - Mumbai',
      category: 'Correspondence'
    },
    transaction: {
      paymentMode: 'Online',
      transactionId: 'pay_QliLHrkJZNBTpn',
      transactionDate: '26-06-2025',
      amount: '500',
      gosevaAmount: '',
      sadhuBhojanAmount: '',
      bhagavadGitaAmount: '',
      bankName: 'Razorpay',
      accountNumber: '',
      bankIFSC: '',
      bankBranch: '',
      vpa: 'testuser@razorpay',
      iban: '',
      chequeNumber: '',
      iskconAccountNumber: '',
      iskconBankName: ''
    },
    other: {
      receivedBy: '',
      collectedBy: '',
      collectedByText: '',
      source: 'website-api',
      referredBy: '',
      remarks: 'HBD',
      inMemoryOfName: 'Rup',
      inMemoryOfOccasion: 'Birthday',
      inMemoryOfOccasionDate: '27-06-2025',
      inMemoryOfRelation: 'Brother',
      inMemoryOfPhone: '8002642280',
      trackingCampaignUrl: '',
      inMemoryOfMessage: 'HBD'
    },
    subscription: {
      frequency: '',
      startDate: '',
      endDate: '',
      status: '',
      subscriptionId: '82'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">View Donation</h1>
            <p className="text-gray-600">Receipt No: {id}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Update Donation
            </Button>
            <Button variant="outline">
              <User className="w-4 h-4 mr-2" />
              View Donor
            </Button>
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Whatsapp
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Generate Receipt
            </Button>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Mail className="w-4 h-4 mr-2" />
              Thank You Letter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Donor Information */}
            <Card>
              <CardHeader>
                <CardTitle>DONOR INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donor</label>
                    <div className="text-sm font-medium">{mockDonation.donor.name} ({mockDonation.donor.phone})</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DMS ID</label>
                    <Input value={mockDonation.donor.dmsId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ICS ID</label>
                    <Input value={mockDonation.donor.icsId} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salutation</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr.</SelectItem>
                        <SelectItem value="mrs">Mrs.</SelectItem>
                        <SelectItem value="ms">Ms.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donor Type</label>
                    <Select defaultValue="individual">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input value={mockDonation.donor.name} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input value={mockDonation.donor.phone} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input value={mockDonation.donor.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                    <Input value={mockDonation.donor.panNumber} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Choose Address</label>
                    <div className="p-3 bg-gray-50 rounded border">
                      <div className="font-medium text-sm">{mockDonation.donor.category} - {mockDonation.donor.address}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation Information */}
            <Card>
              <CardHeader>
                <CardTitle>DONATION INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Book Number</label>
                    <Input value={mockDonation.bookNo} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Number</label>
                    <Input value={mockDonation.receiptNo} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ICS Receipt Number</label>
                    <Input value={mockDonation.icsReceiptNo} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
                    <Input value={mockDonation.createdDate} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donation Date</label>
                    <Input type="date" value={mockDonation.donationDate} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cost Center</label>
                    <Select defaultValue="bhishma">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bhishma">Bhishma</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scheme Type</label>
                    <Select defaultValue="nitya-seva">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nitya-seva">Nitya Seva</SelectItem>
                        <SelectItem value="annadaan">Annadaan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Collection Type</label>
                    <Select defaultValue="donation">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="sale">Sale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Submission Date</label>
                    <Input value={mockDonation.submissionDate} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 80G Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">DONOR 80G QUALIFICATION STATUS - QUALIFIED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legal Name</label>
                    <Input value={mockDonation.donor.name} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN</label>
                    <Input value={mockDonation.donor.panNumber} readOnly />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <Input value={mockDonation.donor.address} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Collection Type</label>
                    <Input value={mockDonation.collectionType} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scheme Type</label>
                    <Input value={mockDonation.schemeType} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                    <Input value={mockDonation.transaction.paymentMode} readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Transaction Information */}
            <Card>
              <CardHeader>
                <CardTitle>TRANSACTION INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                    <Select defaultValue="online">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID</label>
                    <Input value={mockDonation.transaction.transactionId} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Transaction Date</label>
                    <Input type="date" value={mockDonation.transaction.transactionDate} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <Input value={mockDonation.transaction.amount} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Goseva Amount</label>
                    <Input value={mockDonation.transaction.gosevaAmount} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sadhu Bhojan Seva Amount</label>
                    <Input value={mockDonation.transaction.sadhuBhojanAmount} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bhagavad Gita Amount</label>
                    <Input value={mockDonation.transaction.bhagavadGitaAmount} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <Select defaultValue="razorpay">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="razorpay">Razorpay</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="sbi">State Bank of India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">VPA</label>
                    <Input value={mockDonation.transaction.vpa} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Information */}
            <Card>
              <CardHeader>
                <CardTitle>OTHER INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Received By</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Received By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Collected By</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Collected By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                    <Input value={mockDonation.other.source} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Referred By</label>
                    <Input value={mockDonation.other.referredBy} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
                    <Input value={mockDonation.other.remarks} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">In Memory Of Name</label>
                    <Input value={mockDonation.other.inMemoryOfName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">In Memory Of Occasion</label>
                    <Input value={mockDonation.other.inMemoryOfOccasion} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">In Memory Of Relation</label>
                    <Input value={mockDonation.other.inMemoryOfRelation} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">In Memory of Phone</label>
                    <Input value={mockDonation.other.inMemoryOfPhone} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">In Memory Of Message</label>
                    <Input value={mockDonation.other.inMemoryOfMessage} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Details */}
            <Card>
              <CardHeader>
                <CardTitle>SUBSCRIPTION DETAILS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">View Details</Button>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subscription ID</label>
                      <Input value={mockDonation.subscription.subscriptionId} readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Activity Logs */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Activity Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">SYSTEM - Jun 26, 2025 11:17 AM [CREATE]</span>
                  <Badge variant="outline">CREATE</Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p><strong>Previous Values:</strong> Pan: NA, Vpa: NA, City: NA, Email: NA, Phone: NA, State: NA, Amount: NA...</p>
                  <p><strong>Current Values:</strong> Pan: KLMPK8393B, Vpa: testuser@razorpay, City: Mumbai, Email: pritijha1752002@gmail.com, Phone: 8002642280, Amount: 500...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationDetail;
