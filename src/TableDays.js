import { React, useState } from 'react';
import './index.css';

function TableDays() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  //Принимает число и создает от 1 до этого числа
  function range(count) {
    let arr = [];

    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }

    return arr;
  }

  //Возвращает номер последнего дня месяца
  function getLastDay(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  //Получает номер дня недели, первого дня месяца
  function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let num = date.getDay();

    if (num == 0) {
      return 6;
    } else {
      return num - 1;
    }
  }

  //Получает номер дня недели, последнего дня месяца
  function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num = date.getDay();

    if (num == 0) {
      return 6;
    } else {
      return num - 1;
    }
  }

  //получение месяца с пустыми строками
  function normalize(arr, left, right) {
    for (let i = 0; i < left; i++) {
      arr.unshift('');
    }
    for (var i = 0; i < right; i++) {
      arr.push('');
    }

    return arr;
  }

  //Разбивает массив на подмассивы по 7 дней
  function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);

    for (let i = 0; i < count; i++) {
      let elems = arr.splice(0, n);
      result.push(elems);
    }

    return result;
  }
  //=============

  //=============

  //создание таблицы
  function createTable(arr) {
    const rows = arr.map((item, index) => {
      return (
        <tr key={index}>
          {item.map((elem, index2) =>
            date.getDate() != elem ? (
              <td key={index2}>{elem}</td>
            ) : (
              <td className="monDay" key={index2}>
                {elem}
              </td>
            )
          )}
        </tr>
      );
    });
    return rows;
  }

  function draw(year, month) {
    //Массив дней текущего месяца
    let arr = range(getLastDay(year, month));

    //Пустые строки с лева
    let firstWeekDay = getFirstWeekDay(year, month);
    //Пустые строки с права
    let lastWeekDay = getLastWeekDay(year, month);
    //Готовый месяц
    let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);

    let result = createTable(nums);
    console.log(year, month);
    return result;
  }
  //=============
  function getNextYear(year, month) {
    if (month == 11) {
      return year + 1;
    } else return year;
  }

  function getNextMonth(month) {
    if (month != 11) {
      return month + 1;
    } else {
      return 0;
    }
  }
  let test = draw(year, month);
  //В стейт попадает результат функции, а в онклик мы меняем аргументы для функции
  let [aaa, setAaa] = useState(test);
  console.log(aaa);
  return (
    <div id="calendar">
      <div className="info">Янв 2020</div>
      <table>
        <thead>
          <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
          </tr>
        </thead>
        <tbody className="body">{aaa}</tbody>
      </table>
      <div className="nav">
        <button className="prev">←</button>
        <button
          className="next"
          onClick={() =>
            setAaa((test = draw(getNextYear(year, month), getNextMonth(month))))
          }
        >
          →
        </button>
      </div>
    </div>
  );
}

export default TableDays;
