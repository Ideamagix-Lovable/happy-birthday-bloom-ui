
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, BarChart, List, Truck } from 'lucide-react';

const BirthdayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Primary Navigation */}
      <Navigation />

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
              <p className="text-gray-600">Dedicated birthday cake dispatch management system</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-[#b33324] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Birthday Module Dashboard</h2>
            <p className="text-gray-600 mb-6">Use the navigation menu above to access different sections of the birthday module.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link to="/birthday" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Home className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Dashboard</div>
              </Link>
              <Link to="/birthday/list" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <List className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Birthday List</div>
              </Link>
              <Link to="/birthday/planning-report" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Planning Report</div>
              </Link>
              <Link to="/birthday/custom-dispatch" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Package className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Custom Dispatch</div>
              </Link>
              <Link to="/birthday/dispatch-queue" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Dispatch Queue</div>
              </Link>
              <Link to="/birthday/shipment-tracker" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Truck className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Shipment Tracker</div>
              </Link>
              <Link to="/birthday/reports" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <BarChart className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Reports</div>
              </Link>
              <Link to="/birthday/master-file" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Settings className="w-8 h-8 text-[#b33324] mx-auto mb-2" />
                <div className="text-sm font-medium">Master File</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
