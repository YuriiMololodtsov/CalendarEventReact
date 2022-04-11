import React, { useState } from 'react';
import './index.css';

function Note(props) {
  const name = `${props.day} ${props.month} ${props.year}`;

  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const [storage, setStorage] = useState({
    name: [],
  });
  let res;
  function handleClick() {
    setText(value);

    setStorage((storage) => ({
      ...storage,
      name: [...storage.name, text],
    }));

    localStorage.setItem(name, text);
  }
  console.log(storage);

  return (
    <div className="note">
      <h3 className="note__title">
        {props.day} {props.month} {props.year}
      </h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Записать</button>
      <ol>
        <li>{res}</li>
      </ol>
    </div>
  );
}

export default Note;
