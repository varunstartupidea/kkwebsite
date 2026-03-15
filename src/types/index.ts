export interface AboutData {
  name: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  skills: string[];
  languages: string[];
  linkedInUrl: string;
  location: string;
  phone?: string;
}

export interface ProjectCard {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  isHighlight?: boolean;
}

export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';

export interface MediaItem {
  id: string;
  title: string;
  type: 'youtube' | 'instagram';
  url: string;
  thumbnail?: string;
  description?: string;
}
