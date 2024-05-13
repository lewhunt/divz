import cn from "classnames";
import React, { useRef, useState, useEffect } from "react";
import {
  DivzItems,
  DivzPlayButton,
  DivzNavButtons,
  DivzExpandButton,
} from "./components";

import "./Divz.css";

type DivzProps = {
  children: React.ReactNode;
  className?: string;
  selectIndex?: number;
  isSnapEnabled?: boolean;
  isExpanded?: boolean;
  isDarkMode?: boolean;
  autoPlay?: boolean;
  isAutoPlayLooped?: boolean;
  isScrollPageEnabled?: boolean;
  autoPlayDuration?: number;
  showPlayButton?: boolean;
  showNavButtons?: boolean;
  showExpandButton?: boolean;
  showNavButtonsOnExpanded?: boolean;
  onIndexChange?: (index: number) => void;
  onPlaying?: (playing: boolean) => void;
};

export const Divz: React.FC<DivzProps> = ({
  children,
  className,
  selectIndex,
  isSnapEnabled = true,
  isExpanded = false,
  isDarkMode = false,
  autoPlay = false,
  isAutoPlayLooped = true,
  isScrollPageEnabled = false,
  autoPlayDuration = 4000,
  showPlayButton = true,
  showNavButtons = true,
  showExpandButton = true,
  showNavButtonsOnExpanded = false,
  onIndexChange,
  onPlaying,
}) => {
  const divzRef = useRef<HTMLDivElement>(null);
  const divzListRef = useRef<HTMLDivElement>(null);
  const numChildren = React.Children.count(children);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(isExpanded);
  const [playing, setPlaying] = useState<boolean>(autoPlay);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const snapInterval = 500;
  const zoomIncrement = isSnapEnabled ? snapInterval : snapInterval / 3;
  const maxZoom = 0;
  const minZoom = -(numChildren * snapInterval) + snapInterval;
  const zoomLevel = useRef<number>(maxZoom);

  useEffect(() => {
    if (!divzListRef.current) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      event.key === "ArrowUp"
        ? handleNext()
        : event.key === "ArrowDown"
        ? handlePrevious()
        : event.key === "Enter" || event.keyCode === 13
        ? setExpanded((prev: boolean) => !prev)
        : (event.key === "Space" || event.keyCode === 32) &&
          setPlaying((prev: boolean) => !prev);
    };

    const handleTransitionStart = () => {
      setIsTransitioning(true);
      updateSelectedIndex();
    };

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    divzListRef.current.addEventListener(
      "transitionstart",
      handleTransitionStart
    );
    divzListRef.current.addEventListener("transitionend", handleTransitionEnd);
    document.addEventListener("keydown", handleKeyDown);

    divzListRef.current.style.transition = `transform 0.5s ease`;

    divzListRef.current.style.transform = `translateZ(${zoomLevel.current}px)`;

    const items = divzListRef.current?.children;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        const translateZ = snapInterval * i + snapInterval;
        (
          items[i] as HTMLElement
        ).style.transform = `translateZ(${translateZ}px)`;
      }
    }

    return () => {
      divzListRef.current?.removeEventListener(
        "transitionstart",
        handleTransitionStart
      );
      divzListRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const updateTranslateFromIndex = (index: number) => {
    if (index !== undefined && index < numChildren && divzListRef.current) {
      divzListRef.current.style.transition = `transform 0.01s ease`;
      zoomLevel.current = maxZoom - index * snapInterval;
      divzListRef.current.style.transform = `translateZ(${zoomLevel.current}px)`;
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    selectIndex !== undefined && updateTranslateFromIndex(selectIndex);
  }, [selectIndex]);

  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout;

    if (playing) {
      autoplayTimer = setInterval(() => {
        if (selectedIndex < numChildren - 1) {
          zoomLevel.current -= zoomIncrement;
          changeTranslate();
        } else {
          updateTranslateFromIndex(0);
          if (!isAutoPlayLooped) {
            setPlaying(false);
            clearInterval(autoplayTimer);
          }
        }
      }, autoPlayDuration);
    }

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [playing, numChildren, selectedIndex]);

  useEffect(() => onIndexChange?.(selectedIndex), [selectedIndex]);
  useEffect(() => onPlaying?.(playing), [playing]);
  useEffect(() => setExpanded(isExpanded), [isExpanded]);
  useEffect(() => setPlaying(autoPlay), [autoPlay]);

  useEffect(() => {
    document.body.style.overflow = isScrollPageEnabled ? "auto" : "hidden";
    isScrollPageEnabled
      ? divzRef.current!.classList.add("scroll-page-enabled")
      : divzRef.current!.classList.remove("scroll-page-enabled");
  }, [isScrollPageEnabled]);

  const updateSelectedIndex = () => {
    const currentIndex = Math.abs(Math.round(zoomLevel.current / snapInterval));
    setSelectedIndex(currentIndex);
  };

  const handlePrevious = () => {
    zoomLevel.current -= zoomIncrement;
    changeTranslate();
    setPlaying(false);
  };

  const handleNext = () => {
    zoomLevel.current += zoomIncrement;
    changeTranslate();
    setPlaying(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsTransitioning(false);
    event.preventDefault();
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isSnapEnabled && isTransitioning) {
      return;
    }

    const touchY = event.touches[0].clientY;
    const deltaY = touchY - touchStartY;

    if (deltaY > 10) {
      if (zoomLevel.current > maxZoom) return;
      zoomLevel.current += zoomIncrement / 4;
    } else if (deltaY < -10) {
      if (zoomLevel.current < minZoom) return;
      zoomLevel.current -= zoomIncrement / 4;
    }

    setPlaying(false);
    setTouchStartY(touchY);
    changeTranslate();
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (isSnapEnabled && isTransitioning) {
      return;
    }

    if (event.deltaY > 10) {
      if (zoomLevel.current < minZoom) return;
      zoomLevel.current -= zoomIncrement / 10;
    } else if (event.deltaY < -10) {
      if (zoomLevel.current > maxZoom) return;
      zoomLevel.current += zoomIncrement / 10;
    }

    setPlaying(false);
    changeTranslate();
  };

  const changeTranslate = () => {
    let newZoomLevel = zoomLevel.current;

    if (isSnapEnabled) {
      newZoomLevel = Math.round(newZoomLevel / snapInterval) * snapInterval;
    }

    if (newZoomLevel < minZoom) {
      newZoomLevel = minZoom;
      zoomLevel.current = minZoom;
    } else if (newZoomLevel > maxZoom) {
      newZoomLevel = maxZoom;
      zoomLevel.current = maxZoom;
    }

    if (divzListRef.current) {
      divzListRef.current.style.transition = `transform ${
        isSnapEnabled ? 0.6 : 0.3
      }s ease-out`;
      divzListRef.current.style.transform = `translateZ(${newZoomLevel}px)`;
    }
  };

  return (
    <>
      <div
        className={cn("divz", className)}
        data-testid="divz"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onWheel={handleWheel}
        ref={divzRef}
      >
        <div className="divz-viewport">
          <div className="divz-list" ref={divzListRef}>
            <DivzItems
              children={children}
              expanded={expanded}
              selectedIndex={selectedIndex}
              isDarkMode={isDarkMode}
            ></DivzItems>
          </div>
          {showPlayButton && numChildren > 1 && (
            <DivzPlayButton
              playing={playing}
              setPlaying={setPlaying}
              isDarkMode={isDarkMode}
            />
          )}
          {showNavButtons && numChildren > 1 && (
            <DivzNavButtons
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              expanded={!showNavButtonsOnExpanded && expanded}
              selectedIndex={selectedIndex}
              itemsCount={numChildren}
              isDarkMode={isDarkMode}
            ></DivzNavButtons>
          )}
          {showExpandButton && numChildren > 0 && (
            <DivzExpandButton
              expanded={expanded}
              setExpanded={setExpanded}
              isDarkMode={isDarkMode}
            />
          )}
        </div>
      </div>
    </>
  );
};
