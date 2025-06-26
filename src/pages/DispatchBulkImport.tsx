
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DispatchBulkImport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Bulk Import</h1>
          <Card>
            <CardHeader>
              <CardTitle>Bulk Import</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Bulk import functionality will be displayed here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchBulkImport;
