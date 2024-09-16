import React from "react";

const Card = ({ todo, deleteTodo, editTodo }) => {
  return (
    <div className="col mx-auto">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Title: {todo.title}</h5>
          <p className="card-text">Description: {todo.description}</p>
          <button
            type="button"
            className="btn btn-dark mx-2"
            onClick={editTodo}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-dark mx-2"
            onClick={deleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
