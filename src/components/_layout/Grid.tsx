import React, { ReactNode } from 'react';

interface IGridProps {
  children: ReactNode;
  className?: string;
}

function Grid({ children, className = '' }: IGridProps) {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  );
}

export default Grid;
