import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Save, Trash2, Filter, Bookmark } from 'lucide-react';
import { toast } from 'sonner';
import { SavedFilter } from '@/types/campaign';

interface SavedFiltersProps {
  currentDonorCount: number | null;
  onLoadFilter: (filter: SavedFilter) => void;
  variant?: 'header' | 'button';
}

export const SavedFilters: React.FC<SavedFiltersProps> = ({ 
  currentDonorCount, 
  onLoadFilter,
  variant = 'header'
}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterName, setFilterName] = useState('');
  const [savedFilters, setSavedFilters] = useState<SavedFilter[]>(() => {
    const stored = localStorage.getItem('campaignFilters');
    return stored ? JSON.parse(stored) : [];
  });

  const handleSaveFilter = () => {
    if (!filterName.trim()) {
      toast.error('Please enter a filter name');
      return;
    }

    if (currentDonorCount === null) {
      toast.error('Please run "Submit & Count" first');
      return;
    }

    const newFilter: SavedFilter = {
      id: Date.now().toString(),
      name: filterName,
      donorCount: currentDonorCount,
      criteria: {},
      createdAt: new Date(),
    };

    const updated = [...savedFilters, newFilter];
    setSavedFilters(updated);
    localStorage.setItem('campaignFilters', JSON.stringify(updated));
    
    toast.success(`Filter "${filterName}" saved successfully`);
    setFilterName('');
    setDialogOpen(false);
  };

  const handleDeleteFilter = (id: string) => {
    const updated = savedFilters.filter(f => f.id !== id);
    setSavedFilters(updated);
    localStorage.setItem('campaignFilters', JSON.stringify(updated));
    toast.success('Filter deleted');
  };

  const handleLoadFilter = (filter: SavedFilter) => {
    onLoadFilter(filter);
    setSheetOpen(false);
    toast.success(`Loaded filter "${filter.name}"`);
  };

  return (
    <>
      {variant === 'button' ? (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="lg">
              <Bookmark className="h-4 w-4 mr-2" />
              Save Filter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Save Current Filter</DialogTitle>
              <DialogDescription>
                Save your current filter configuration for future use.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="filter-name">Filter Name</Label>
                <Input
                  id="filter-name"
                  placeholder="Enter filter name"
                  value={filterName}
                  onChange={(e) => setFilterName(e.target.value)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Donor Count: <span className="font-semibold">{currentDonorCount?.toLocaleString() || '—'}</span>
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveFilter}>
                Save Filter
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Saved Filters
              {savedFilters.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {savedFilters.length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Saved Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {/* Save New Filter Dialog */}
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Save Current Filter
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Save Filter Configuration</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="filter-name">Filter Name</Label>
                      <Input
                        id="filter-name"
                        placeholder="Enter filter name..."
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                      />
                    </div>
                    {currentDonorCount !== null && (
                      <div className="text-sm text-muted-foreground">
                        This filter will save the current configuration with{' '}
                        <span className="font-semibold">{currentDonorCount.toLocaleString()}</span> matching donors.
                      </div>
                    )}
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveFilter}>Save Filter</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* List of Saved Filters */}
              {savedFilters.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm">No saved filters yet</p>
                  <p className="text-xs mt-1">Save your first filter to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedFilters.map((filter) => (
                    <Card key={filter.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium">{filter.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {filter.donorCount.toLocaleString()} donors
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleLoadFilter(filter)}
                          >
                            Load
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteFilter(filter.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};
