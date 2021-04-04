import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../contexts/UserContextProvider";
import { withRouter } from "react-router-dom";

const warningVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Setup = (props) => {
  const [, setUserInfo] = useContext(UserContext);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [warningShowing, setWarningShowing] = useState(false);

  useEffect(() => {
    var timeID = setTimeout(() => {
      setWarningShowing(false);
    }, 4000);

    return function cleanUp() {
      clearTimeout(timeID);
    };
  }, [warningShowing]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (city.length === 0 || name.length === 0) {
      setWarningShowing(!warningShowing);
      return;
    }
    localStorage.setItem("userDetails", JSON.stringify({ name, city }));
    setUserInfo(JSON.parse(localStorage.getItem("userDetails")));
    setName("");
    setCity("");
    props.history.push("/");
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <StyledSetup className="setup">
      <motion.div className="warningwrap">
        <AnimatePresence>
          {warningShowing && (
            <motion.div
              variants={warningVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              className="warning"
            >
              Fields can't be empty
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <h2>What's your name?</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">What's your name?</label>
        <input name="userName" value={name} onChange={nameChange} type="text" />
        <label htmlFor="userLocation">What's your city</label>
        <input
          name="userLocation"
          value={city}
          onChange={cityChange}
          type="text"
        />
        <input type="submit" hidden />
      </form>
    </StyledSetup>
  );
};

const StyledSetup = styled(motion.div)`
  border: 2px solid burlywood;
  height: 100vh;
  padding: 0;
  color: green;
  font-size: 2rem;
  .warning {
    color: tomato;
    font-weight: 700;
    border: 1px solid black;
    height: 3rem;
  }
  .warningwrap {
    height: 3rem;
  }
`;
export default withRouter(Setup);
