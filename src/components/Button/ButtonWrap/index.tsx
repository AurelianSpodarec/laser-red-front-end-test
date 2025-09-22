'use client'

import React from "react";
import Link from "next/link";
import { buttonTypes } from "./register";
import { Button, ButtonProps } from "../";

export type ButtonWrapProps = ButtonProps & {
  variantType?: keyof typeof buttonTypes;
  href?: string;
};

export function ButtonWrap({ variantType = "arrow", href, children, ...props }: ButtonWrapProps) {
  const ButtonComponent = buttonTypes[variantType];

  if (!ButtonComponent) {
    console.warn(`[ButtonWrap] Unknown variantType: ${variantType}`);
    return <Button {...props}>{children}</Button>;
  }

  if (href) {
    return (
      <ButtonComponent asChild {...props}>
        <Link href={href}>{children ?? props.label}</Link>
      </ButtonComponent>
    );
  }

  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}
