import type { Theme } from '../context/ThemeContext';

export const BUTTONS = [
  ['7', '8', '9', 'DEL'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', '×'],
  ['RESET', '='],
] as const;

export const ACTIONS = {
  EQUALS: '=',
  RESET: 'RESET',
  DELETE: 'DEL',
} as const;

export const OPERATORS = ['+', '-', '×', '/'] as const;

export const themes: Theme[] = ['theme1', 'theme2', 'theme3'];
