import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, CheckCircle, Trash2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { format } from 'date-fns';
import { CampaignScenario } from '@/types/campaign';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { ScenarioExpandableRow } from './ScenarioExpandableRow';

interface ScenarioListProps {
  scenarios: CampaignScenario[];
}

export const ScenarioList: React.FC<ScenarioListProps> = ({ scenarios }) => {
  const navigate = useNavigate();
  const [showActivateDialog, setShowActivateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);

  const handleView = (scenarioId: string) => {
    navigate(`/campaigns/planning/${scenarioId}/view`);
  };

  const handleEdit = (scenarioId: string) => {
    navigate(`/campaigns/planning/${scenarioId}/edit`);
  };

  const handleActivateClick = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setShowActivateDialog(true);
  };

  const handleConfirmActivate = () => {
    toast.success('Scenario activated and moved to Campaigns page!');
    setShowActivateDialog(false);
    setSelectedScenarioId(null);
  };

  const handleDeleteClick = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    toast.success('Scenario deleted successfully');
    setShowDeleteDialog(false);
    setSelectedScenarioId(null);
  };

  const getStatusBadge = (status: CampaignScenario['status']) => {
    return (
      <Badge variant={status === 'active' ? 'default' : 'secondary'}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  return (
    <>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8"></TableHead>
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
              <ScenarioExpandableRow key={scenario.id} pools={scenario.pools}>
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
                    <Button variant="outline" size="sm" onClick={() => handleView(scenario.id)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(scenario.id)}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(scenario.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                    {scenario.status === 'inactive' && (
                      <Button
                        size="sm"
                        onClick={() => handleActivateClick(scenario.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Activate
                      </Button>
                    )}
                  </div>
                </TableCell>
              </ScenarioExpandableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Activate Confirmation Dialog */}
      <AlertDialog open={showActivateDialog} onOpenChange={setShowActivateDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Activate Scenario</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to activate this scenario? This action cannot be reversed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmActivate}>
              Yes, Activate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Scenario</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be reversed. Are you sure you want to delete this scenario?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
