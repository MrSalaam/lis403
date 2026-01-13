export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  year: number;
  coverUrl: string;
  available: boolean;
  abstract: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'BookOpen' | 'Search' | 'Users' | 'Monitor' | 'Archive' | 'Lightbulb';
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: Date;
}