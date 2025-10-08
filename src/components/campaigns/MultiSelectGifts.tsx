import React, { useState } from 'react';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const GIFTS = ['Gift A', 'Gift B', 'Gift C', 'Gift D'];

interface MultiSelectGiftsProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const MultiSelectGifts: React.FC<MultiSelectGiftsProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (gift: string) => {
    const newValue = value.includes(gift)
      ? value.filter((v) => v !== gift)
      : [...value, gift];
    onChange(newValue);
  };

  const handleRemove = (gift: string) => {
    onChange(value.filter((v) => v !== gift));
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value.length === 0 ? 'Select gifts...' : `${value.length} gift(s) selected`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search gifts..." />
            <CommandEmpty>No gift found.</CommandEmpty>
            {GIFTS && GIFTS.length > 0 && (
              <CommandGroup>
                {GIFTS.map((gift) => (
                  <CommandItem key={gift} onSelect={() => handleSelect(gift)}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value.includes(gift) ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {gift}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </Command>
        </PopoverContent>
      </Popover>
      
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {value.map((gift) => (
            <Badge key={gift} variant="secondary" className="gap-1">
              {gift}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => handleRemove(gift)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
