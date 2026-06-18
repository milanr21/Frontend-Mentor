import { useState } from 'react';
import CartItems from './components/CartItems';
import MenuItems from './components/MenuItems';
import recipeData from './data/recipe.json';

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const handleAddToCart = (product: any) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      let updatedCart;

      if (existingItem) {
        updatedCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...prev,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  return (
    <div className='p-14'>
      {/* <MenuItems /> */}

      <div className='grid grid-cols-4 gap-6'>
        <div className=' col-span-4 md:col-span-3'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {recipeData.map((item) => (
              <div key={item.id} className='col-span-1'>
                <MenuItems
                  name={item.name}
                  price={item.price}
                  description={item.category}
                  desktopImg={item.image.desktop}
                  mobileImg={item.image.mobile}
                  tableImg={item.image.tablet}
                  handleCardItems={() => handleAddToCart(item)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-4 md:col-span-2 lg:col-span-1'>
          <CartItems cart={cart ?? []} />
        </div>
      </div>
    </div>
  );
}

export default App;
