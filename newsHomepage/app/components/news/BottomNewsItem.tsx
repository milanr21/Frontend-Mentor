import Image from 'next/image';
import { BottomNewsItem as BottomNewsItemProps } from '@/app/data/data';

const BottomNewsItem: React.FC<BottomNewsItemProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <article className='flex flex-row items-start gap-4 2xl:mt-8'>
      <Image src={image} alt={title} className='h-32 w-28 object-cover' />
      <div className='flex flex-col gap-2'>
        <span className='text-3xl text-soft-red font-bold'>0{id}</span>
        <h4 className='transition-colors duration-200 ease-in-out text-lg cursor-pointer hover:text-soft-red font-bold'>
          {title}
        </h4>
        <p className='text-sm text-dark-grayish-blue'>{description}</p>
      </div>
    </article>
  );
};

export default BottomNewsItem;
