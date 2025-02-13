import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  let name = "tom";

  return (
    <AppContext.Provider value={{ count, setCount, name }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(AppContext);
};
