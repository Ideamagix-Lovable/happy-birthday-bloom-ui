
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Download, Package, Truck, Clock, CheckCircle, MapPin, Phone } from 'lucide-react';

const DispatchDispatched = () => {
  const dispatchedData = [
    {
      orderID: '773095742',
      dmsID: 'IBRD250303-1070804',
      dispatchType: 'Donation',
      lotNumber: 'L250303-1',
      bookNo: 'FY2425',
      receiptNumber: '227457',
      donorName: 'Vikash Dugar / Naina',
      phone: '7231072988',
      alternatePhone: '9137318496',
      address: 'T1-333, floor 33, Kalpataru Paramount, near Balkum Fire Station, Thane West 400608',
      city: 'Thane',
      state: 'Maharashtra',
      country: 'India',
      pincode: '400608',
      amount: 6000,
      scheme: 'Maha Shivaratri',
      campaign: '-',
      transactionID: 'pay_Q0LxU3S6gOS3cS',
      transactionDate: '26-02-2025',
      pan: 'AQIPD4892P',
      is80G: 'Yes',
      commPref: '-',
      commPrefRemarks: 'Send prasadam to Naina-9773522801 Thane West; 400608',
      isRepeat: 'Repeated',
      isCampaign: 'Yes',
      products: 'Shakkar Pala Prasadam',
      box: 'Small Box 13x15x2.5',
      packerName: 'Vamshi Jella',
      carrierName: 'DTDC Surface',
      trackingNumber: '#7D111704546',
      pickupScheduledDate: '04-03-2025',
      assignedDate: '03-03-2025',
      dispatchDate: '-',
      deliveryDate: '-',
      rtoReason: '-',
      status: 'PICKUP SCHEDULED/GENERATED',
      trackingLink: 'Click To Track Package',
      dispatchRemarks: '-'
    },
    {
      orderID: '773302493',
      dmsID: 'IBRD250303-1070835',
      dispatchType: 'Donation',
      lotNumber: 'L250228-24',
      bookNo: 'FY2425',
      receiptNumber: '227947, 227968, 227983',
      donorName: 'Sanjiv Chawla',
      phone: '9958007744',
      alternatePhone: '-',
      address: '6/9 , 3rd floor, Indra vikas colony, dr mukher ji nagar, opposite st nirankari public school, delhi',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      pincode: '110009',
      amount: 4860,
      scheme: 'Maha Shivaratri',
      campaign: '-',
      transactionID: 'pay_Q0OlJF75v9uV4x, pay_Q0P0suXC7L61ZE, pay_Q0P7l36KaR5SCy',
      transactionDate: '26-02-2025',
      pan: 'AGNPC7255Q',
      is80G: 'Yes',
      commPref: '-',
      commPrefRemarks: '-',
      isRepeat: 'Repeated',
      isCampaign: 'Yes',
      products: 'Shakkar Pala Prasadam',
      box: 'Small Box 13x15x2.5',
      packerName: '',
      carrierName: 'Xpressbees Surface',
      trackingNumber: '#14112350856630',
      pickupScheduledDate: '04-03-2025',
      assignedDate: '03-03-2025',
      dispatchDate: '-',
      deliveryDate: '-',
      rtoReason: '-',
      status: 'AWB ASSIGNED',
      trackingLink: '-',
      dispatchRemarks: '-'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dispatched Items</h1>
              <p className="text-gray-600">Dispatch Module - Tracking & Management</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90 flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Track Shipments
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Boxes</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">448,216</div>
                <p className="text-xs text-muted-foreground">Dispatched to date</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Receipts</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">343,021</div>
                <p className="text-xs text-muted-foreground">Processed orders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Transit</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">12,485</div>
                <p className="text-xs text-muted-foreground">Currently shipping</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delivered</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">425,890</div>
                <p className="text-xs text-muted-foreground">Successfully delivered</p>
              </CardContent>
            </Card>
          </div>

          {/* Dispatched Items Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Dispatched Orders</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>DMS ID</TableHead>
                      <TableHead>Donor Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Products</TableHead>
                      <TableHead>Carrier</TableHead>
                      <TableHead>Tracking</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dispatchedData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.orderID}</TableCell>
                        <TableCell>{item.dmsID}</TableCell>
                        <TableCell>{item.donorName}</TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {item.phone}
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{item.address}</TableCell>
                        <TableCell>₹{item.amount.toLocaleString()}</TableCell>
                        <TableCell className="max-w-xs truncate">{item.products}</TableCell>
                        <TableCell>{item.carrierName}</TableCell>
                        <TableCell>{item.trackingNumber}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status.includes('DELIVERED') ? 'bg-green-100 text-green-800' :
                            item.status.includes('PICKUP') ? 'bg-blue-100 text-blue-800' :
                            item.status.includes('AWB') ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Track
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Showing 1-10 of 448,216 items</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchDispatched;
