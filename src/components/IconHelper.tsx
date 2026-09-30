import React from 'react';
import * as Icons from 'lucide-react';

interface IconHelperProps {
  name: string;
  size?: number;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, size = 20, className = '' }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as Record<string, any>)[name] || Icons.HelpCircle;
  return <IconComponent size={size} className={className} />;
};
