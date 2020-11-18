import React from "react";
import "./Tabs.css";

export default function Tabs() {
  return (
    <div className="tabs">
      <button className="tabs__button tabs__button_active">
        Самый дешевый
      </button>
      <button className="tabs__button">Самый быстрый</button>
    </div>
  );
}
