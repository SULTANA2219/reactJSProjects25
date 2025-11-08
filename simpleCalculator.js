
//simpleCalculator

import React, {useState} from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumber = (num) => {
    setDisplay(display==='0'?num: display+num);
  };

  const handleOperator = (op) => {
    if(prevValue===null) {
      setPrevValue(parseFloat(display));
      setDisplay('0');
    } else if (operation) {
      const result = calculate(prevValue, parseFloat(display), operation);
      setPrevValue(result);
      setDisplay('0');
    }
    setOperation(op);
  };

  const handleEquals = () => {
    if (prevValue !== null && operation) {
      const result = calculator(prevValue, parseFloat(display), operation);
      setDisplay(result.toString());
      setPrevValue(null);
      setOperation(null);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
  };

  const calculator = (a, b, op) => {
    switch(op) {
      case '+': return a+b;
      case '-': return a-b;
      case '*': return a*b;
      case '/': return b!==0?a/b: 'Error';
      default: return b;
    }
  };

  return (
    <div style= {{ width: '200px', margin: 'auto', textAlign: 'center' }}>
<div style = {{ fontSize: '24px', marginBottom: '10px' }}>{display}</div>
<div>
{[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+'].map((btn) => (
  <button key={btn} onClick={() => { if (typeof btn === 'number' || btn === '.') handleNumber(btn.toString());
                                    else if(btn=== '=') handleEquals();
                                    else if(btn==='C') handleClear();
                                    else handleOperator(btn);
                                   }}

                                                                  
        
  
