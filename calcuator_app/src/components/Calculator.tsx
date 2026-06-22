import { useState } from 'react';

import { useTheme } from '../context/useTheme';
import { ACTIONS, BUTTONS, OPERATORS, themes } from '../common/CalculateButton';

import {
  isOperator,
  isValidExpression,
  sanitizeExpression,
} from '../utils/calculation';

const options = [1, 2, 3];

const Calculator = () => {
  const [input, setInput] = useState('');
  const { theme, setTheme } = useTheme();

  const calculate = (expression: string): string => {
    const sanitized = sanitizeExpression(expression);

    if (!isValidExpression(sanitized)) {
      return 'Error';
    }
    try {
      const result = new Function(`return (${sanitized})`)();
      if (typeof result !== 'number' || !isFinite(result)) {
        return 'Error';
      }
      return result.toString();
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value: string): void => {
    if (value === ACTIONS.EQUALS) {
      if (input) {
        const calculateResult = calculate(input);
        if (calculateResult !== 'Error') {
          setInput(calculateResult);
        }
      }
      return;
    }

    if (value === ACTIONS.RESET) {
      setInput('');
      return;
    }

    if (value === ACTIONS.DELETE) {
      setInput((prev) => prev.slice(0, -1));
      return;
    }

    const lastChar = input[input.length - 1];

    if (isOperator(value) && isOperator(lastChar)) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className='rounded-2xl p-6 h-full max-w-lg space-y-10 '>
      {/* HEADER */}
      <div className='text-(--text-primary) font-semibold flex flex-row justify-between'>
        <p>calc</p>

        <div className='gap-5 flex flex-row'>
          <div className='text-[10px] font-semibold items-end justify-end mb-1 flex'>
            THEME
          </div>

          <div className='flex flex-col text-xs items-center'>
            <div
              className='space-x-3 flex justify-end mb-1'
              role='radiogroup'
              aria-label='Theme selector'
            >
              {options.map((option) => (
                <button
                  key={option}
                  type='button'
                  role='radio'
                  aria-checked={false}
                  className='rounded'
                >
                  {option}
                </button>
              ))}
            </div>
            <div className='bg-(--bg-toggle) rounded-xl space-x-2 p-1 flex items-center '>
              {themes.map((t) => (
                <button
                  key={t}
                  type='button'
                  onClick={() => setTheme(t as typeof theme)}
                  className={`cursor-pointer h-3 w-3 ${
                    theme === t ? 'bg-orange-400 rounded-full' : 'bg-inherit'
                  }`}
                  aria-label={`Switch to ${t}`}
                  aria-pressed={theme === t}
                  role='radio'
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SCREEN */}
      <div
        className='bg-(--bg-screen) rounded-xl px-6 py-8  mb-4 text-right'
        role='region'
        aria-label='Calculator display'
        aria-live='polite'
        aria-atomic='true'
      >
        <div className='text-(--text-primary) text-3xl font-bold'>
          {input || '0'}
        </div>
      </div>

      {/* KEYPAD */}
      <div className='bg-(--bg-toggle) p-6 rounded-2xl'>
        <div className='grid grid-cols-4 gap-5'>
          {BUTTONS.flat().map((btn, index) => {
            const isAction =
              btn === ACTIONS.RESET ||
              btn === ACTIONS.EQUALS ||
              btn === ACTIONS.DELETE;

            const isNumber = /^[0-9.]$/.test(btn);

            const isOperator = (v: string): v is (typeof OPERATORS)[number] =>
              (OPERATORS as readonly string[]).includes(v);

            const isNormalKey = isNumber || isOperator(btn);

            const baseStyles =
              'w-full font-bold px-10 rounded-md flex items-center justify-center border-b-3 cursor-pointer';

            const sizeStyles = isAction ? 'text-lg py-3' : 'text-2xl py-3';

            const actionStyles =
              btn === ACTIONS.RESET
                ? 'col-span-2 bg-(--key-primary) hover:brightness-140 border-(--key-primary-shadow) text-(--key-primary-text)'
                : btn === ACTIONS.EQUALS
                ? 'col-span-2 bg-(--key-accent) hover:brightness-140 border-(--key-accent-shadow) text-(--key-accent-text)'
                : btn === ACTIONS.DELETE
                ? 'bg-(--key-primary) hover:brightness-140 border-(--key-primary-shadow) text-(--key-primary-text)'
                : '';

            const normalKeyStyles = isNormalKey
              ? 'bg-(--key-normal) hover:brightness-140 border-(--key-normal-shadow) text-(--key-normal-text)'
              : '';

            return (
              <button
                key={`${btn}-${index}`}
                type='button'
                onClick={() => handleButtonClick(btn)}
                aria-label={btn}
                className={`${baseStyles} ${sizeStyles} ${actionStyles} ${normalKeyStyles}`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
