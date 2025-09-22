import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  background?: "primary" | "secondary";
  layeredBackground?: "primary";
}

function Section({
  id,
  className = "",
  style,
  children,
  background = "primary",
  layeredBackground,
}: ISectionProps) {
  const backgroundVariants: Record<string, string> = {
    primary: "bg-[#07272E]",
    secondary: "bg-[#02252C]",
  };

  const layeredBackgroundVariants: Record<string, string> = {
    primary: "bg-[#062329]",
  };

  return (
    <section
      id={id}
      className={`${className} ${backgroundVariants[background]} ${layeredBackground ? "p-2.5" : ""}`}
      style={style}
    >
      {layeredBackground ? (
        <div className={`${layeredBackgroundVariants[layeredBackground]} rounded`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export default Section
