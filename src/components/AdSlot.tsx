import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slot: 'below-header' | 'in-content' | 'mid-content' | 'sidebar' | 'above-footer';
  className?: string;
}

/**
 * AdSlot component for Google AdSense integration
 * Implements lazy loading for below-the-fold ads and responsive sizing
 */
export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Ad configuration based on placement
  const adConfig = {
    'below-header': {
      sizes: { mobile: '320x100', desktop: '728x90' },
      lazyLoad: false,
      label: 'Advertisement',
    },
    'in-content': {
      sizes: { mobile: 'auto', desktop: 'auto' },
      lazyLoad: false,
      label: 'Advertisement',
    },
    'mid-content': {
      sizes: { mobile: '300x250', desktop: '300x250' },
      lazyLoad: true,
      label: 'Advertisement',
    },
    'sidebar': {
      sizes: { mobile: 'hidden', desktop: '300x600' },
      lazyLoad: false,
      label: 'Advertisement',
    },
    'above-footer': {
      sizes: { mobile: '320x100', desktop: '728x90' },
      lazyLoad: false,
      label: 'Advertisement',
    },
  };

  const config = adConfig[slot];

  useEffect(() => {
    // Lazy loading implementation for mid-content ads
    if (config.lazyLoad && adRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load ad when it enters viewport
              loadAd();
              // Disconnect observer after loading
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          rootMargin: '200px', // Start loading 200px before entering viewport
        }
      );

      observerRef.current.observe(adRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else {
      // Load immediately for non-lazy ads
      loadAd();
    }
  }, [config.lazyLoad]);

  const loadAd = () => {
    // In production, this would initialize Google AdSense
    // For now, we're creating placeholder structure
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  };

  // Hide sidebar ads on mobile/tablet
  const responsiveClasses = slot === 'sidebar' ? 'hidden lg:block' : '';

  return (
    <div
      ref={adRef}
      className={`ad-slot ad-${slot} ${responsiveClasses} ${className}`}
      data-ad-slot={slot}
      aria-label={config.label}
    >
      <div className="flex min-h-[100px] items-center justify-center rounded-lg border border-border bg-muted/30 p-4">
        <div className="text-center">
          <p className="text-xs font-medium text-muted-foreground">{config.label}</p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            {config.sizes.mobile !== 'hidden' && `Mobile: ${config.sizes.mobile}`}
            {config.sizes.mobile !== 'hidden' && config.sizes.desktop !== 'auto' && ' | '}
            {config.sizes.desktop !== 'auto' && `Desktop: ${config.sizes.desktop}`}
          </p>
        </div>
      </div>
    </div>
  );
}
