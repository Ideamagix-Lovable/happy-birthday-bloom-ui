
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, DollarSign, Package, Phone } from 'lucide-react';

const DashboardStatCards = () => {
  const stats = [
    {
      title: 'Total Donations Today',
      value: '₹0',
      change: '+0%',
      trend: 'neutral',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'New Donors',
      value: '0',
      change: '+0%',
      trend: 'neutral',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Dispatches Pending',
      value: '1,996',
      change: '-5%',
      trend: 'down',
      icon: Package,
      color: 'text-orange-600'
    },
    {
      title: 'Total Calls Made',
      value: '0',
      change: '+0%',
      trend: 'neutral',
      icon: Phone,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center text-sm mt-1">
                {stat.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
                {stat.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500 mr-1" />}
                <span className={`${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {stat.change} from yesterday
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStatCards;
