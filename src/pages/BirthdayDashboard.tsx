
import React, { useState } from 'react';
import { Calendar, Users, Package, FileText, Gift, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BirthdayListView from '@/components/birthday/BirthdayListView';
import BirthdayReports from '@/components/birthday/BirthdayReports';
import DispatchPage from '@/components/birthday/DispatchPage';
import CustomCakeDispatch from '@/components/birthday/CustomCakeDispatch';

const BirthdayDashboard = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Geologica, sans-serif' }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#b33324] rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-semibold text-gray-900">Birthday Dispatch</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-[#b33324] text-[#b33324] hover:bg-[#b33324] hover:text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Custom Dispatch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="list" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Birthday List</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="dispatch" className="flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Dispatch</span>
            </TabsTrigger>
            <TabsTrigger value="custom" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Custom Cake</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-6">
            <BirthdayListView />
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <BirthdayReports />
          </TabsContent>

          <TabsContent value="dispatch" className="mt-6">
            <DispatchPage />
          </TabsContent>

          <TabsContent value="custom" className="mt-6">
            <CustomCakeDispatch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BirthdayDashboard;
