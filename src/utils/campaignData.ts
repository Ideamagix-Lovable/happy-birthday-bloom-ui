import { Campaign } from '@/types/campaign';

export const generateCampaigns = (): Campaign[] => {
  return [
    {
      id: '1',
      name: 'Diwali 2024 Campaign',
      festivalDate: new Date('2024-11-01'),
      startDate: new Date('2024-10-15'),
      endDate: new Date('2024-11-05'),
      level: 'dms',
      status: 'completed',
      donorCount: 45678,
      assignedCount: 45678,
      createdAt: new Date('2024-10-01'),
    },
    {
      id: '2',
      name: 'Janmashtami 2024',
      festivalDate: new Date('2024-08-26'),
      startDate: new Date('2024-08-10'),
      endDate: new Date('2024-08-30'),
      level: 'profile',
      status: 'completed',
      donorCount: 32450,
      assignedCount: 32450,
      createdAt: new Date('2024-08-01'),
    },
    {
      id: '3',
      name: 'Holi 2025 Campaign',
      festivalDate: new Date('2025-03-14'),
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-03-20'),
      level: 'dms',
      status: 'active',
      donorCount: 28900,
      assignedCount: 15200,
      createdAt: new Date('2025-02-15'),
    },
    {
      id: '4',
      name: 'Gaura Purnima 2025',
      festivalDate: new Date('2025-03-24'),
      startDate: new Date('2025-03-15'),
      endDate: new Date('2025-03-30'),
      level: 'profile',
      status: 'draft',
      donorCount: 0,
      assignedCount: 0,
      createdAt: new Date('2025-03-10'),
    },
  ];
};

export const getRandomDonorCount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
