import React from 'react';
import './index.css';

function Note() {
  function setNote() {
    console.log('qqqqq');
  }
  return (
    <div id="note">
      <ol>
        <ul>1</ul>
      </ol>
      {setNote()}
    </div>
  );
}

export default Note;
