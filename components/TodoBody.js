import React from "react";
import "../style/TodoBody.scss";

const TodoBody = ({ children }) => {
  return (
    <div className="TodoBody">
      <div className="appTitle">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoBody;
