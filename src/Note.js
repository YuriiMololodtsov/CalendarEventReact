import React, { useState } from 'react';
import './index.css';

function Note(props) {
  let name = `${props.day}${props.month}${props.year}`;

  const [value, setValue] = useState();
  const [text, setText] = useState('');
  const [test, setTest] = useState({});

  const [storage, setStorage] = useState({});
  let copy;
  console.log(text);

  function handleClick() {
    setText(value);

    copy = Object.assign({}, storage);
    copy[name] = [value];
    setStorage(copy);

    let json = JSON.stringify(copy[name]);

    localStorage.setItem(name, json);
  }
  console.log(storage);
  return (
    <div className="note">
      <h3 className="note__title">
        {props.day} {props.month} {props.year}
      </h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Записать</button>
      <p>{JSON.parse(localStorage.getItem(name))}</p>
    </div>
  );
}

export default Note;
