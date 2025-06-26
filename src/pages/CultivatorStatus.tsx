
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CultivatorStatus = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Cultivator Status</h1>
          <Card>
            <CardHeader>
              <CardTitle>Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Cultivator status will be displayed here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CultivatorStatus;
