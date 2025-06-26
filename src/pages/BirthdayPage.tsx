
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Package, FileText, Users, Settings, Home, Bell, User, BarChart, List, Truck } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const BirthdayPage = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left - Logo and Title */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img src="/lovable-uploads/35fa8ea7-c41b-4754-ae78-e98879b2d0aa.png" alt="ISKCON" className="h-8 w-8" />
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">ISKCON Juhu, Mumbai</h1>
                  <p className="text-sm text-gray-600">Birthday Module</p>
                </div>
              </div>

              {/* Birthday Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-1">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-50">
                    <Calendar className="w-4 h-4" />
                    <span>Birthday Menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border shadow-lg rounded-md z-50">
                    <DropdownMenuItem asChild>
                      <Link to="/birthday" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <Home className="w-4 h-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/list" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <List className="w-4 h-4" />
                        <span>Birthday List</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/planning-report" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <FileText className="w-4 h-4" />
                        <span>Planning Report</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/custom-dispatch" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <Package className="w-4 h-4" />
                        <span>Custom Dispatch</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/dispatch-queue" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <Calendar className="w-4 h-4" />
                        <span>Dispatch Queue</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/shipment-tracker" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <Truck className="w-4 h-4" />
                        <span>Shipment Tracker</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/reports" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <BarChart className="w-4 h-4" />
                        <span>Reports</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/birthday/master-file" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <Settings className="w-4 h-4" />
                        <span>Master File</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
              <p className="text-gray-600">Dedicated birthday cake dispatch management system with dropdown navigation</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-[#b33324] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Birthday Module Dashboard</h2>
            <p className="text-gray-600 mb-6">Use the dropdown menu above to navigate to different sections of the birthday module.</p>
            
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
