import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <Card className="bg-white border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold mt-2 text-gray-900">{value}</p>
          </div>
          <Icon className="h-10 w-10 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
};
