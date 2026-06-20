import type { CartItem } from '../context/AppContext';

const STORAGE_KEY = 'cart';

export const loadCartToStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    const parsed = JSON.parse(data);

    if (!Array.isArray(parsed)) return [];

    return parsed as CartItem[];
  } catch (error) {
    return [];
  }
};

export const saveCartToStorage = (item: CartItem[]) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
  } catch (err) {}
};

export const removeCartFromStorage = () => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {}
};
