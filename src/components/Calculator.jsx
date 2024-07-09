import { useState } from 'react'
import './Calculator.css'
import ConfettiComponent from './Confetti';
import { evaluate } from 'mathjs';
const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [memory, setMemory] = useState(null);
  const [isExploding, setIsExploding] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      if(display==="6+2"||display==="6*2"|| display==="6/2" || display==="6-2"||
        display==="2+6" ||display==="2*6"||display==="2/6"  || display==="2-6"
      ){
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 5000);
      }
      try {
        setDisplay(evaluate(display));
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === 'mc') {
      setMemory(null);
    } else if (value === 'm+') {
      setMemory((prev) => (prev !== null ? prev + evaluate(display) : evaluate(display)));
    } else if (value === 'm-') {
      setMemory((prev) => (prev !== null ? prev - evaluate(display) : -evaluate(display)));
    } else if (value === 'mr') {
      setDisplay((prev) => (memory !== null ? prev + memory : prev));
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '/',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '*',
    '¼', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((buttons, i) => (
          <button key={i} onClick={() => handleButtonClick(buttons)}>
            {buttons}
          </button>
        ))}
      </div>
      <ConfettiComponent active={isExploding} />
    </div>
  );
};

export default Calculator;
