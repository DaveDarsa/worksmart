import React, { createContext, useReducer, useEffect } from "react";
import { DetailsReducer } from "../components/reducers/DetailsReducer";
export const DetailsContext = createContext();

export const SavedDetailsProvider = (props) => {
  const [storage, dispatch] = useReducer(DetailsReducer, [], () => {
    const local = localStorage.getItem("tasklist");
    return local
      ? JSON.parse(local)
      : [
          {
            name: "Basic Things",
            basicItems: ["Exercise", "Read something interesting"],
            sublist: [
              {
                name: "tomorrow",
                items: ["get up", "Go for a jog"],
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
            basicItems: ["Open a sanctuary", "Learn to meditate"],
            sublist: [
              {
                name: "someday",
                items: ["Get a better car"],
              },
            ],
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(storage));
  }, [storage]);

  return (
    <DetailsContext.Provider value={[storage, dispatch]}>
      {props.children}
    </DetailsContext.Provider>
  );
};
