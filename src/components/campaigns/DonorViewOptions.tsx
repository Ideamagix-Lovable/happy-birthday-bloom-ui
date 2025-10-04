import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { DonorViewType, DonorViewCounts } from '@/types/campaign';

interface DonorViewOptionsProps {
  selectedView: DonorViewType;
  onViewChange: (view: DonorViewType) => void;
  counts: DonorViewCounts;
}

export const DonorViewOptions = ({ selectedView, onViewChange, counts }: DonorViewOptionsProps) => {
  return (
    <div className="mb-4 p-4 border rounded-lg bg-white">
      <p className="text-sm font-semibold mb-3">Donor View Options</p>
      <RadioGroup value={selectedView} onValueChange={(value) => onViewChange(value as DonorViewType)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="view-all" />
          <Label htmlFor="view-all" className="cursor-pointer">
            All Donors ({counts.all.toLocaleString()})
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="campaign" id="view-campaign" />
          <Label htmlFor="view-campaign" className="cursor-pointer">
            Campaign Donors ({counts.campaign.toLocaleString()})
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="not-campaign" id="view-not-campaign" />
          <Label htmlFor="view-not-campaign" className="cursor-pointer">
            Not Campaign Donors ({counts.notCampaign.toLocaleString()})
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
