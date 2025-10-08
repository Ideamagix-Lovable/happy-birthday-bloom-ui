import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreateScenarioDialog } from '@/components/campaigns/CreateScenarioDialog';
import { ScenarioList } from '@/components/campaigns/ScenarioList';
import { generateScenarios } from '@/utils/campaignData';

const CampaignPlanningPage = () => {
  const scenarios = generateScenarios();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaign Planning</h1>
              <p className="text-muted-foreground mt-1">
                Create and test campaign scenarios before activating them
              </p>
            </div>
            <CreateScenarioDialog />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Scenarios</CardTitle>
            </CardHeader>
            <CardContent>
              <ScenarioList scenarios={scenarios} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignPlanningPage;
