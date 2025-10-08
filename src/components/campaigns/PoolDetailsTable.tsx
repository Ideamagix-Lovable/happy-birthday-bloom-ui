import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Package } from 'lucide-react';
import { CampaignPool } from '@/types/campaign';
import { toast } from 'sonner';

interface PoolDetailsTableProps {
  pools: CampaignPool[];
}

export const PoolDetailsTable: React.FC<PoolDetailsTableProps> = ({ pools }) => {
  const [showDispatchDialog, setShowDispatchDialog] = useState(false);
  const [selectedPool, setSelectedPool] = useState<CampaignPool | null>(null);

  const handleCreateDispatch = (pool: CampaignPool) => {
    setSelectedPool(pool);
    setShowDispatchDialog(true);
  };

  const handleConfirmDispatch = () => {
    if (selectedPool) {
      toast.success(`Dispatch created for ${selectedPool.poolName}`);
    }
    setShowDispatchDialog(false);
    setSelectedPool(null);
  };

  // Parse filters into array of tags
  const parseFilters = (filtersApplied: string): string[] => {
    return filtersApplied.split(' AND ').map(f => f.trim());
  };

  return (
    <>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pool Name</TableHead>
              <TableHead>Gifts</TableHead>
              <TableHead>Filters Applied</TableHead>
              <TableHead>Donor Count</TableHead>
              <TableHead className="text-right">Dispatch Created</TableHead>
              <TableHead className="text-right">Dispatch Pending</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pools.map((pool) => {
              const dispatchCreated = Math.floor(pool.donorCount * 0.65);
              const dispatchPending = pool.donorCount - dispatchCreated;
              
              return (
                <TableRow key={pool.id}>
                  <TableCell className="font-medium">{pool.poolName}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {pool.gifts.map((gift, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {gift}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {parseFilters(pool.filtersApplied).map((filter, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{pool.donorCount.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="default">{dispatchCreated.toLocaleString()}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="destructive">{dispatchPending.toLocaleString()}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{pool.remarks || '-'}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCreateDispatch(pool)}
                    >
                      <Package className="h-4 w-4 mr-1" />
                      Create Dispatch
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Create Dispatch Confirmation Dialog */}
      <AlertDialog open={showDispatchDialog} onOpenChange={setShowDispatchDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create Dispatch</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedPool && (
                <>
                  Create dispatch for <strong>{selectedPool.poolName}</strong>?
                  <br />
                  <span className="text-destructive font-semibold">
                    {(selectedPool.donorCount - Math.floor(selectedPool.donorCount * 0.65)).toLocaleString()} dispatches are pending.
                  </span>
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDispatch}>
              Create Dispatch
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
