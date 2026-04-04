import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'glass-card border border-white/5 bg-white/[0.02]',
        hoverEffect && 'hover:border-primary/50 hover:bg-white/[0.04] cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
