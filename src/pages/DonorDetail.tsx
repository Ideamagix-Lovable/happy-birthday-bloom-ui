
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Calendar, MessageSquare, Edit, User, MapPin, Phone, Mail, Heart, BookOpen, GraduationCap, Briefcase, UserCheck, Gift, Headphones, Activity, MessageCircle, Clock, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';

const DonorDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('donations');

  const mockDonor = {
    dmsId: '1184990',
    profileId: '01',
    legalName: 'Om Govind Jhangiyani',
    initiatedName: '',
    phone: '7385942808',
    email: '',
    gender: '',
    donorType: 'Individual',
    icsId: '',
    remark: '',
    panNumber: '',
    referredBy: '',
    dateOfBirth: '',
    maritalStatus: '',
    marriageAnniversary: '',
    donorCreationSource: '',
    commPrefRemark: '',
    is80GQualified: false
  };

  const mockDonations = [
    {
      submissionDate: '24-06-2025',
      bookNo: 'FY2526',
      receiptNo: '279594',
      icsReceiptNo: '-',
      dmsId: '1184990',
      icsId: '-',
      collectionType: 'Donation',
      donorName: 'Om Govind Jhangiyani',
      phone: '7385942808',
      email: '',
      amount: '₹501.00',
      scheme: 'Annadaan',
      transactionId: 'CashA001/000015',
      transactionDate: '23-06-2025',
      donationDate: '23-06-2025',
      paymentMode: 'Cash',
      vpa: '-',
      bankName: 'Cash',
      address: '-',
      pan: '-',
      is80G: 'No',
      gstNo: '-',
      cultivator: 'Shivam Mishra',
      collectedBy: '-',
      remarks: 'Shivam Mishra',
      createdBy: 'Shivam Mishra',
      dqStatus: 'DQ PENDING',
      diallerStatus: 'IN QUEUE',
      dispatchStatus: 'INCOMPLETE ADDRESS',
      dispatchDate: '-',
      deliveryDate: '-',
      commPref: '-',
      commPrefRemarks: '-',
      campaignUrl: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">View Donor Details - {id}</h1>
              <Badge variant={mockDonor.is80GQualified ? 'default' : 'destructive'}>
                {mockDonor.is80GQualified ? '80G Qualified' : '80G Not Qualified'}
              </Badge>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{mockDonor.legalName}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Reminder
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Add Visit
            </Button>
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Special Request
            </Button>
            <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
              <Edit className="w-4 h-4 mr-2" />
              Donor Edit
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Basic Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">DMS ID</label>
                    <Input value={mockDonor.dmsId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Identification Number</label>
                    <Input value={mockDonor.profileId} readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ICS ID</label>
                    <Input value={mockDonor.icsId} />
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
                        <SelectItem value="dr">Dr.</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Legal Name</label>
                    <Input value={mockDonor.legalName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Initiated Name</label>
                    <Input value={mockDonor.initiatedName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input value={mockDonor.phone} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input value={mockDonor.email} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                        <SelectItem value="trust">Trust</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ICS ID</label>
                    <Input value={mockDonor.icsId} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Remark</label>
                    <Input value={mockDonor.remark} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                    <Input value={mockDonor.panNumber} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Referred By</label>
                    <Input value={mockDonor.referredBy} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date Of Birth</label>
                    <Input type="date" value={mockDonor.dateOfBirth} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Marital Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marriage Anniversary</label>
                    <Input type="date" value={mockDonor.marriageAnniversary} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Donor Creation Source</label>
                    <Input value={mockDonor.donorCreationSource} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comm Pref Remark</label>
                    <Input value={mockDonor.commPrefRemark} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Communication Preferences</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">SMS</Badge>
                      <Badge variant="outline">Email</Badge>
                      <Badge variant="outline">WhatsApp</Badge>
                      <Badge variant="outline">Phone Call</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information Tabs */}
            <Card>
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-5 bg-gray-50">
                    <TabsTrigger value="donations">Donations</TabsTrigger>
                    <TabsTrigger value="dispatch">Dispatch</TabsTrigger>
                    <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                    <TabsTrigger value="family">Family</TabsTrigger>
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="donations" className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Donation History</h3>
                        <Badge className="bg-green-100 text-green-800">
                          Total: ₹1,002.00
                        </Badge>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 text-left">Date</th>
                              <th className="px-4 py-2 text-left">Amount</th>
                              <th className="px-4 py-2 text-left">Scheme</th>
                              <th className="px-4 py-2 text-left">Payment Mode</th>
                              <th className="px-4 py-2 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mockDonations.map((donation, index) => (
                              <tr key={index} className="border-b">
                                <td className="px-4 py-2">{donation.donationDate}</td>
                                <td className="px-4 py-2 font-medium text-green-600">{donation.amount}</td>
                                <td className="px-4 py-2">{donation.scheme}</td>
                                <td className="px-4 py-2">{donation.paymentMode}</td>
                                <td className="px-4 py-2">
                                  <Badge variant="outline">{donation.dqStatus}</Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="dispatch" className="p-6">
                    <div className="text-center py-8">
                      <Gift className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">No dispatch records found</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="subscriptions" className="p-6">
                    <div className="text-center py-8">
                      <Heart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">No subscription records found</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="family" className="p-6">
                    <div className="text-center py-8">
                      <User className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-500">No family members found</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="personal" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blood Group</label>
                        <Input placeholder="Enter blood group" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
                        <Input placeholder="Enter nationality" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                        <Input placeholder="Enter occupation" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                        <Input placeholder="Enter education" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Additional Tab Navigation */}
                <div className="border-t p-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      Address
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Language Pref
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Comm Pref
                    </Button>
                    <Button variant="outline" size="sm">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      Education
                    </Button>
                    <Button variant="outline" size="sm">
                      <Briefcase className="w-4 h-4 mr-1" />
                      Profession
                    </Button>
                    <Button variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-1" />
                      Profiles
                    </Button>
                    <Button variant="outline" size="sm">
                      <Gift className="w-4 h-4 mr-1" />
                      Life Membership
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-1" />
                      Spiritual
                    </Button>
                    <Button variant="outline" size="sm">
                      <Headphones className="w-4 h-4 mr-1" />
                      Service Request
                    </Button>
                    <Button variant="outline" size="sm">
                      <Activity className="w-4 h-4 mr-1" />
                      Activity Logs
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Special Comments
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Visits
                    </Button>
                    <Button variant="outline" size="sm">
                      <Clock className="w-4 h-4 mr-1" />
                      Reminders  
                    </Button>
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
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Donor Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Donations:</span>
                    <span className="font-semibold text-green-600">₹1,002.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Total:</span>
                    <span className="font-semibold text-green-600">₹1,002.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">First Donation:</span>
                    <span>23/06/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Donation:</span>
                    <span>23/06/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Category:</span>
                    <Badge variant="outline">ATALA</Badge>
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

export default DonorDetail;
