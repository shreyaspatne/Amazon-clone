import React, { createContext, useContext, useReducer } from "react";

// prepares the datalayer
export const StateContext = createContext();

// wrap our app provide data layyer
export const Stateprovider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => {
  useContext(StateContext);
};
