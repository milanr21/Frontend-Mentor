import { createContext, type Dispatch } from 'react';
import type { Product } from '../components/MenuItems';

export type CartItem = Product & {
  quantity: number;
};

type AppState = {
  cart: CartItem[];
};

export const initialState: AppState = {
  cart: [],
};

type AppContextType = AppState & {
  dispatch: Dispatch<any>;
};

export const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => null,
});
