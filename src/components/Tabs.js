import React from "react";
import cn from "classnames";
import "./Tabs.css";

export default function Tabs({ active, onSortTab }) {
  const cheapTabClasses = cn("tabs__button", {
    tabs__button_active: active === "cheap",
  });
  const fastTabClasses = cn("tabs__button", {
    tabs__button_active: active === "fast",
  });

  return (
    <div className="tabs">
      <button className={cheapTabClasses} onClick={() => onSortTab("cheap")}>
        Самый дешевый
      </button>
      <button className={fastTabClasses} onClick={() => onSortTab("fast")}>
        Самый быстрый
      </button>
    </div>
  );
}
