import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt?: string;
};

function Image({ src, alt = "", className = "", ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt || ""}
      className={`${className} rounded-lg`}
      {...props}
    />
  );
}

export default Image
