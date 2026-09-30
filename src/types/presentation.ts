export interface SlideCardItem {
  id: string;
  number: string; // e.g. '01', '02', '03', '04'
  title: string;
  summary: string;
  iconName: string; // Lucide icon name
  badgeColor?: 'blue' | 'purple' | 'cyan' | 'magenta';
  imageUrl?: string;
  imageTag?: string;
  imageCaption?: string;
  details: {
    subtitle: string;
    points: string[];
    exampleTitle?: string;
    exampleText?: string;
    statBadge?: string;
    comparison?: {
      traditional: string;
      ai: string;
    };
  };
}

export interface TeamMember {
  id: number;
  role: string;
  name: string;
  matricula: string;
  topic: string;
}

export interface SlideData {
  id: string;
  themeCategory: 'Tema 4: Inteligencia Artificial' | 'Tema 5: La Computadora en Áreas del Saber' | 'Bienvenida' | 'Mini-Juego' | 'Equipo';
  member: string; // e.g. 'Equipo de Exposición'
  title: string; // First line of 3D title
  titleHighlight: string; // Second line of 3D title (neon glow)
  description: string;
  quote?: string;
  bgImage: string; // Full-screen 3D room background
  cards: SlideCardItem[];
  interactiveType?: 'comparison' | 'types' | 'neural' | 'ethics' | 'simulation' | 'platforms' | 'matrix' | 'game' | 'equipo' | 'grid-examples';
  teamMembers?: TeamMember[];
}

export interface GameQuestion {
  id: number;
  prompt: string;
  category: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  icon: string;
}
