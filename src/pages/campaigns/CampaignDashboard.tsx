import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateCampaignDialog } from '@/components/campaigns/CreateCampaignDialog';
import { CampaignList } from '@/components/campaigns/CampaignList';
import { generateCampaigns } from '@/utils/campaignData';

const CampaignDashboard = () => {
  const campaigns = generateCampaigns();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Donor Gift Campaigns</h1>
            <CreateCampaignDialog />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign List</CardTitle>
            </CardHeader>
            <CardContent>
              <CampaignList campaigns={campaigns} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDashboard;
