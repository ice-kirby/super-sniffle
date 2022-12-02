import React from "react";
import "../style/TodoHistory.scss";
import TodoHistoryC from "./TodoHistoryC";

const TodoHistory = (props) => {
  const { jinan } = props;

  return <div className="TodoHistory">{jinan.date}</div>;
};

export default TodoHistory;
