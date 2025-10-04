import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FilterControls } from '@/components/campaigns/FilterControls';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Users } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomDonorCount } from '@/utils/campaignData';
import { getRandomDonorSample } from '@/utils/donorData';
import { format } from 'date-fns';

const CampaignFilterPage = () => {
  const [logicOperator, setLogicOperator] = useState<'AND' | 'OR'>('AND');
  const [donorCount, setDonorCount] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [donors, setDonors] = useState(getRandomDonorSample(10));
  const navigate = useNavigate();
  const { id } = useParams();

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
            <h1 className="text-2xl font-bold text-gray-900">Configure Donor Filters</h1>
          </div>

          {/* Donor Count Card */}
          {donorCount !== null && (
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/80">Matching Donors</p>
                    <p className="text-4xl font-bold mt-2">{donorCount.toLocaleString()}</p>
                  </div>
                  <Users className="h-12 w-12 text-white/60" />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Filter Controls */}
          <FilterControls logicOperator={logicOperator} onLogicOperatorChange={setLogicOperator} />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={handleSubmitCount} size="lg">
              Submit & Count
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={donorCount === null}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
            >
              Add Donors to Campaign
            </Button>
          </div>

          {/* Donor Preview Table */}
          {donorCount !== null && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Donor Preview (Sample)</h3>
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
                      {donors.map((donor) => (
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
              </CardContent>
            </Card>
          )}
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
