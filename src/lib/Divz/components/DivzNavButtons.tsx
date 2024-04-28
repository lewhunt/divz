import cn from "classnames";
import React from "react";

import "./DivzNavButtons.css";

type DivzNavButtonsProps = {
  expanded?: boolean;
  selectedIndex: number;
  itemsCount: number;
  isDarkMode: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
};

export const DivzNavButtons: React.FC<DivzNavButtonsProps> = ({
  expanded = false,
  selectedIndex,
  itemsCount,
  isDarkMode,
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
      <div className="divz-nav-buttons-viewport">
        <div
          className={cn("divz-nav-buttons", {
            expanded,
            "dark-mode": isDarkMode,
          })}
        >
          <div
            className={cn("divz-nav-button", {
              disabled: selectedIndex === 0,
            })}
            onClick={handleNext}
            onTouchStart={handleNext}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="divz-next">▲</div>
          </div>
          <div className="divz-nav-label">
            {selectedIndex + 1} of {itemsCount}
          </div>
          <div
            className={cn("divz-nav-button", {
              disabled: selectedIndex === itemsCount - 1,
            })}
            onClick={handlePrevious}
            onTouchStart={handlePrevious}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="divz-prev">▼</div>
          </div>
        </div>
      </div>
    </>
  );
};
