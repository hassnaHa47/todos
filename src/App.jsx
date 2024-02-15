import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateValue, setUpdateValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleUpdateTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: updateValue } : todo
      )
    );
    setUpdateIndex(null);
  };

  const handleUpdateInputChange = (e) => {
    setUpdateValue(e.target.value);
  };

  const handleSetUpdateIndex = (index) => {
    setUpdateIndex(index);
    setUpdateValue(todos[index].text);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a todo..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {updateIndex === index ? (
              <input
                type="text"
                value={updateValue}
                onChange={handleUpdateInputChange}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            )}
            {updateIndex === index ? (
              <button onClick={() => handleUpdateTodo(index)}>Save</button>
            ) : (
              <button onClick={() => handleSetUpdateIndex(index)}>Update</button>
            )}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
