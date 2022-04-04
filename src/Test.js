import React from 'react';
import './index.css';
import { useState } from 'react';
import Li from './Li';
import uuid from 'react-uuid';
let date = new Date();

export default function Test() {
  let one;
  const [value, setValue] = useState(one);

  function blurHandler() {
    localStorage.setItem(date.getTime(), value);
  }
  return (
    <div className="test">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={blurHandler}
        className="input"
        placeholder="Создать заметку"
      />

      <Li value />
    </div>
  );
}
