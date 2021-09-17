import React, { useState, createContext } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [sent, setSent] = useState(false);
  const [formContent, setFormContent] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <DataContext.Provider
      value={{
        sent,
        setSent,
        formContent,
        setFormContent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
