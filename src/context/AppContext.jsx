import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [isPageOpend, setPageOpen] = useState(false);
  const [isPricingPage, setPricingPage] = useState(false);

  return (
    <Context.Provider value={{ isPageOpend, setPageOpen, isPricingPage, setPricingPage }}>
      {props.children}
    </Context.Provider>
  );
};
