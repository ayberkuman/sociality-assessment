import Image from "next/image";
import { useEffect, useState } from "react";
import fallbackImage from "../assets/png/no-post-image.png";

export const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
};
