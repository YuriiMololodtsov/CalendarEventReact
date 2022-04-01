import React from 'react';
import { useState } from 'react';
import TableDays from './TableDays';
import Note from './Note';

function Calendar() {
  return (
    <div id="parent">
      <TableDays />
    </div>
  );
}

export default Calendar;
