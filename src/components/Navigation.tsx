import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  return (
    <div className="w-full bg-white border-b shadow-sm">
      <div className="max-w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/58379807-592d-4c89-b6c4-df5ce9be4596.png" 
              alt="ISKCON Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
              Dashboard
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                MIS
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/mis/reports" className="text-[11px]">MIS Reports</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mis/dashboard" className="text-[11px]">MIS Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mis/analytics" className="text-[11px]">MIS Analytics</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/accounts" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
              Accounts
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Donors
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/donors" className="text-[11px]">Donor Listing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Donations
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/donations" className="text-[11px]">Donation Listing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/donations/subscriptions" className="text-[11px]">Subscriptions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/donations/sales" className="text-[11px]">Sales</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Birthday
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/birthday/dashboard" className="text-[11px]">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Birthday List</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Planning Report</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Custom Dispatch</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Dispatch Queue</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Shipment Tracker</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Reports</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/birthday" className="text-[11px]">Master File</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Dispatch
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/dashboard" className="text-[11px]">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/ready-to-dispatch" className="text-[11px]">Ready To Dispatch</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/ready-to-ship" className="text-[11px]">Ready To Ship</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/dispatched" className="text-[11px]">Dispatched</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/bulk-import" className="text-[11px]">Bulk Import</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/products" className="text-[11px]">Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/categories" className="text-[11px]">Categories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/sub-category" className="text-[11px]">Sub Category</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/product-types" className="text-[11px]">Product Types</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/packers" className="text-[11px]">Packers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/box" className="text-[11px]">Box</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/settings" className="text-[11px]">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/donation-protocols" className="text-[11px]">Donation Protocols</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/shiprocket-settings" className="text-[11px]">Shiprocket Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dispatch/dispatch-mode" className="text-[11px]">Dispatch Mode</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                DQ
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/dq/dashboard" className="text-[11px]">DQ Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/sent-to-dialler" className="text-[11px]">DQ Sent To Dialler</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/pending" className="text-[11px]">DQ Pending</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/completed" className="text-[11px]">DQ Completed</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/all" className="text-[11px]">DQ All</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/daily-dq" className="text-[11px]">Daily DQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/admins" className="text-[11px]">DQ Admins</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dq/cultivator-status" className="text-[11px]">Cultivator Status</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Dialler
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/dialler/dashboard" className="text-[11px]">Dialler Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/list-new" className="text-[11px]">Dialler List (New)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/list-review" className="text-[11px]">Dialler List (Review Requested)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/list-all" className="text-[11px]">Dialler List (All)</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/admins" className="text-[11px]">Dialler Admins</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/campaigns" className="text-[11px]">Campaigns</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/disposition" className="text-[11px]">Disposition</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dialler/sub-disposition" className="text-[11px]">Sub Disposition</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/service" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
              Service
            </Link>

            <Link to="/tasks" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
              Tasks
            </Link>

            <Link to="/analytics" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
              Analytics
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] border-0 bg-transparent">
                Miscellaneous
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/miscellaneous/merged-donors" className="text-[11px]">Merged Donors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/miscellaneous/task-runners" className="text-[11px]">Task Runners</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/miscellaneous/dialler-call-logs" className="text-[11px]">Dialler Call Logs</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Admin User</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
