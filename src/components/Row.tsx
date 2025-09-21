import React, { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  gap?: number;
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  className?: string;
}

function Row({
  children,
  gap = 0,
  direction = 'row',
  alignItems = 'start',
  className = '',
}: RowProps) {
  const flexDirection = direction === 'row' ? 'flex-row' : 'flex-col';
  return (
    <div className={`flex ${flexDirection} items-${alignItems} gap-[${gap}px] ${className}`}>
      {children}
    </div>
  );
}

export default Row
