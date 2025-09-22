import React, { forwardRef } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { buttonVariants } from "./buttonVariants";

type ButtonBaseProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonBaseProps &
  VariantProps<typeof buttonVariants> & {
    label?: string;
    children?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    loadingPosition?: "" | "left" | "right";
    loadingText?: string;
    block?: boolean;
    cursor?: boolean;
    asChild?: boolean;
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
  };

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      label,
      children,
      icon,
      iconPosition = "left",
      block = false,
      type = "button",
      disabled = false,
      kind,
      variant,
      size,
      cursor = true,
      asChild = false,
      leftElement,
      rightElement,
      ...props
    },
    ref
  ) => {

    const buttonClass = cn(
      buttonVariants({ variant, kind, size }),
      `
        relative inline-flex items-center justify-center cursor-pointer gap-1.5 
        ${cursor ? "cursor-pointer" : "cursor-default"}
        ${block ? "w-full" : ""}
        ${disabled ? "opacity-25 cursor-default" : ""}
      `,
      props.className
    );

    const Comp = asChild ? Slot : "button" as React.ElementType;
    const isButton = !asChild

    const content = children ?? label;

    return (
      <Comp
        ref={ref} {...props}
        {...(isButton && { type, disabled })}
        className={buttonClass}
      >
        {leftElement && <span className="left-element">{leftElement}</span>}
        {icon && iconPosition === "left" && <span className={`size-4`}>{icon}</span>}

        {content ? (asChild ? <Slottable>{content}</Slottable> : content) : null}

        {icon && iconPosition === "right" && <span className={`size-4`}>{icon}</span>}
        {rightElement && <span className="right-element">{rightElement}</span>}

      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };