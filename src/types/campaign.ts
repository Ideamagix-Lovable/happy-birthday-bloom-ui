export interface Campaign {
  id: string;
  name: string;
  festivalDate?: Date;
  startDate: Date;
  endDate: Date;
  level: 'dms' | 'profile';
  status: 'active' | 'completed' | 'draft';
  donorCount: number;
  assignedCount: number;
  createdAt: Date;
}

export interface FilterCriteria {
  donationAmount?: {
    type: 'range' | 'above' | 'below' | 'between';
    min?: number;
    max?: number;
  };
  address?: 'yes' | 'no' | 'any';
  phone?: 'yes' | 'no' | 'any';
  email?: 'yes' | 'no' | 'any';
  categories?: string[];
  lastDonationYear?: string;
  city?: string;
  state?: string;
  donationFrequency?: string;
  lastDonationDateRange?: {
    start?: Date;
    end?: Date;
  };
  gender?: 'male' | 'female' | 'any';
  ageRange?: {
    min?: number;
    max?: number;
  };
  engagementScore?: {
    min?: number;
    max?: number;
  };
  previousGift?: 'yes' | 'no' | 'any';
  priorityLevel?: 'high' | 'medium' | 'low' | 'any';
  logicOperator: 'AND' | 'OR';
}

export interface Donor {
  dmsId: string;
  name: string;
  location: string;
  phone: string;
  email?: string;
  category: string;
  lifetimeDonation: number;
  lastDonation: Date;
  assignedProtocol?: 'protocol1' | 'protocol2' | 'protocol3';
  priority?: 'high' | 'medium' | 'low';
  gender?: string;
  age?: number;
}

export interface GiftProtocol {
  id: 'protocol1' | 'protocol2' | 'protocol3';
  name: string;
  description: string;
}

export const GIFT_PROTOCOLS: GiftProtocol[] = [
  { id: 'protocol1', name: 'Gift Protocol 1', description: 'Standard gift package' },
  { id: 'protocol2', name: 'Gift Protocol 2', description: 'Premium gift package' },
  { id: 'protocol3', name: 'Gift Protocol 3', description: 'Deluxe gift package' },
];

export const DONOR_CATEGORIES = ['Goloka', 'Atala', 'Swarga', 'Vaikuntha', 'Bhumi'];
