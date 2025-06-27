
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, MapPin, Phone, Cake, Gift } from 'lucide-react';

const DispatchSummarySection = () => {
  return (
    <div className="mb-8 space-y-6">
      {/* Main Dispatch Summary */}
      <Card className="shadow-md">
        <CardHeader className="border-l-4 border-orange-600">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Package className="h-5 w-5" />
            Dispatch Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Dispatches done during day</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">0</div>
              <div className="text-sm text-gray-600">Dispatches pending (Overall)</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">0</div>
              <div className="text-sm text-gray-600">Address not available</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address & Contact Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-blue-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">0</div>
                <div className="text-sm text-gray-600">Not Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-purple-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Phone / Contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-xl font-bold text-red-600">0</div>
                <div className="text-sm text-gray-600">Not Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Birthday, Cake & Pooja Dispatches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Birthday Dispatches */}
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-pink-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Cake className="h-5 w-5" />
              Birthday Dispatches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Dispatches done</span>
                <span className="font-medium text-green-600">125</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Within Maharashtra</span>
                <span className="font-medium">80</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Outside Maharashtra</span>
                <span className="font-medium">45</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cake Dispatches */}
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-yellow-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Cake Dispatches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Done during the day</span>
                <span className="font-medium text-green-600">155</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Pending (Overall)</span>
                <span className="font-medium text-orange-600">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Address not available</span>
                <span className="font-medium text-red-600">43</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pooja Done */}
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-indigo-600">
            <CardTitle className="text-lg font-semibold">Pooja Done</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Online Puja Done</span>
                <span className="font-medium text-green-600">48</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Birthday Videos sent</span>
                <span className="font-medium">41</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Anniversary Videos sent</span>
                <span className="font-medium">26</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DispatchSummarySection;
