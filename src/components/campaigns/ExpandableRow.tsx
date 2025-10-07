import React, { useState } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { CampaignPool } from '@/types/campaign';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ExpandableRowProps {
  children: React.ReactNode;
  pools?: CampaignPool[];
  colSpan: number;
}

export const ExpandableRow: React.FC<ExpandableRowProps> = ({ children, pools, colSpan }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!pools || pools.length === 0) {
    return <TableRow>{children}</TableRow>;
  }

  return (
    <>
      <TableRow 
        className="cursor-pointer hover:bg-muted/50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <TableCell className="w-8">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell colSpan={colSpan} className="bg-muted/30 p-0">
            <div className="p-4">
              <h4 className="text-sm font-semibold mb-3">Pool Details</h4>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-background">
                    <tr className="border-b">
                      <th className="text-left p-3 text-sm font-medium">Pool Name</th>
                      <th className="text-left p-3 text-sm font-medium">Gifts</th>
                      <th className="text-left p-3 text-sm font-medium">Filters Applied</th>
                      <th className="text-left p-3 text-sm font-medium">Donor Count</th>
                      <th className="text-left p-3 text-sm font-medium">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pools.map((pool) => (
                      <tr key={pool.id} className="border-b last:border-b-0">
                        <td className="p-3 text-sm font-medium">{pool.poolName}</td>
                        <td className="p-3 text-sm">
                          <div className="flex flex-wrap gap-1">
                            {pool.gifts.map((gift, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {gift}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 text-sm">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="truncate max-w-[200px] cursor-help">
                                  {pool.filtersApplied}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-sm">
                                <p className="text-xs">{pool.filtersApplied}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        <td className="p-3 text-sm">{pool.donorCount.toLocaleString()}</td>
                        <td className="p-3 text-sm text-muted-foreground">{pool.remarks || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
