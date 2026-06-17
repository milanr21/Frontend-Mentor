import { NewsItem } from '@/app/data/data';
import { newItemsAside } from '@/app/data/data';

const NewsList = () => {
  return (
    <div className='flex flex-col items-center space-y-6 bg-very-dark-blue px-4 py-8'>
      {newItemsAside.map((item: NewsItem) => {
        return (
          <div key={item.id}>
            <h2 className='transition-colors duration-200 ease-in-out text-off-white mt-6 mb-1 font-semibold hover:text-soft-orange cursor-pointer'>
              {item.title}
            </h2>
            <p className='text-grayish-blue text-sm'>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
