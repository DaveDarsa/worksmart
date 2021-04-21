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
            name: "Basic Things - example",
            basicItems: ["Basic item", "Another basic item"],
            sublist: [
              {
                name: "Basic Sublist",
                items: ["Sublist item example", "Another example"],
              },
              {
                name: "Yet another sublist",
                items: ["Something important", "Some item"],
              },
            ],
          },
          {
            name: "entertainment - example",
            basicItems: [],
            sublist: [],
          },
          {
            name: "lifegoals - example",
            basicItems: ["Example goal"],
            sublist: [
              {
                name: "someday",
                items: ["Do something awesome"],
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
