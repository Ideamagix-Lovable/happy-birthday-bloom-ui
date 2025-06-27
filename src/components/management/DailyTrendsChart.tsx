
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const DailyTrendsChart = () => {
  const [activeFilter, setActiveFilter] = useState('amount');

  // Dummy data for the chart
  const dummyData = [
    { time: '09:00', amount: 5000, count: 12 },
    { time: '10:00', amount: 8000, count: 18 },
    { time: '11:00', amount: 6500, count: 15 },
    { time: '12:00', amount: 12000, count: 25 },
    { time: '13:00', amount: 9500, count: 20 },
    { time: '14:00', amount: 7000, count: 16 },
    { time: '15:00', amount: 11000, count: 22 },
    { time: '16:00', amount: 8500, count: 19 },
    { time: '17:00', amount: 6000, count: 14 },
    { time: '18:00', amount: 4500, count: 10 }
  ];

  const chartConfig = {
    amount: {
      label: "Amount (₹)",
      color: "#3b82f6",
    },
    count: {
      label: "Count",
      color: "#10b981",
    },
  };

  return (
    <Card className="mb-8 shadow-md">
      <CardHeader className="border-l-4 border-indigo-600">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Daily Trends
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant={activeFilter === 'amount' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('amount')}
            >
              Amount
            </Button>
            <Button
              variant={activeFilter === 'count' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('count')}
            >
              Count
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dummyData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Bar 
                dataKey={activeFilter} 
                fill={activeFilter === 'amount' ? '#3b82f6' : '#10b981'} 
                radius={[4, 4, 0, 0]} 
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DailyTrendsChart;
