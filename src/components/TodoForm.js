import React, { useState } from 'react';

const TodoForm = ({ onAddItem }) => {
  const [text, setText] = useState('');
  function handleClick(e) {
    e.preventDefault();
    if (text) {
      onAddItem(text);
      setText('');
    }
  }
  return (
    <form className="FormContainer">
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
        placeholder="Adicione uma tarefa..."
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
};

export default TodoForm;
