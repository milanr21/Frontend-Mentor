import type React from 'react';
import { initialState, AppContext, type AppState } from './AppContext';
import { useEffect, useReducer } from 'react';
import { loadCartToStorage, saveCartToStorage } from '../helpers/storage';

const AppReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

const init = (): AppState => ({
  cart: loadCartToStorage(),
  isOpen: false,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, init);

  useEffect(() => {
    saveCartToStorage(state.cart);
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
