import React, { useState } from 'react';
import './style.css';
import Heading from './Heading';
import Button from './Button';
export default function App() {
  const [num, setNum] = useState(0);

  const inc = 'Increament';
  const dec = 'Decrement';

  const Add = () => {
    setNum(num + 1);
  };
  const Sub = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      return false;
    }
  };
  return (
    <div className="main_div">
      <Heading value={num} />
      <div className="button_rapper">
        <Button fun={Add} name={inc} />
        <Button fun={Sub} name={dec} />
      </div>
    </div>
  );
}
