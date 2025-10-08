import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreateCampaignDialog } from '@/components/campaigns/CreateCampaignDialog';
import { CampaignList } from '@/components/campaigns/CampaignList';
import { generateCampaigns } from '@/utils/campaignData';
import { useNavigate } from 'react-router-dom';
import { Lightbulb } from 'lucide-react';

const CampaignDashboard = () => {
  const campaigns = generateCampaigns();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Donor Gift Campaigns</h1>
            <div className="flex gap-3">
              <Button
                onClick={() => navigate('/campaigns/planning')}
                className="gap-2"
              >
                <Lightbulb className="h-5 w-5" />
                Campaign Planning
              </Button>
              <CreateCampaignDialog />
            </div>
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
