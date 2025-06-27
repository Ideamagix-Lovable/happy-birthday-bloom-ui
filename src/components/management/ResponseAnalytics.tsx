
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const ResponseAnalytics = () => {
  const responseData = [
    { name: 'Excellent', value: 80, color: '#10B981' },
    { name: 'Good', value: 50, color: '#3B82F6' },
    { name: 'Neutral', value: 30, color: '#F59E0B' },
    { name: 'Bad', value: 10, color: '#EF4444' }
  ];

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-indigo-600">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Overall Response
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={responseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="#8884d8"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {responseData.map((item, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-sm text-gray-600">{item.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResponseAnalytics;
