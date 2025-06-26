
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  return (
    <div className="w-full bg-white border-b shadow-sm">
      <div className="max-w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/58379807-592d-4c89-b6c4-df5ce9be4596.png" 
              alt="ISKCON Bhiwandi" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">ISKCON Bhiwandi</h1>
              <p className="text-xs text-gray-600">Management Information System</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <NavigationMenu className="flex-1 max-w-none">
            <NavigationMenuList className="flex space-x-1" style={{ fontSize: '11px' }}>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/mis" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                    MIS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/accounts" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                    Accounts
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Donors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-48">
                    <NavigationMenuLink asChild>
                      <Link to="/donors" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Donor Listing
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Donations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-48">
                    <NavigationMenuLink asChild>
                      <Link to="/donations" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Donation Listing
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/donations/subscriptions" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Subscriptions
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/donations/sales" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Sales
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Birthday
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-48">
                    <NavigationMenuLink asChild>
                      <Link to="/birthday" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dashboard
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/list" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Birthday List
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/planning-report" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Planning Report
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/custom-dispatch" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Custom Dispatch
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/dispatch-queue" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dispatch Queue
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/shipment-tracker" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Shipment Tracker
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/reports" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Reports
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/birthday/master-file" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Master File
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Dispatch
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-56">
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dashboard
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/ready-to-dispatch" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Ready To Dispatch
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/ready-to-ship" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Ready To Ship
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/dispatched" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dispatched
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/bulk-import" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Bulk Import
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Products
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/categories" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Categories
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/sub-category" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Sub Category
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/product-types" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Product Types
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/packers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Packers
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/box" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Box
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/settings" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Settings
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/donation-protocols" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Donation Protocols
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/shiprocket-settings" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Shiprocket Settings
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dispatch/dispatch-mode" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dispatch Mode
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  DQ
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-52">
                    <NavigationMenuLink asChild>
                      <Link to="/dq/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ Dashboard
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/sent-to-dialler" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ Sent To Dialler
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/pending" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ Pending
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/completed" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ Completed
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/all" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ All
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/daily-dq" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Daily DQ
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/admins" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        DQ Admins
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dq/cultivator-status" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Cultivator Status
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Dialler
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-56">
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler Dashboard
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/list-new" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler List (New)
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/list-review" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler List (Review Requested)
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/list-all" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler List (All)
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/admins" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler Admins
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/campaigns" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Campaigns
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/disposition" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Disposition
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/dialler/sub-disposition" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Sub Disposition
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/service" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                    Service
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/tasks" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                    Tasks
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium">
                  Miscellaneous
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-48">
                    <NavigationMenuLink asChild>
                      <Link to="/miscellaneous/merged-donors" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Merged Donors
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/miscellaneous/task-runners" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Task Runners
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/miscellaneous/dialler-call-logs" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Dialler Call Logs
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">Admin User</div>
              <div className="text-xs text-gray-600">ISKCON Bhiwandi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
