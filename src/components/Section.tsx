import { ReactNode } from "react";

type SpacingSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
type SpacingProp = SpacingSize | { top?: SpacingSize; bottom?: SpacingSize };

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  layeredClassName?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  background?: "primary" | "secondary";
  layeredBackground?: "primary";
  tag?: "section" | "footer";
  spacing?: SpacingProp;
}

function Section({
  id,
  className = "",
  layeredClassName = "",
  style,
  children,
  background = "primary",
  layeredBackground,
  tag = "section",
  spacing = "md",
}: ISectionProps) {
  const backgroundVariants: Record<string, string> = {
    primary: "bg-[#07272E]",
    secondary: "bg-[#02252C]",
  };

  const layeredBackgroundVariants: Record<string, string> = {
    primary: "bg-[#062329]",
  };

  const spacingClassMap: Record<
    Exclude<SpacingSize, "none">,
    { py: string; pt: string; pb: string }
  > = {
    sm: {
      py: "py-section-sm",
      pt: "pt-section-sm",
      pb: "pb-section-sm",
    },
    md: {
      py: "py-section-md",
      pt: "pt-section-md",
      pb: "pb-section-md",
    },
    lg: {
      py: "py-section-lg",
      pt: "pt-section-lg",
      pb: "pb-section-lg",
    },
    xl: {
      py: "py-section-xl",
      pt: "pt-section-xl",
      pb: "pb-section-xl",
    },
    "2xl": {
      py: "py-section-2xl",
      pt: "pt-section-2xl",
      pb: "pb-section-2xl",
    },
  };

  function getSpacingClasses(spacing?: SpacingProp): string {
    if (!spacing) return "";
    if (spacing === "none") return "py-0";

    if (typeof spacing === "string") {
      return spacingClassMap[spacing]?.py ?? "";
    }

    return [
      spacing.top
        ? spacing.top === "none"
          ? "pt-0"
          : spacingClassMap[spacing.top]?.pt
        : "",
      spacing.bottom
        ? spacing.bottom === "none"
          ? "pb-0"
          : spacingClassMap[spacing.bottom]?.pb
        : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  const Tag = tag;

  return (
    <Tag
      id={id}
      className={`${className} ${backgroundVariants[background]} ${getSpacingClasses(spacing)} ${layeredBackground ? "p-4 lg:p-2.5" : "px-4 lg:px-2.5"}`}
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

export default Section;
