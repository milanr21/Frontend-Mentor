import { useContext, useState } from 'react';
import CartItems from './components/CartItems';
import MenuItems from './components/MenuItems';
import recipeData from './data/recipe.json';
import { AppContext } from './context/AppContext';

function App() {
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
    <div className='p-14'>
      <div className='grid grid-cols-4 gap-6'>
        <div className=' col-span-4 md:col-span-3'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {recipeData.map((item) => {
              const cartItem = cartMap.get(item.id);
              const isItemMore = !!cartItem;

              return (
                <div key={item.id} className='col-span-1'>
                  <MenuItems
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.category}
                    image={item.image}
                    isItemMore={isItemMore}
                    quantity={cartItem ? cartItem?.quantity : 0}
                    handleAddItems={() => handleCartItems(item)}
                    handleRemoveItems={() => handleRemoveItem(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-4 md:col-span-2 lg:col-span-1'>
          <CartItems />
        </div>
      </div>
    </div>
  );
}

export default App;
