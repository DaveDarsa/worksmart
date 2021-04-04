import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { smoothscroll } from "../utils/smoothscroll";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <StyledNav
      className="nav"
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <li>
        <Link
          to="/"
          className="link"
          onClick={(e) => {
            smoothscroll("head");
          }}
        >
          <FontAwesomeIcon icon={faCheck} color="white" />
          <span>Lists</span>
        </Link>
      </li>
      <li>
        <Link to="/setup" className="link">
          <FontAwesomeIcon icon={faCog} color="white" />
          <span> Setup</span>
        </Link>
      </li>
    </StyledNav>
  );
};

const StyledNav = styled(motion.ul)`
  position: fixed;
  top: 20vh;
  left: 20vw;
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
