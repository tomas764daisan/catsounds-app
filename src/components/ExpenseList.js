import React from "react";
import "./ExpenseList.css";

function ExpenseList({ sounds }) {
  if (!sounds.length) {
    return <p className="empty">No cat sounds added yet!</p>;
  }

  return (
    <ul className="expense-list">
      {sounds.map((sound) => (
        <li key={sound.id}>{sound.name}</li>
      ))}
    </ul>
  );
}

export default ExpenseList;
