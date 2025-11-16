// Database type definitions for Supabase

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at: string;
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  notes?: string;
}

export interface Booking {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
  created_at: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  confirmed_at?: string;
  notes?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  category?: string;
  author?: string;
  image_url?: string;
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image_url: string;
  url?: string;
  technologies?: string[];
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
  interest?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  notes?: string;
  created_at: string;
  updated_at: string;
}


