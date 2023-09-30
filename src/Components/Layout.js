import React, { useState } from "react";
import './Layout.css';
import logo from '../assets/images/logo.png.jpg';
import Output from "./output";
import { evaluate } from 'mathjs'; // Import the evaluate function from math.js

const Layout = () => {
  let [input, setInput] = useState('0');
  let [result, setResult] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    console.log(value)

    if (value === '=') {
      if (input !== '') {
        try {
          const res = evaluate(input); // Use math.js to evaluate the expression
          setResult(res);
          setInput(res.toString());
        } catch (err) {
          setResult('Math error');
        }
      }
    } else if (value === 'C') {
      setInput('0');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (input === '0') {
      setInput(value);
    } else {
      setInput(input += value);
    }
  }

  return (
    <div className='frame'>
      <div className="calci">
        <br></br>
        <Output user={input} answer={result} />
        <img src={logo} width='160px' alt="Logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <div className="keys">
          <input type='button' className='button clear' value="C" onClick={handleClick} />
          <input type='button' className='button clear' value="DEL" onClick={handleClick} />
          <input type='button' className='button operator' value="%" onClick={handleClick} />
          <input type='button' className='button operator' value="/" onClick={handleClick} />
          <input type='button' className='button' value="7" onClick={handleClick} />
          <input type='button' className='button' value="8" onClick={handleClick} />
          <input type='button' className='button' value="9" onClick={handleClick} />
          <input type='button' className='button operator' value="*" onClick={handleClick} />
          <input type='button' className='button' value="4" onClick={handleClick} />
          <input type='button' className='button' value="5" onClick={handleClick} />
          <input type='button' className='button' value="6" onClick={handleClick} />
          <input type='button' className='button operator' value="-" onClick={handleClick} />
          <input type='button' className='button' value="1" onClick={handleClick} />
          <input type='button' className='button' value="2" onClick={handleClick} />
          <input type='button' className='button' value="3" onClick={handleClick} />
          <input type='button' className='button operator' value="+" onClick={handleClick} />
          <input type='button' className='button' value="0" onClick={handleClick} />
          <input type='button' className='button' value="." onClick={handleClick} />
          <input type='button' className='button equal-sign' value="=" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
