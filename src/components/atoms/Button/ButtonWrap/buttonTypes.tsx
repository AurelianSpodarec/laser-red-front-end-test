import { Button, IButtonProps } from "..";
import { buttonTypes } from "./register";

export type ButtonWrapProps = IButtonProps & {
  variantType?: keyof typeof buttonTypes;
};

export function ButtonWrap({
  variantType = "arrow",
  ...props
}: ButtonWrapProps) {
  const ButtonComponent = buttonTypes[variantType];

  if (!ButtonComponent) {
    console.warn(`[ButtonWrap] Unknown variantType: ${variantType}`);
    return <Button {...props} />;
  }

  return <ButtonComponent {...props} />;
};
