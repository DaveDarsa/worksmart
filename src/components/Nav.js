import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <li>
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faThumbtack} color="white" />
          <span>Ongoing</span>
        </Link>
      </li>
      <li>
        <Link to="/completed" className="link">
          <FontAwesomeIcon icon={faCheck} color="white" />
          <span>Completed</span>
        </Link>
      </li>
    </StyledNav>
  );
};

const StyledNav = styled.ul`
  position: fixed;
  top: 20vh;
  left: 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8vw;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 2rem;
    width: 100%;
    color: #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 1.65rem;
    span::before {
      content: "";
      display: inline-block;
      margin-left: 1rem;
    }
    :first-of-type span {
      margin-left: 0.5rem;
    }
    .link {
      color: #f4f4f4;
      text-decoration: none;
    }
  }
`;
export default Nav;
