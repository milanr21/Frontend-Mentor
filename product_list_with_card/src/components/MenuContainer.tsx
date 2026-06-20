import { useContext } from 'react';

import CartItems from './CartItems';
import MenuItems from './MenuItems';
import CartItemModal from './CartItemModal';
import recipeData from '../data/recipe.json';

import { AppContext } from '../context/AppContext';

const MenuContainer = () => {
  const { cart, dispatch } = useContext(AppContext);

  const cartMap = new Map(cart.map((item) => [item.id, item]));

  const handleCartItems = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  };

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  return (
    <main className='p-4 md:p-10 lg:p-14'>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 gap-y-8  p-6  md:p-12'>
        {/* Menu section */}
        <section className='lg:col-span-3' aria-label='Menu items'>
          <h2 className='col-span-full text-3xl md:text-4xl font-bold pb-6'>
            Dessert
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-4 md:gap-8 '>
            {recipeData.map((item) => {
              const cartItem = cartMap.get(item.id);

              return (
                <MenuItems
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.category}
                  image={item.image}
                  isItemMore={!!cartItem}
                  quantity={cartItem?.quantity ?? 0}
                  handleAddItems={() => handleCartItems(item)}
                  handleRemoveItems={() => handleRemoveItem(item.id)}
                />
              );
            })}
          </div>
        </section>

        {/* Cart section */}
        <aside className='lg:col-span-1' aria-label='Shopping cart'>
          <CartItems />
        </aside>
      </div>

      <CartItemModal />
    </main>
  );
};

export default MenuContainer;
