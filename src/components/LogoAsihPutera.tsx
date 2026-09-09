import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  alt?: string;
}

export const LogoAsihPutera: React.FC<LogoProps> = ({ 
  className = "h-11 sm:h-13 md:h-15", 
  variant = 'color',
  alt = "Yayasan Asih Putera"
}) => {
  return (
    <div className={`inline-flex items-center shrink-0 select-none ${
      variant === 'white' 
        ? 'bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100/80' 
        : ''
    }`}>
      <img
        src="/assets/images/logo-yap-1.png"
        alt={alt}
        className={`${className} w-auto max-w-full object-contain transition-all`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};