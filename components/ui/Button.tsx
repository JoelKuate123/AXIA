
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  // Réduction du padding (px-5 py-2.5 au lieu de px-6 py-3) et de la taille de police par défaut
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#2A4EFA] text-white hover:bg-[#111A4D] focus:ring-[#2A4EFA] shadow-[0_4px_14px_0_rgba(42,78,250,0.39)]",
    secondary: "bg-white text-[#111A4D] border border-gray-200 hover:border-[#2A4EFA] hover:text-[#2A4EFA] shadow-sm",
    outline: "bg-transparent border-2 border-[#2A4EFA] text-[#2A4EFA] hover:bg-[#2A4EFA] hover:text-white",
    accent: "bg-[#C1F4D8] text-[#111A4D] hover:bg-[#A3E8C1] shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
