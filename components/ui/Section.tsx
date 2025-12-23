
import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  bgColor = 'bg-[#FAFAFA]' 
}) => {
  return (
    <section id={id} className={`w-full py-10 md:py-16 lg:py-20 px-4 md:px-12 lg:px-24 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
