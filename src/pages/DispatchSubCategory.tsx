
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DispatchSubCategory = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Sub Category</h1>
          <Card>
            <CardHeader>
              <CardTitle>Sub Category Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Sub category management content will be displayed here</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DispatchSubCategory;
