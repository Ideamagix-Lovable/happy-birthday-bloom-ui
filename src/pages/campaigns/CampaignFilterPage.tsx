import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FilterControls } from '@/components/campaigns/FilterControls';
import { SavedFilters } from '@/components/campaigns/SavedFilters';
import { DonorViewOptions } from '@/components/campaigns/DonorViewOptions';
import { AddFilterParameterDialog } from '@/components/campaigns/AddFilterParameterDialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Users } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomDonorCount } from '@/utils/campaignData';
import { getRandomDonorSample } from '@/utils/donorData';
import { format } from 'date-fns';
import { DonorViewType, SavedFilter } from '@/types/campaign';

const CampaignFilterPage = () => {
  const [donorCount, setDonorCount] = useState<number | null>(45234);
  const [showDialog, setShowDialog] = useState(false);
  const [donors, setDonors] = useState(getRandomDonorSample(10));
  const [donorView, setDonorView] = useState<DonorViewType>('all');
  const [campaignLabel, setCampaignLabel] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  // Calculate donor view counts
  const totalDonors = donorCount || 45234;
  const campaignDonors = Math.floor(totalDonors * 0.27);
  const notCampaignDonors = totalDonors - campaignDonors;

  const donorViewCounts = {
    all: totalDonors,
    campaign: campaignDonors,
    notCampaign: notCampaignDonors,
  };

  const handleSubmitCount = () => {
    const count = getRandomDonorCount(10000, 80000);
    setDonorCount(count);
    toast.success(`Found ${count.toLocaleString()} matching donors`);
  };

  const handleGenerate = () => {
    setShowDialog(true);
  };

  const handleConfirmGenerate = () => {
    setShowDialog(false);
    toast.success('Campaign donors added successfully!');
    navigate(`/campaigns/${id}/pool`);
  };

  const handleLoadFilter = (filter: SavedFilter) => {
    setDonorCount(filter.donorCount);
    // Load filter criteria here when implemented
  };

  // Filter donors based on view selection
  const getFilteredDonors = () => {
    if (donorView === 'all') return donors;
    if (donorView === 'campaign') return donors.slice(0, 3);
    if (donorView === 'not-campaign') return donors.slice(3);
    return donors;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/campaigns">Campaigns</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Filter Configuration</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Configure Donor Filters</h1>
          </div>

          {/* Accordion Sections */}
          <Accordion type="multiple" defaultValue={['filters', 'preview']} className="space-y-4">
            {/* Filter Parameters Section */}
            <AccordionItem value="filters" className="border rounded-lg bg-white">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <h3 className="text-lg font-semibold">Filter Parameters</h3>
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {/* Add Filter Parameter Button */}
                    <AddFilterParameterDialog />
                    
                    {/* Saved Filters Button */}
                    <SavedFilters 
                      currentDonorCount={donorCount} 
                      onLoadFilter={handleLoadFilter}
                    />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <FilterControls />
                
                {/* Action Buttons and Matching Donors */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleSubmitCount} 
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-gray-50"
                    >
                      Submit & Count
                    </Button>
                    <Button
                      onClick={handleGenerate}
                      disabled={donorCount === null}
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Add Donors to Campaign
                    </Button>
                    <SavedFilters 
                      currentDonorCount={donorCount} 
                      onLoadFilter={handleLoadFilter}
                      variant="button"
                    />
                  </div>
                  
                  {/* Matching Donors Count - Inline */}
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Matching Donors:</span>
                    <span className="font-bold text-lg">
                      {donorCount ? donorCount.toLocaleString() : '—'}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Donor Preview Section */}
            <AccordionItem value="preview" className="border rounded-lg bg-white">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <h3 className="text-lg font-semibold">Donor Data Matching Filters</h3>
                  <div onClick={(e) => e.stopPropagation()}>
                    <DonorViewOptions
                      selectedView={donorView}
                      onViewChange={setDonorView}
                      counts={donorViewCounts}
                    />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>DMS ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Lifetime Donation</TableHead>
                        <TableHead>Last Donation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getFilteredDonors().map((donor) => (
                        <TableRow key={donor.dmsId}>
                          <TableCell className="font-mono text-sm">{donor.dmsId}</TableCell>
                          <TableCell className="font-medium">{donor.name}</TableCell>
                          <TableCell>{donor.location}</TableCell>
                          <TableCell className="font-mono text-sm">{donor.phone}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{donor.category}</Badge>
                          </TableCell>
                          <TableCell>₹{donor.lifetimeDonation.toLocaleString()}</TableCell>
                          <TableCell>{format(donor.lastDonation, 'dd MMM yyyy')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Donors to Campaign?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to add {donorCount?.toLocaleString()} donors matching the selected filters to this campaign?
              This action will create a donor pool for gift assignment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="pool-name">Pool Name</Label>
              <Input
                id="pool-name"
                placeholder="Enter pool name"
                value={campaignLabel}
                onChange={(e) => setCampaignLabel(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Overwrite/Skip Options</Label>
              <div className="flex gap-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="overwrite" value="overwrite" defaultChecked />
                  <span className="text-sm">Overwrite existing donors</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="overwrite" value="skip" />
                  <span className="text-sm">Skip existing donors</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                placeholder="Add any remarks for this pool..."
                rows={3}
              />
            </div>

          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmGenerate}>
              Yes, Add Donors
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CampaignFilterPage;
