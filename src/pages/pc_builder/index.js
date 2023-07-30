import React, { useState } from "react";

import styles from "../../styles/pcBuilding.module.css";
import { useRouter } from "next/router";

function PcBuilder() {
  const router = useRouter();
  const handleNavigate = (data) => {
    router.push(`pc_builder/${data}`);
  };

  const data = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];
  return (
    <div className={`container`}>
      <div className={styles.category_card}>
        <div className={styles.category_header}>
          <p>Core Components</p>
        </div>

        {data.map((item) => {
          return (
            <div key={item} className={styles.category_components}>
              <p>{item}</p>
              <button onClick={() => handleNavigate(item)}>Select</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PcBuilder;
