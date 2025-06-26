
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Filter, Download, Package, Truck, Clock, CheckCircle } from 'lucide-react';

const DispatchReadyToShip = () => {
  const lotData = [
    { lotNumber: 'L250512-42', boxCount: 3, receiptCount: 9, isRepeat: 'New', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Table Calendar 2025 - 13 sheeter', boxName: 'Normal Box 26x15x2.5', schemeName: 'Akshaya Tritiya', packer: '-' },
    { lotNumber: 'L250512-43', boxCount: 6, receiptCount: 6, isRepeat: 'Repeated', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'Food For Life', packer: '-' },
    { lotNumber: 'L250512-44', boxCount: 15, receiptCount: 33, isRepeat: 'Repeated', isCampaign: 'Yes', productName: 'Shakkar Pala Prasadam', boxName: 'Small Box 13x15x2.5', schemeName: 'Ram Navami', packer: '-' },
    { lotNumber: 'L250512-45', boxCount: 59, receiptCount: 59, isRepeat: 'Repeated', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'A General Donation', packer: '-' },
    { lotNumber: 'L250512-46', boxCount: 316, receiptCount: 316, isRepeat: 'Repeated', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'Akshaya Tritiya', packer: '-' },
    { lotNumber: 'L250512-47', boxCount: 4, receiptCount: 4, isRepeat: 'New', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'Vidya Daan', packer: '-' },
    { lotNumber: 'L250512-48', boxCount: 99, receiptCount: 99, isRepeat: 'New', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'Annadaan', packer: '-' },
    { lotNumber: 'L250512-49', boxCount: 1, receiptCount: 1, isRepeat: 'Repeated', isCampaign: 'Yes', productName: 'Shakkar Pala Prasadam', boxName: 'Small Box 13x15x2.5', schemeName: 'Raj Bhoga', packer: '-' },
    { lotNumber: 'L250512-50', boxCount: 16, receiptCount: 16, isRepeat: 'Repeated', isCampaign: 'Yes', productName: 'Shakkar Pala Prasadam', boxName: 'Small Box 13x15x2.5', schemeName: 'Ram Navami', packer: '-' },
    { lotNumber: 'L250512-51', boxCount: 3, receiptCount: 3, isRepeat: 'Repeated', isCampaign: 'No', productName: 'Shakkar Pala Prasadam, Perfect Questions Perfect Answers Book', boxName: 'Normal Box 26x15x2.5', schemeName: 'Holi Purnima', packer: '-' }
  ];

  const totalBoxes = lotData.reduce((sum, lot) => sum + lot.boxCount, 0);
  const totalReceipts = lotData.reduce((sum, lot) => sum + lot.receiptCount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ready To Ship</h1>
              <p className="text-gray-600">Dispatch Module - Lots Management</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Process Shipments
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
                <div className="text-2xl font-bold text-blue-600">{totalBoxes}</div>
                <p className="text-xs text-muted-foreground">Ready for shipment</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Receipts</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{totalReceipts}</div>
                <p className="text-xs text-muted-foreground">Processed orders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Lots</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{lotData.length}</div>
                <p className="text-xs text-muted-foreground">Current batch</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Box/Lot</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{Math.round(totalBoxes / lotData.length)}</div>
                <p className="text-xs text-muted-foreground">Efficiency metric</p>
              </CardContent>
            </Card>
          </div>

          {/* Lot Management Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lot Management</CardTitle>
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
                      <TableHead>Lot Number</TableHead>
                      <TableHead>Box Count</TableHead>
                      <TableHead>Receipt Count</TableHead>
                      <TableHead>Is Repeat</TableHead>
                      <TableHead>Is Campaign</TableHead>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Box Name</TableHead>
                      <TableHead>Scheme Name</TableHead>
                      <TableHead>Packer</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lotData.map((lot, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{lot.lotNumber}</TableCell>
                        <TableCell>{lot.boxCount}</TableCell>
                        <TableCell>{lot.receiptCount}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            lot.isRepeat === 'New' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {lot.isRepeat}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            lot.isCampaign === 'Yes' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {lot.isCampaign}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{lot.productName}</TableCell>
                        <TableCell>{lot.boxName}</TableCell>
                        <TableCell>{lot.schemeName}</TableCell>
                        <TableCell>{lot.packer || '-'}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Process
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div>Showing 1-10 of 234 lots</div>
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

export default DispatchReadyToShip;
