import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit } from 'lucide-react';
import { format } from 'date-fns';
import { Campaign } from '@/types/campaign';
import { useNavigate } from 'react-router-dom';
import { ExpandableRow } from './ExpandableRow';

interface CampaignListProps {
  campaigns: Campaign[];
}

export const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const navigate = useNavigate();

  const getStatusBadge = (status: Campaign['status']) => {
    return <Badge variant="outline">{status.toUpperCase()}</Badge>;
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-8"></TableHead>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Festival Date</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Donor Count</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <ExpandableRow key={campaign.id} pools={campaign.pools} colSpan={9}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>
                {campaign.festivalDate ? format(campaign.festivalDate, 'dd MMM yyyy') : '-'}
              </TableCell>
              <TableCell>{format(campaign.startDate, 'dd MMM yyyy')}</TableCell>
              <TableCell>{format(campaign.endDate, 'dd MMM yyyy')}</TableCell>
              <TableCell>
                <Badge variant="outline">{campaign.level.toUpperCase()}</Badge>
              </TableCell>
              <TableCell>{getStatusBadge(campaign.status)}</TableCell>
              <TableCell>{campaign.donorCount.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/campaigns/${campaign.id}/pool`);
                    }}
                    className="border-primary text-primary hover:bg-gray-50"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/campaigns/${campaign.id}/filters`);
                    }}
                    className="border-primary text-primary hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </TableCell>
            </ExpandableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
