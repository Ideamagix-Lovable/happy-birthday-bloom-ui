import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CampaignPool } from '@/types/campaign';

interface PoolDetailsTableProps {
  pools: CampaignPool[];
}

export const PoolDetailsTable: React.FC<PoolDetailsTableProps> = ({ pools }) => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pool Name</TableHead>
            <TableHead>Gifts</TableHead>
            <TableHead>Filters Applied</TableHead>
            <TableHead>Donor Count</TableHead>
            <TableHead>Remarks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pools.map((pool) => (
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="truncate max-w-[250px] cursor-help text-sm">
                        {pool.filtersApplied}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-md">
                      <p className="text-xs whitespace-pre-wrap">{pool.filtersApplied}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{pool.donorCount.toLocaleString()}</TableCell>
              <TableCell className="text-muted-foreground text-sm">{pool.remarks || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
