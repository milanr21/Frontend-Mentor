const NewsListItems = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const NewsList = () => {
  return (
    <div className='flex flex-col items-center space-y-6 bg-very-dark-blue px-4 py-8'>
      <div>
        {NewsListItems.map((item) => {
          return (
            <div key={item.id}>
              <h2 className='text-off-white  mt-6 mb-1 font-semibold  hover:text-soft-orange cursor-pointer'>
                {item.title}
              </h2>
              <p className='text-grayish-blue text-sm'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
