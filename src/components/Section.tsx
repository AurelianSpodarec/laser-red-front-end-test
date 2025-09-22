import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  layeredClassName?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  background?: "primary" | "secondary";
  layeredBackground?: "primary";
  tag?: "section" | "footer";
}

function Section({
  id,
  className = "",
  layeredClassName = "",
  style,
  children,
  background = "primary",
  layeredBackground,
  tag = "section"
}: ISectionProps) {

  const backgroundVariants: Record<string, string> = {
    primary: "bg-[#07272E]",
    secondary: "bg-[#02252C]",
  };

  const layeredBackgroundVariants: Record<string, string> = {
    primary: "bg-[#062329]",
  };

  const Tag = tag

  return (
    <Tag
      id={id}
      className={`${className} ${backgroundVariants[background]} ${layeredBackground ? "p-2.5" : ""}`}
      style={style}
    >
      {layeredBackground ? (
        <div className={`${layeredClassName} ${layeredBackgroundVariants[layeredBackground]} rounded`}>
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}

export default Section
