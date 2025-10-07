import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { CampaignScenario } from '@/types/campaign';
import { toast } from 'sonner';

interface ScenarioListProps {
  scenarios: CampaignScenario[];
}

export const ScenarioList: React.FC<ScenarioListProps> = ({ scenarios }) => {
  const handleActivate = (scenarioId: string) => {
    toast.success('Scenario activated and moved to Campaigns page!');
  };

  const getStatusBadge = (status: CampaignScenario['status']) => {
    return (
      <Badge variant={status === 'active' ? 'default' : 'secondary'}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Scenario Name</TableHead>
            <TableHead>Festival Date</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Pools</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scenarios.map((scenario) => (
            <TableRow key={scenario.id}>
              <TableCell className="font-medium">{scenario.name}</TableCell>
              <TableCell>
                {scenario.festivalDate ? format(scenario.festivalDate, 'dd MMM yyyy') : '-'}
              </TableCell>
              <TableCell>{format(scenario.startDate, 'dd MMM yyyy')}</TableCell>
              <TableCell>{format(scenario.endDate, 'dd MMM yyyy')}</TableCell>
              <TableCell>
                <Badge variant="outline">{scenario.pools.length} Pools</Badge>
              </TableCell>
              <TableCell>{getStatusBadge(scenario.status)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {scenario.status === 'inactive' && (
                    <Button
                      size="sm"
                      onClick={() => handleActivate(scenario.id)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Activate
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
