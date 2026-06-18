import CartItems from './components/CartItems';
import MenuItems from './components/MenuItems';

function App() {
  return (
    <div className='p-14'>
      {/* <MenuItems /> */}

      <div className='grid grid-cols-4 gap-6'>
        <div className='col-span-3'>
          <div className='grid grid-cols-3 '>
            <div className='col-span-1'>
              {' '}
              <MenuItems />
            </div>
            <div className='col-span-1'>
              {' '}
              <MenuItems />
            </div>
            <div className='col-span-1'>
              {' '}
              <MenuItems />
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <CartItems />
        </div>
      </div>
    </div>
  );
}

export default App;
