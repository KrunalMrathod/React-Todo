import React, { useState } from "react";
import Card from "./Card";

const Input = () => {
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [editTodoId, setEditTodoId] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (!inputState.title.trim() || !inputState.description.trim()) {
      alert("Please fill in both fields");
      return;
    }

    if (isEditing) {
    
      const updatedTodos = todos.map((todo) =>
        todo.id === editTodoId
          ? {
              ...todo,
              title: inputState.title.trim(),
              description: inputState.description.trim(),
            }
          : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditTodoId(null);
    } else {
    
      const newTodo = {
        id: Date.now(),
        title: inputState.title.trim(),
        description: inputState.description.trim(),
        complete: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

   
    setInputState({
      title: "",
      description: "",
    });
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInputState({
      title: todoToEdit.title,
      description: todoToEdit.description,
    });
    setIsEditing(true);
    setEditTodoId(id);
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <form onSubmit={addTodo}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Todo"
            aria-label="Your Todo"
            name="title"
            value={inputState.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Your Description"
            aria-label="Your Description"
            name="description"
            value={inputState.description}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-secondary" type="submit">
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div className="mt-3 row row-cols-3 gap-5">
        {todos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Input;
