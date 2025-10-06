import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/campaigns/StatCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Users, UserCheck, UserX, Gift, Package, Box } from 'lucide-react';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';
import { getRandomDonorCount } from '@/utils/campaignData';
import { generateDonors } from '@/utils/donorData';
import { GIFT_PROTOCOLS } from '@/types/campaign';
import { format } from 'date-fns';

const DonorPoolPage = () => {
  const [donors, setDonors] = useState(generateDonors(20));
  const [filteredCount, setFilteredCount] = useState<number | null>(null);
  const [showAssignDialog, setShowAssignDialog] = useState(false);
  const [showRevokeDialog, setShowRevokeDialog] = useState(false);
  const [showDispatchDialog, setShowDispatchDialog] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<string>('');
  const [campaignLabel, setCampaignLabel] = useState<string>('');
  const [selectedDonors, setSelectedDonors] = useState<string[]>([]);
  const [stats, setStats] = useState({
    total: 45678,
    assigned: 0,
    unassigned: 45678,
    protocol1: 0,
    protocol2: 0,
    protocol3: 0,
  });
  const { id } = useParams();

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

  const handleAssignGift = () => {
    if (selectedDonors.length === 0) {
      setSelectedDonors(donors.slice(0, 5).map((d) => d.dmsId));
    }
    setShowAssignDialog(true);
  };

  const handleConfirmAssign = () => {
    if (!selectedProtocol) {
      toast.error('Please select a gift protocol');
      return;
    }
    
    const assignedCount = selectedDonors.length > 0 ? selectedDonors.length : 5;
    
    // Update stats based on selected protocol
    setStats(prev => {
      const newStats = { ...prev };
      newStats.assigned += assignedCount;
      newStats.unassigned -= assignedCount;
      
      if (selectedProtocol === 'protocol-1') {
        newStats.protocol1 += assignedCount;
      } else if (selectedProtocol === 'protocol-2') {
        newStats.protocol2 += assignedCount;
      } else if (selectedProtocol === 'protocol-3') {
        newStats.protocol3 += assignedCount;
      }
      
      return newStats;
    });
    
    toast.success(`Gift protocol assigned to ${assignedCount} donors`);
    setShowAssignDialog(false);
    setSelectedProtocol('');
    setSelectedDonors([]);
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
            <StatCard
              title="Total Donors Assigned"
              value={stats.assigned.toLocaleString()}
              icon={UserCheck}
            />
            <StatCard
              title="Total Donors Unassigned"
              value={stats.unassigned.toLocaleString()}
              icon={UserX}
            />
            <StatCard
              title="Donors in Protocol 1"
              value={stats.protocol1.toLocaleString()}
              icon={Gift}
            />
            <StatCard
              title="Donors in Protocol 2"
              value={stats.protocol2.toLocaleString()}
              icon={Package}
            />
            <StatCard
              title="Donors in Protocol 3"
              value={stats.protocol3.toLocaleString()}
              icon={Box}
            />
          </div>

          {/* Additional Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Donation Recency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select recency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 90 days</SelectItem>
                      <SelectItem value="180">Last 180 days</SelectItem>
                      <SelectItem value="365">Last 1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Previous Gifts</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Assigned Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="assigned">Assigned</SelectItem>
                      <SelectItem value="unassigned">Unassigned</SelectItem>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Campaign Donors Label</Label>
                  <Select value={campaignLabel} onValueChange={setCampaignLabel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select label" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diwali-2024">Diwali 2024</SelectItem>
                      <SelectItem value="new-year-2025">New Year 2025</SelectItem>
                      <SelectItem value="premium-donors">Premium Donors</SelectItem>
                      <SelectItem value="vip-donors">VIP Donors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Saved Filters</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select saved filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-value-donors">High Value Donors (12,345)</SelectItem>
                      <SelectItem value="recent-active">Recent Active (8,920)</SelectItem>
                      <SelectItem value="vip-segment">VIP Segment (2,450)</SelectItem>
                      <SelectItem value="lapsed-donors">Lapsed Donors (5,123)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
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
              onClick={handleAssignGift}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Assign Gift and Create Dispatched
            </Button>
          </div>

          {/* Donor Pool Table */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Donor Pool</h3>
                <div className="flex gap-2">
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

      {/* Assign Gift Dialog */}
      <AlertDialog open={showAssignDialog} onOpenChange={setShowAssignDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Assign Gift Protocol</AlertDialogTitle>
            <AlertDialogDescription>
              Select a gift protocol to assign to the selected donors.
              {selectedDonors.length > 0 && (
                <p className="mt-2 font-semibold">
                  Selected Donors: {selectedDonors.length}
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="space-y-2 py-4">
            <Label>Gift Protocol</Label>
            <Select value={selectedProtocol} onValueChange={setSelectedProtocol}>
              <SelectTrigger>
                <SelectValue placeholder="Select protocol" />
              </SelectTrigger>
              <SelectContent>
                {GIFT_PROTOCOLS.map((protocol) => (
                  <SelectItem key={protocol.id} value={protocol.id}>
                    {protocol.name} - {protocol.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmAssign}>
              Assign Protocol
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
