import { ReactNode } from 'react';

interface IContainerProps {
  id?: string;
  style?: object;
  className?: string;
  children: ReactNode;
}

function Container({ id, style, className, children }: IContainerProps) {
  return (
    <div
      id={id}
      style={style}
      className={`container mx-auto max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
