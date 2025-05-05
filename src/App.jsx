import { useState } from 'react';
import styles from "./app.module.css";

export const App = () => {

  const NUMS = ['9', '8', '7', 'C', '6', '5', '4', '+', '3', '2', '1', '-', '0', '='];

  const [operand1, setOperand1] = useState('0');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const buttonClick = (simbol) => {

    if (simbol === 'C') {
      setOperand1('0');
      setOperand2('');
      setOperator('');
      setResult('');
    };

    function calculate(operand1, operand2, operator) {
      switch (operator) {
        case '+':
          return Number(operand1) + Number(operand2);
        case '-':
          return Number(operand1) - Number(operand2);
        default:
          return console.log('Ошибка');;
      }
    };

    if (display.length <= 20) {
      if (operand1 === '0' || result) {
          if (['=', '+', '-'].includes(simbol)) {
              setResult('');
              setOperand1('0');
          } else if (simbol !== 'C') {
              setResult('');
              setOperand1(simbol);
          }
          return;
      };
  
      if (simbol >= 0 && !operator) {
          setOperand1(operand1 + simbol);
          return;
      };
  
      if (['+', '-'].includes(simbol) && !operator) {
          setOperator(simbol);
          return;
      };
  
      if (operator && simbol >= 0 && simbol <= 9) {
          setOperand2(operand2 === '' || operand2 === '0' ? simbol : operand2 + simbol);
          return;
      };
  
      if (simbol === '=' && operand1 && operand2 && operator) {
          setResult(calculate(operand1, operand2, operator));
          setOperand1('');
          setOperand2('');
          setOperator('');
      };
    }
  }
  const display = operand1 + operator + operand2;

  return (
    <>
      <div className={styles.calculator}>
        {result === '' ? <div className={styles.display}>{display}</div> : <div className={styles.displayResult}>{result}</div>}
        <div className={styles.buttons}>
            {NUMS.map(number => (
              <button className={`${number === 'C' ? styles.clear : null} ${number === '=' ? styles.equals : null} ${number === '-' ? styles.operator : null} ${number === '+' ? styles.operator : null} ${number === '0' ? styles.test : null}`} key={number} onClick={() => buttonClick(`${number}`)}>{number}</button>
            ))}
        </div>
      </div>
    </>
  )
};
