
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Repeat } from 'lucide-react';

const DonorAnalysis = () => {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-green-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users className="h-5 w-5" />
          New v/s Repeated Donors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Donors */}
          <div className="p-6 border rounded-lg bg-blue-50">
            <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              New Donors
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount</span>
                <span className="font-medium">₹0</span>
              </div>
            </div>
          </div>

          {/* Repeated Donors */}
          <div className="p-6 border rounded-lg bg-green-50">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
              <Repeat className="h-4 w-4" />
              Repeated Donors
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount</span>
                <span className="font-medium">₹0</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorAnalysis;
