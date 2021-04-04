import React, { useState, useContext } from "react";
import { DetailsContext } from "../contexts/SavedDetailsProvider";
const TaskAdder = ({
  type,
  categoryName,
  sublistName = "none",
  isSublist = false,
}) => {
  //single and multiple type
  const [singleTask, setSingleTask] = useState("");
  const [subList, setSubList] = useState("");
  const [, dispatch] = useContext(DetailsContext);
  const singleForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (singleTask && !isSublist) {
          dispatch({
            type: "ADD_BASIC",
            payload: { taskTypeName: categoryName, basicItem: singleTask },
          });
          setSingleTask("");
        } else if (singleTask && isSublist) {
          dispatch({
            type: "ADD_SUB_ITEM",
            payload: {
              taskTypeName: categoryName,
              sublistName: sublistName,
              taskName: singleTask,
            },
          });
          setSingleTask("");
        }
      }}
    >
      <input
        type="text"
        value={singleTask}
        onChange={(e) => {
          setSingleTask(e.target.value);
        }}
        placeholder="Add New Task"
      />
    </form>
  );
  const sublistForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (subList) {
          dispatch({
            type: "ADD_SUBLIST",
            payload: {
              taskTypeName: categoryName,
              sublistName: subList,
            },
          });
          setSubList("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Add a sublist"
        value={subList}
        onChange={(e) => {
          setSubList(e.target.value);
        }}
      />
    </form>
  );
  return <>{type === "single" ? singleForm : sublistForm}</>;
};

export default TaskAdder;
