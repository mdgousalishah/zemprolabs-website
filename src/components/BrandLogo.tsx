import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'full' | 'mark' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  className?: string;
  priority?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  href = '/',
  className = '',
  priority = false,
  onClick
}) => {
  // Height definitions for aspect-ratio preservation
  const sizeClasses = {
    full: {
      sm: 'h-8 sm:h-9 w-auto',
      md: 'h-10 sm:h-12 w-auto',
      lg: 'h-14 sm:h-16 w-auto',
      xl: 'h-18 sm:h-20 w-auto'
    },
    mark: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-14 w-14',
      xl: 'h-18 w-18'
    }
  };

  const altText = 'Zemprolabs — Technology, Commerce, Beyond';

  const logoImage = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {variant === 'responsive' ? (
        <>
          {/* Mobile: Z Emblem + Crisp Wordmark for small screens */}
          <div className="flex items-center gap-2 sm:hidden">
            <img
              src="/brand/zemprolabs-mark.png"
              alt={altText}
              className="h-9 w-9 object-contain rounded-md"
              loading={priority ? 'eager' : 'lazy'}
            />
            <span className="font-display font-bold text-white text-lg tracking-wider">
              ZEMPROLABS
            </span>
          </div>
          {/* Desktop: Full Official Logo with Tagline */}
          <img
            src="/brand/zemprolabs-logo-clean.png"
            alt={altText}
            className={`hidden sm:block ${sizeClasses.full[size]} object-contain`}
            loading={priority ? 'eager' : 'lazy'}
          />
        </>
      ) : variant === 'mark' ? (
        <img
          src="/brand/zemprolabs-mark.png"
          alt="Zemprolabs Mark"
          className={`${sizeClasses.mark[size]} object-contain rounded-md`}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <img
          src="/brand/zemprolabs-logo-clean.png"
          alt={altText}
          className={`${sizeClasses.full[size]} object-contain`}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-lg transition-transform hover:opacity-95"
        aria-label={altText}
      >
        {logoImage}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-lg transition-transform hover:opacity-95 bg-transparent border-0 p-0 text-left"
        aria-label={altText}
      >
        {logoImage}
      </button>
    );
  }

  return logoImage;
};
