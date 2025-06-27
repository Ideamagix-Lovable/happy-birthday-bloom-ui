
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

const ManagementStats = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white pb-3">
        <CardTitle className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Total Donation
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-xl font-bold text-blue-600">₹0</div>
            <div className="text-xs text-gray-600 mt-1">As per DMS</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="text-xl font-bold text-green-600">₹0</div>
            <div className="text-xs text-gray-600 mt-1">As per Accounts</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-xl font-bold text-purple-600">0</div>
            <div className="text-xs text-gray-600 mt-1">Donation Count</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagementStats;
