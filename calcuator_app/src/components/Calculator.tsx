import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = (expression) => {
    const expr = expression.replace(/\s/g, '');

    if (!/^[\d+\-*/.]+$/.test(expr)) {
      return 'Error';
    }

    try {
      const result = new Function(`return (${expr})`)();

      if (typeof result !== 'number' || !isFinite(result)) {
        return 'Error';
      }

      return result.toString();
    } catch (e) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      if (input) {
        const calcResult = calculate(input);
        setResult(calcResult);
        if (calcResult !== 'Error') {
          setInput(calcResult);
        }
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
      setResult('');
    } else if (value === '±') {
      if (input) {
        if (input.startsWith('-')) {
          setInput(input.slice(1));
        } else {
          setInput('-' + input);
        }
        setResult('');
      }
    } else {
      const lastChar = input[input.length - 1];
      const operations = ['+', '-', '*', '/'];

      if (operations.includes(value) && operations.includes(lastChar)) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
      setResult('');
    }
  };

  const buttons = [
    ['C', '⌫', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3'],
    ['0', '.', '±', '='],
  ];

  return (
    <div className='min-h-screen  bg-t2-main-b flex items-center justify-center p-4'>
      <div className='bg-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-xs'>
        <div className='bg-gray-900 rounded-xl p-4 mb-4 text-right'>
          <div className='text-gray-400 text-sm h-6'>{input || '\u00A0'}</div>
          <div className='text-white text-3xl font-bold'>
            {result || (input ? '0' : '0')}
          </div>
        </div>

        <div className='grid grid-cols-4 gap-2'>
          {buttons.flat().map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(btn)}
              className={`
                p-3 rounded-xl text-lg font-semibold transition-all duration-150 active:scale-95
                ${
                  btn === '='
                    ? 'col-span-2 bg-blue-600 hover:bg-blue-700 text-white'
                    : ''
                }
                ${btn === 'C' ? 'bg-red-600 hover:bg-red-700 text-white' : ''}
                ${
                  btn === '⌫'
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                    : ''
                }
                ${
                  ['/', '*', '-', '+', '±'].includes(btn)
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
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
                  ].includes(btn)
                    ? 'bg-gray-600 hover:bg-gray-500 text-white'
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
  );
};

export default Calculator;
