import React from "react";
import { StyledFooter } from "../styles/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Designed and Built by <span> Dave Darsa</span>.
      </p>
      <span>
        Check me out @
        <a href="https://github.com/davedarsa" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="giticon" />
        </a>
      </span>
    </StyledFooter>
  );
};

export default Footer;
