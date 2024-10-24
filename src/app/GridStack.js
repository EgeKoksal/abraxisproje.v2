import React, { useEffect, useRef } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";

import RamWidget from "../presentation/components/ram/RamWidget";
import MostRequestedApiWidget from "../presentation/components/mostrequestedapi/MostRequestedApiWidget";
import ReturnTimesWidgetApi from "../presentation/components/returntimesapi/ReturnTimesApiWidget";
import ServerUsageWidget from "../presentation/components/serverusage/ServerUsageWidget";
import UserLogWidget from "../presentation/components/userlog/UserLogWidget";
import WorldMapWidget from "../presentation/components/worldmap/WorldMapWidget";
import CpuWidget from "../presentation/components/cpu/CpuWidget";

function Grid() {
  const gridRef = useRef(null); // GridStack referansı

  useEffect(() => {
    // Eğer grid zaten başlatılmışsa tekrar başlatma
    if (!gridRef.current) {
      const grid = GridStack.init({
        column: 12, // 12 sütun grid sistemi
        row:6,
        float: true, // Draggable bileşenler sabit bir sırada kalmaz, hareket edebilir
        cellHeight: "auto", // Otomatik hücre yüksekliği
        resizable: {
          handles: "e, se, s, sw, w", // Köşelerden yeniden boyutlandırma
          
        },
        disableOneColumnMode: true, // Küçük ekranlar için tek sütun modunu devre dışı bırak
        staticGrid: false,  // Taşınabilirliği etkinleştirmek için staticGrid'i false yapıyoruz
      });

      gridRef.current = grid; // GridStack referansını kaydet
   
    }

    return () => {
      if (gridRef.current) {
        gridRef.current.destroy(false); // true yerine false geçersek grid yapısını yok etmez
        gridRef.current = null;
      }
    };
  }, []); // [] boş olduğunda sadece bir kez çalışacak

  return (
    <div className="dashboard grid-stack">
      <div
        className="grid-stack-item"
        data-gs-x="0"
        data-gs-y="8"
        data-gs-width="6"
        data-gs-height="2"
      >
        <CpuWidget />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="0"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="3"
      >
        <RamWidget />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="4"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="2"
      >
        <MostRequestedApiWidget />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="8"
        data-gs-y="0"
        data-gs-width="4"
        data-gs-height="2"
      >
        <ReturnTimesWidgetApi />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="0"
        data-gs-y="3"
        data-gs-width="6"
        data-gs-height="2"
      >
        <ServerUsageWidget />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="6"
        data-gs-y="3"
        data-gs-width="6"
        data-gs-height="2"
      >
        <UserLogWidget />
      </div>
      <div
        className="grid-stack-item"
        data-gs-x="0"
        data-gs-y="5"
        data-gs-width="12"
        data-gs-height="3"
      >
        <WorldMapWidget />
      </div>
      
    </div>
  );
}

export default Grid;
