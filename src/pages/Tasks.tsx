
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockTasksData = [
    {
      id: '#2859',
      type: 'IMPORT-DMS-DONATIONS (PRIMARY)',
      status: 'Completed',
      progress: 100,
      filterQuery: '',
      createdAt: '25/06/2025 11:06 am',
      startedAt: '25/06/2025 11:06 am',
      createdBy: 'Ajinkya Patil',
      finishedAt: '25/06/2025 11:06 am',
      message: 'Pre-processing completed for 52 row(s). 1 row(s) failed initial check.',
      downloadLink: '-',
      uploadedFile: '',
      failedRows: ''
    },
    {
      id: '#2858',
      type: 'EXPORT-DONORS',
      status: 'Completed',
      progress: 100,
      filterQuery: 'Custom Select',
      createdAt: '24/06/2025 12:23 pm',
      startedAt: '24/06/2025 12:23 pm',
      createdBy: 'Ajinkya Patil',
      finishedAt: '24/06/2025 12:23 pm',
      message: 'Export completed successfully. 2 files zipped.',
      downloadLink: '',
      uploadedFile: '-',
      failedRows: '-'
    },
    {
      id: '#2857',
      type: 'EXPORT-DQ',
      status: 'Completed',
      progress: 100,
      filterQuery: 'Custom Select',
      createdAt: '24/06/2025 12:23 pm',
      startedAt: '24/06/2025 12:23 pm',
      createdBy: 'Nayan More',
      finishedAt: '24/06/2025 12:23 pm',
      message: 'Export completed successfully',
      downloadLink: '',
      uploadedFile: '-',
      failedRows: '-'
    },
    {
      id: '#2856',
      type: 'EXPORT-DQ',
      status: 'Pending',
      progress: 0,
      filterQuery: 'Custom Select',
      createdAt: '24/06/2025 12:20 pm',
      startedAt: 'Processing',
      createdBy: 'Ajinkya Patil',
      finishedAt: 'Processing',
      message: '',
      downloadLink: '',
      uploadedFile: '-',
      failedRows: '-'
    },
    {
      id: '#2855',
      type: 'BULK-MATCH-DONORS',
      status: 'Completed',
      progress: 100,
      filterQuery: '',
      createdAt: '13/05/2025 01:27 pm',
      startedAt: '13/05/2025 01:27 pm',
      createdBy: 'Shivam Mishra',
      finishedAt: '13/05/2025 01:27 pm',
      message: 'Export completed successfully',
      downloadLink: '',
      uploadedFile: '-',
      failedRows: '-'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'processing':
        return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      <Navigation />
      
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
            <p className="text-gray-600">Manage and monitor system tasks</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search tasks..."
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
                    <th className="px-3 py-2 text-left font-medium text-gray-900">ID</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Type</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Status</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Progress</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Filter Query</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Created At</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Started At</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Created By</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Finished At</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Message</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Download Link</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Uploaded File</th>
                    <th className="px-3 py-2 text-left font-medium text-gray-900">Failed Rows</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTasksData.map((task) => (
                    <tr key={task.id} className="border-b hover:bg-gray-50">
                      <td className="px-3 py-2 font-medium text-blue-600">{task.id}</td>
                      <td className="px-3 py-2">{task.type}</td>
                      <td className="px-3 py-2">{getStatusBadge(task.status)}</td>
                      <td className="px-3 py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">{task.progress}%</span>
                        </div>
                      </td>
                      <td className="px-3 py-2">{task.filterQuery}</td>
                      <td className="px-3 py-2">{task.createdAt}</td>
                      <td className="px-3 py-2">{task.startedAt}</td>
                      <td className="px-3 py-2">{task.createdBy}</td>
                      <td className="px-3 py-2">{task.finishedAt}</td>
                      <td className="px-3 py-2 max-w-xs truncate">{task.message}</td>
                      <td className="px-3 py-2">
                        {task.downloadLink && task.downloadLink !== '-' ? (
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        ) : (
                          '-'
                        )}
                      </td>
                      <td className="px-3 py-2">{task.uploadedFile}</td>
                      <td className="px-3 py-2">{task.failedRows}</td>
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
            <span className="text-sm text-gray-600">1 of 284</span>
            <span className="text-sm text-gray-600">View 1 - 10 of 2834</span>
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

export default Tasks;
