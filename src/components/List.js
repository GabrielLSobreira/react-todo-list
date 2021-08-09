import React from 'react';
import { Trash, CheckCircle } from 'react-bootstrap-icons';

function DoneImg({ done }) {
  if (done) {
    return <CheckCircle />;
  } else {
    return <CheckCircle />;
  }
}

const List = ({ itens, onItemDeleted, onDone }) => {
  return (
    <ul className="ListContainer">
      {itens.map((item) => (
        <li className={item.done ? 'done' : ''} key={item.id}>
          {item.text}
          <div>
            <button
              className={item.done ? 'checkBtn' : ''}
              onClick={() => {
                onDone(item);
              }}
            >
              <DoneImg done={item.done} />
            </button>
            <button
              className="TrashBtn"
              onClick={() => {
                onItemDeleted(item);
              }}
            >
              <Trash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
