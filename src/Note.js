import React, { useState } from 'react';
import './index.css';

function Note(props) {
  const name = `${props.day} ${props.month} ${props.year}`;

  const [value, setValue] = useState();
  const [text, setText] = useState('');

  const [storage, setStorage] = useState({
    name: [],
  });
  console.log(text);
  function handleClick() {
    setText(value);

    setStorage((storage) => ({
      ...storage,
      name: [...storage.name, value],
    }));

    localStorage.setItem(name, value);
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
        <li>{text}</li>
      </ol>
    </div>
  );
}

export default Note;
