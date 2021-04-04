import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    let user = localStorage.getItem("userDetails");

    if (user) {
      setUserDetails(JSON.parse(user));
    } else {
      setUserDetails({ name: "user", location: "London" });
    }
  }, []);
  return (
    <UserContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
