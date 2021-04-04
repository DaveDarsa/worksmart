import React, { useContext, useState } from "react";
import { DetailsContext } from "../contexts/SavedDetailsProvider";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CategoryAdder = () => {
  const [, dispatch] = useContext(DetailsContext);
  const [form, setForm] = useState(false);
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <StyledAdder>
      <h3
        onClick={(e) => {
          setForm(!form);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </h3>
      {form && (
        <AnimatePresence>
          <motion.form
            variants={formVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            onSubmit={(e) => {
              e.preventDefault();
              if (input) {
                dispatch({
                  type: "ADD_TASKTYPE",
                  payload: { taskTypeName: input },
                });
                setInput("");
                setForm(false);
              }
            }}
          >
            <motion.input
              autoFocus
              value={input}
              onChange={changeHandler}
              type="text"
              placeholder="Category Name"
            />
          </motion.form>
        </AnimatePresence>
      )}
    </StyledAdder>
  );
};
const formVariants = {
  initial: { x: 0, opacity: 0 },
  visible: { x: -30, opacity: 1 },
  exit: { x: 0, opacity: 0 },
};

const StyledAdder = styled(motion.div)`
  margin-left: auto;
  padding: 0;
  line-height: 0;
  transform: translateY(-2rem);
  width: fit-content;
  form {
    position: absolute;
    top: 1rem;
    right: 0;
    z-index: -1;
    input {
      font-size: 1.2rem;
      font-weight: 500;
      padding: 0.5rem;
      text-transform: capitalize;
      color: #222;
      outline: none;
    }
    input::-webkit-input-placeholder {
      font-size: 1.2rem;
      font-weight: 600;
      font-family: "Lato", sans-serif;
      color: #222;
    }
  }
  h3 {
    cursor: pointer;
    color: white;
    border: 2px solid #555;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 50%;

    .icon {
      font-size: 2rem;
      color: #555;
    }
  }
`;

export default CategoryAdder;
