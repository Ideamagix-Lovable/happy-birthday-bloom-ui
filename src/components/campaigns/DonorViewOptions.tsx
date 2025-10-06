import React from 'react';
import { Button } from '@/components/ui/button';
import { DonorViewType, DonorViewCounts } from '@/types/campaign';
import { cn } from '@/lib/utils';

interface DonorViewOptionsProps {
  selectedView: DonorViewType;
  onViewChange: (view: DonorViewType) => void;
  counts: DonorViewCounts;
}

export const DonorViewOptions: React.FC<DonorViewOptionsProps> = ({
  selectedView,
  onViewChange,
  counts,
}) => {
  return (
    <div className="flex justify-end gap-2">
      <Button
        variant={selectedView === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onViewChange('all')}
        className={cn(
          selectedView === 'all' && 'bg-primary text-primary-foreground'
        )}
      >
        All Donors ({counts.all.toLocaleString()})
      </Button>
      <Button
        variant={selectedView === 'campaign' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onViewChange('campaign')}
        className={cn(
          selectedView === 'campaign' && 'bg-primary text-primary-foreground'
        )}
      >
        Campaign Donors ({counts.campaign.toLocaleString()})
      </Button>
      <Button
        variant={selectedView === 'not-campaign' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onViewChange('not-campaign')}
        className={cn(
          selectedView === 'not-campaign' && 'bg-primary text-primary-foreground'
        )}
      >
        Not Campaign Donors ({counts.notCampaign.toLocaleString()})
      </Button>
    </div>
  );
};
