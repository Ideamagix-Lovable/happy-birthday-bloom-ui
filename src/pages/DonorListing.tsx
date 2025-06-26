
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Download, Users, Plus, FileText, Phone, Mail, MapPin, UserPlus, Database, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const DonorListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const mockDonors = [
    {
      dmsId: '1U25ND1184992',
      profileId: '01',
      icsId: '-',
      legalName: 'Swapna P Malusare',
      initiatedName: '-',
      dob: '-',
      doa: '-',
      is80GQualified: '-',
      pan: '-',
      phone: '-',
      vpa: 'swapna.5172@waaxis',
      email: '-',
      address: '-',
      dnd: 'NO',
      cultivator: '-',
      counsellor: '-',
      donations: '₹2,000.00',
      totalFamilyDonations: '₹2,000.00',
      familyOf: 'Swapna P Malusare',
      familyCategory: 'ATALA',
      firstDonation: '23/06/2025',
      lastDonation: '23/06/2025',
      giftSent: '-',
      category: '-',
      langPref: '',
      litrPref: '',
      remark: '-',
      specialComments: '-'
    },
    {
      dmsId: '1U25ND1184991',
      profileId: '01',
      icsId: '-',
      legalName: 'Shree Viha Jwellers',
      initiatedName: '-',
      dob: '-',
      doa: '-',
      is80GQualified: '-',
      pan: '-',
      phone: '7219474725',
      vpa: '7219474725@ybl',
      email: '-',
      address: '-',
      dnd: 'NO',
      cultivator: '-',
      counsellor: '-',
      donations: '₹1,100.00',
      totalFamilyDonations: '₹1,100.00',
      familyOf: 'Shree Viha Jwellers',
      familyCategory: 'ATALA',
      firstDonation: '23/06/2025',
      lastDonation: '23/06/2025',
      giftSent: '-',
      category: '-',
      langPref: '',
      litrPref: '',
      remark: '-',
      specialComments: '-'
    },
    {
      dmsId: '1U25ND1184990',
      profileId: '01',
      icsId: '-',
      legalName: 'Om Govind Jhangiyani',
      initiatedName: '-',
      dob: '-',
      doa: '-',
      is80GQualified: '-',
      pan: '-',
      phone: '7385942808',
      vpa: '-',
      email: '-',
      address: '-',
      dnd: 'NO',
      cultivator: '-',
      counsellor: '-',
      donations: '₹501.00',
      totalFamilyDonations: '₹1,002.00',
      familyOf: 'Om Govind Jhangiyani',
      familyCategory: 'ATALA',
      firstDonation: '23/06/2025',
      lastDonation: '23/06/2025',
      giftSent: '-',
      category: '-',
      langPref: '',
      litrPref: '',
      remark: '-',
      specialComments: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Donors</h1>
            <p className="text-gray-600">Manage donor records and profiles</p>
          </div>
          <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Donor
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
                    placeholder="Exact Match Global Search"
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
                  Export Cultivator Data
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Export Phones
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Export VPA
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Export Email
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Export Address
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Export Family
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Export BI Report
                </Button>
              </div>

              {/* Management Actions */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Merge Donors
                </Button>
                <Button variant="outline" size="sm">
                  <Database className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" size="sm">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Bulk Match
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
                    <th className="px-4 py-3 text-left font-medium">DMS-ID</th>
                    <th className="px-4 py-3 text-left font-medium">Profile ID</th>
                    <th className="px-4 py-3 text-left font-medium">ICS-ID</th>
                    <th className="px-4 py-3 text-left font-medium">Legal Name</th>
                    <th className="px-4 py-3 text-left font-medium">Initiated Name</th>
                    <th className="px-4 py-3 text-left font-medium">DOB</th>
                    <th className="px-4 py-3 text-left font-medium">DOA</th>
                    <th className="px-4 py-3 text-left font-medium">80G Qualified</th>
                    <th className="px-4 py-3 text-left font-medium">PAN</th>
                    <th className="px-4 py-3 text-left font-medium">Phone</th>
                    <th className="px-4 py-3 text-left font-medium">VPA</th>
                    <th className="px-4 py-3 text-left font-medium">Email</th>
                    <th className="px-4 py-3 text-left font-medium">Address</th>
                    <th className="px-4 py-3 text-left font-medium">DND</th>
                    <th className="px-4 py-3 text-left font-medium">Cultivator</th>
                    <th className="px-4 py-3 text-left font-medium">Counsellor</th>
                    <th className="px-4 py-3 text-left font-medium">Donations</th>
                    <th className="px-4 py-3 text-left font-medium">Total Family Donations</th>
                    <th className="px-4 py-3 text-left font-medium">Family Of</th>
                    <th className="px-4 py-3 text-left font-medium">Family Category</th>
                    <th className="px-4 py-3 text-left font-medium">First Donation</th>
                    <th className="px-4 py-3 text-left font-medium">Last Donation</th>
                    <th className="px-4 py-3 text-left font-medium">Gift Sent</th>
                    <th className="px-4 py-3 text-left font-medium">Category</th>
                    <th className="px-4 py-3 text-left font-medium">Lang. Pref.</th>
                    <th className="px-4 py-3 text-left font-medium">Litr. Pref.</th>
                    <th className="px-4 py-3 text-left font-medium">Remark</th>
                    <th className="px-4 py-3 text-left font-medium">Special Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDonors.map((donor, index) => (
                    <tr key={donor.dmsId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/donors/${donor.dmsId}`} className="text-blue-600 hover:underline">
                          {donor.dmsId}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{donor.profileId}</td>
                      <td className="px-4 py-3">{donor.icsId}</td>
                      <td className="px-4 py-3 font-medium">{donor.legalName}</td>
                      <td className="px-4 py-3">{donor.initiatedName}</td>
                      <td className="px-4 py-3">{donor.dob}</td>
                      <td className="px-4 py-3">{donor.doa}</td>
                      <td className="px-4 py-3">{donor.is80GQualified}</td>
                      <td className="px-4 py-3">{donor.pan}</td>
                      <td className="px-4 py-3">{donor.phone}</td>
                      <td className="px-4 py-3">{donor.vpa}</td>
                      <td className="px-4 py-3">{donor.email}</td>
                      <td className="px-4 py-3">{donor.address}</td>
                      <td className="px-4 py-3">
                        <Badge variant={donor.dnd === 'NO' ? 'secondary' : 'destructive'}>
                          {donor.dnd}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{donor.cultivator}</td>
                      <td className="px-4 py-3">{donor.counsellor}</td>
                      <td className="px-4 py-3 font-medium text-green-600">{donor.donations}</td>
                      <td className="px-4 py-3 font-medium text-green-600">{donor.totalFamilyDonations}</td>
                      <td className="px-4 py-3">{donor.familyOf}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{donor.familyCategory}</Badge>
                      </td>
                      <td className="px-4 py-3">{donor.firstDonation}</td>
                      <td className="px-4 py-3">{donor.lastDonation}</td>
                      <td className="px-4 py-3">{donor.giftSent}</td>
                      <td className="px-4 py-3">{donor.category}</td>
                      <td className="px-4 py-3">{donor.langPref}</td>
                      <td className="px-4 py-3">{donor.litrPref}</td>
                      <td className="px-4 py-3">{donor.remark}</td>
                      <td className="px-4 py-3">{donor.specialComments}</td>
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
            1 of 19904 | View 1 - 10 of 199037 | Selected {selectedRows.length}
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
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorListing;
