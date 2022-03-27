import React from 'react';
import { useState } from 'react';
import TableDays from './TableDays';

function Calendar() {
  return (
    <div id="parent">
      <TableDays></TableDays>
    </div>
  );
}

export default Calendar;
