
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MergedDonors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Merged Donors</h1>
          <Card>
            <CardHeader>
              <CardTitle>Merged Donor Records</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Merged donor records will be displayed here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MergedDonors;
