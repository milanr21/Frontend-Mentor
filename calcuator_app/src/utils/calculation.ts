import { OPERATORS } from '../common/CalculateButton';

export const sanitizeExpression = (expression: string) =>
  expression.replace(/\s+/g, '');

export const isValidExpression = (expression: string): boolean =>
  /^[\d+\-*/.]+$/.test(expression);

export const isOperator = (v: string) => OPERATORS.includes(v as any);
