export type Player = 'X' | 'O';

export type CellValue = Player | null;

export type BoardState = CellValue[];

export type SquareProps = {
  value: CellValue;
  onClick: () => void;
};
