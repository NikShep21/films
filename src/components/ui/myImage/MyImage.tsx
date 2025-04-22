import { useState } from "react";
import LoadCard from "../loadCard/LoadCard";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width: string;
  aspect?: string;
  height?: string;
  borderRadius?: string;
}

const MyImage = ({
  src,
  width,
  aspect = "auto",
  height = "none",
  borderRadius = "",
  className,
  ...props
}: Props) => {
  const [isLoad, setIsLoad] = useState(true);

  const handleImageLoadingComplete = (): void => {
    setIsLoad(false);
  };

  return (
    <div
      className={className}
      style={{
        width,
        aspectRatio: aspect,
        position: "relative",
        borderRadius: borderRadius,
        overflow: "hidden",
      }}
    >
      {!src && (
        <LoadCard
          borderRadius={borderRadius}
          width={width}
          height={height}
          aspect={aspect}
        />
      )}
      {isLoad && src && (
        <LoadCard
          borderRadius={borderRadius}
          width={width}
          height={height}
          aspect={aspect}
        />
      )}
      <img
        {...props}
        src={src}
        onLoad={handleImageLoadingComplete}
        style={{
          display: isLoad ? "none" : "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default MyImage;
