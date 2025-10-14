/* eslint-disable @next/next/no-img-element */
// Using native <img> intentionally — this react code is framework-agnostic

import React from "react";

type IImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
};

function Image({ src, alt = "", className = "", ...props }: IImageProps) {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={`${className} rounded`}
      {...props}
    />
  );
}

export default Image
