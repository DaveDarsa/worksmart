import React, { createContext, useReducer } from "react";
import { DetailsReducer } from "../components/reducers/DetailsReducer";
export const DetailsContext = createContext();

export const SavedDetailsProvider = (props) => {
  const [storage, dispatch] = useReducer(DetailsReducer, [
    {
      name: "basic Things",
      basicItems: ["stuff", "morebasic"],
      sublist: [
        {
          name: "tomorrow",
          items: ["get up", "workout"],
        },
        {
          name: "next week",
          items: ["finish projects", "lay off coffee"],
        },
      ],
    },
    {
      name: "entertainment",
      basicItems: [],
      sublist: [],
    },
    {
      name: "lifegoals",
      basicItems: ["good stuff", "more stuff"],
      sublist: [
        {
          name: "someday",
          items: ["testing stuff"],
        },
      ],
    },
  ]);

  return (
    <DetailsContext.Provider value={[storage, dispatch]}>
      {props.children}
    </DetailsContext.Provider>
  );
};
