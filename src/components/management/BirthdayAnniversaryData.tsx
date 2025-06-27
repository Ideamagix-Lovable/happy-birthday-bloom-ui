
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cake, Gift } from 'lucide-react';

const BirthdayAnniversaryData = () => {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-pink-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Cake className="h-5 w-5" />
          Birthday & Anniversary Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Birthday Data */}
          <div className="p-6 border rounded-lg bg-pink-50">
            <h3 className="font-semibold text-pink-800 mb-4 flex items-center gap-2">
              <Cake className="h-4 w-4" />
              Birthday Data
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </div>

          {/* Anniversary Data */}
          <div className="p-6 border rounded-lg bg-purple-50">
            <h3 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
              <Gift className="h-4 w-4" />
              Anniversary Data
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount</span>
                <span className="font-medium">0</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BirthdayAnniversaryData;
