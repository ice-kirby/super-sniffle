import React from "react";
import "../style/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const { todos, removeItem, updateItem } = props;

  return (
    <div className="TodoList">
      {todos.map((doo) => (
        <TodoListItem
          todo={doo}
          key={doo.id}
          removeItem={removeItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default TodoList;
