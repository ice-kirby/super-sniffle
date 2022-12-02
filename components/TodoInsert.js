import React, { useState } from "react";
import "../style/TodoInsert.scss";
import { AiFillEdit } from "react-icons/ai";

const TodoInsert = ({ plusItem }) => {
  //   const toDay = new Date();
  //   const year = toDay.getFullYear();
  //   const month = toDay.getMonth() + 1;
  //   let day = toDay.getDate();

  //   if (day < 10) {
  //     day = "0" + day;
  //   }

  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const changeHandler = (e) => setItem(e.target.value);

  const dateHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    if (item.trim() === "") {
      return;
    }
    plusItem(item, false, date);
    setItem("");
    setDate(date);
  };

  return (
    <form className="TodoInsert" onSubmit={submitHandler}>
      <input type="date" className="year" onChange={dateHandler} name="date" />
      <input
        type="text"
        placeholder="할 일 입력하세용"
        className="write"
        value={item}
        onChange={changeHandler}
      />
      <button type="submit">
        <AiFillEdit />
      </button>
    </form>
  );
};

export default TodoInsert;
