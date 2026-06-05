import { reviews } from '../data/content';

const ReviewsCarousel: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-8'>
      {reviews.map((item, index) => {
        const lgOffsets = [
          'lg:translate-y-0',
          'lg:translate-y-5',
          'lg:translate-y-10',
        ];

        return (
          <div key={item.name}>
            <div
              className={`flex flex-col gap-6 bg-primary-dark p-6 w-sm rounded-lg ${
                lgOffsets[index] || ''
              }`}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={item.image}
                  loading='lazy'
                  className='h-10 w-10 rounded-full object-cover'
                  alt={item.name}
                />

                <div>
                  <h3 className='font-semibold text-neutral-light'>
                    {item.name}
                  </h3>
                  {item.verifiedBuyer && (
                    <p className='text-sm font-semibold text-primary-soft'>
                      Verified Buyer
                    </p>
                  )}
                </div>
              </div>

              <blockquote className="text-neutral-light before:content-['“'] after:content-['”'] before:mr-1 after:ml-1">
                {item.description}
              </blockquote>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default ReviewsCarousel;
