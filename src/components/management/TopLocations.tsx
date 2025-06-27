
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, TrendingUp } from 'lucide-react';

const TopLocations = () => {
  const locations = [
    { name: 'Mumbai', amount: '₹0', count: 0, percentage: 0 },
    { name: 'Delhi', amount: '₹0', count: 0, percentage: 0 },
    { name: 'Bangalore', amount: '₹0', count: 0, percentage: 0 },
    { name: 'Chennai', amount: '₹0', count: 0, percentage: 0 },
    { name: 'Kolkata', amount: '₹0', count: 0, percentage: 0 }
  ];

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-red-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Top Locations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{location.name}</div>
                  <div className="text-sm text-gray-600">{location.count} donations</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">{location.amount}</div>
                <div className="text-sm text-gray-500">{location.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Total Cities</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">₹0</div>
              <div className="text-sm text-gray-600">Total Amount</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-xl font-bold text-purple-600">0</div>
              <div className="text-sm text-gray-600">Total Donors</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopLocations;
