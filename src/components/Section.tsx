import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

function Section({ id, className, style, children }: ISectionProps) {

  const spacing = {
    clean: "",

  };

  return (
    <section id={id} className={`${className}  bg-[#07272E]`} style={style}>
      {children}
    </section>
  )
}

export default Section;
