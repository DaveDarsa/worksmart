import React, { useContext } from "react";
import { StyledBody } from "../styles/StyledBody";
import bgimg from "../images/bgimg.jpg";
import TaskMapper from "./TaskMapper";
import CategoryAdder from "./CategoryAdder";
import { DetailsContext } from "../contexts/SavedDetailsProvider";
import Weather from "./Weather";
const MainBody = () => {
  const [tasks, dispatch] = useContext(DetailsContext);

  return (
    <StyledBody img={bgimg}>
      <Weather />
      <TaskMapper tasks={tasks} dispatch={dispatch} />
      <CategoryAdder />
    </StyledBody>
  );
};

export default MainBody;
