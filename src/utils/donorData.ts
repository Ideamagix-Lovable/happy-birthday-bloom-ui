import { Donor } from '@/types/campaign';

const indianNames = [
  'Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Sneha Gupta', 'Vikram Singh',
  'Kavita Reddy', 'Arjun Mehta', 'Anita Desai', 'Suresh Nair', 'Pooja Iyer',
  'Ramesh Choudhary', 'Deepa Menon', 'Karthik Rao', 'Meena Joshi', 'Anil Kapoor',
  'Sunita Malhotra', 'Ravi Verma', 'Geeta Pillai', 'Manoj Agarwal', 'Rekha Sinha',
  'Sanjay Thakur', 'Lakshmi Krishnan', 'Pramod Shah', 'Vidya Balan', 'Ashok Kulkarni',
  'Neha Pandey', 'Yogesh Tiwari', 'Shalini Bhat', 'Dinesh Yadav', 'Anjali Saxena',
];

const indianCities = [
  'Mumbai, Maharashtra', 'Delhi, Delhi', 'Bangalore, Karnataka', 'Hyderabad, Telangana',
  'Chennai, Tamil Nadu', 'Kolkata, West Bengal', 'Pune, Maharashtra', 'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan', 'Lucknow, Uttar Pradesh', 'Surat, Gujarat', 'Kanpur, Uttar Pradesh',
  'Nagpur, Maharashtra', 'Indore, Madhya Pradesh', 'Thane, Maharashtra', 'Bhopal, Madhya Pradesh',
  'Visakhapatnam, Andhra Pradesh', 'Patna, Bihar', 'Vadodara, Gujarat', 'Ludhiana, Punjab',
];

const categories = ['Goloka', 'Atala', 'Swarga', 'Vaikuntha', 'Bhumi'];

export const generateDonors = (count: number = 50): Donor[] => {
  const donors: Donor[] = [];
  
  for (let i = 0; i < count; i++) {
    const name = indianNames[Math.floor(Math.random() * indianNames.length)];
    const location = indianCities[Math.floor(Math.random() * indianCities.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    donors.push({
      dmsId: `DMS${String(100000 + i).padStart(6, '0')}`,
      name,
      location,
      phone: `+91 ${Math.floor(7000000000 + Math.random() * 2999999999)}`,
      email: Math.random() > 0.3 ? `${name.toLowerCase().replace(/\s+/g, '.')}@gmail.com` : undefined,
      category,
      lifetimeDonation: Math.floor(Math.random() * 500000) + 5000,
      lastDonation: new Date(Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000),
      priority: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)] as 'high' | 'medium' | 'low',
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      age: Math.floor(Math.random() * 50) + 25,
    });
  }
  
  return donors;
};

export const getRandomDonorSample = (count: number = 5): Donor[] => {
  return generateDonors(count);
};
