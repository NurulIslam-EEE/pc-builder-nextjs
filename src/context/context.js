import { createContext, useState } from "react";

export const PCBuild = createContext(null);

function Context({ children }) {
  const [message, setMessage] = useState({});

  return (
    <PCBuild.Provider value={{ message, setMessage }}>
      {children}
    </PCBuild.Provider>
  );
}

export default Context;
