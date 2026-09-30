import React, { useState } from 'react';
import type { TeamMember } from '../types/presentation';
import { 
  FileText, 
  Bot, 
  Settings, 
  BookOpen, 
  Activity,
  GraduationCap,
  Layers
} from 'lucide-react';
import { sound } from '../utils/soundEngine';

interface TeamRosterViewProps {
  initialMembers?: TeamMember[];
  title?: string;
  titleHighlight?: string;
  description?: string;
}

const DEFAULT_MEMBERS: TeamMember[] = [
  { id: 1, role: 'Integrante 1', name: 'Rubi Shantiel Mieses Caro', matricula: 'A00126327', topic: 'Introducción a la IA' },
  { id: 2, role: 'Integrante 2', name: 'Leonardo De La Cruz Rodríguez', matricula: 'A00125780', topic: 'Tipos de IA' },
  { id: 3, role: 'Integrante 3', name: 'Miguel García', matricula: 'A00126438', topic: '¿Cómo funciona la IA?' },
  { id: 4, role: 'Integrante 4', name: 'Nombre Integrante 4', matricula: 'Mat. 2024-0004', topic: 'Aplicaciones y efectos de la IA' },
  { id: 5, role: 'Integrante 5', name: 'Sandra Mesa', matricula: 'A00126291', topic: 'Computación en la medicina y las ciencias' },
  { id: 6, role: 'Integrante 6', name: 'Arianna Ramirez', matricula: 'A00126080', topic: 'Computación en la educación y las humanidades' },
  { id: 7, role: 'Integrante 7', name: 'Nombre Integrante 7', matricula: 'Mat. 2024-0007', topic: 'Negocios, ingeniería y otras áreas' }
];

export const TeamRosterView: React.FC<TeamRosterViewProps> = ({ 
  initialMembers,
  title = 'Integrantes del',
  titleHighlight = 'Equipo y Matrícula',
  description = 'Asignación temática para el Tema 4 y La Computadora en las Áreas del Saber.'
}) => {
  const [members] = useState<TeamMember[]>(() => {
    if (initialMembers && initialMembers.length > 0) {
      return initialMembers;
    }
    return DEFAULT_MEMBERS;
  });

  // Card Themes matching the 3D palette
  const cardThemes = [
    { num: '01', badgeTheme: 'blue', icon: <FileText size={22} className="card-badge-icon" />, colorClass: 'theme-blue' },
    { num: '02', badgeTheme: 'purple', icon: <Bot size={22} className="card-badge-icon" />, colorClass: 'theme-purple' },
    { num: '03', badgeTheme: 'cyan', icon: <Settings size={22} className="card-badge-icon" />, colorClass: 'theme-cyan' },
    { num: '04', badgeTheme: 'magenta', icon: <BookOpen size={22} className="card-badge-icon" />, colorClass: 'theme-magenta' },
    { num: '05', badgeTheme: 'teal', icon: <Activity size={22} className="card-badge-icon" />, colorClass: 'theme-teal' },
    { num: '06', badgeTheme: 'amber', icon: <GraduationCap size={22} className="card-badge-icon" />, colorClass: 'theme-amber' },
    { num: '07', badgeTheme: 'rose', icon: <Layers size={22} className="card-badge-icon" />, colorClass: 'theme-rose' }
  ];

  return (
    <div className="slide-grid-columns roster-matched-grid">
      {/* Left Column: 3D Typography */}
      <div className="slide-left-col">
        <h1 className="title-3d-extruded">
          <span className="title-line-base">{title}</span>
          <span className="title-line-highlight">{titleHighlight}</span>
        </h1>

        <div className="title-neon-bar" />

        <p className="slide-description-lead">
          {description}
        </p>
      </div>

      {/* Right Column: 3D Volume Cards */}
      <div className="slide-right-col">
        <div className={`cards-stack-wrapper cards-stack-${members.length > 5 ? '7' : '5'}`}>
          {members.map((member, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <div
                key={member.id}
                className={`slide-card-3d card-anim-item ${theme.colorClass}`}
                onMouseEnter={() => sound.playHover()}
              >
                {/* 3D Glass Badge on the left matching reference photo */}
                <div className={`card-badge-3d badge-glow-${theme.badgeTheme}`}>
                  <div className="badge-inner-bevel">
                    {theme.icon}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="card-info-content">
                  <div className="card-heading-row">
                    <span className="card-num">{theme.num}.</span>
                    <h4 className="card-title-text">{member.name}</h4>
                  </div>
                  <p className="card-summary-text">
                    <span className="card-topic-text">{member.topic}</span>
                    <span className="card-bullet">•</span>
                    <span className="card-mat-text">{member.matricula}</span>
                  </p>
                </div>

                {/* 3D Neon Under-Glow & Bevel */}
                <div className={`card-neon-glow glow-${theme.badgeTheme}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamRosterView;
