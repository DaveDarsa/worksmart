import React from "react";
import { StyledHeader } from "../styles/StyledHeader";

const Header = ({ theme, setTheme }) => {
  return (
    <StyledHeader className="header">
      <div className="headertop">
        <div className="logo">
          <span>W</span>ork<span>S</span>mart
        </div>
        <div className="userInfo">
          Hello <span>User</span>
        </div>
        <div className="themeToggler">Current Theme:{theme}</div>
      </div>
      <div className="quote"></div>
    </StyledHeader>
  );
};
export default Header;
