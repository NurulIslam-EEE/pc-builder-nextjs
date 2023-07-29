import React from "react";

import styles from "../styles/pcBuilding.module.css";

function PcBuilder() {
  const data = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
  ];
  return (
    <div className="container">
      <div className={styles.category_card}>
        <div className={styles.category_header}>
          <p>Core Components</p>
        </div>

        {data.map((item) => {
          return (
            <div key={item} className={styles.category_components}>
              <p>{item}</p>
              <button>Select</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PcBuilder;
