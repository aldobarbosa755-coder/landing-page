import React from 'react';

interface VelloxisLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textClassName?: string;
  badgeText?: string;
}

export const VelloxisLogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <defs>
        <linearGradient id="v_bg_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4f46e5" />
          <stop offset="0.5" stopColor="#3525cd" />
          <stop offset="1" stopColor="#2517a8" />
        </linearGradient>
        <linearGradient id="bolt_grad" x1="35" y1="20" x2="65" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.6" stopColor="#0284c7" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <filter id="logo_glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#3525cd" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Squircle Background */}
      <rect width="100" height="100" rx="24" fill="url(#v_bg_grad)" />
      <rect width="98" height="98" x="1" y="1" rx="23" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" fill="none" />

      {/* Bold White V */}
      <path
        d="M21 21 H36.5 L50 62 L63.5 21 H79 L58.5 79 H41.5 L21 21 Z"
        fill="#FFFFFF"
      />

      {/* Electric Lightning Bolt Accent */}
      <path
        d="M51 25 L41 47 H51 L47 73 L61 43 H50 L55 25 Z"
        fill="url(#bolt_grad)"
        filter="url(#logo_glow)"
      />
    </svg>
  );
};

export const VelloxisLogo: React.FC<VelloxisLogoProps> = ({
  size = 36,
  className = '',
  showText = true,
  textClassName = 'text-xl font-black text-white tracking-tight',
  badgeText
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <VelloxisLogoIcon size={size} />
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={textClassName}>
              Vell<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#38bdf8]">oxis</span>
            </span>
            {badgeText && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                {badgeText}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
