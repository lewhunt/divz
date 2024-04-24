import cn from "classnames";
import React from "react";

import "./DivzButton.css";

type DivzExpandButtonProps = {
  expanded: boolean;
  isDarkMode: boolean;
  setExpanded: (expanded: boolean) => void;
};

export const DivzExpandButton: React.FC<DivzExpandButtonProps> = ({
  expanded,
  isDarkMode,
  setExpanded,
}) => {
  return (
    <div
      className={cn("divz-button right-align", {
        "dark-mode": isDarkMode,
      })}
      onClick={() => setExpanded(!expanded)}
      onTouchEnd={() => setExpanded(!expanded)}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {expanded ? <CompressIcon /> : <ExpandIcon />}
    </div>
  );
};

const ExpandIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" />
    </svg>
  );
};

const CompressIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" />
    </svg>
  );
};
