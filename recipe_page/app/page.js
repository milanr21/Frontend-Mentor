import Image from 'next/image';
import omeletteImg from '@/assets/images/image-omelette.jpeg';

const preparationTimeData = [
  {
    label: 'Total',
    time: 'Approximately 10 minutes',
  },
  {
    label: 'Preparation',
    time: '5 minutes',
  },
  {
    label: 'Cooking',
    time: '5 minutes',
  },
];

const ingredientsData = [
  { name: '2-3 large eggs' },
  { name: 'Salt, to taste' },
  { name: 'Pepper, to taste' },
  { name: '1 tablespoon of butter or oil' },
  {
    name: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    optional: true,
  },
];

const omeletteRecipe = [
  {
    id: 1,
    title: 'Beat the eggs',
    description:
      'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
  },
  {
    id: 2,
    title: 'Heat the pan',
    description:
      'Place a non-stick frying pan over medium heat and add butter or oil.',
  },
  {
    id: 3,
    title: 'Cook the omelette',
    description:
      'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
  },
  {
    id: 4,
    title: 'Add fillings (optional)',
    description:
      'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
  },
  {
    id: 5,
    title: 'Fold and serve',
    description:
      'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
  },
  {
    id: 6,
    title: 'Enjoy',
    description: 'Serve hot, with additional salt and pepper if needed.',
  },
];

const nutritionalInformation = [
  { type: 'Calories', value: '277kcal' },
  { type: 'Carbs', value: '0g' },
  { type: 'Protein', value: '20g' },
  { type: 'Fat', value: '22g' },
];

export default function Home() {
  return (
    <div className='bg-pink-200 py-20 px-6 md:px-2 '>
      <div className='max-w-2xl mx-auto p-8 rounded-3xl bg-white '>
        <Image src={omeletteImg} alt='omelette-pic' className='' />

        <h1 className='text-center flex items-center justify-center my-6 text-2xl  md:text-3xl font-bold '>
          Simple Omelette Recipe
        </h1>
        <p className='text-sm md:text-base text-gray-600 '>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className='bg-red-100 my-6 p-4 rounded-xl space-y-3  '>
          <h4 className='text-lg text-pink-700 md:text-2xl  font-semibold'>
            Preparation time
          </h4>

          {preparationTimeData.map((item, index) => (
            <ul
              className=' text-gray-700  list-disc text-sm md:text-base '
              key={index}
            >
              <li className=' mx-5   md:mx-8 '>
                <span className='mr-3 font-medium'>{item.label}:</span>
                {item.time}
              </li>
            </ul>
          ))}
        </div>

        <div className='space-y-3 my-4  border-b-[1px] border-gray-500 pb-5 '>
          <h3 className='text-xl text-orange-800 md:text-3xl  font-semibold'>
            Ingredients
          </h3>
          {ingredientsData.map((item, index) => (
            <ul
              className=' text-gray-700  list-disc text-sm md:text-base mx-3 '
              key={index}
            >
              <li>
                <span className='mr-2 md:mr-4'></span>
                {item.name}
              </li>
            </ul>
          ))}
        </div>

        <div className='my-4 space-y-3 border-b-[1px] border-gray-500 pb-5 '>
          <h3 className='text-xl text-orange-800 md:text-3xl  font-semibold'>
            Instructions
          </h3>

          <ol className=' text-gray-700   space-y-3 mx-3  list-decimal text-sm md:text-base '>
            {omeletteRecipe.map((item, index) => (
              <li key={index} className=' pl-2 md:pl-3'>
                <span className='font-semibold'>{item.title}: </span>
                {item.description}
              </li>
            ))}
          </ol>
        </div>

        <div className='space-y-3 my-4'>
          <h3 className='text-xl text-orange-800 md:text-3xl  font-semibold'>
            Nutrition
          </h3>
          <p className=' text-gray-700  text-sm md:text-base'>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          {nutritionalInformation.map((item, index) => (
            <div
              className=' text-gray-700  list-disc flex flex-row justify-between border-b-[1px] border-gray-500 text-sm md:text-base mx-3 pb-2 '
              key={index}
            >
              <span className=''>{item.type}</span>

              <span className='mr-0 text-orange-800  md:mr-40 font-semibold  lg:mr-56'>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
