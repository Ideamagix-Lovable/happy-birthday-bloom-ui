import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Search } from 'lucide-react';
import { toast } from 'sonner';

const availableParameters = [
  { id: 'lifetime_donation', name: 'Lifetime Donation Amount', type: 'number' },
  { id: 'address', name: 'Address Availability', type: 'boolean' },
  { id: 'phone', name: 'Phone Availability', type: 'boolean' },
  { id: 'email', name: 'Email Availability', type: 'boolean' },
  { id: 'category', name: 'Donor Category', type: 'select' },
  { id: 'last_donation_year', name: 'Last Donation Year', type: 'select' },
  { id: 'city', name: 'City/Location', type: 'text' },
  { id: 'state', name: 'State', type: 'select' },
  { id: 'frequency', name: 'Donation Frequency', type: 'select' },
  { id: 'gender', name: 'Gender', type: 'select' },
  { id: 'age', name: 'Age Range', type: 'number' },
  { id: 'engagement_score', name: 'Engagement Score', type: 'number' },
  { id: 'previous_gift', name: 'Previous Gift Received', type: 'boolean' },
  { id: 'priority', name: 'Priority Level', type: 'select' },
  { id: 'recency', name: 'Donation Recency', type: 'select' },
];

const conditions = {
  number: ['equals', 'greater than', 'less than', 'between'],
  text: ['equals', 'contains', 'starts with', 'ends with'],
  boolean: ['is', 'is not'],
  select: ['is', 'is not', 'is one of'],
};

export const AddFilterParameterDialog = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParameter, setSelectedParameter] = useState<string>('');
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  const filteredParameters = availableParameters.filter(param =>
    param.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedParamData = availableParameters.find(p => p.id === selectedParameter);
  const availableConditions = selectedParamData ? conditions[selectedParamData.type as keyof typeof conditions] : [];

  const handleAddParameter = () => {
    if (!selectedParameter || !selectedCondition) {
      toast.error('Please select both parameter and condition');
      return;
    }
    
    toast.success(`Filter parameter added: ${selectedParamData?.name}`);
    setOpen(false);
    setSearchQuery('');
    setSelectedParameter('');
    setSelectedCondition('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Filter Parameter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Filter Parameter</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {/* Search Parameters */}
          <div className="space-y-2">
            <Label htmlFor="search">Search Parameter</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search filter parameters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Select Parameter */}
          <div className="space-y-2">
            <Label htmlFor="parameter">Select Parameter</Label>
            <Select value={selectedParameter} onValueChange={setSelectedParameter}>
              <SelectTrigger id="parameter">
                <SelectValue placeholder="Choose a parameter" />
              </SelectTrigger>
              <SelectContent>
                {filteredParameters.map((param) => (
                  <SelectItem key={param.id} value={param.id}>
                    {param.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Select Condition */}
          {selectedParameter && (
            <div className="space-y-2">
              <Label htmlFor="condition">Select Condition</Label>
              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Choose a condition" />
                </SelectTrigger>
                <SelectContent>
                  {availableConditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddParameter}>
              Add Parameter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
