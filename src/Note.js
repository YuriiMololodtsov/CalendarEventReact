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
  }
  console.log(storage);
  let json = JSON.stringify(storage);
  console.log(json);
  localStorage.setItem(name, json);

  //   localStorage.setItem(name, json);
  // function sendingArrayToStorage(arr, name) {
  //   let json = JSON.stringify(arr);

  //   localStorage.setItem(name, json);

  //   console.log(json);
  //   console.log(name);
  //   console.log(localStorage.getItem(name));
  // }

  // sendingArrayToStorage(storage, name);

  return (
    <div className="note">
      <h3 className="note__title">
        {props.day} {props.month} {props.year}
      </h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Записать</button>
      <ol>{}</ol>
    </div>
  );
}

export default Note;
