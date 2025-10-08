import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Table, TableBody, TableHead, TableHeader } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CampaignPool } from '@/types/campaign';

interface ScenarioExpandableRowProps {
  pools: CampaignPool[];
  children: React.ReactNode;
}

export const ScenarioExpandableRow: React.FC<ScenarioExpandableRowProps> = ({
  pools,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TableRow className="cursor-pointer hover:bg-muted/50" onClick={() => setIsExpanded(!isExpanded)}>
        <TableCell className="w-8">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && pools.length > 0 && (
        <TableRow>
          <TableCell colSpan={8} className="p-0 bg-muted/20">
            <div className="px-8 py-4">
              <h4 className="text-sm font-semibold mb-3">Campaign Pools ({pools.length})</h4>
              <div className="border rounded-lg bg-background">
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
                        <TableCell className="text-sm">{pool.filtersApplied}</TableCell>
                        <TableCell>{pool.donorCount.toLocaleString()}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {pool.remarks || '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
