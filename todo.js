import React from "react";

function Todo({ todo, index, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default Todo;
