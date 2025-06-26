
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DispatchDispatched = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dispatched Items</h1>
          <Card>
            <CardHeader>
              <CardTitle>Dispatched</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Dispatched items will be displayed here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchDispatched;
