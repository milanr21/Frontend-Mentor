import { createContext, type Dispatch } from 'react';
import type { Product } from '../components/types/types';

export type CartItem = Product & {
  quantity: number;
};

export type AppState = {
  cart: CartItem[];
  isOpen: boolean;
};

export const initialState: AppState = {
  cart: [],
  isOpen: false,
};

type AppContextType = AppState & {
  dispatch: Dispatch<any>;
};

export const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => null,
});
