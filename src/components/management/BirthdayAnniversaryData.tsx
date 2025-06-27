
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cake, Gift } from 'lucide-react';

const BirthdayAnniversaryData = () => {
  return (
    <Card className="shadow-sm">
      <CardHeader className="border-l-4 border-pink-600 pb-3">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Cake className="h-4 w-4" />
          Birthday & Anniversary Data
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Birthday Data */}
          <div className="p-4 border rounded-lg bg-pink-50">
            <h3 className="font-medium text-pink-800 mb-3 flex items-center gap-2">
              <Cake className="h-3 w-3" />
              Birthday Data
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Count</span>
                <span className="font-medium text-sm">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Amount</span>
                <span className="font-medium text-sm">0</span>
              </div>
            </div>
          </div>

          {/* Anniversary Data */}
          <div className="p-4 border rounded-lg bg-purple-50">
            <h3 className="font-medium text-purple-800 mb-3 flex items-center gap-2">
              <Gift className="h-3 w-3" />
              Anniversary Data
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Count</span>
                <span className="font-medium text-sm">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-gray-600">Amount</span>
                <span className="font-medium text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BirthdayAnniversaryData;
