import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  className?: string;
}

function Grid({ children, className = '' }: GridProps) {
  return (
    <div className={`grid ${className}`}>
      {children}
    </div>
  );
}

export default Grid;
