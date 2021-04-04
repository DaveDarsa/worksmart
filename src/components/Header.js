import React, { useContext } from "react";
import { StyledHeader } from "../styles/StyledHeader";
import { UserContext } from "../contexts/UserContextProvider";
const Header = ({ theme }) => {
  const [userDetails] = useContext(UserContext);

  return (
    <StyledHeader className="header" id="head">
      <div className="headertop">
        <div className="logo">
          <span>W</span>ork<span>S</span>mart
        </div>
        <div className="userInfo">
          Hello, <span>{userDetails.name}</span>
        </div>
      </div>
    </StyledHeader>
  );
};
export default Header;
