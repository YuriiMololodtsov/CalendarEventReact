import React, { useState } from 'react';
import './index.css';

function Note(props) {
  let name = `${props.day}${props.month}${props.year}`;

  const [value, setValue] = useState();
  const [text, setText] = useState('');
  const [storage, setStorage] = useState({});
  let copy;

  console.log(text);

  function handleClick() {
    setText(value);
    console.log(name);
    if (name in storage) {
      copy = Object.assign({}, storage);
      copy[name] = [...copy[name], value];
      setStorage(copy);
      let json = JSON.stringify(copy[name]);
      localStorage.setItem(name, json);
      //добавить в массив storage[name], элемент
      //сразу парсим сюда
    } else {
      copy = Object.assign({}, storage);
      copy[name] = [value];
      setStorage(copy);
      let json = JSON.stringify(copy[name]);
      localStorage.setItem(name, json);
    }
  }
  //создаем список событий из массива, крепим кнопку удаления
  let res = JSON.parse(localStorage.getItem(name));
  let viwe = res.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <span>
          <button className="button-del" data-title="Софийский собор">
            &#128465;
          </button>
        </span>
      </li>
    );
  });
  console.log(storage);
  return (
    <div className="note">
      <h3 className="note__title">
        {props.day} {props.month} {props.year}
      </h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Записать</button>
      {/* <p>{JSON.parse(localStorage.getItem(name))}</p> */}
      <ol>{viwe}</ol>
    </div>
  );
}

export default Note;
