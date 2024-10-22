import React, { useState, useEffect } from "react";
import "./WorldMapWidget.css";

const WorldMapWidget = ({ grid }) => {
  const [isPinned, setIsPinned] = useState(false);

  const handlePinClick = () => {
    setIsPinned(!isPinned);
  };

  useEffect(() => {
    if (grid) {
      // Widget sabitlenmişse kaydırılamaz ve yeniden boyutlandırılamaz
      grid.movable(".worldMap-widget", !isPinned);
      grid.resizable(".worldMap-widget", !isPinned);
    }
  }, [isPinned, grid]);

  return (
    <div className="worldMap-widget">
      <div className="worldMap-header">
        <p>Successful Requests On The World Map</p>
        <i
          className={`fa-solid fa-thumbtack ${isPinned ? "pinned" : ""}`}
          onClick={handlePinClick}
        ></i>
      </div>
    </div>
  );
};

export default WorldMapWidget;