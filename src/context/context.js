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

  return (
    <PCBuildContext.Provider value={{ message, setMessage }}>
      {children}
    </PCBuildContext.Provider>
  );
}

export default Context;
