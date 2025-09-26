export interface Project {
  id: number;
  title: string;
  description: string; // Excerpt for card view
  fullDescription: string; // Full content for detail page
  date: string;
  imageUrl: string;
  beneficiaries: number;
  gallery?: string[];
}

export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full content for detail page
  publishedAt: string;
  author: string;
  imageUrl: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photoUrl: string;
}