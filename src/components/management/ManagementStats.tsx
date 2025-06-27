
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

const ManagementStats = () => {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <DollarSign className="h-6 w-6" />
          Total Donation
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">₹0</div>
            <div className="text-sm text-gray-600 mt-1">As per DMS</div>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">₹0</div>
            <div className="text-sm text-gray-600 mt-1">As per Accounts</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-600 mt-1">Donation Count</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManagementStats;
