import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import { RiDeleteBinFill } from 'react-icons/ri';

function Note(props) {
  const name = `${props.day} ${props.month} ${props.year}`;

  const setDataFromStorage = useCallback(
    () =>
      localStorage.getItem('data')
        ? JSON.parse(localStorage.getItem('data'))[name] || []
        : [],
    [name]
  );

  const [data, setData] = useState(setDataFromStorage());
  const [value, setValue] = useState();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    setData(setDataFromStorage());
  }, [name]);

  function handleClick() {
    const rawData = localStorage.getItem('data') || '{}';

    if (editData) {
      const newData = data.map((item) =>
        item.id === editData.id ? { ...item, text: value } : item
      );
      localStorage.setItem(
        'data',
        JSON.stringify({ ...JSON.parse(rawData), [name]: newData })
      );
      setValue('');
      setData(newData);
      setEditData(null);
    } else if (value) {
      const newData = [{ id: new Date().getTime(), text: value }, ...data];
      localStorage.setItem(
        'data',
        JSON.stringify({ ...JSON.parse(rawData), [name]: newData })
      );
      setValue('');
      setData(newData);
    }
  }

  function handleDelete(e, id) {
    e.stopPropagation();
    const newData = data.filter((item) => item.id !== id);
    const rawData = localStorage.getItem('data') || '{}';
    localStorage.setItem(
      'data',
      JSON.stringify({ ...JSON.parse(rawData), [name]: newData })
    );
    setData(newData);
  }

  function handleEdit(id) {
    const currentData = data.find((item) => item.id === id);
    setEditData(currentData);
    setValue(currentData.text);
  }

  return (
    <div className="note">
      <h3 className="note__title">
        {props.day} {props.month} {props.year}
      </h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>
        {editData ? 'Обновить' : 'Записать'}
      </button>
      <ol>
        {data.map((item) => (
          <li key={item.id} onClick={() => handleEdit(item.id)}>
            {item.text}{' '}
            <span
              className="button-del"
              onClick={(e) => handleDelete(e, item.id)}
            >
              <RiDeleteBinFill />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Note;
