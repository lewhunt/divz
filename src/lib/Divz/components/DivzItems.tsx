import cn from "classnames";
import React from "react";

import "./DivzItems.css";

type DivzItemsProps = {
  children: React.ReactNode;
  expanded?: boolean;
  isDarkMode: boolean;
  selectedIndex?: number;
};

export const DivzItems: React.FC<DivzItemsProps> = ({
  children,
  expanded = false,
  isDarkMode,
  selectedIndex,
}) => {
  return React.Children.map(children, (child, index) => (
    <div
      className={cn("divz-item", {
        expanded,
        selected: selectedIndex === index,
        "dark-mode": isDarkMode,
      })}
      key={index}
    >
      {child}
    </div>
  ));
};
