import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Save, Trash2, Filter } from 'lucide-react';
import { toast } from 'sonner';
import { SavedFilter } from '@/types/campaign';

interface SavedFiltersProps {
  currentDonorCount: number | null;
  onLoadFilter: (filter: SavedFilter) => void;
}

export const SavedFilters = ({ currentDonorCount, onLoadFilter }: SavedFiltersProps) => {
  const [open, setOpen] = useState(false);
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
      toast.error('Please run Submit & Count first');
      return;
    }

    const newFilter: SavedFilter = {
      id: Date.now().toString(),
      name: filterName.trim(),
      donorCount: currentDonorCount,
      criteria: {}, // This would contain actual filter criteria
      createdAt: new Date(),
    };

    const updated = [...savedFilters, newFilter];
    setSavedFilters(updated);
    localStorage.setItem('campaignFilters', JSON.stringify(updated));
    
    toast.success(`Filter "${filterName}" saved successfully`);
    setFilterName('');
    setOpen(false);
  };

  const handleDeleteFilter = (id: string) => {
    const updated = savedFilters.filter(f => f.id !== id);
    setSavedFilters(updated);
    localStorage.setItem('campaignFilters', JSON.stringify(updated));
    toast.success('Filter deleted');
  };

  const handleLoadFilter = (filter: SavedFilter) => {
    onLoadFilter(filter);
    toast.success(`Loaded filter "${filter.name}"`);
  };

  return (
    <div className="space-y-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-primary text-primary">
            <Save className="mr-2 h-4 w-4" />
            Save Filter
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Filter Configuration</DialogTitle>
            <DialogDescription>
              Save your current filter settings for future use.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="filterName">Filter Name</Label>
              <Input
                id="filterName"
                placeholder="e.g., High Value Donors 2024"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
            </div>
            {currentDonorCount !== null && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Donor Count:</span>
                <Badge variant="outline">{currentDonorCount.toLocaleString()}</Badge>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveFilter} className="bg-primary text-primary-foreground">
              Save Filter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {savedFilters.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold">Saved Filters</h3>
            </div>
            <div className="space-y-2">
              {savedFilters.map((filter) => (
                <div
                  key={filter.id}
                  className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{filter.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {filter.donorCount.toLocaleString()} donors
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleLoadFilter(filter)}
                    >
                      Load
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteFilter(filter.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
