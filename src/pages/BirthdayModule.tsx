import React, { useState } from 'react';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, BarChart, List, Truck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlanningReport from '@/components/birthday/PlanningReport';
import DispatchDashboard from '@/components/birthday/DispatchDashboard';
import CustomDispatch from '@/components/birthday/CustomDispatch';
import DispatchQueue from '@/components/birthday/DispatchQueue';
import ShipmentTracker from '@/components/birthday/ShipmentTracker';
import MasterFile from '@/components/birthday/MasterFile';
import BirthdayReportTabs from '@/components/birthday/BirthdayReportTabs';
import BirthdayListView from '@/components/birthday/BirthdayListView';
const BirthdayModule = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return <div className="min-h-screen bg-gray-50" style={{
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }}>
      {/* Header Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo and Title */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img alt="ISKCON" src="/lovable-uploads/a5a1275e-9c82-468b-938c-3fa2c7580675.png" className="max-h-14 max-w-52 " />
                <div>
                  
                  
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-700 hover:text-[#b33324] py-2 text-sm font-medium px-[8px]">Dashboard</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Birthday List</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Planning Report</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Custom Dispatch</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Dispatch Queue</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Shipment Tracker</a>
                <a href="#" className="text-gray-700 hover:text-[#b33324] px-3 py-2 text-sm font-medium">Master File</a>
              </nav>
            </div>

            {/* Right - Notifications and User */}
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#b33324]" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#b33324] rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">Admin</div>
                  <div className="text-xs text-gray-600">ISKCON Juhu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 py-6">
        {/* Module Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-[#b33324] rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Birthday Dispatch Module</h1>
              <p className="text-gray-600">Comprehensive birthday cake dispatch management system</p>
            </div>
          </div>
        </div>

        {/* Module Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 bg-white border border-gray-200">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="birthday-list" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <List className="w-4 h-4" />
              <span>Birthday List</span>
            </TabsTrigger>
            <TabsTrigger value="planning" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <FileText className="w-4 h-4" />
              <span>Planning Report</span>
            </TabsTrigger>
            <TabsTrigger value="custom" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <Package className="w-4 h-4" />
              <span>Custom Dispatch</span>
            </TabsTrigger>
            <TabsTrigger value="queue" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <Calendar className="w-4 h-4" />
              <span>Dispatch Queue</span>
            </TabsTrigger>
            <TabsTrigger value="tracker" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <Truck className="w-4 h-4" />
              <span>Shipment Tracker</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <BarChart className="w-4 h-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="master" className="flex items-center space-x-2 data-[state=active]:bg-[#b33324] data-[state=active]:text-white">
              <Settings className="w-4 h-4" />
              <span>Master File</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <DispatchDashboard />
          </TabsContent>

          <TabsContent value="birthday-list" className="mt-6">
            <BirthdayListView />
          </TabsContent>

          <TabsContent value="planning" className="mt-6">
            <PlanningReport />
          </TabsContent>

          <TabsContent value="custom" className="mt-6">
            <CustomDispatch />
          </TabsContent>

          <TabsContent value="queue" className="mt-6">
            <DispatchQueue />
          </TabsContent>

          <TabsContent value="tracker" className="mt-6">
            <ShipmentTracker />
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <BirthdayReportTabs />
          </TabsContent>

          <TabsContent value="master" className="mt-6">
            <MasterFile />
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default BirthdayModule;