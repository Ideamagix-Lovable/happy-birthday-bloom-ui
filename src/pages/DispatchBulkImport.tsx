
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileSpreadsheet, Download, AlertTriangle, CheckCircle, Clock, Database } from 'lucide-react';

const DispatchBulkImport = () => {
  const recentImports = [
    { id: 1, filename: 'dispatch_batch_250625.xlsx', records: 1250, status: 'Completed', date: '25/06/2025', time: '14:30', errors: 0, warnings: 5 },
    { id: 2, filename: 'prasadam_orders_250624.xlsx', records: 890, status: 'Processing', date: '24/06/2025', time: '16:45', errors: 0, warnings: 2 },
    { id: 3, filename: 'birthday_dispatch_250623.xlsx', records: 2100, status: 'Failed', date: '23/06/2025', time: '11:20', errors: 45, warnings: 0 },
    { id: 4, filename: 'general_donations_250622.xlsx', records: 1580, status: 'Completed', date: '22/06/2025', time: '09:15', errors: 2, warnings: 8 },
    { id: 5, filename: 'campaign_dispatch_250621.xlsx', records: 750, status: 'Completed', date: '21/06/2025', time: '13:40', errors: 0, warnings: 1 }
  ];

  const importStats = {
    totalImports: 156,
    successfulImports: 142,
    failedImports: 14,
    totalRecordsProcessed: 125840,
    averageProcessingTime: '4.2 min'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bulk Import</h1>
              <p className="text-gray-600">Dispatch Module - Bulk Import Dispatches</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Template
              </Button>
              <Button className="bg-[#b33324] hover:bg-[#b33324]/90 flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                View History
              </Button>
            </div>
          </div>

          {/* Import Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Imports</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{importStats.totalImports}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Successful</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{importStats.successfulImports}</div>
                <p className="text-xs text-muted-foreground">{Math.round((importStats.successfulImports / importStats.totalImports) * 100)}% success rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Failed</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{importStats.failedImports}</div>
                <p className="text-xs text-muted-foreground">Need attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Records Processed</CardTitle>
                <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{importStats.totalRecordsProcessed.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Total records</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Processing Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{importStats.averageProcessingTime}</div>
                <p className="text-xs text-muted-foreground">Per import</p>
              </CardContent>
            </Card>
          </div>

          {/* File Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Upload Excel File</CardTitle>
              <p className="text-sm text-gray-600">Upload Excel (.xlsx) file for bulk dispatch import</p>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Click here to select a file or just Drag a file</h3>
                <p className="text-sm text-gray-600 mb-4">Note: Existing records will be overwritten. Please format all the cells as "Text" in excel</p>
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90">
                  Choose File
                </Button>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">Important Notes:</h4>
                    <ul className="text-xs text-yellow-700 mt-1 list-disc list-inside">
                      <li>Ensure all cells are formatted as "Text" before uploading</li>
                      <li>Maximum file size: 50MB</li>
                      <li>Supported format: .xlsx only</li>
                      <li>Existing records with same ID will be overwritten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Import History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Import History</CardTitle>
              <p className="text-sm text-gray-600">Latest bulk import activities and their status</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Filename</th>
                      <th className="text-left p-2">Records</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Date & Time</th>
                      <th className="text-left p-2">Errors</th>
                      <th className="text-left p-2">Warnings</th>
                      <th className="text-left p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentImports.map((importItem) => (
                      <tr key={importItem.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{importItem.filename}</td>
                        <td className="p-2">{importItem.records.toLocaleString()}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            importItem.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            importItem.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {importItem.status}
                          </span>
                        </td>
                        <td className="p-2">{importItem.date} {importItem.time}</td>
                        <td className="p-2">
                          {importItem.errors > 0 ? (
                            <span className="text-red-600 font-medium">{importItem.errors}</span>
                          ) : (
                            <span className="text-green-600">0</span>
                          )}
                        </td>
                        <td className="p-2">
                          {importItem.warnings > 0 ? (
                            <span className="text-yellow-600 font-medium">{importItem.warnings}</span>
                          ) : (
                            <span className="text-green-600">0</span>
                          )}
                        </td>
                        <td className="p-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchBulkImport;
