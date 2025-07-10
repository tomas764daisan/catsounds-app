import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onAddSound }) {
  const [soundName, setSoundName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!soundName.trim()) return;
    onAddSound({ id: Date.now(), name: soundName });
    setSoundName("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter cat sound name"
        value={soundName}
        onChange={(e) => setSoundName(e.target.value)}
      />
      <button type="submit">Add Sound</button>
    </form>
  );
}

export default ExpenseForm;
