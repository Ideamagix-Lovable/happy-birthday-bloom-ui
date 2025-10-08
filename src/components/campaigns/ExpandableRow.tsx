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
        className={`cursor-pointer transition-colors hover:bg-muted/50 ${isExpanded ? 'bg-muted/30' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <TableCell className="w-8">
          <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow className="animate-fade-in">
          <TableCell colSpan={colSpan} className="p-0 bg-gray-50/50 border-l-4 border-primary/20">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-base font-semibold text-gray-900">Campaign Pools</h4>
                <Badge variant="secondary" className="text-xs">{pools.length} {pools.length === 1 ? 'pool' : 'pools'}</Badge>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-gray-100/80">
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Pool Name</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Gifts</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Filters Applied</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Donor Count</th>
                      <th className="text-left px-4 py-3 text-xs font-medium text-gray-600 uppercase tracking-wider">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pools.map((pool) => (
                      <tr key={pool.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">{pool.poolName}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex flex-wrap gap-1.5">
                            {pool.gifts.map((gift, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                                {gift}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="truncate max-w-[200px] cursor-help text-gray-700">
                                  {pool.filtersApplied}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-sm">
                                <p className="text-xs">{pool.filtersApplied}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{pool.donorCount.toLocaleString()}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{pool.remarks || '-'}</td>
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
