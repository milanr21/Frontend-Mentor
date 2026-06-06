import KarmaIcon from '../assets/images/icon-karma.svg';
import SupervisorIcon from '../assets/images/icon-supervisor.svg';
import CalculatorIcon from '../assets/images/icon-calculator.svg';
import TeamBuilderIcon from '../assets/images/icon-team-builder.svg';

const CardGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
      <div className='md:row-span-2 flex items-center justify-center  md:justify-end  '>
        <div className='h-56 w-3/4 border-t-4 border-t-primary-cyan shadow-xl col-start-1 row-start-2 py-6 px-5 bg-neutral-white rounded-lg'>
          <div className='flex flex-col h-full justify-between'>
            <p className=' text-xl font-semibold'>Supervisor</p>
            <p className='text-neutral-grey-400 text-sm mt-2'>
              Monitors activity to identify project roadblocks
            </p>
            <div className='self-end py-4'>
              <img src={SupervisorIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className='inline-flex flex-col space-y-8  items-center'>
        <div className='w-87.5 border-t-4 border-t-primary-red shadow-xl py-6 px-5 bg-neutral-white rounded-lg'>
          <div className='flex flex-col h-full justify-between'>
            <p className='text-xl font-semibold'>Team Builder</p>

            <p className='text-neutral-grey-400 text-sm mt-2'>
              Scans our talent network to create the optimal team for your
              project
            </p>

            <div className='self-end py-4'>
              <img src={TeamBuilderIcon} alt='Team Builder' />
            </div>
          </div>
        </div>

        <div className='w-87.5 border-t-4 border-t-primary-orange shadow-xl py-6 px-5 bg-neutral-white rounded-lg'>
          <div className='flex flex-col h-full justify-between'>
            <p className='text-xl font-semibold'>Karma</p>

            <p className='text-neutral-grey-400 text-sm mt-2'>
              Regularly evaluates our talent to ensure quality
            </p>

            <div className='self-end py-4'>
              <img src={KarmaIcon} alt='Karma' />
            </div>
          </div>
        </div>
      </div>

      <div className='md:row-span-2 flex justify-center md:justify-start  items-center '>
        <div className='h-56 w-3/4 border-t-4 border-t-primary-blue shadow-xl   col-start-1  md:col-start-3 row-start-4 md:row-start-2  py-6 px-5 bg-neutral-white rounded-lg'>
          <div className='flex flex-col h-full justify-between'>
            <p className=' text-xl font-semibold'>Calculator</p>
            <p className='text-neutral-grey-400 text-sm mt-2'>
              Uses data from past projects to provide better delivery estimates
            </p>
            <div className='self-end py-4'>
              <img src={CalculatorIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
