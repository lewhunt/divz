import cn from "classnames";
import React, { useRef, useState, useEffect, CSSProperties } from "react";

// Custom video component that loads/plays only when item is active, also with preview image and play toggle via click

type DivzVideoItemProps = {
  videoSource: string;
  previewImage?: string;
  index?: number;
  isActive?: boolean;
  videoDelay?: number;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  playToggle?: boolean;
  style?: CSSProperties;
};

export const DivzVideoItem: React.FC<DivzVideoItemProps> = ({
  videoSource,
  previewImage,
  index = 0,
  isActive = true,
  videoDelay = 2000,
  autoPlay = true,
  loop = false,
  controls = false,
  muted = true,
  playToggle = true,
  style,
}) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [showSource, setShowSource] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timer = useRef<any>(null);

  const togglePlayback = () => {
    const node = videoRef.current;
    if (!playToggle) return;
    clearTimeout(timer.current);

    if (node?.paused) {
      node?.play();
      setShowVideo(true);
      setShowSource(true);
    } else {
      //setShowVideo(false);
      node?.pause();
    }
  };

  useEffect(() => {
    if (previewImage) {
      setShowVideo(false);
      setShowSource(false);
      if (isActive) {
        timer.current = setTimeout(() => setShowSource(true), videoDelay);
      }
    } else {
      setShowVideo(true);
      setShowSource(true);
    }
    return () => clearTimeout(timer.current);
  }, [isActive]);

  return (
    <div className="divz-video-item">
      {previewImage && <img src={previewImage}></img>}
      <video
        ref={videoRef}
        playsInline
        muted={muted}
        loop={loop}
        controls={controls}
        key={`${index}-${isActive}`}
        autoPlay={autoPlay && isActive}
        onCanPlay={() => setShowVideo(true)}
        onEnded={() => previewImage && setShowVideo(false)}
        onClick={() => playToggle && togglePlayback()}
        onTouchEnd={() => playToggle && togglePlayback()}
        className={cn({
          show: showVideo,
          hide: !showVideo,
        })}
        style={style}
      >
        {isActive && showSource && (
          <source src={videoSource} type="video/mp4" />
        )}
      </video>
    </div>
  );
};
