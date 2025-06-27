
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, PhoneCall, Calendar, Clock } from 'lucide-react';

const CallsAnalytics = () => {
  return (
    <div className="mb-8 space-y-6">
      {/* Total Calls */}
      <Card className="shadow-md">
        <CardHeader className="border-l-4 border-blue-600">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Total Calls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1200</div>
              <div className="text-sm text-gray-600">For the day</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">1200</div>
              <div className="text-sm text-gray-600">For the month</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">1200</div>
              <div className="text-sm text-gray-600">For the year</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calls Done & Pending */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-green-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              Total Calls Done
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the day</span>
                <span className="font-medium text-green-600">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the month</span>
                <span className="font-medium">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the year</span>
                <span className="font-medium">1200</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-orange-600">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Total Calls Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the day</span>
                <span className="font-medium text-orange-600">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the month</span>
                <span className="font-medium">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">For the year</span>
                <span className="font-medium">1200</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Thank You Calls & Amazon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-pink-600">
            <CardTitle className="text-lg font-semibold">Thank You Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Count of address collected</span>
                <span className="font-medium">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Thank You calls done</span>
                <span className="font-medium text-green-600">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">DOB & DOA collected</span>
                <span className="font-medium">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Thank you calls pending</span>
                <span className="font-medium text-orange-600">1200</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="border-l-4 border-yellow-600">
            <CardTitle className="text-lg font-semibold">Amazon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amazon calls done</span>
                <span className="font-medium text-green-600">1200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amazon calls pending</span>
                <span className="font-medium text-orange-600">1200</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CallsAnalytics;
