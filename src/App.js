import React, { useEffect, useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Header from './components/Header';

const App = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    let savedItens = JSON.parse(localStorage.getItem('savedItens'));
    if (savedItens) {
      setItens(savedItens);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedItens', JSON.stringify(itens));
  }, [itens]);

  function onAddItem(text) {
    let item = new Item(text);
    setItens([...itens, item]);
  }

  function onItemDeleted(item) {
    let filteredItens = itens.filter((it) => it.id !== item.id);
    setItens(filteredItens);
  }

  function onDone(item) {
    let uptatedItens = itens.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItens(uptatedItens);
  }

  return (
    <div className="App">
      <Header />
      <TodoForm onAddItem={onAddItem} />
      <List itens={itens} onItemDeleted={onItemDeleted} onDone={onDone} />
    </div>
  );
};

export default App;
