import React from "react";
import { v4 as uuid } from "uuid";
import { StyledTaskMapper } from "../styles/StyledMapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import TaskAdder from "./TaskAdder";

const TaskMapper = ({ tasks, dispatch }) => {
  return (
    <StyledTaskMapper className="mapped">
      {tasks.map((category) => {
        return (
          <div
            className="category"
            key={uuid()}
            // onClick={(e) => {
            //   dispatch({
            //     type: "ADD_TASKTYPE",
            //     payload: { taskTypeName: "bruh" },
            //   });
            // }}
          >
            <h2>
              {category.name}
              <span>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="delete"
                  onClick={(e) => {
                    dispatch({
                      type: "DELETE_TASKTYPE",
                      payload: {
                        taskTypeName: category.name,
                      },
                    });
                  }}
                />
                <FontAwesomeIcon icon={faArrowCircleDown} />
              </span>
            </h2>
            <ul className="basiclist">
              {category.basicItems.map((basic) => {
                return (
                  <li
                    className="basicitem"
                    key={uuid()}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch({
                        type: "REMOVE_BASIC",
                        payload: {
                          taskTypeName: category.name,
                          basicItem: basic,
                        },
                      });
                    }}
                  >
                    {basic}
                  </li>
                );
              })}
            </ul>
            <div className="subtasks">
              {category.sublist.map((sublistItem) => {
                return (
                  <div className="sublistitem" key={uuid()}>
                    <h4 className="subname">
                      {`${sublistItem.name} - sublist`}
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="deleteicon"
                        onClick={(e) => {
                          dispatch({
                            type: "REMOVE_SUBLIST",
                            payload: {
                              taskTypeName: category.name,
                              sublistName: sublistItem.name,
                            },
                          });
                        }}
                      />
                    </h4>
                    <ul className="sublist">
                      {sublistItem.items.map((item) => {
                        return (
                          <li
                            className="subtask"
                            key={uuid()}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              dispatch({
                                type: "DELETE_SUB_ITEM",
                                payload: {
                                  taskTypeName: category.name,
                                  sublistName: sublistItem.name,
                                  taskName: item,
                                },
                              });
                            }}
                          >
                            {item}
                          </li>
                        );
                      })}
                      <TaskAdder
                        type="single"
                        categoryName={category.name}
                        isSublist={true}
                        sublistName={sublistItem.name}
                      />
                    </ul>
                  </div>
                );
              })}
            </div>
            <TaskAdder type="single" categoryName={category.name} />
            <TaskAdder type="multiple" categoryName={category.name} />
          </div>
        );
      })}
    </StyledTaskMapper>
  );
};
export default TaskMapper;
