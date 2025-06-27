
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';

const SourceOfDonation = () => {
  const donationSources = [
    { name: 'Razorpay', value: 0, amount: '₹0', color: '#8B5CF6' },
    { name: 'Cash', value: 0, amount: '₹0', color: '#10B981' },
    { name: 'Cheque', value: 0, amount: '₹0', color: '#F59E0B' },
    { name: 'DD', value: 0, amount: '₹0', color: '#EF4444' },
    { name: 'Transfer', value: 0, amount: '₹0', color: '#3B82F6' },
    { name: 'NEFT', value: 0, amount: '₹0', color: '#EC4899' },
    { name: 'RTGS', value: 0, amount: '₹0', color: '#84CC16' },
    { name: 'Kind', value: 0, amount: '₹0', color: '#F97316' },
    { name: 'Card', value: 0, amount: '₹0', color: '#06B6D4' },
    { name: 'ECS', value: 0, amount: '₹0', color: '#8B5A2B' },
    { name: 'Online', value: 0, amount: '₹0', color: '#6366F1' }
  ];

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-indigo-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <PieChartIcon className="h-5 w-5" />
          Source of Donation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donut Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donationSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {donationSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend with amounts */}
          <div className="space-y-3">
            {donationSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: source.color }}
                  ></div>
                  <span className="text-sm font-medium">{source.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">({source.value}%)</div>
                  <div className="text-xs text-gray-600">{source.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourceOfDonation;
