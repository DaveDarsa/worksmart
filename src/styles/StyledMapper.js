import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledTaskMapper = styled(motion.div)`
  font-size: 1.8rem;
  color: rgb(55, 55, 55);
  transform: translateX(3rem);
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  .category {
    align-self: stretch;
    padding: 0 3rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 0.5rem;
    margin-bottom: 5rem;
    h2 {
      font-size: 2rem;
      text-transform: capitalize;
      padding: 0rem 0.5rem 0 0;
      text-decoration: underline;
      text-decoration-color: rgba(0, 25, 51, 0.5);
      text-decoration-thickness: 3px;
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        .delete {
          margin-right: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          :hover {
            color: darkred;
          }
        }
      }
    }
    .basiclist {
      padding: 0;
      margin: 0;
      margin-top: -1rem;
      list-style: none;
      cursor: pointer;
    }
    .basicitem {
      color: #555;
      text-transform: capitalize;
      padding: 0.5rem 0.5rem 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.1rem;
      text-decoration: line-through;
      text-decoration-color: transparent;
      text-decoration-thickness: 2px;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(55, 55, 55, 0.4);
      :hover {
        text-decoration-color: hotpink;
      }
    }
    .subtasks {
      text-transform: capitalize;
    }
    .sublistitem {
      font-size: 1.5rem;
    }
    .subname {
      display: inline-block;
      padding: 0;
      margin: 0;
      text-transform: capitalize;
      color: #555;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .deleteicon {
        transition: all 0.3s ease;
        cursor: pointer;
        :hover {
          color: darkred;
        }
      }
      /* text-decoration: underline;
      text-decoration-color: rgba(0, 25, 51, 0.5);
      text-decoration-thickness: 3px; */
    }
    .sublist {
      border-left: 1px solid black;
      padding: 0;
      margin: 0;
      margin-left: 1rem;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
      padding-left: 0.5rem;
      list-style: none;
    }
    .subtask {
      padding: 0.2rem;
      border-bottom: 1px solid rgba(55, 55, 55, 0.4);
      cursor: pointer;
      text-decoration: line-through;
      text-decoration-color: transparent;
      text-decoration-thickness: 2px;
      transition: all 0.3s ease;
      border-bottom: 1px solid rgba(55, 55, 55, 0.4);
      :hover {
        text-decoration-color: hotpink;
      }
    }
  }
`;
