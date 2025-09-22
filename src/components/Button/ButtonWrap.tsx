'use client'

import React from "react";
import { Button, ButtonProps } from ".";
import { cn } from "@/lib/utils";

function IconArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      viewBox="0 0 18 13"
      className="cursor-pointer group"
    >
      {/* Tail */}
      <rect
        x="0"
        y="5.7"
        width="0"
        height="1.7"
        className="fill-black transition-all duration-75 ease-out group-hover:w-[5]"
      />

      {/* Arrowhead */}
      <path
        d="M12.827,9.886,8.469,5.4,9.618,4.222l6.32,6.5-6.32,6.5L8.469,16.04l4.358-4.482H2.72V9.886Z"
        transform="translate(-3  -4.222)"
        className="fill-black transition-all duration-75 ease-out group-hover:translate-x-[5px]"
      />
    </svg>
  );
}


const buttonTypes: Record<string, (props: ButtonProps) => JSX.Element> = {
  arrow: (props: ButtonProps) => (
    <Button
      {...props}
      rightElement={
        <span className={cn("", props.className)}>
          {props.rightElement ?? <IconArrow />}
        </span>
      }
      className={cn("group font-bold text-[18px]  ", props.className)}
    />
  ),
};

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
