import MenuItemCard from './components/MenuItemCard';

function App() {
  return (
    <div
      className='
    max-w-3xl  items-center m-auto
    '
    >
      <div className='flex flex-col  py-6 px-4 gap-4'>
        <div className=' flex text-left text-4xl font-semibold'>
          <h1>Desserts</h1>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
            <MenuItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
