import { ReactNode } from "react";
import clsx from "clsx";
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

function Section({ id, className = "", layeredClassName = "", style, children, background = "primary", layeredBackground, tag = "section" }: ISectionProps) {
  const backgroundVariants: Record<string, string> = {
    primary: "bg-section-primary",
    secondary: "bg-section-secondary",
  };

  const layeredBackgroundVariants: Record<string, string> = {
    primary: "bg-section-layered-primary",
  };

  const Tag = tag;

  return (
    <Tag
      id={id}
      style={style}
      className={clsx(
        className,
        backgroundVariants[background],
        layeredBackground ? "p-sm lg:p-xs" : "px-sm lg:px-xs"
      )}
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

export default Section;
