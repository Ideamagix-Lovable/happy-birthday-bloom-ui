import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, gradient }) => {
  return (
    <Card className={`${gradient} border-0 text-white`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white/80">{title}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
          </div>
          <Icon className="h-10 w-10 text-white/60" />
        </div>
      </CardContent>
    </Card>
  );
};
