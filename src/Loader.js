import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoadAnimation } from "./animations/LoadAnimation";

const loaderVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Loader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);
  return (
    <StyledLoader
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LoadAnimation />
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #003366;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  svg {
    display: block;
    width: 40%;
  }
`;
