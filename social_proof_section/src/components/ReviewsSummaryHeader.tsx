import { ClientRatings } from '../data/content';

const ReviewsSummaryHeader = () => {
  return (
    <div className=' flex flex-col lg:flex-row  text-center lg:text-left justify-between  space-y-8'>
      <div className='flex flex-col text-primary-dark  justify-between max-w-sm gap-4 '>
        <h1 className='text-5xl font-semibold'>
          10,000+ of our users love our products.
        </h1>
        <p className=''>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <ul className='flex flex-col gap-4'>
        {ClientRatings.map((item, index) => {
          const lgOffsets = [
            'lg:translate-x-0',
            'lg:translate-x-10',
            'lg:translate-x-20',
          ];
          return (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row gap-4 items-center justify-center bg-neutral-light p-4 rounded-lg ${
                lgOffsets[index] || ''
              }`}
            >
              <div className='flex items-center justify-center  gap-1'>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <img
                    className='h-3 w-3'
                    key={i}
                    src={item.icon}
                    alt=''
                    width='12'
                    height='12'
                    aria-hidden='true'
                  />
                ))}
              </div>
              <div className='font-semibold text-primary-dark'>
                {item.label}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsSummaryHeader;
