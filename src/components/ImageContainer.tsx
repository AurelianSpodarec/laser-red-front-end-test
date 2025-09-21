import React, { ReactNode } from 'react';

type OverlayPosition = 'center' | 'top-left' | 'bottom-right';

interface ImageContainerProps {
  src: string;
  alt?: string;
  overlay?: boolean;
  overlayPosition?: OverlayPosition;
  className?: string;
  children?: ReactNode;
}

const positionClasses: Record<OverlayPosition, string> = {
  center: 'items-center justify-center text-center',
  'top-left': 'items-start justify-start',
  'bottom-right': 'items-end justify-end',
};

function ImageContainer({
  src,
  alt = '',
  overlay = false,
  overlayPosition = 'center',
  className = '',
  children,
}: ImageContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-full rounded-xl object-cover"
        />
      )}

      {overlay && (
        <div className={`absolute inset-0 flex ${positionClasses[overlayPosition]}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ImageContainer;
