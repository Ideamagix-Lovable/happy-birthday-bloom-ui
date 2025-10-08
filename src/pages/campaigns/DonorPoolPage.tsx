import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { StatCard } from '@/components/campaigns/StatCard';
import { PoolDetailsTable } from '@/components/campaigns/PoolDetailsTable';
import { ProductInventoryTable } from '@/components/campaigns/ProductInventoryTable';
import { MultiSelectGifts } from '@/components/campaigns/MultiSelectGifts';
import { PoolNameSelect } from '@/components/campaigns/PoolNameSelect';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Users } from 'lucide-react';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';
import { getRandomDonorCount } from '@/utils/campaignData';
import { generateDonors } from '@/utils/donorData';
import { format } from 'date-fns';

const DonorPoolPage = () => {
  const [donors, setDonors] = useState(generateDonors(20));
  const [filteredCount, setFilteredCount] = useState<number | null>(null);
  const [showAssignDialog, setShowAssignDialog] = useState(false);
  const [showRevokeDialog, setShowRevokeDialog] = useState(false);
  const [showDispatchDialog, setShowDispatchDialog] = useState(false);
  const [selectedGifts, setSelectedGifts] = useState<string[]>([]);
  const [poolName, setPoolName] = useState<string>('');
  const [poolRemarks, setPoolRemarks] = useState<string>('');
  const [selectedDonors, setSelectedDonors] = useState<string[]>([]);
  const [selectedPool, setSelectedPool] = useState<string>('all');
  const [stats, setStats] = useState({
    total: 45678,
    assigned: 0,
    unassigned: 45678,
    protocol1: 0,
    protocol2: 0,
    protocol3: 0,
  });
  const { id } = useParams();

  // Sample pool data
  const samplePools = [
    {
      id: '1',
      poolName: 'Pool 1 - High Value Donors',
      gifts: ['Gift A', 'Gift B', 'Premium Box'],
      filtersApplied: 'Donation Amount: >₹1,00,000 AND Last Donation: Last 90 days',
      filterDetails: {} as any,
      donorCount: 12500,
      remarks: 'Premium segment for high-value donors',
      deliveryMethod: 'hand-delivery' as const,
      createdAt: new Date(),
    },
    {
      id: '2',
      poolName: 'Pool 2 - Mid-Tier Donors',
      gifts: ['Gift C', 'Standard Box'],
      filtersApplied: 'Donation Amount: ₹25,000-₹1,00,000 AND Category: Goloka, Swarga',
      filterDetails: {} as any,
      donorCount: 18000,
      remarks: 'Standard gifts for mid-tier segment',
      deliveryMethod: 'dispatch-bhishma' as const,
      createdAt: new Date(),
    },
  ];

  // Sample product inventory data
  const sampleProducts = [
    {
      id: '1',
      productName: 'Gift A - Premium Hamper',
      totalInventory: 15000,
      assignedInventory: 8500,
      availableInventory: 6500,
    },
    {
      id: '2',
      productName: 'Gift B - Deluxe Box',
      totalInventory: 20000,
      assignedInventory: 12000,
      availableInventory: 8000,
    },
    {
      id: '3',
      productName: 'Gift C - Standard Package',
      totalInventory: 30000,
      assignedInventory: 22000,
      availableInventory: 8000,
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedDonors(donors.map(d => d.dmsId));
    } else {
      setSelectedDonors([]);
    }
  };

  const handleSelectDonor = (dmsId: string, checked: boolean) => {
    if (checked) {
      setSelectedDonors([...selectedDonors, dmsId]);
    } else {
      setSelectedDonors(selectedDonors.filter(id => id !== dmsId));
    }
  };

  const handleRevoke = () => {
    if (selectedDonors.length === 0) {
      toast.error('Please select donors to revoke');
      return;
    }
    setShowRevokeDialog(true);
  };

  const handleConfirmRevoke = () => {
    toast.success(`Revoked ${selectedDonors.length} donors from campaign`);
    setSelectedDonors([]);
    setShowRevokeDialog(false);
  };

  const handleSendToDispatch = () => {
    if (selectedDonors.length === 0) {
      toast.error('Please select donors to send to dispatch');
      return;
    }
    setShowDispatchDialog(true);
  };

  const handleConfirmDispatch = () => {
    toast.success(`Sent ${selectedDonors.length} donors to dispatch`);
    setSelectedDonors([]);
    setShowDispatchDialog(false);
  };


  const handleSubmitCount = () => {
    const count = getRandomDonorCount(10000, 30000);
    setFilteredCount(count);
    toast.success(`Found ${count.toLocaleString()} matching donors`);
  };

  const handleAddToPool = () => {
    setShowAssignDialog(true);
  };

  const handleConfirmAddToPool = () => {
    if (!poolName) {
      toast.error('Please enter or select a pool name');
      return;
    }
    
    if (selectedGifts.length === 0) {
      toast.error('Please select at least one gift');
      return;
    }
    
    const assignedCount = filteredCount || (selectedDonors.length > 0 ? selectedDonors.length : 0);
    
    toast.success(`Added ${assignedCount.toLocaleString()} donors to ${poolName}`);
    setShowAssignDialog(false);
    setPoolName('');
    setSelectedGifts([]);
    setPoolRemarks('');
    setSelectedDonors([]);
    setFilteredCount(null);
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
                <BreadcrumbPage>Donor Pool Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-2xl font-bold text-gray-900">Donor Pool Management</h1>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Total Donors in Pool"
              value={stats.total.toLocaleString()}
              icon={Users}
            />
          </div>

          {/* Product Inventory */}
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductInventoryTable products={sampleProducts} />
            </CardContent>
          </Card>

          {/* Campaign Pools */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Pools</CardTitle>
            </CardHeader>
            <CardContent>
              <PoolDetailsTable pools={samplePools} />
            </CardContent>
          </Card>

          {/* Product Inventory */}
          <Card>
            <CardHeader>
              <CardTitle>Product Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductInventoryTable products={sampleProducts} />
            </CardContent>
          </Card>

          {/* Action Buttons */}
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
              onClick={handleAddToPool}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Create Dispatch
            </Button>
          </div>

          {/* Donor Pool Table */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Donor Pool</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label>Filter by Pool:</Label>
                    <Select value={selectedPool} onValueChange={setSelectedPool}>
                      <SelectTrigger className="w-[250px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Pools</SelectItem>
                        {samplePools.map((pool) => (
                          <SelectItem key={pool.id} value={pool.id}>
                            {pool.poolName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                {filteredCount && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-green-900">
                      Found {filteredCount.toLocaleString()} matching donors
                    </span>
                  </div>
                )}
                <div className="flex gap-2 ml-auto">
                  <Button
                    variant="outline"
                    onClick={handleRevoke}
                    disabled={selectedDonors.length === 0}
                  >
                    Revoke ({selectedDonors.length})
                  </Button>
                  <Button
                    onClick={handleSendToDispatch}
                    disabled={selectedDonors.length === 0}
                  >
                    Send to Dispatch ({selectedDonors.length})
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedDonors.length === donors.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>DMS ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Lifetime Donation</TableHead>
                      <TableHead>Last Donation</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assigned Protocol</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {donors.map((donor) => (
                      <TableRow key={donor.dmsId}>
                        <TableCell>
                          <Checkbox
                            checked={selectedDonors.includes(donor.dmsId)}
                            onCheckedChange={(checked) => handleSelectDonor(donor.dmsId, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell className="font-mono text-sm">{donor.dmsId}</TableCell>
                        <TableCell className="font-medium">{donor.name}</TableCell>
                        <TableCell>{donor.location}</TableCell>
                        <TableCell className="font-mono text-sm">{donor.phone}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{donor.category}</Badge>
                        </TableCell>
                        <TableCell>₹{donor.lifetimeDonation.toLocaleString()}</TableCell>
                        <TableCell>{format(donor.lastDonation, 'dd MMM yyyy')}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {donor.priority?.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {donor.assignedProtocol ? (
                            <Badge>{donor.assignedProtocol}</Badge>
                          ) : (
                            <span className="text-gray-400">Not Assigned</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Add to Pool Dialog */}
      <AlertDialog open={showAssignDialog} onOpenChange={setShowAssignDialog}>
        <AlertDialogContent className="max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Add Donors to Pool</AlertDialogTitle>
            <AlertDialogDescription>
              Configure pool settings and select gifts for the donors.
              {filteredCount && (
                <p className="mt-2 font-semibold">
                  Adding {filteredCount.toLocaleString()} donors
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="pool-name">Pool Name *</Label>
              <PoolNameSelect
                value={poolName}
                onChange={setPoolName}
                existingPools={samplePools.map(p => p.poolName)}
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
                value={poolRemarks}
                onChange={(e) => setPoolRemarks(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Select Gifts (Multiple) *</Label>
              <MultiSelectGifts value={selectedGifts} onChange={setSelectedGifts} />
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAddToPool}>
              Add to Pool
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Revoke Dialog */}
      <AlertDialog open={showRevokeDialog} onOpenChange={setShowRevokeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke Donors from Campaign?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to revoke {selectedDonors.length} donors from this campaign?
              This action will remove them from the donor pool.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmRevoke} className="bg-destructive text-destructive-foreground">
              Revoke Donors
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Send to Dispatch Dialog */}
      <AlertDialog open={showDispatchDialog} onOpenChange={setShowDispatchDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send to Dispatch?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to send {selectedDonors.length} donors to dispatch?
              This will create dispatch entries for the selected donors.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDispatch}>
              Send to Dispatch
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DonorPoolPage;
