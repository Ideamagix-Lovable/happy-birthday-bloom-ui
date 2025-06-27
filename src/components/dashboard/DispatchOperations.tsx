
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Package, MapPin, Clock, CheckCircle } from 'lucide-react';

const DispatchOperations = () => {
  const dispatchStats = [
    {
      title: 'Ready to Dispatch',
      count: 632,
      total: 2628,
      percentage: 24,
      status: 'pending',
      icon: Package
    },
    {
      title: 'Dispatched Today',
      count: 5644,
      total: 8000,
      percentage: 71,
      status: 'success',
      icon: CheckCircle
    },
    {
      title: 'Pending Dispatches',
      count: 1996,
      total: 2628,
      percentage: 76,
      status: 'warning',
      icon: Clock
    }
  ];

  const areaStats = [
    { area: 'Mumbai', assigned: 245, unassigned: 78, total: 323 },
    { area: 'Rest of Maharashtra', assigned: 156, unassigned: 89, total: 245 },
    { area: 'Other States', assigned: 89, unassigned: 45, total: 134 }
  ];

  return (
    <div className="space-y-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Package className="h-5 w-5" />
            Dispatch Operations Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dispatchStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${
                        stat.status === 'success' ? 'text-green-600' :
                        stat.status === 'warning' ? 'text-orange-600' :
                        'text-blue-600'
                      }`} />
                      <span className="text-sm font-medium">{stat.title}</span>
                    </div>
                    <Badge variant={
                      stat.status === 'success' ? 'default' :
                      stat.status === 'warning' ? 'destructive' :
                      'secondary'
                    }>
                      {stat.count}
                    </Badge>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                  <div className="text-xs text-gray-500">
                    {stat.count} of {stat.total} ({stat.percentage}%)
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Area-wise Birthday Dispatches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {areaStats.map((area, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-medium">{area.area}</div>
                  <div className="text-sm text-gray-500">Total: {area.total} dispatches</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-600">{area.assigned}</div>
                    <div className="text-xs text-gray-500">Assigned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-orange-600">{area.unassigned}</div>
                    <div className="text-xs text-gray-500">Unassigned</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DispatchOperations;
