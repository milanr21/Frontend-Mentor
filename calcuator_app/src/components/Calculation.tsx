import { useState } from 'react';
import { useTheme } from '../context/useTheme';
import type { Theme } from '../context/ThemeContext';

const Calculation = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const { theme, setTheme } = useTheme();

  const themes: Theme[] = ['theme1', 'theme2', 'theme3'];

  const calculate = (expression) => {
    const updatedExpression = expression.replace(/\s/g, '');

    if (!/^[\d+\-*/.]+$/.test(updatedExpression)) {
      return 'Error';
    }

    try {
      const result = new Function(`return (${updatedExpression})`)();

      if (typeof result !== 'number' || !isFinite(result)) {
        return 'Error';
      }

      return result.toString();
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    console.log('clicked');
    if (value === '=') {
      if (input) {
        const calculateResult = calculate(input);
        setResult(calculateResult);
        if (calculateResult !== 'Error') {
          setInput(calculateResult);
        }
      }
    } else if (value === 'RESET') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
      setResult('');
    } else {
      const lastChar = input[input.length - 1];
      const operators = ['+', '-', '*', '/'];

      if (operators.includes(value) && operators.includes(lastChar)) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }

      setResult('');
    }
  };

  const buttons = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', '*'],
    ['RESET', '='],
  ];

  console.log('input', input);
  console.log('result', result);

  return (
    <div
      className={`min-h-screen bg-(--bg-main) flex items-center justify-center p-4`}
    >
      <div className='rounded-2xl  p-6 h-full max-w-lg space-y-10'>
        <div className='text-(--text-primary) font-semibold flex flex-row justify-between'>
          <p>calc</p>
          <div className='gap-5 flex flex-row'>
            <div className='text-[10px] font-semibold items-end justify-end mb-1 flex'>
              THEME
            </div>
            <div className='flex flex-col text-xs '>
              <div className='space-x-2 flex justify-end mb-1'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
              <div className='bg-(--bg-toggle) rounded-xl p-1 flex items-center'>
                {['theme1', 'theme2', 'theme3'].map((t) => (
                  <button
                    onClick={() => setTheme(t as typeof theme)}
                    className={`cursor-pointer h-3 w-3 ${
                      theme === t ? 'bg-orange-400 rounded-full' : 'bg-inherit'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='bg-(--bg-screen) rounded-xl p-4 mb-4 text-right'>
          <div className='text-(--text-primary) text-3xl font-bold'>
            {input || '\u00A0'}
          </div>
        </div>
        <div className='bg-(--bg-toggle) p-6 rounded-2xl'>
          <div className='grid grid-cols-4 gap-5 '>
            {buttons.flat().map((btn, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(btn)}
                className={` font-bold px-10  rounded-md flex items-center justify-center border-b-3 cursor-pointer
                  ${
                    btn === 'RESET' || btn === '=' || btn === 'DEL'
                      ? 'text-lg py-3'
                      : 'text-2xl py-2'
                  }
                 ${
                   btn === 'RESET'
                     ? 'col-span-2 bg-(--key-primary) hover:bg-(--key-primary) hover:brightness-140 border-(--key-primary-shadow) text-(--key-primary-text)'
                     : ''
                 }

                 ${
                   btn === '='
                     ? 'col-span-2 bg-(--key-accent) hover:brightness-140  text-(--key-accent-text) border-(--key-accent-shadow)'
                     : ''
                 }
                
                 ${
                   btn === 'DEL'
                     ? 'col-span-1 bg-(--key-primary) hover:brightness-140 border-(--key-primary-shadow) text-(--key-primary-text)'
                     : ''
                 }
                 ${
                   [
                     '0',
                     '1',
                     '2',
                     '3',
                     '4',
                     '5',
                     '6',
                     '7',
                     '8',
                     '9',
                     '.',
                     '/',
                     '*',
                     '-',
                     '+',
                   ].includes(btn)
                     ? 'bg-(--key-normal) hover:brightness-140 border-(--key-normal-shadow) text-(--key-normal-text)'
                     : ''
                 }
                `}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
