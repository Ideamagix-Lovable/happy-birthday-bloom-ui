
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Calendar, Package, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
                <h1 className="text-xl font-semibold text-gray-900">ISKCON Bhiwandi - MIS</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Hare Krishna, Nayan Morel</span>
              <div className="w-8 h-8 bg-[#f3b01b] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Management Information System</h1>
          <p className="text-lg text-gray-600">Welcome to ISKCON Bhiwandi MIS Dashboard</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Calendar className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
              <CardTitle className="text-lg">Donations</CardTitle>
              <CardDescription>Manage donor records and donations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Package className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
              <CardTitle className="text-lg">Dispatch</CardTitle>
              <CardDescription>Handle shipments and deliveries</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <FileText className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
              <CardTitle className="text-lg">Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
          </Card>

          <Link to="/birthday">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#b33324] bg-[#b33324]/5">
              <CardHeader className="text-center">
                <Gift className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <CardTitle className="text-lg text-[#b33324]">Birthday Dispatch</CardTitle>
                <CardDescription>Manage birthday cake dispatches</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Featured Module */}
        <Card className="bg-gradient-to-r from-[#b33324]/10 to-[#f3b01b]/10 border-[#b33324]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#b33324] flex items-center">
              <Gift className="w-6 h-6 mr-3" />
              Birthday Dispatch Module
            </CardTitle>
            <CardDescription className="text-lg">
              Streamline birthday cake dispatches with automated workflow management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Birthday Planning</h4>
                <p className="text-sm text-gray-600">Track upcoming birthdays with lead time management</p>
              </div>
              <div className="text-center">
                <Package className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Dispatch Management</h4>
                <p className="text-sm text-gray-600">Automated dispatch workflow with Shiprocket integration</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 mx-auto text-[#b33324] mb-2" />
                <h4 className="font-semibold">Reports & Analytics</h4>
                <p className="text-sm text-gray-600">Comprehensive reporting with delivery tracking</p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/birthday">
                <Button className="bg-[#b33324] hover:bg-[#b33324]/90 text-white px-8 py-3 text-lg">
                  Launch Birthday Dispatch Module
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
