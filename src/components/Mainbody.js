import React, { useContext } from "react";
import { StyledBody } from "../styles/StyledBody";
import bgimg from "../images/bgimg.jpg";
import TaskMapper from "./TaskMapper";
import CategoryAdder from "./CategoryAdder";
import { DetailsContext } from "../contexts/SavedDetailsProvider";

const MainBody = () => {
  const [tasks, dispatch] = useContext(DetailsContext);
  console.log(tasks);
  return (
    <StyledBody img={bgimg}>
      <TaskMapper tasks={tasks} dispatch={dispatch} />
      <CategoryAdder />
    </StyledBody>
  );
};

export default MainBody;
