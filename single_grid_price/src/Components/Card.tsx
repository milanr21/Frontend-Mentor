const features: string[] = [
  'Tutorials by industry experts',
  'Peer & expert code review',
  'Coding exercises',
  'Access to our GitHub repos',
  'Community forum',
  'Flashcard decks',
  'New videos every week',
];

const Card = () => {
  return (
    <section className='grid  max-w-2xl overflow-hidden mx-auto rounded-xl shadow-lg'>
      <header className='bg-white p-8 space-y-4'>
        <h1 className='text-2xl font-bold text-primary-teal'>
          Join our community
        </h1>
        <h2 className='text-primary-green font-semibold'>
          30-day, hassle-free money back guarantee
        </h2>
        <p className='text-neutral-gray-500 leading-relaxed'>
          Gain access to our full library of tutorials along with expert code
          reviews. <br /> Perfect for any developers who are serious about
          honing their skills.
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 text-neutral-teal-100'>
        <article className='bg-primary-teal p-8 md:p-10 flex flex-col   space-y-3'>
          <h3 className='text-xl font-semibold'> Monthly Subscription</h3>
          <p className=''>
            <span className='text-3xl font-semibold'> $ 29 </span>
            <span className=''>per month</span>
          </p>
          <p>Full access for less than $1 a day</p>
          <button
            className='w-full bg-primary-green hover:bg-opacity-90 transition-colors py-3 rounded-md shadow-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 cursor-pointer mt-auto'
            type='button'
          >
            Sign Up
          </button>
        </article>
        <aside className='bg-primary-teal/80 p-8 md:p-10 flex flex-col space-y-3'>
          <h4 className='text-xxl font-semibold '>Why Us</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Card;
