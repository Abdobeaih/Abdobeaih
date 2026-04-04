import React from 'react';
import { cn } from './Button';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2 w-full group">
      {label && <label htmlFor={id} className="text-sm font-medium text-white/50 group-focus-within:text-primary transition-colors">{label}</label>}
      <input
        id={id}
        className={cn(
          'glass rounded-2xl px-5 py-3 outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20',
          error && 'border-red-500/50 focus:border-red-500/50',
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500/70 mt-1">{error}</span>}
    </div>
  );
};
