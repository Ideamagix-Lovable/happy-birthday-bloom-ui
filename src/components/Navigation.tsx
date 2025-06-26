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
          <NavigationMenu className="flex-1 max-w-none">
            <NavigationMenuList className="flex space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/accounts" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Accounts
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  Donors
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/donors" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Donor Listing
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  Donations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/donations" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Donation Listing
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/donations/subscriptions" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Subscriptions
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/donations/sales" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Sales
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/birthday-page" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Birthday
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  Dispatch
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[220px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dashboard
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/ready-to-dispatch" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Ready To Dispatch
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/ready-to-ship" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Ready To Ship
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/dispatched" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dispatched
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/bulk-import" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Bulk Import
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/products" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Products
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/categories" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Categories
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/sub-category" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Sub Category
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/product-types" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Product Types
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/packers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Packers
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/box" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Box
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/settings" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Settings
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/donation-protocols" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Donation Protocols
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/shiprocket-settings" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Shiprocket Settings
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dispatch/dispatch-mode" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dispatch Mode
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  DQ
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/dq/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ Dashboard
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/sent-to-dialler" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ Sent To Dialler
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/pending" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ Pending
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/completed" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ Completed
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/all" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ All
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/daily-dq" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Daily DQ
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/admins" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      DQ Admins
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dq/cultivator-status" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Cultivator Status
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  Dialler
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[220px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler Dashboard
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/list-new" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler List (New)
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/list-review" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler List (Review Requested)
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/list-all" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler List (All)
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/admins" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler Admins
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/campaigns" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Campaigns
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/disposition" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Disposition
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/dialler/sub-disposition" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Sub Disposition
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/service" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Service
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/tasks" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Tasks
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/analytics" className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px]">
                    Analytics
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  MIS
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/mis/reports" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      MIS Reports
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/mis/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      MIS Dashboard
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/mis/analytics" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      MIS Analytics
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-gray-700 hover:text-[#b33324] font-medium text-[11px] h-auto data-[state=open]:text-[#b33324]">
                  Miscellaneous
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] p-2 bg-white border shadow-lg rounded-md z-50">
                  <NavigationMenuLink asChild>
                    <Link to="/miscellaneous/merged-donors" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Merged Donors
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/miscellaneous/task-runners" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Task Runners
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/miscellaneous/dialler-call-logs" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-[11px]">
                      Dialler Call Logs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
