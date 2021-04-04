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
      <div className="wrap">
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

        <h2>Let's get to know you</h2>
        <form onSubmit={submitHandler}>
          <div className="row">
            <label htmlFor="userName">What's your name?</label>
            <input
              placeholder="Name"
              name="userName"
              value={name}
              onChange={nameChange}
              type="text"
            />
          </div>
          <br />
          <div className="row">
            <label htmlFor="userLocation">What's your city</label>
            <input
              placeholder="City"
              name="userLocation"
              value={city}
              onChange={cityChange}
              type="text"
            />
          </div>
          <input type="submit" value="Finish" />
        </form>
      </div>
    </StyledSetup>
  );
};

const StyledSetup = styled(motion.div)`
  min-height: 100vh;
  font-size: 2rem;
  position: relative;
  font-family: "Lato", sans-serif;
  z-index: 0;
  .row {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  form {
    padding: 2rem;
    font-weight: lighter;
    input[type="submit"] {
      display: inline-block;
      margin-left: 50%;
      margin-top: 5rem;
      font-size: 2rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      transform: translateX(-50%);
      padding: 0.3rem 0.8rem;
      text-transform: capitalize;
      text-align: center;
      cursor: pointer;
      outline: none;
      transition: all 0.3s ease-out;
      box-shadow: 1px 1px 5px black;
      border: 1px solid rgba(120, 120, 120, 0.5);
      border-radius: 0.2rem;
      :hover,
      :active {
        transform: translate(-50%, -0.2rem);
        background-color: #fff;
        outline: none;
      }
      :active {
        transform: translate(-50%, 0.2rem);
        box-shadow: 1px 1px 3px black;
      }
    }
    input[type="text"] {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      text-align: center;
      outline: none;
      border: none;
      border-bottom: 1px solid rgb(120, 120, 120);
      ::-webkit-input-placeholder {
        font-weight: 300;
      }
      :focus {
        border-color: tomato;
      }
    }
    label {
      padding: 0 8rem;
      width: 30%;
      display: inline-block;
    }
  }
  h2 {
    text-align: center;
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: rgb(100, 100, 100);
  }
  .wrap {
    border: 5px solid #555;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .warning {
    color: tomato;
    font-weight: 700;
    height: 3rem;
    padding: 1rem 0;
    text-align: center;
  }
  .warningwrap {
    height: 4rem;
  }
`;
export default withRouter(Setup);
