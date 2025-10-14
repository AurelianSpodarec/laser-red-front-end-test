import React, { ReactNode } from 'react';
import Image from './atoms/Image';

type IOverlayPosition = 'center' | 'top-left' | 'bottom-right';

interface IImageContainerProps {
  src: string;
  alt?: string;
  overlay?: boolean;
  overlayPosition?: IOverlayPosition;
  className?: string;
  children?: ReactNode;
}

const positionClasses: Record<IOverlayPosition, string> = {
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
}: IImageContainerProps) {
  return (
    <div className={`relative ${className}`}>
      {src && (
        <Image src={src} alt={alt} className="w-full rounded-xl object-cover" />
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
