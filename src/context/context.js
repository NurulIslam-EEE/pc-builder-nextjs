import { createContext, useState } from "react";

export const PCBuildContext = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState({
    Processor: [],
    Motherboard: [],
    RAM: [],
    PowerSupplyUnit: [],
    StorageDevice: [],
    Monitor: [],
  });

  const handleAddValue = (name, value) => {
    console.log("vvvvvvvv", name, value);
    if (name === "Power Supply Unit") {
      setMessage({ ...message, PowerSupplyUnit: [{ ...value }] });
    } else if (name === "Storage Device") {
      setMessage({ ...message, StorageDevice: [{ ...value }] });
    } else if (name === "Monitor") {
      console.log("motherboard");
      setMessage({ ...message, Monitor: [{ ...value }] });
    } else if (name === "RAM") {
      setMessage({ ...message, RAM: [{ ...value }] });
    } else if (name === "Processor") {
      setMessage({ ...message, Processor: [{ ...value }] });
    } else if (name === "Motherboard") {
      console.log("motherboard");
      setMessage({ ...message, Motherboard: [{ ...value }] });
    } else if (name === "Motherboard") {
      setMessage({ ...message, Motherboard: [{ ...value }] });
    }
  };

  return (
    <PCBuildContext.Provider value={{ message, setMessage, handleAddValue }}>
      {children}
    </PCBuildContext.Provider>
  );
}

export default Context;
