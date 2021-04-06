import React from "react";
import { StyledFooter } from "../styles/StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Designed and Built by <span> Dave Darsavelidze</span>.
      </p>
      <span>
        Check out my
        <a
          aria-label="github link"
          href="https://github.com/davedarsa"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="giticon" />
        </a>
      </span>
    </StyledFooter>
  );
};

export default Footer;
