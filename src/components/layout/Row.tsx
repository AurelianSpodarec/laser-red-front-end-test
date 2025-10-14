import React, { ReactNode } from 'react';

interface IRowProps {
  children: ReactNode;
  gap?: number;
  direction?: 'row' | 'column';
  alignItems?: 'start' | 'center' | 'end';
  className?: string;
}

function Row({
  children,
  gap = 0,
  alignItems = 'start',
  className = '',
}: IRowProps) {
  // const flexDirection = direction === 'row' ? 'flex-row' : 'flex-col';
  return (
    <div className={`flex  items-${alignItems} gap-[${gap}px] ${className}`}>
      {children}
    </div>
  );
}

export default Row
