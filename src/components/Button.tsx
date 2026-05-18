import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out px-6 py-3 rounded-full";
    
    const variants = {
      primary: "bg-sonder-yellow text-white hover:bg-sonder-darkyellow",
      secondary: "bg-white text-sonder-darkgreen border border-gray-200 hover:bg-gray-50",
      dark: "bg-sonder-darkgreen text-white hover:bg-opacity-90",
      outline: "bg-transparent border border-sonder-darkgreen text-sonder-darkgreen hover:bg-sonder-darkgreen hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
