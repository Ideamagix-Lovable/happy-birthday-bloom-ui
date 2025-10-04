import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DONOR_CATEGORIES } from '@/types/campaign';

interface FilterControlsProps {
  logicOperator: 'AND' | 'OR';
  onLogicOperatorChange: (value: 'AND' | 'OR') => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  logicOperator,
  onLogicOperatorChange,
}) => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filter Parameters</CardTitle>
          <div className="flex items-center gap-4">
            <Label>Logic Operator:</Label>
            <RadioGroup value={logicOperator} onValueChange={(v) => onLogicOperatorChange(v as 'AND' | 'OR')} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="AND" id="and" />
                <Label htmlFor="and">AND</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="OR" id="or" />
                <Label htmlFor="or">OR</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lifetime Donation Amount */}
          <div className="space-y-2">
            <Label>Lifetime Donation Amount</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select range type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="above">Above</SelectItem>
                <SelectItem value="below">Below</SelectItem>
                <SelectItem value="between">Between</SelectItem>
                <SelectItem value="range">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Input type="number" placeholder="Min" />
              <Input type="number" placeholder="Max" />
            </div>
          </div>

          {/* Address Availability */}
          <div className="space-y-2">
            <Label>Address Availability</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phone Availability */}
          <div className="space-y-2">
            <Label>Phone Availability</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Email Availability */}
          <div className="space-y-2">
            <Label>Email Availability</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Donor Category */}
          <div className="space-y-2">
            <Label>Donor Category (Multi-select)</Label>
            <div className="border rounded-md p-3 space-y-2 max-h-40 overflow-y-auto">
              {DONOR_CATEGORIES.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryToggle(category)}
                  />
                  <Label htmlFor={category} className="font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Last Donation Year */}
          <div className="space-y-2">
            <Label>Last Donation Year (FY)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select FY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-25">FY 2024-25</SelectItem>
                <SelectItem value="2023-24">FY 2023-24</SelectItem>
                <SelectItem value="2022-23">FY 2022-23</SelectItem>
                <SelectItem value="2021-22">FY 2021-22</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label>City/Location</Label>
            <Input placeholder="Enter city name" />
          </div>

          {/* State */}
          <div className="space-y-2">
            <Label>State</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                <SelectItem value="gujarat">Gujarat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Donation Frequency */}
          <div className="space-y-2">
            <Label>Donation Frequency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label>Gender</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Age Range */}
          <div className="space-y-2">
            <Label>Age Range</Label>
            <div className="flex gap-2">
              <Input type="number" placeholder="Min Age" />
              <Input type="number" placeholder="Max Age" />
            </div>
          </div>

          {/* Engagement Score */}
          <div className="space-y-2">
            <Label>Engagement Score</Label>
            <div className="flex gap-2">
              <Input type="number" placeholder="Min" min="0" max="100" />
              <Input type="number" placeholder="Max" min="0" max="100" />
            </div>
          </div>

          {/* Previous Gift Received */}
          <div className="space-y-2">
            <Label>Previous Gift Received</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="any">Any</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Priority Level */}
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

          {/* Donation Recency */}
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
        </div>
      </CardContent>
    </Card>
  );
};
