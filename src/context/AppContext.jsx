import { createContext, useState } from "react";
import { TRANSFER } from "../utils/Constant";

export const Context = createContext();

export const AppContext = (props) => {
  const [isPageOpend, setPageOpen] = useState(false);
  const [isPricingPage, setPricingPage] = useState(false);
  const [privousIntraction, setPrivousIntraction] = useState(TRANSFER);
  const [transfers, setTransfers] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isPageOpend,
        setPageOpen,
        isPricingPage,
        setPricingPage,
        privousIntraction,
        setPrivousIntraction,
        transfers,
        setTransfers,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
