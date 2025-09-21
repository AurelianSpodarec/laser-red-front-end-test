import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  background?: "primary" | "secondary";
}

function Section({ id, className, style, background = "primary", children }: ISectionProps) {

  const backgroundVariants = {
    primary: "bg-[#07272E]",
    secondary: "bg-[#02252C] ",
  }

  const spacing = {
    clean: "",

  };

  return (
    <section id={id} className={`${className} ${backgroundVariants[background]} `} style={style}>
      {children}
    </section>
  )
}

export default Section;
