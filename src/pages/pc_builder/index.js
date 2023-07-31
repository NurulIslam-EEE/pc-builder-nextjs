import React, { useContext, useState } from "react";

import styles from "../../styles/pcBuilding.module.css";
import { useRouter } from "next/router";
import { PCBuildContext } from "@/context/context";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const value = useContext(PCBuildContext);

  const handleCompete = () => {
    if (
      (value?.message?.Processor.length < 1) |
      (value?.message.Motherboard.length < 1) |
      (value?.message.RAM.length < 1) |
      (value?.message.PowerSupplyUnit.length < 1) |
      (value?.message.StorageDevice.length < 1) |
      (value?.message.Monitor.length < 1)
    ) {
      toast.error("Please select all components");

      return;
    }

    toast("Successfully completed");
    value.clearCart();
  };

  // console.log("dddd", value);
  return (
    <div className={`container`}>
      <div className={styles.category_card}>
        <div className={styles.category_header}>
          <h3>Core Components</h3>
        </div>

        {data.map((item) => {
          const itemText = item.replaceAll(" ", "");

          return (
            <>
              {value?.message[itemText]?.length > 0 ? (
                <div key={item} className={styles.category_components}>
                  <p>{value?.message[itemText][0]?.productName}</p>
                  <p>৳.{value?.message[itemText][0]?.price}</p>
                </div>
              ) : (
                <div key={item} className={styles.category_components}>
                  <p>{item}</p>
                  <button onClick={() => handleNavigate(item)}>Select</button>
                </div>
              )}
            </>
          );
        })}

        <button onClick={handleCompete} className={styles.complete}>
          Complete Build
        </button>
      </div>
    </div>
  );
}

export default PcBuilder;
