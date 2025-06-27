
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserPlus, Repeat } from 'lucide-react';

const DonorAnalysis = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-l-4 border-green-600 pb-3">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Users className="h-4 w-4" />
          New v/s Repeated Donors
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* New Donors */}
          <div className="p-4 border rounded-lg bg-blue-50">
            <h3 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
              <UserPlus className="h-3 w-3" />
              New Donors
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Count</span>
                <span className="font-medium text-sm">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Amount</span>
                <span className="font-medium text-sm">₹0</span>
              </div>
            </div>
          </div>

          {/* Repeated Donors */}
          <div className="p-4 border rounded-lg bg-green-50">
            <h3 className="font-medium text-green-800 mb-3 flex items-center gap-2">
              <Repeat className="h-3 w-3" />
              Repeated Donors
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Count</span>
                <span className="font-medium text-sm">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Amount</span>
                <span className="font-medium text-sm">₹0</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorAnalysis;
