'use client'

import React from "react";
import { buttonTypes } from "./register";
import { Button, ButtonProps } from "../";

export type ButtonWrapProps = ButtonProps & {
  variantType?: keyof typeof buttonTypes;
};

export function ButtonWrap({ variantType = "arrow", ...props }: ButtonWrapProps) {
  const ButtonComponent = buttonTypes[variantType];

  if (!ButtonComponent) {
    console.warn(`[ButtonWrap] Unknown variantType: ${variantType}`);
    return <Button {...props} />;
  }

  return <ButtonComponent {...props} />;
}
