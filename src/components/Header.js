import React, { useContext } from "react";
import { StyledHeader } from "../styles/StyledHeader";
import { UserContext } from "../contexts/UserContextProvider";
const Header = ({ theme, setTheme }) => {
  const [userDetails] = useContext(UserContext);

  return (
    <StyledHeader className="header">
      <div className="headertop">
        <div className="logo">
          <span>W</span>ork<span>S</span>mart
        </div>
        <div className="userInfo">
          Hello, <span>{userDetails.name}</span>
        </div>
        <div className="themeToggler">Current Theme:{theme}</div>
      </div>
      <div className="quote"></div>
    </StyledHeader>
  );
};
export default Header;
