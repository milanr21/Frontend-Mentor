import { newItemsAside } from '@/app/data/data';

const NewItemsAside = () => {
  return (
    <aside className='bg-very-dark-blue p-6 md:h-105 2xl:h-full mb-8 md:pb-0 '>
      <h2 className='text-soft-orange text-3xl font-semibold mb-6'>New</h2>

      {newItemsAside.map((item, index) => (
        <div key={item.id}>
          <div className='cursor-pointer'>
            <h3 className='transition-colors duration-200 ease-in-out text-off-white hover:text-soft-orange mb-2 text-xl font-semibold'>
              {item.title}
            </h3>
            <p className='text-grayish-blue text-sm'>{item.description}</p>
          </div>
          {index < newItemsAside.length - 1 && (
            <hr className='border-dark-grayish-blue my-6' />
          )}
        </div>
      ))}
    </aside>
  );
};

export default NewItemsAside;
