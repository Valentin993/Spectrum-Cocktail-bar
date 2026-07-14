export interface CocktailItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  description: string;
  category: 'original' | 'classic' | 'temperance';
  glassType?: string;
}

export interface Reservation {
  id: string;
  date: string;
  partySize: number;
  time: string;
  occasion?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  eventType: string;
  status: 'received';
  createdAt: string;
}
